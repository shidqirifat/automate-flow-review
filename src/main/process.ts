import fs from 'fs'
import os from 'os'
import path from 'path'
import uncompress from './uncompress'
import { openVSCode, openTerminal } from './program'
import { checkContainPackageJson } from './directory'

const openUnzipFileInVSCode = (
  _event: Electron.IpcMainInvokeEvent,
  path: string
) => {
  const uncompressPath = uncompress(path)

  const isContainPackageJson = checkContainPackageJson(uncompressPath)
  if (isContainPackageJson) openTerminal(uncompressPath)

  openVSCode(uncompressPath)
}

const watchDownloadsFolder = (_event: Electron.IpcMainInvokeEvent) => {
  const downloadFolderPath = path.join(os.homedir(), 'Downloads')

  fs.watch(downloadFolderPath, (eventType, fileName) => {
    if (eventType === 'rename' && fileName && fileName.includes('.zip')) {
      const pathFile = path.join(downloadFolderPath, fileName || '')

      fs.stat(pathFile, (error, stats) => {
        if (error) return

        const ONE_MEGA_BYTE = 1024 ** 2
        const maxSizeInMB = 40 * ONE_MEGA_BYTE
        if (stats.size > maxSizeInMB) return

        openUnzipFileInVSCode(_event, pathFile)
      })
    }
  })
}

export { watchDownloadsFolder, openUnzipFileInVSCode }

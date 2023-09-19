import fs from 'fs'
import path from 'path'
import AdmZip from 'adm-zip'
import {
  createFolder,
  deleteFolder,
  generateQuotePath,
  getFullPathUnzipFolder,
  getTargetPath
} from './directory'

type ZipEntries = { entryName: string }

const zipContainsMultipleFolders = (zipEntries: Array<ZipEntries>) => {
  const folderNames = {}

  for (const entry of zipEntries) {
    const folderName = entry.entryName.split('/')[0]
    folderNames[folderName] = true

    if (Object.keys(folderNames).length > 1) return true
  }

  return false
}

const folderContainsMultipleItems = (directoryPath: string) => {
  try {
    const items = fs.readdirSync(directoryPath)
    return items.length > 1
  } catch (error) {
    console.error(`Error reading directory "${directoryPath}":`, error)
    return false
  }
}

const uncompress = (pathFile: string) => {
  const zip = new AdmZip(pathFile)

  const targetPath = getTargetPath()
  if (!fs.existsSync(targetPath)) createFolder(targetPath)
  zip.extractAllTo(targetPath, true)

  const pathMacOSFolder = path.join(targetPath, '/__MACOSX')
  if (fs.existsSync(pathMacOSFolder)) deleteFolder(pathMacOSFolder)

  const { entryName } = zip.getEntries()[0]
  const folderName = entryName.split('/')[0]

  // handle zip contain "/__MACOSX" folder
  const isZipContainMultiFolder = zipContainsMultipleFolders(zip.getEntries())
  const folderPath = path.join(
    targetPath,
    isZipContainMultiFolder ? '' : folderName
  )

  // handle zip contain all file without parent folder
  const isFolderContainMultiFolders = folderContainsMultipleItems(folderPath)
  if (isFolderContainMultiFolders) return generateQuotePath(folderPath)

  return getFullPathUnzipFolder({ folderName, targetPath })
}

export default uncompress

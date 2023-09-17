import os from 'os'
import path from 'path'
import fs from 'fs'

const FOLDER_UNZIP = '/submissions'

const getDesktopPath = () => path.join(os.homedir(), 'Desktop')

const getTargetPath = (addOptionalFolder: boolean) => {
  const fullPath = path.join(getDesktopPath(), FOLDER_UNZIP)
  if (!addOptionalFolder) return fullPath

  return path.join(fullPath, `/${+new Date()}`)
}

const createFolder = (folderPath: string) => {
  try {
    fs.mkdirSync(folderPath, { recursive: true })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(`Error creating folder '${folderPath}': ${error.message}`)
  }
}

const deleteFolder = (folderPath: string) => {
  try {
    fs.rmdirSync(folderPath, { recursive: true })
  } catch (err) {
    console.error(`Error deleting folder "${folderPath}":`, err)
  }
}

type GetFullPathUnzipFolderArg = {
  folderName: string
  targetPath: string
}

const getFullPathUnzipFolder = ({
  folderName,
  targetPath
}: GetFullPathUnzipFolderArg) => {
  const fullPath = path.join(targetPath, `/`, folderName)
  const quotedPath = '"' + fullPath.replace(/\\/g, '\\\\') + '"'

  return quotedPath
}

export { getTargetPath, createFolder, deleteFolder, getFullPathUnzipFolder }

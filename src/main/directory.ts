import os from 'os'
import path from 'path'
import fs from 'fs'

const FOLDER_UNZIP = 'submissions'

const getDesktopPath = () => path.join(os.homedir(), 'Desktop')

const getSubmissionPath = () => path.join(getDesktopPath(), FOLDER_UNZIP)

const getTargetPath = (addOptionalFolder: boolean) => {
  const fullPath = getSubmissionPath()
  if (!addOptionalFolder) return fullPath

  return path.join(fullPath, `/${+new Date()}`)
}

const createFolder = (folderPath: string) => {
  try {
    fs.mkdirSync(folderPath, { recursive: true })
  } catch (error) {
    console.error(`Error creating folder '${folderPath}': ${error}`)
  }
}

const deleteFolder = (folderPath: string) => {
  try {
    fs.rmdirSync(folderPath, { recursive: true })
    console.log('Deleted')
  } catch (error) {
    console.error(`Error deleting folder "${folderPath}":`, error)
  }
}

const generateQuotePath = (pathFolder: string) => {
  return '"' + pathFolder.replace(/\\/g, '\\\\') + '"'
}

type GetFullPathUnzipFolderArg = {
  folderName: string
  targetPath: string
}

const getFullPathUnzipFolder = ({
  folderName,
  targetPath
}: GetFullPathUnzipFolderArg) => {
  const fullPath = path.join(targetPath, folderName)
  const quotedPath = generateQuotePath(fullPath)

  return quotedPath
}

const checkContainPackageJson = (pathFolder: string) => {
  const fullPath = path.join(pathFolder.replace(/"/g, ''), 'package.json')
  return fs.existsSync(fullPath)
}

export {
  getSubmissionPath,
  getTargetPath,
  createFolder,
  deleteFolder,
  generateQuotePath,
  getFullPathUnzipFolder,
  checkContainPackageJson
}

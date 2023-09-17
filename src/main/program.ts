import { spawn } from 'child_process'

const openTerminal = (directory: string) => {
  const command = `cd "${directory}"`
  spawn('start cmd.exe', ['/K', command], {
    shell: true
  })
}

const openVSCode = (path: string) => {
  spawn('code', [path], { shell: true })
}

export { openVSCode, openTerminal }

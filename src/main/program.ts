import { spawn } from 'child_process'
const fs = require('fs')

const openTerminal = (directory: string) => {
  const batchScript = 'command.bat'

  const batchScriptContent = `
    @echo off

    cd /d "${directory}"
    start cmd /k "npm i && npm run dev"
  `

  fs.writeFileSync(batchScript, batchScriptContent, 'utf-8')

  spawn('cmd.exe', ['/c', batchScript])
}

const openVSCode = (path: string) => {
  spawn('code', [path], { shell: true })
}

export { openVSCode, openTerminal }

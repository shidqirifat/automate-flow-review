import { FileRejection, FileWithPath } from '@mantine/dropzone'
import { DropzoneInput } from './components/DropZone'

function App() {
  const handleDropFile = (file: FileWithPath) => {
    window.api.openInVSCode(file.path as string)
  }

  const handleRejectFile = (file: FileRejection) => {
    console.error('Rejected: ', file.errors)
  }

  return (
    <main className="p-4 grid h-screen relative">
      <DropzoneInput
        onDrop={handleDropFile}
        onReject={handleRejectFile}
        maxFileInMB={30}
      />
      <footer className="mt-2 text-center text-slate-400 font- absolute bottom-20 w-full">
        <h3>
          Develop by{' '}
          <a
            className="underline underline-offset-2"
            target="_blank"
            href="https://www.linkedin.com/in/shidqirifatpangestu/"
            rel="noreferrer"
          >
            Shidqi
          </a>
        </h3>
      </footer>
    </main>
  )
}

export default App

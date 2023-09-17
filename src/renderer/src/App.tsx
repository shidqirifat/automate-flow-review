import { FileRejection, FileWithPath } from '@mantine/dropzone'
import { DropzoneInput } from './components/DropZone'

function App() {
  const handleDropFile = (file: FileWithPath) => {
    window.api.openInVSCode(file.path as string)
  }

  const handleRejectFile = (file: FileRejection) => {
    console.log('Rejected: ', file.errors)
  }

  return (
    <div className="p-10 space-y-5">
      <DropzoneInput
        onDrop={handleDropFile}
        onReject={handleRejectFile}
        maxFileInMB={30}
      />
    </div>
  )
}

export default App

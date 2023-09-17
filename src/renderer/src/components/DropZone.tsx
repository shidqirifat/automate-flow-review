import { Group, Text, useMantineTheme, rem } from '@mantine/core'
import { IconUpload, IconX, IconFileCode } from '@tabler/icons-react'
import { Dropzone, FileRejection, FileWithPath } from '@mantine/dropzone'

type DropzoneInputProps = {
  maxFileInMB: number
  onDrop: (file: FileWithPath) => void
  onReject: (file: FileRejection) => void
}

export function DropzoneInput({
  onDrop,
  onReject,
  maxFileInMB
}: DropzoneInputProps) {
  const theme = useMantineTheme()
  return (
    <Dropzone
      onDrop={(files) => onDrop(files[0])}
      onReject={(files) => {
        onReject(files[0])
      }}
      maxSize={maxFileInMB * 1024 ** 2}
      accept={['zip']}
      className="h-[calc(100vh-32px)] grid items-center"
    >
      <Group
        position="center"
        spacing="xs"
        className="grid text-center -mt-16 text-slate-700"
        style={{ minHeight: rem(120), pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconUpload
            className="mx-auto block"
            size="3.2rem"
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            className="mx-auto block"
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconFileCode className="mx-auto block" size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <Text size="xl" inline>
          Drag zip file here or click to select files
        </Text>
      </Group>
    </Dropzone>
  )
}

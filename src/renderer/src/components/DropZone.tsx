import { Group, Text, useMantineTheme, rem } from '@mantine/core'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react'
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
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: rem(220), pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconUpload
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
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  )
}

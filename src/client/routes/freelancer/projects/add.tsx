import { execute } from '@/client/data-bridge'
import { useRouter } from '@/client/ui/simple-routing'
import { Box, Button, Input, Modal } from '@mui/material'
import { useState } from 'react'

const AddProject = () => {
  const router = useRouter()
  const [state, setValue] = useState('')

  return (
    <Modal open>
      <Box>
        <Input
          value={state}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />

        <Button
          onClick={() => {
            execute({
              controller: 'project',
              method: 'createProject',
              body: {
                email: state,
                name: state,
              },
            }).then((res) => {
              console.log(res)
              router.back()
            })
          }}
        >
          Add
        </Button>
        <Button
          onClick={() => {
            router.back()
          }}
        >
          back
        </Button>
      </Box>
    </Modal>
  )
}

export default AddProject

import React, { useState } from 'react'
import { Box, Button, Container, Stack, TextField } from '@mui/material'
import { useSimpleRouter } from '@/ui/simple-routing'
import useAppUser from '@/data/hooks/useAppUser'

const SignUp = () => {
  const router = useSimpleRouter()
  const { signUp } = useAppUser()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          router.back()
        }}
      >
        Go Back
      </Button>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box minWidth={400}>
          <Box>
            <Stack direction="column" spacing={2}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <TextField
                label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Button
                variant="contained"
                onClick={() => {
                  signUp(email, name).then(() => {
                    router.push('/freelancer')
                  })
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SignUp

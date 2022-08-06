import React from 'react'
import { Box, Button, Stack } from '@mui/material'
import { execute } from '../data-bridge'
import { ThemeContextProvider } from '@/ui/theme'

function Home() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Button
          LinkComponent="a"
          href="/freelancer"
          variant="contained"
          onClick={() => {}}
        >
          Freelancer
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Manager
        </Button>
      </Stack>
    </Box>
  )
}

export default Home

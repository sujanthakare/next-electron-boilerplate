import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#E5E5E5',
      }}
    >
      <Box
        sx={{
          maxHeight: '100vh',
          height: 1400,
          backgroundColor: 'white',
          overflow: 'hidden',
          maxWidth: 1200,
          width: '100%',
        }}
      >
        {children}
      </Box>
    </div>
  )
}

export default AppLayout

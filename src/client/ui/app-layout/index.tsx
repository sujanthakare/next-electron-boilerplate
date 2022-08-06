import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      css={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#E5E5E5',
        maxHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}

export default AppLayout

import React from 'react'
import { Button } from '@mui/material'
import { execute } from '../data-bridge'
import { ThemeContextProvider } from '@/ui/theme'

function Home() {
  return (
    <ThemeContextProvider>
      <div
        style={{
          height: '100vh',
          backgroundColor: 'black',
          width: '100%',
        }}
      >
        <React.Fragment>
          <Button
            variant="contained"
            onClick={() => {
              execute({
                controller: 'user',
                method: 'getUsers',
              }).then((res) => {
                console.log('users', res)
              })
            }}
          >
            refresh users
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              execute({
                controller: 'user',
                method: 'addUser',
                body: {
                  name: 'sujan',
                },
              })
                .then((user) => {
                  console.log('USER', user)
                })
                .catch((e) => {
                  console.log('error', e)
                })
            }}
          >
            Add user
          </Button>
        </React.Fragment>
      </div>
    </ThemeContextProvider>
  )
}

export default Home

import React, { ReactNode } from 'react'
import {
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Box,
  AppBar,
  IconButton,
  Container,
} from '@mui/material'

type Props = {
  children: ReactNode
  currentPath: string
}

const FreelancerLayout = (props: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="relative">
        <Container maxWidth="xl">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <Icon className="fi fi-rr-bell" />
          </IconButton>
        </Container>
      </AppBar>
      <Stack direction="row" sx={{ height: '100%' }}>
        <Box
          sx={{
            width: 240,
            borderRight: '1px solid grey',
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                LinkComponent="a"
                href="/freelancer/projects"
                selected={props.currentPath === '/freelancer/projects'}
              >
                <ListItemIcon>
                  <Icon className="fi fi-rr-envelope" />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ p: 1 }}>{props.children}</Box>
      </Stack>
    </Box>
  )
}

export default FreelancerLayout

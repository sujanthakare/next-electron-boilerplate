import { Outlet } from 'react-router-dom'

import LoadingButton from '@mui/lab/LoadingButton'
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
} from '@mui/material'

import useAppUser from '../data/hooks/useAppUser'
import queryApi from '../data/query-api'
import { useSimpleRouter } from '@/ui/simple-routing'

const FreelancerDashboard = () => {
  const router = useSimpleRouter()
  const { user, signOut } = useAppUser()

  const { data: projects = [], isLoading } = queryApi.useGetProjectsQuery()

  const [deleteProject, { isLoading: isProjectDeleting, originalArgs }] =
    queryApi.useDeleteProjectMutation()

  if (isLoading) {
    return <h2>Loading....</h2>
  }

  return (
    <Box p={1}>
      <Box pb={2}>
        <h4>{user?.name}</h4>
        <Divider />
      </Box>
      <Stack spacing={1} direction="row">
        <Button
          variant="contained"
          onClick={() => router.push('/freelancer/add-project')}
        >
          Add Project
        </Button>

        <Button
          variant="contained"
          onClick={() => signOut().then(() => router.push('/home'))}
        >
          Logout
        </Button>
      </Stack>

      <List>
        {projects.map((item) => {
          return (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
              <LoadingButton
                color="error"
                loading={isProjectDeleting && originalArgs === item.id}
                onClick={() => deleteProject(item.id)}
              >
                Delete
              </LoadingButton>
            </ListItem>
          )
        })}
      </List>

      <Outlet />
    </Box>
  )
}

export default FreelancerDashboard

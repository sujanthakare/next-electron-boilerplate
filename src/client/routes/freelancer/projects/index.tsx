import { Outlet, useRouter } from '@/client/ui/simple-routing'
import { Box, Button } from '@mui/material'

const Projects = () => {
  const router = useRouter()

  return (
    <Box>
      <Box>
        <Button
          onClick={() => {
            router.push('/freelancer/projects/add')
          }}
        >
          Add Project
        </Button>
      </Box>
      <Outlet />
    </Box>
  )
}

export default Projects

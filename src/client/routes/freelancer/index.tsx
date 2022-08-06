import FreelancerLayout from '@/client/ui/freelance-layout'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Freelancer = () => {
  return (
    <FreelancerLayout currentPath="/freelancer">
      <Box>
        <Outlet />
      </Box>
    </FreelancerLayout>
  )
}

export default Freelancer

import FreelancerLayout from '@/ui/freelance-layout'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          router.push('/freelancer')
        }}
      >
        To Freelancer dashboard
      </Button>
    </Box>
  )
}

export default Home

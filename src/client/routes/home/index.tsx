import { useRouter } from '@/client/ui/simple-routing'
import { Box, Button } from '@mui/material'

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

import useAppUser from '@/data/hooks/useAppUser'
import { useSimpleRouter } from '@/ui/simple-routing'
import { Box, Button } from '@mui/material'

const Home = () => {
  const router = useSimpleRouter()

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Button
        variant="contained"
        onClick={() => {
          router.push('/sign-up')
        }}
      >
        Sign-up/Sign-in
      </Button>
    </Box>
  )
}

export default Home

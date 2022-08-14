import { useState } from 'react'

import LoadingButton from '@mui/lab/LoadingButton'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'

import queryApi from '../data/query-api'
import { useSimpleRouter } from '@/ui/simple-routing'

const FreelancerAddProject = () => {
  const router = useSimpleRouter()
  const [createProject, { isLoading }] = queryApi.useCreateProjectMutation()

  const [state, setState] = useState('')
  const [error, setError] = useState('')

  return (
    <Dialog open>
      <Box>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent sx={{ minWidth: 380 }}>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="email"
            fullWidth
            variant="standard"
            value={state}
            error={!!error}
            helperText={error}
            onChange={(e) => {
              setState(e.target.value)
              setError('')
            }}
          />
        </DialogContent>

        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              router.push('/freelancer')
            }}
          >
            Cancel
          </Button>

          <LoadingButton
            loading={isLoading}
            variant="contained"
            onClick={() => {
              createProject({ name: state }).then((result: any) => {
                if (result.error) {
                  if (result.error.message === 'DOCUMENT_EXIST') {
                    setError(`Project with name ${state} already exists!`)
                  } else {
                    setError('Something went wrong try again later!')
                  }
                  return
                }

                router.push('/freelancer')
              })
            }}
          >
            Create
          </LoadingButton>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export default FreelancerAddProject

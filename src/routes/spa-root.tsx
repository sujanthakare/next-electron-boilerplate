import React from 'react'
import Home from './home'
import Freelancer from './freelancer.dashboard'
import {
  Redirect,
  Route,
  Routes,
  StaticRouter,
  useSimpleRouter,
} from '../ui/simple-routing'
import FreelancerAddProject from './freelancer.add-project'
import SignUp from './sign-up'
import useAppUser from '@/data/hooks/useAppUser'

const routeState = {
  currentPath: '',
}

const SPARoot = () => {
  const router = useSimpleRouter()
  const { asPath } = router
  const { isLoggedIn } = useAppUser()

  let currentPath = asPath

  if (currentPath === '/[...routes]' && !routeState.currentPath) {
    return null
  } else {
    currentPath == routeState.currentPath
    routeState.currentPath = currentPath

    return (
      <StaticRouter location={currentPath}>
        <Routes>
          <Route
            path="/home"
            element={isLoggedIn ? <Redirect to="/freelancer" /> : <Home />}
          />
          <Route
            path="/sign-up"
            element={isLoggedIn ? <Redirect to="/freelancer" /> : <SignUp />}
          />
          <Route
            path="/freelancer"
            element={isLoggedIn ? <Freelancer /> : <Redirect to="/home" />}
          >
            <Route
              path="/freelancer/add-project"
              element={
                isLoggedIn ? <FreelancerAddProject /> : <Redirect to="/home" />
              }
            />
          </Route>
        </Routes>
      </StaticRouter>
    )
  }
}

export default SPARoot

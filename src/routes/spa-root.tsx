import React from 'react'
import Home from './home'
import Freelancer from './freelancer.dashboard'
import {
  Route,
  Routes,
  StaticRouter,
  useSimpleRouter,
} from '../ui/simple-routing'
import FreelancerAddProject from './freelancer.add-project'

const routeState = {
  currentPath: '',
}

const SPARoot = () => {
  const router = useSimpleRouter()
  const { asPath } = router

  let currentPath = asPath

  if (currentPath === '/[...routes]' && !routeState.currentPath) {
    return null
  } else {
    currentPath == routeState.currentPath
    routeState.currentPath = currentPath

    return (
      <StaticRouter location={currentPath}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/freelancer" element={<Freelancer />}>
            <Route
              path="/freelancer/add-project"
              element={<FreelancerAddProject />}
            />
          </Route>
        </Routes>
      </StaticRouter>
    )
  }
}

export default SPARoot

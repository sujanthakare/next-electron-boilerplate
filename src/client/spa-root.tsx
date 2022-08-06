import React from 'react'
import { useRouter } from 'next/router'
import Home from './routes/home'
import Freelancer from './routes/freelancer'
import Projects from './routes/freelancer/projects'
import AddProject from './routes/freelancer/projects/add'
import { Route, Routes, StaticRouter } from './ui/simple-routing'

const routeState = {
  currentPath: '',
}

const SPARoot = () => {
  const router = useRouter()
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
            <Route path="/freelancer/projects" element={<Projects />}>
              <Route path="/freelancer/projects/add" element={<AddProject />} />
            </Route>
          </Route>
        </Routes>
      </StaticRouter>
    )
  }
}

export default SPARoot

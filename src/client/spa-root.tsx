import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FlexRoute, FlexRouterProvider } from '@/ui/simple-routing'
import Projects from './freelancer-projects'
import Home from './home'

const Freelancer = dynamic(() => import('./freelancer'))

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
      <FlexRouterProvider location={currentPath}>
        <FlexRoute path="/home" element={<Home />} />
        <FlexRoute path="/freelancer" element={<Freelancer />} />
        <FlexRoute path="/freelancer/projects" element={<Projects />} />
      </FlexRouterProvider>
    )
  }
}

export default SPARoot

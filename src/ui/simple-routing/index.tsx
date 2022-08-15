import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route, Outlet } from 'react-router-dom'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useSimpleRouter = useRouter
export { StaticRouter, Routes, Route, Outlet, useSimpleRouter }

export const Redirect = (props: { to: string }) => {
  const router = useSimpleRouter()

  useEffect(() => {
    router.replace(props.to)
  }, [])

  return null
}

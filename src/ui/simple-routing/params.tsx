import React, { useContext, useState, useEffect, ReactNode } from 'react'

interface IProps {
  params?: Record<string, any> | null
}

const ParamsContext = React.createContext({} as IProps)

export const ParamsContextProvider: React.FC<
  IProps & { children?: ReactNode }
> = ({ params: incomingParams, children }) => {
  const [params, setParams] = useState(incomingParams)

  useEffect(() => {
    setParams(incomingParams)
  }, [incomingParams])

  return (
    <ParamsContext.Provider value={{ params }}>
      {children}
    </ParamsContext.Provider>
  )
}

export const useParams = () => {
  const { params } = useContext(ParamsContext)
  return params
}

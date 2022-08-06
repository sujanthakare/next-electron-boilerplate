import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { ParamsContextProvider } from './params'
import makeMatcher from './utils'

const routeMatcher = makeMatcher()

interface IFlexContext {
  currentPath: string
}

const FlexRouterContext = React.createContext({} as IFlexContext)

interface IProps {
  location: string
  children: ReactNode
}

export const FlexRouterProvider: React.FC<IProps> = ({
  location,
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(location)

  useEffect(() => {
    setCurrentPath(location)
  }, [location])

  return (
    <FlexRouterContext.Provider value={{ currentPath }}>
      <Switch location={currentPath}>{children}</Switch>
    </FlexRouterContext.Provider>
  )
}

export const Switch: React.FC<IProps> = ({ children, location }) => {
  for (const element of React.Children.toArray(children)) {
    let match = false
    let params = null

    if (
      isValidElement(element) &&
      ([match, params] = (element as any).props.path
        ? routeMatcher((element as any).props.path, location)
        : [true, {}])[0]
    ) {
      return (
        <ParamsContextProvider params={params}>
          {cloneElement(element)}
        </ParamsContextProvider>
      )
    }
  }

  return null
}

interface IFlexRouteProps {
  path: string
  element: ReactElement
}

export const FlexRoute: React.FC<IFlexRouteProps> = ({ element }) => {
  return <>{element}</>
}

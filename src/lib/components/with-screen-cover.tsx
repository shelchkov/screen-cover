import React from "react"
import { useScreenCover } from "./screen-cover-context"

export const withScreenCover = (Component: any) => {
  const WrappedComponent = (props: any) => {
    const { showCover } = useScreenCover()

    return <Component {...props} showCover={showCover} />
  }
  
  return WrappedComponent
}

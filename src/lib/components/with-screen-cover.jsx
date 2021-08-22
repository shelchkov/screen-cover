import React from "react"
import { useScreenCover } from "./screen-cover-context"

export const withScreenCover = (Component) => {
  const WrappedComponent = (props) => {
    const { showCover } = useScreenCover()

    return <Component {...props} showCover={showCover} />
  }
  
  return WrappedComponent
}

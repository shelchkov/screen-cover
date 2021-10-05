import React, { ComponentType } from "react"
import { ScreenCoverContextI, useScreenCover } from "./screen-cover-context"

export interface WithScreenCoverProps {
  showCover: ScreenCoverContextI["showCover"]
}

export const withScreenCover = <T extends WithScreenCoverProps>(Component: ComponentType<T>) => {
  const WrappedComponent = (props: Omit<T, keyof WithScreenCoverProps>) => {
    const { showCover } = useScreenCover()

    return <Component {...(props as T)} showCover={showCover} />
  }

  return WrappedComponent
}

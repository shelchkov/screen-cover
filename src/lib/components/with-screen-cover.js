import { useScreenCover } from "./screen-cover-context"

export const withScreenCover = (Component) => (props) => {
  const { showCover } = useScreenCover()

  return <Component {...props} showCover={showCover} />
}

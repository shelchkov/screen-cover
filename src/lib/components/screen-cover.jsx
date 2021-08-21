import React from 'react'
import { Cover } from './cover'
import { ScreenCoverStage } from './screen-cover-context'

// interface Props {
//   stage: ScreenCoverStage
// }

const getTopAndBottom = (stage, screenHeight) => {
  switch (stage) {
    case ScreenCoverStage.INIT:
      return [screenHeight, 0]
    
    case ScreenCoverStage.GO_UP:
      return [0, 0]

    case ScreenCoverStage.UNCOVER:
      return [0, screenHeight]
    
    default:
      return [screenHeight, 0]
  }
}

export const ScreenCover = ({ stage }) => {
  const height = window.innerHeight

  const [top, bottom] = getTopAndBottom(stage, height)

  return <Cover top={top} bottom={bottom} />
}

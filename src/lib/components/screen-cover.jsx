import React from 'react'
import { Cover } from './cover'
import { ScreenCoverStage } from './screen-cover-context'
import { BOTTOM_TRANSITION_COEFFICIENT, TOP_TRANSITION_COEFFICIENT } from './utils'

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

const getTransitionConfig = (coverTime, uncoverTime) => {
  const topTransition = coverTime / TOP_TRANSITION_COEFFICIENT
  const bottomTransition = (uncoverTime - coverTime) / BOTTOM_TRANSITION_COEFFICIENT

  return { topTransition, bottomTransition }
}

export const ScreenCover = ({ stage, backgroundColor, coverTime, uncoverTime }) => {
  const height = window.innerHeight

  const [top, bottom] = getTopAndBottom(stage, height)
  const transitionConfig = getTransitionConfig(coverTime, uncoverTime)

  return <Cover top={top} bottom={bottom} backgroundColor={backgroundColor} {...transitionConfig} />
}

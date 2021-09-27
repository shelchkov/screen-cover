import React from 'react'
import { Cover } from './cover'
import { ScreenCoverStage } from './screen-cover-context'
import { BOTTOM_TRANSITION_COEFFICIENT, CoverConfig, TOP_TRANSITION_COEFFICIENT } from './utils'

type Props = {
  stage: ScreenCoverStage
} & CoverConfig

const getTopAndBottom = (stage: ScreenCoverStage, screenHeight: number) => {
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

const getTransitionConfig = (coverTime: number, uncoverTime: number) => {
  const topTransition = coverTime / TOP_TRANSITION_COEFFICIENT
  const bottomTransition = (uncoverTime - coverTime) / BOTTOM_TRANSITION_COEFFICIENT

  return { topTransition, bottomTransition }
}

export const ScreenCover = ({ stage, backgroundColor, coverTime, uncoverTime }: Props) => {
  const height = window.innerHeight

  const [top, bottom] = getTopAndBottom(stage, height)
  const transitionConfig = getTransitionConfig(coverTime, uncoverTime)

  return <Cover top={top} bottom={bottom} backgroundColor={backgroundColor} {...transitionConfig} />
}

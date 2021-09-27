import React, { ReactElement, useState } from 'react'
import { ScreenCover } from './screen-cover'
import { ScreenCoverContext, ScreenCoverStage } from './screen-cover-context'
import { CoverConfig, defaultConfig } from './utils'

interface Props {
  children: ReactElement | ReactElement[]
  config?: Partial<CoverConfig>
}

export const ScreenCoverProvider = ({ children, config = {} }: Props) => {
  const [stage, setStage] = useState(ScreenCoverStage.INIT)

  const fullConfig = { ...defaultConfig, ...config,  }

  const showCover = (onCover?: () => void, onEnd?: () => void) => {
    setStage(ScreenCoverStage.START)
    setTimeout(() => setStage(ScreenCoverStage.GO_UP))

    setTimeout(() => {
      setStage(ScreenCoverStage.UNCOVER)
      onCover && onCover()
    }, fullConfig.coverTime)

    setTimeout(() => {
      setStage(ScreenCoverStage.INIT)
      onEnd && onEnd()
    }, fullConfig.uncoverTime)
  }

  const shouldShowCover = stage !== ScreenCoverStage.INIT

  const contextValue = { showCover }

  return (
    <ScreenCoverContext.Provider value={contextValue}>
      {children}

      {shouldShowCover &&
        <ScreenCover stage={stage} {...fullConfig}  />
      }
    </ScreenCoverContext.Provider>
  )
}

import React, { ReactElement, useRef, useState } from "react"
import { ScreenCover } from "./screen-cover"
import { ScreenCoverContext, ScreenCoverStage } from "./screen-cover-context"
import { CoverConfig, defaultConfig, noop } from "./utils"

interface Props {
  children: ReactElement | ReactElement[]
  config?: Partial<CoverConfig>
}

export const ScreenCoverProvider = ({ children, config = {} }: Props) => {
  const [stage, setStage] = useState(ScreenCoverStage.INIT)
  const coverBgColor = useRef<string>()

  const fullConfig = { ...defaultConfig, ...config }

  const showCover = (onCover: () => void = noop, onEnd: () => void = noop, config: Partial<CoverConfig> = {}) => {
    if (stage !== ScreenCoverStage.INIT) {
      return
    }

    coverBgColor.current = config.backgroundColor
    setStage(ScreenCoverStage.START)
    setTimeout(() => setStage(ScreenCoverStage.GO_UP))

    setTimeout(() => {
      setStage(ScreenCoverStage.UNCOVER)
      onCover()
    }, config.coverTime || fullConfig.coverTime)

    setTimeout(() => {
      setStage(ScreenCoverStage.INIT)
      onEnd()
      coverBgColor.current = undefined
    }, config.uncoverTime || fullConfig.uncoverTime)
  }

  const shouldShowCover = stage !== ScreenCoverStage.INIT

  const contextValue = { showCover }

  return (
    <ScreenCoverContext.Provider value={contextValue}>
      {children}

      {shouldShowCover &&
        <ScreenCover stage={stage} {...fullConfig} backgroundColor={coverBgColor.current || fullConfig.backgroundColor} />
      }
    </ScreenCoverContext.Provider>
  )
}

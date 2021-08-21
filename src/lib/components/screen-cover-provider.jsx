import React, { useState } from 'react'
import { ScreenCover } from './screen-cover'
import { ScreenCoverContext, ScreenCoverStage } from './screen-cover-context'
import { DEFAULT_COVER_END, DEFAULT_COVER_TIME } from './utils'

// interface Props {
//   children: ReactElement | ReactElement[]
// }

export const ScreenCoverProvider = ({ children }) => {
  const [stage, setStage] = useState(ScreenCoverStage.INIT)

  const showCover = (onCover, onEnd) => {
    setStage(ScreenCoverStage.START)
    setTimeout(() => setStage(ScreenCoverStage.GO_UP))

    setTimeout(() => {
      setStage(ScreenCoverStage.UNCOVER)
      onCover && onCover()
    }, DEFAULT_COVER_TIME)

    setTimeout(() => {
      setStage(ScreenCoverStage.INIT)
      onEnd && onEnd()
    }, DEFAULT_COVER_END)
  }

  const shouldShowCover = stage !== ScreenCoverStage.INIT

  const contextValue = { showCover }

  return (
    <ScreenCoverContext.Provider value={contextValue}>
      {children}

      {shouldShowCover &&
        <ScreenCover stage={stage} />
      }
    </ScreenCoverContext.Provider>
  )
}

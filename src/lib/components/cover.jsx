import React from 'react'
import "./styles/cover.css"

// interface Props {
//   top: number
//   bottom: number
//   backgroundColor?: string
// }

export const Cover = ({ top, bottom, backgroundColor, topTransition = .8, bottomTransition = .5 }) => (
  <div
    style={{
      top: `${top}px`,
      bottom: `${bottom}px`,
      backgroundColor,
      transition: `top ${topTransition}s ease-in-out, bottom ${bottomTransition}s ease-in-out`
    }}
    className="cover"
  />
)

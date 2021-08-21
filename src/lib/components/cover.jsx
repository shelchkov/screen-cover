import React from 'react'
import "./styles/cover.css"

// interface Props {
//   top: number
//   bottom: number
//   backgroundColor?: string
// }

export const Cover = ({ top, bottom, backgroundColor }) => (
  <div style={{ top: `${top}px`, bottom: `${bottom}px`, backgroundColor }} className="cover" />
)

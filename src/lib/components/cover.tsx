import React from "react"
import "../styles/cover.css"

interface Props {
  top: number
  bottom: number
  backgroundColor?: string
  topTransition?: number
  bottomTransition?: number
}

export const Cover = ({ top, bottom, backgroundColor, topTransition = 0.8, bottomTransition = 0.5 }: Props) => (
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

import React, { useState } from 'react'
import { useScreenCover } from './lib'

export const Page = () => {
  const { showCover } = useScreenCover()
  const [content, setContent] = useState("Page 1")

  const handleClick = () => showCover(() => setContent("Page 2"), () => console.log("Finished"))
  const showGreenCover = () => showCover(() => setContent("Page 3"), undefined, { backgroundColor: "aquamarine" })
  const showFastCover = () => showCover(() => setContent("Page 4"), undefined, { coverTime: 900, uncoverTime: 2500 })

  return (
    <div>
      <button onClick={handleClick}>Show cover</button>
      <button onClick={showGreenCover}>Show green cover</button>
      <button onClick={showFastCover}>Show fast cover</button>

      <div>{content}</div>
    </div>
  )
}

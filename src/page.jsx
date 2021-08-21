import React, { useState } from 'react'
import { useScreenCover } from './lib'

export const Page = () => {
  const { showCover } = useScreenCover()
  const [content, setContent] = useState("Page 1")

  const handleClick = () => showCover(() => setContent("Page 2"), () => console.log("Finished"))

  return (
    <div>
      <button onClick={handleClick}>Show cover</button>

      <div>{content}</div>
    </div>
  )
}

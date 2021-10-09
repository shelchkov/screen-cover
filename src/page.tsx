import React, { useState } from "react"
import { useScreenCover } from "./lib"
import { ShowCode } from "./show-code"

const code = `const Page = () => {
  const { showCover } = useScreenCover()
  const [content, setContent] = useState("Page 1")

  const handleClick = () => showCover(() => setContent("Page 2"), () => console.log("Finished"))
  const showBlueCover = () => showCover(() => setContent("Page 3"), undefined, { backgroundColor: "#506AD4" })

  return (
    <div className="section">
      <button onClick={handleClick}>Show cover</button>
      <button onClick={showBlueCover}>Show blue cover</button>

      <p className="description">{content}</p>
    </div>
  )
}`

export const Page = () => {
  const { showCover } = useScreenCover()
  const [content, setContent] = useState("Page 1")

  const handleClick = () => showCover(() => setContent("Page 2"), () => console.log("Finished"))
  const showBlueCover = () => showCover(() => setContent("Page 3"), undefined, { backgroundColor: "#506AD4" })

  return (
    <div className="section">
      <button onClick={handleClick}>Show cover</button>
      <button onClick={showBlueCover}>Show blue cover</button>

      <p className="description">{content}</p>

      <ShowCode code={code} />
    </div>
  )
}

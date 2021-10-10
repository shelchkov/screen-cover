import React from "react"

export const DocsLink = () => {
  const tag = process.env.REACT_APP_TAG_NAME

  return (
    <div className="docs">
      <a href="https://www.npmjs.com/package/screen-cover">Documentation {tag && `(${tag})`}</a>
    </div>
  )
}

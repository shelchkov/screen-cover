import React from "react"
import "./docs-link.css"

export const DocsLink = () => {
  const tag = process.env.REACT_APP_TAG_NAME

  return (
    <div className="docs-link">
      <a href="https://www.npmjs.com/package/screen-cover" className="docs-link__link">Documentation {tag && `(${tag})`}</a>
    </div>
  )
}

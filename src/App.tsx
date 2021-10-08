import React from "react"
import { DocsLink } from "./docs-link"
import { Page } from "./page"
import PageClass from "./page-class"

const App = () => (
  <div className="main">
    <div>
      <p className="title">Screen cover</p>
      <DocsLink />

      <Page />
      <PageClass />
    </div>
  </div>
)

export default App

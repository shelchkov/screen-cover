import React from "react"
import { DocsLink } from "../docs-link/docs-link"
import { Section } from "../section/section"
import SectionClass from "../section/section-class"
import "./app.css"

const App = () => (
  <div className="app">
    <div>
      <p className="app__title">Screen cover</p>
      <DocsLink />

      <Section />
      <SectionClass />
    </div>
  </div>
)

export default App

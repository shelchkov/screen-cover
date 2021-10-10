import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { ScreenCoverProvider } from "./lib"

const screenCoverConfig = {
  coverTime: 1500,
  uncoverTime: 4000,
  backgroundColor: "#A3CDD9"
}

ReactDOM.render(
  <React.StrictMode>
    <ScreenCoverProvider config={screenCoverConfig}>
      <App />
    </ScreenCoverProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

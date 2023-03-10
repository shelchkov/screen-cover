import React, { Component } from "react"
import { withScreenCover, WithScreenCoverProps } from "../lib/components/with-screen-cover"
import { ShowCode } from "../show-code/show-code"
import "./section.css"

type Props = WithScreenCoverProps

interface State {
  buttonText: string
}

const code = `type Props = WithScreenCoverProps

interface State {
  buttonText: string
}

class PageClass extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { buttonText: "Start" }
  }

  handleClick () {
    this.props.showCover(() => {
      this.setState({ buttonText: "Finished" })
    },
    undefined,
    { coverTime: 900, uncoverTime: 2500 })
  }

  render () {
    const { buttonText } = this.state
    const handleClick = this.handleClick.bind(this)

    return <div className="section">
      <p className="section__title">Fast cover example</p>

      <button onClick={handleClick}>{buttonText}</button>
    </div>
  }
}

export default withScreenCover(PageClass)`

class SectionClass extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = { buttonText: "Start" }
  }

  handleClick () {
    this.props.showCover(() => {
      this.setState({ buttonText: "Finished" })
    }, () => {
      console.log("End")
    }, { coverTime: 900, uncoverTime: 2500 })
  }

  render () {
    const { buttonText } = this.state
    const handleClick = this.handleClick.bind(this)

    return <div className="section">
      <p className="section__title">Fast cover example</p>

      <button onClick={handleClick}>{buttonText}</button>
      <ShowCode code={code} />
    </div>
  }
}

export default withScreenCover(SectionClass)

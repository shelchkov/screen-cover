import React, { Component } from "react"
import { withScreenCover, WithScreenCoverProps } from "./lib/components/with-screen-cover"

type Props = WithScreenCoverProps

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
    }, () => {
      console.log("End")
    })
  }

  render () {
    const { buttonText } = this.state
    const handleClick = this.handleClick.bind(this)

    return <div>
      <p>Class component example</p>

      <button onClick={handleClick}>{buttonText}</button>
    </div>
  }
}

export default withScreenCover(PageClass)

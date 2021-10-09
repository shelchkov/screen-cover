import React, { useState } from "react"

interface Props {
  code: string
}

export const ShowCode = ({ code }: Props) => {
  const [shouldShow, setShouldShow] = useState<boolean>()

  const toggle = () => setShouldShow(!shouldShow)

  return (
    <div className="show-code">
      <button onClick={toggle}>{shouldShow ? "Hide code" : "Show code"}</button>

      {shouldShow && <div className="code-container"><code className="code">{code}</code></div>}
    </div>
  )
}

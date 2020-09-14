/** @jsx jsx */
import { jsx } from "theme-ui"

const Text = ({ title, description }) => {
  return (
    <div>
      <div>
        <h2 sx={{ marginTop: `0px` }}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Text
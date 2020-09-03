/** @jsx jsx */
import { jsx } from "theme-ui"

const Text = ({ title, description }) => {
  return (
    <div>
      <div>
        <h3 sx={{ marginTop: `0px` }}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Text
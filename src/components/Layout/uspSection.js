/** @jsx jsx */
import { jsx } from "theme-ui"

const UspSection = ({ children }) => {
  return (
    <section
      sx={{ variant: `layout.uspSection` }}
    >
      {children}
    </section>
  )
}

export default UspSection

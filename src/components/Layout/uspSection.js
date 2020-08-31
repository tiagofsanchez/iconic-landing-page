/** @jsx jsx */
import { jsx } from "theme-ui"
import UspSectionStyles from "./uspSection.module.css"

const UspSection = ({ children }) => {
  return (
    <section
      className={UspSectionStyles.wrapper}
      sx={{ variant: `layout.uspSection` }}
    >
      {children}
    </section>
  )
}

export default UspSection

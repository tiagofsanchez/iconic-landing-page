/** @jsx jsx */
import { jsx } from "theme-ui"
import FormSectionStyles from "./formSection.module.css"

const FormSection = ({ children }) => {
  return (
    <div
      className={FormSectionStyles.wrapper}
      sx={{ variant: `layout.contactSection` }}
    >
      {children}
    </div>
  )
}

export default FormSection

/** @jsx jsx */
import { jsx } from "theme-ui"
import InvestorsStyles from "./investorsSection.module.css"

const InvestorsSection = ({ children }) => {
  return (
    <section
      className={InvestorsStyles.wrapper}
      sx={{ variant: `layout.investorSection` }}
    >
      {children}
    </section>
  )
}

export default InvestorsSection

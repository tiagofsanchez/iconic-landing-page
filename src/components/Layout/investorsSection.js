/** @jsx jsx */
import { jsx } from "theme-ui"

const InvestorsSection = ({ children }) => {
  return (
    <section
      sx={{ variant: `layout.investorSection` }}
    >
      {children}
    </section>
  )
}

export default InvestorsSection

/** @jsx jsx */
import { jsx } from "theme-ui"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.wrapper} sx={{ width: ["90%", "70%", "70%"] }}>
      {children}
    </div>
  )
}

export default Layout

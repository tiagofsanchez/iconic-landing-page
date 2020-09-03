/** @jsx jsx */
import { jsx } from "theme-ui"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div sx={{ variant: `layout.root` }}>
      <main className={layoutStyles.wrapper}>{children}</main>

    </div>
  )
}

export default Layout

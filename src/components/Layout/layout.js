/** @jsx jsx */
import { jsx } from "theme-ui"
import layoutStyles from "./layout.module.css"
import SEO from '../shared/SEO'

const Layout = ({ children }) => {
  return (
    <div sx={{ variant: `layout.root` }}>
      <SEO />
      <main className={layoutStyles.wrapper}>{children}</main>
    </div>
  )
}

export default Layout

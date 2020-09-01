/** @jsx jsx */
import { jsx } from "theme-ui"
import layoutStyles from "./layout.module.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div sx={{ variant: `layout.root` }}>
      <header sx={{ variant: `layout.header` }}>
        <Header />
      </header>
      <main className={layoutStyles.wrapper}>{children}</main>
      <footer sx={{ variant: `layout.footer` }}>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout

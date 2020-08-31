/** @jsx jsx */
import { jsx, Embed, Button } from "theme-ui"
import heroStyles from "./hero.module.css"

const Hero = ({ tagline }) => {
  return (
    <div className={heroStyles.wrapper} sx={{variant:`layout.hero`}}>
      <Embed src="https://www.youtube.com/embed/OGdoJpCoItg" />
      <div sx={{variant: `layout.uspSection`}}>
        <h3>{tagline}</h3>
        <Button>CONTACT TO LEARN MORE</Button>
      </div>
    </div>
  )
}

export default Hero

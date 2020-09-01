/** @jsx jsx */
import { jsx, Embed, Button } from "theme-ui"

const Hero = ({ tagline }) => {
  return (
    <div sx={{variant:`layout.hero`}}>
      <Embed src="https://www.youtube.com/embed/OGdoJpCoItg" />
      <div sx={{width: `90%`}}>
        <h3>{tagline}</h3>
        <Button>CONTACT TO LEARN MORE</Button>
      </div>
    </div>
  )
}

export default Hero

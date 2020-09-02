/** @jsx jsx */
import { jsx } from "theme-ui"
import useHeroImg from "../../hooks/useHeroImg"
import HeroBackground from "./heroBackground"

const Hero = ({ tagline }) => {
  const heroBackground = useHeroImg()
  return (
    <div sx={{variant: `layout.hero`}}>
      <HeroBackground heroBackground={heroBackground} tagline={tagline} />
    </div>
  )
}

export default Hero

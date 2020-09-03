/** @jsx jsx */
import { jsx } from "theme-ui"
import useIconico from '../../hooks/useIconico'
import HeroBackground from "./heroBackground"

const Hero = ({ tagline }) => {
  const { imgHero2 } = useIconico()
  return (
    <div sx={{variant: `layout.hero`}}>
      <HeroBackground heroBackground={imgHero2} tagline={tagline} />
    </div>
  )
}

export default Hero

/** @jsx jsx */
import { jsx } from "theme-ui"
import useIconico from "../../hooks/useIconico"
import HeroBackground from "../Hero/heroBackground"

const Hero = ({ tagline }) => {
  const { imgHero } = useIconico()

  return (
    <div sx={{ variant: `layout.hero` }}>
      <HeroBackground heroBackground={imgHero} tagline={tagline} />
    </div>
  )
}

export default Hero

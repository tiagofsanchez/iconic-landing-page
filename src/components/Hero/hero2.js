/** @jsx jsx */
import { jsx } from "theme-ui"
import backgroundStyles from "./heroBackground.module.css"
import BackgroundImage from "gatsby-background-image"
import useIconico from "../../hooks/useIconico"

const Hero2 = ({ title }) => {
  const { imgHero2 } = useIconico()

  return (
    <BackgroundImage fluid={imgHero2} className={backgroundStyles.container}>
      <div sx={{ padding: `40px` }}>
        <h1 sx={{ marginTop: `0px`, textAlign: `center`, color: `white` }}>
          {title}
        </h1>
      </div>
    </BackgroundImage>
  )
}

export default Hero2

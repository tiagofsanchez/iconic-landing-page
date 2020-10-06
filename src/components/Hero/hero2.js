/** @jsx jsx */
import { jsx } from "theme-ui"
import backgroundStyles from "./heroBackground.module.css"
import BackgroundImage from "gatsby-background-image"
import useIconico from "../../hooks/useIconico"

const Hero2 = ({ title }) => {
  const { imgHero2 } = useIconico()

  return (
    <BackgroundImage
      fluid={imgHero2}
      className={backgroundStyles.containerBlue}
    >
      <div sx={{ padding: `40px` }}>
        <h1
          sx={{
            marginTop: `50px`,
            textAlign: `center`,
            color: `white`,
            mb: `10px`,
          }}
        >
          {title}
        </h1>
        <p sx={{ textAlign: `center`, color: `white` }}>by ICONICO</p>
      </div>
    </BackgroundImage>
  )
}

export default Hero2

/** @jsx jsx */
import { jsx } from "theme-ui"
import backgroundStyles from "./heroBackground.module.css"
import BackgroundImage from "gatsby-background-image"

const heroBackground = ({ heroBackground, tagline }) => {
  return (
    <BackgroundImage
      fluid={heroBackground}
      className={backgroundStyles.container}
    >
      <div sx={{ textAlign: `center`, margin: `20px` }} >
        <h3 className={backgroundStyles.tagline} >{tagline}</h3>
        <h1 className={backgroundStyles.title} sx={{color: `white`}}>ICONICO</h1>
      </div>
    </BackgroundImage>
  )
}

export default heroBackground

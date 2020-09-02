/** @jsx jsx */
import { jsx } from "theme-ui"
import backgroundStyles from "./heroBackground.module.css"
import BackgroundImage from "gatsby-background-image"

const heroBackground = ({ heroBackground, tagline }) => {
  console.log(heroBackground)
  return (
    <BackgroundImage
      fluid={heroBackground}
      className={backgroundStyles.container}
    >
      <div sx={{ textAlign: `center`, mx: `20px` }} >
        <h1 sx={{ color: `#b04200` }} >THE ICONIC</h1>
        <h3 sx={{color: `primary`}} className={backgroundStyles.tagline}>{tagline}</h3>
      </div>
    </BackgroundImage>
  )
}

export default heroBackground

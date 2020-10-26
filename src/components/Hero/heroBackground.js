/** @jsx jsx */
import { jsx } from "theme-ui"
import backgroundStyles from "./heroBackground.module.css"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const TaglineContainer = styled.div`
  display: grid;
  height: 60vh;
  align-items: center;
  text-align: center;
  padding: 40px;
;
`



const heroBackground = ({ heroBackground, tagline }) => {
  return (
    <BackgroundImage
      fluid={heroBackground}
      className={backgroundStyles.container}
    >
      <h1 sx={{textAlign: `center`, color: `white`}}>Iconico</h1>
      <TaglineContainer>
        <h1 sx={{ textShadow: `0px 10px 20px rgba(0, 0, 0, 2)`,  color: `white`}}>{tagline.toUpperCase()}</h1>
      </TaglineContainer>
    </BackgroundImage>
  )
}

export default heroBackground

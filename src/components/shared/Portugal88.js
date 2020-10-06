/** @jsx jsx */
import { jsx } from "theme-ui"
import useIconico from "../../hooks/useIconico"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(0px, 300px));
  grid-gap: 5px;
  @media (max-width: 650px) { 
    grid-template-rows: repeat(3, auto);
  }
`


const Portugal = () => {
  const { imgPortugal } = useIconico()

  return (
    <GridContainer>
      <Img fluid={imgPortugal[1].node.childImageSharp.fluid} />
      <Img fluid={imgPortugal[2].node.childImageSharp.fluid} />
      <Img fluid={imgPortugal[0].node.childImageSharp.fluid} />
    </GridContainer>
  )
}

export default Portugal

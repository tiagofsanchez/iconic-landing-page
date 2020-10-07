import React from "react"
import Img from "gatsby-image"
import useIconico from "../../hooks/useIconico"
import styled from "@emotion/styled"

const Container = styled.div`
  width: 100%;
  grid-area: img;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, minmax(0px, auto));
  grid-template-rows: repeat(3, auto);
`

const Iconico = () => {
  const { imgIconico } = useIconico()

  return (
    <Container>
      <Img fluid={imgIconico[0].node.childImageSharp.fluid} />
      <Img fluid={imgIconico[3].node.childImageSharp.fluid} />
      <Img fluid={imgIconico[2].node.childImageSharp.fluid} />
      <Img fluid={imgIconico[5].node.childImageSharp.fluid} />
      <Img fluid={imgIconico[4].node.childImageSharp.fluid} />
      <Img fluid={imgIconico[1].node.childImageSharp.fluid} />
    </Container>
  )
}

export default Iconico

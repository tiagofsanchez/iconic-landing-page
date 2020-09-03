import React from "react"
import Img from "gatsby-image"
import useIconico from "../../hooks/useIconico"
import styled from '@emotion/styled'

const Container = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(0px, auto));
grid-template-rows: repeat(3,1fr);
`

const ImgContainer = styled.div`
display: grid;
margin: 5px;
background-size: 100%;
background-position: center;
background-repeat: no-repeat
`


const Iconico = () => {
  const { imgIconico } = useIconico()

  return (
    <Container>
      {imgIconico.map((image, index) => {
        return (
          <ImgContainer key={index}>
            <Img fluid={image.node.childImageSharp.fluid} />
          </ImgContainer>
        )
      })}
    </Container>
  )
}

export default Iconico

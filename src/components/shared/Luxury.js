/** @jsx jsx */
import { jsx } from "theme-ui"
import useIconico from "../../hooks/useIconico"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`

const Grid = styled.div`
display: grid;
grid-template-columns: auto
width: 100%;
`

const SmallGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
`

const convertArrayToObject = array => {
  const initialValue = {}
  return array.reduce((obj, item, index) => {
    const key = `img${index}`
    return {
      ...obj,
      [key]: item.node.childImageSharp.fluid,
    }
  }, initialValue)
}

const Luxury = () => {
  const { imgLuxury } = useIconico()
  const images = convertArrayToObject(imgLuxury)

  return (
    <GridContainer>
      <SmallGrid>
        <Img fluid={images.img4} />
        <Img fluid={images.img0} />
        <Img fluid={images.img5} />
      </SmallGrid>
      <Grid>
        <Img fluid={images.img6} />
      </Grid>
      <SmallGrid>
        <Img fluid={images.img2} />
        <Img fluid={images.img3} />
        <Img fluid={images.img1} />
      </SmallGrid>
    </GridContainer>
  )
}

export default Luxury

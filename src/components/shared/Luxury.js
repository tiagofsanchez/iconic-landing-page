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
  const img0 = convertArrayToObject(imgLuxury).img0
  const img1 = convertArrayToObject(imgLuxury).img1
  const img2 = convertArrayToObject(imgLuxury).img2
  const img3 = convertArrayToObject(imgLuxury).img3
  const img4 = convertArrayToObject(imgLuxury).img4
  const img5 = convertArrayToObject(imgLuxury).img5
  const img6 = convertArrayToObject(imgLuxury).img6

  return (
    <GridContainer>
      <SmallGrid>
        <Img fluid={img3} />
        <Img fluid={img0} />
        <Img fluid={img4} />
      </SmallGrid>
      <Grid>
        <Img fluid={img5} />
      </Grid>
      <SmallGrid>
        <Img fluid={img2} />
        <Img fluid={img1} />
        <Img fluid={img6} />
      </SmallGrid>
    </GridContainer>
  )
}

export default Luxury

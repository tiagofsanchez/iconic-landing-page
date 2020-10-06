/** @jsx jsx */
import { jsx } from "theme-ui"
import useIconico from "../../hooks/useIconico"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const GridContainer = styled.div`
  display: grid;
  grid-gap: 5px;
`

const Grid0 = styled.div`
  display: grid;
  grid-template-areas:
    "img0  img0 img1 "
    "img0 img0 img2";
  grid-gap: 5px;
`
const Img0 = styled.div`
  display: grid;
  grid-area: img0;
`
const Img1 = styled.div`
  display: grid;
  grid-area: img1;
`
const Img2 = styled.div`
  display: grid;
  grid-area: img2;
`

const Grid1 = styled.div`
  display: grid;
  grid-template-areas:
    "img3 img4 img4"
    "img5 img4 img4";
  grid-gap: 5px;
`
const Img3 = styled.div`
  display: grid;
  grid-area: img3;
`
const Img4 = styled.div`
  display: grid;
  grid-area: img4;
`
const Img5 = styled.div`
  display: grid;
  grid-area: img5;
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

const Portugal = () => {
  const { imgPortugal } = useIconico()
  const images = convertArrayToObject(imgPortugal)

  return (
    <GridContainer>
      <Grid0>
        <Img0>
          <Img fluid={images.img0} />
        </Img0>
        <Img1>
          <Img fluid={images.img3} />
        </Img1>
        <Img2>
          <Img fluid={images.img2} />
        </Img2>
      </Grid0>
      <Grid1>
        <Img3>
          <Img fluid={images.img9} />
        </Img3>
        <Img4>
          <Img fluid={images.img10} />
        </Img4>
        <Img5>
          <Img fluid={images.img7} />
        </Img5>
      </Grid1>
    </GridContainer>
  )
}

export default Portugal

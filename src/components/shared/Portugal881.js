/** @jsx jsx */
import { jsx } from "theme-ui"
import useIconico from "../../hooks/useIconico"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
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
 
const Portugal881 = () => {
  const { imgPortugal } = useIconico()
  const images = convertArrayToObject(imgPortugal)

  return (
    <GridContainer>
      <Img fluid={images.img3} />
      <Img fluid={images.img1} />
      <Img fluid={images.img6} />
      <Img fluid={images.img4} />
    </GridContainer>
  )
}

export default Portugal881

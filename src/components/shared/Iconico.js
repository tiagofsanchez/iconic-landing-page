import React from "react"
import Img from "gatsby-image"

import useIconico from "../../hooks/useIconico"
import IconicoStyles from "./Iconico.module.css"

const Iconico = () => {
  const images = useIconico()
  console.log(IconicoStyles);
  return (
    <div className={IconicoStyles.container}>
      {images.map((image, index) => {
        return (
          <div key={index} className={IconicoStyles.image}>
            <Img fluid={image.node.childImageSharp.fluid} />
          </div>
        )
      })}
    </div>
  )
}

export default Iconico

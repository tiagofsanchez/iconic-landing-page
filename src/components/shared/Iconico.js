import React from "react"
import Img from "gatsby-image"

import useIconico from "../../hooks/useIconico"
import IconicoStyles from "./Iconico.module.css"

const Iconico = () => {
  const { imgIconico } = useIconico()

  return (
    <div className={IconicoStyles.container}>
      {imgIconico.map((image, index) => {
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

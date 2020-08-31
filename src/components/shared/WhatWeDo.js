import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const WhatWeDo = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "whatDoWeDo/Ricoh.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} />
}

export default WhatWeDo
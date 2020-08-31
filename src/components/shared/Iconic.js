import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Iconic = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Iconic/Iconic.png" }) {
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

export default Iconic
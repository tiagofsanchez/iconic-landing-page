import { graphql, useStaticQuery } from "gatsby"

const useHeroImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Hero/hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100)   {
            ...GatsbyImageSharpFluid
         
          }
        }
      }
    }
  `)
  const heroBackground = data.file.childImageSharp.fluid
  return heroBackground
}

export default useHeroImg

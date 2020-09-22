import { graphql, useStaticQuery } from "gatsby"

const useIconico = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "Hero/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4080, quality: 100)   {
            ...GatsbyImageSharpFluid
         
          }
        }
      }
      hero2: file(relativePath: { eq: "Hero2/hero2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4080, quality: 100)   {
            ...GatsbyImageSharpFluid
         
          }
        }
      }
      iconico: allFile(filter: { relativeDirectory: { eq: "Iconico" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      luxury: allFile(
        filter: { relativeDirectory: { eq: "FutureOfLuxuryHospitaliy" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1080,quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      portugal: allFile(filter: { relativeDirectory: { eq: "Portugal88" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      whatWeDo: file(relativePath: { eq: "whatDoWeDo/Ricoh.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imgHero = data.hero.childImageSharp.fluid  
  const imgHero2 = data.hero2.childImageSharp.fluid  
  const imgIconico = data.iconico.edges
  const imgLuxury = data.luxury.edges
  const imgPortugal = data.portugal.edges
  const imgWhatWeDo = data.whatWeDo.childImageSharp.fluid 
  return { imgIconico, imgLuxury, imgPortugal, imgWhatWeDo , imgHero, imgHero2}
}

export default useIconico

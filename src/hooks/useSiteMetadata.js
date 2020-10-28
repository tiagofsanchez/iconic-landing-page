import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          titleTemplate
          siteUrl
          siteLanguage
        }
      }
      file(relativePath: { eq: "iconSquare.png" }) {
        publicURL
      }
    }
  `)
  return {
    description: data.site.siteMetadata.description,
    title: data.site.siteMetadata.title,
    titleTemplate: data.site.siteMetadata.titleTemplate,
    siteUrl: data.site.siteMetadata.siteUrl,
    siteLanguage: data.site.siteMetadata.siteLanguage,
    image: data.file.publicURL,
  }
}

export default useSiteMetadata

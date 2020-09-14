import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          image
          title
          titleTemplate
          siteUrl
          siteLanguage 
        }
      }
    }
  `)
  return {
    description: data.site.siteMetadata.description,
    title: data.site.siteMetadata.title,
    titleTemplate: data.site.siteMetadata.titleTemplate,
    image: data.site.siteMetadata.image,
    siteUrl: data.site.siteMetadata.siteUrl, 
    siteLanguage: data.site.siteMetadata.siteLanguage
  }
}

export default useSiteMetadata

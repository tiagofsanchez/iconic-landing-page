import React from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../../hooks/useSiteMetadata"

const SEO = () => {
  const {
    description,
    title,
    titleTemplate,
    image,
    siteLanguage,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title,
    description: description,
    url: siteUrl,
    image: `${siteUrl}${image}`,
    siteLanguage: siteLanguage,
  }

  console.log(seo)
  
  return (
    <Helmet
      htmlAttributes={{ siteLanguage }}
      title={seo.title}
      defaultTitle={seo.title}
      titleTemplate={titleTemplate}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
    </Helmet>
  )
}

export default SEO

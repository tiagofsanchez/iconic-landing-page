import React from "react"
import UspSectionStyles from "./uspSection.module.css"

const UspSection = ({ children }) => {
  return <section className={UspSectionStyles.wrapper}>{children}</section>
}

export default UspSection

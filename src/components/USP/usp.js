/** @jsx jsx */
import { jsx } from "theme-ui"
import UspStyles from "./usp.module.css"

export const UspImageRight = ({ title, content , imageComponent }) => {
  return (
    <div className={UspStyles.wrapperRight}>
      <div className={UspStyles.img}>{imageComponent? imageComponent : "images"}</div>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export const UspImageLeft = ({ title, content , imageComponent}) => {
  return (
    <div className={UspStyles.wrapperLeft}>
      <div className={UspStyles.text}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={UspStyles.img}>{imageComponent? imageComponent : "images"}</div>
    </div>
  )
}

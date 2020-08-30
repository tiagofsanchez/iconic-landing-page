/** @jsx jsx */
import { jsx, Embed, Button } from "theme-ui"
import heroStyles from "./hero.module.css"

const Hero = () => {
  return (
    <div className={heroStyles.wrapper}>
      <div
        sx={{
          width: ["100%", "90%", "90%"],
        }}
      >
        <Embed src="https://www.youtube.com/embed/OGdoJpCoItg" />
      </div>
      <div
        sx={{
          width: ["90%", "70%", "70%"],
        }}
      >
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting  
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h3>
        <Button>CONTACT TO LEARN MORE</Button>
      </div>
    </div>
  )
}

export default Hero

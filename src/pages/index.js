/** @jsx jsx */
import { jsx } from "theme-ui"
import ReactPlayer from "react-player"

import Layout from "../components/Layout/layout"
import SEO from "../components/shared/SEO"
import Hero from "../components/Hero/hero"
import Hero2 from "../components/Hero/hero2"
import Luxury from "../components/shared/Luxury"
import Text from "../components/USP/text"
import Iconico from "../components/shared/Iconico"
import Portugal from "../components/shared/Portugal88"
import styled from "@emotion/styled"

const UpsSection = styled.section`
  display: grid;
  grid-gap: 80px;
`

const RightSection = styled.section`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

const GridAreaSection = styled.section`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "img text";
  grid-gap: 30px;
  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-template-areas:
      "text"
      "img";
  }
`
const TextContainer = styled.div`
  grid-area: text;
`
const PhotosContainer = styled.div`
  grid-area: img;
  width: 100%;
`

const InvestorSection = styled.section`
  display: grid;
  grid-gap: 80px;
`

const Home = () => {
  return (
    <Layout>
      <SEO />
      <Hero tagline="The world’s most extraordinary homes are too important not to be shared" />
      <UpsSection>
        <RightSection>
          <Text
            title="We turn dreams into memories"
            description="Our customers can rent iconic properties across the world with all the amenities, comfort and privacy for a once in a lifetime trip with their family and friends. Each home is an experience with a wide range of on demand services and 24 hours customer support, all enabled by our seamless technology at their fingertips.
            "
          />
          <div sx={{ position: `relative`, paddingTop: `56.25%` }}>
            <ReactPlayer
              url="https://vimeo.com/455871305/e27885077d"
              width="100%"
              height="100%"
              controls={true}
              style={{ position: `absolute`, top: `0`, left: `0` }}
            />
          </div>
        </RightSection>
        <GridAreaSection>
          <TextContainer>
            <Text
              title="ICONICO is a luxury property management company offering short and mid-term rentals in landmark properties"
              description="With outstanding service dedicated to our guests, ICONICO aims to be the global standard for short and mid-term rental property management. Designed with the diligent host (property owners) in mind, our mission is to turn their loved holiday or second homes into profitable investments using technology to bring the tradition of luxury hospitality to the private property market creating outstanding experiences for guests and hosts to enjoy."
            />
          </TextContainer>
          <PhotosContainer>
            <Iconico />
          </PhotosContainer>
        </GridAreaSection>
      </UpsSection>
      <section>
        <Hero2 title="Invest in a beautiful world" />
      </section>
      <InvestorSection>
        <RightSection>
          <Text
            title="ICONICO smart property funds are the future of luxury real estate investment"
            description="Our funds are first and foremost focused on bringing the highest returns to our investors, we acquire iconic properties at the best market price and rent them to luxury holiday and business travelers. But we made it smarter so investors can enjoy these properties 14 days every year, at no cost as a true owner, to create long lasting memories and traditions with their family and friends. With ICONICO real estate funds you can own your dream ranch, vineyard estate, beach villa, castle, palace, ski chalet, city apartment and much more while making a profit through capital appreciation and rental yields."
          />
          <div sx={{ position: `relative`, paddingTop: `56.25%` }}>
            <ReactPlayer
              url="https://vimeo.com/455871305/e27885077d"
              width="100%"
              height="100%"
              controls={true}
              style={{ position: `absolute`, top: `0`, left: `0` }}
            />
          </div>
        </RightSection>
        <GridAreaSection>
          <Text
            title="Join our real estate funds and own a piece of paradise everywhere you go"
            description="By managing hundreds of the world’s most beautiful properties through ICONICO, we’re uniquely positioned to find the best balance portfolio between strong ROI and unmatched experience for our customers and investors to make money while also enjoying these properties. We pay rental yields monthly and provide some of the best capital appreciation in the market by leveraging our funds capital to acquire iconic properties uniquely located with unmatched experience. When investing in one fund you can also enjoy homes from all funds worldwide, so everywhere you go there’s a dream home waiting for you."
          />
          <PhotosContainer>
            <Luxury />
          </PhotosContainer>
        </GridAreaSection>
        <div>
          <RightSection>
            <div>
              <Text
                title="PORTUGAL 88 real estate fund"
                description="Portugal is a beautiful country with an incredible return on investment potential and one of Europe’s fastest growing property appreciation rates. With our local expertise we’ll acquire up to 15 iconic properties in the best areas with the highest growth potential expecting strong rental yield. All properties will be available for investors to enjoy 14 days per year. PORTUGAL 88 is a Golden Visa eligible fund with a limited number of investors.
                "
              />
              <p sx={{ fontStyle: `italic` }}>
                “Portugal is Europe’s Hottest Property Market...” by Bloomberg
              </p>
              <p sx={{ fontStyle: `italic` }}>
                “Political stability, low corporation tax and tax breaks, all
                help to make the Portugal property market an attractive and safe
                investment venture” by Berkshire Hathaway
              </p>
              <p sx={{ fontStyle: `italic` }}>
                “Lisbon 8th best city in the world for short term rental
                business” by Forbes
              </p>
              <p sx={{ fontStyle: `italic` }}>
                “Porto top 5 european cities to invest in real estate” by Forbes
              </p>
            </div>
            <Portugal />
          </RightSection>
        </div>
      </InvestorSection>
      <footer sx={{ variant: `layout.footer`, textAlign: `center` }}>
        <p sx={{ color: `iconico` }}>&#169; 2020 ICONICO</p>
      </footer>
    </Layout>
  )
}

export default Home

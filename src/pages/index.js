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
            title="ICONICO is a luxury property management company offering short-term rentals in landmark homes
            "
            description="ICONICO homes are the luxury hotels of the future. We find the most iconic properties around the world and transform them to create a luxury experience for customers to enjoy with family and friends. With seamless technology, luxury designed interiors, outstanding comfort, a vast array of amenities, 24 hour assistance and a wide range of on demand services, each home is a destination. ICONICO homes can be found on AirBnb, Booking, Agoda, Expedia, TripAdvisor, One Fine Stay, Conde Nast Johansens, Sotheby's, Abercrombie & Kent, Mr & Mrs Smith and many more
            "
          />
          <div sx={{ position: `relative`, paddingTop: `56.25%` }}>
            <ReactPlayer
              url="https://vimeo.com/466275012/049cd67c88"
              height="100%"
              width="100%"
              controls={true}
              style={{ position: `absolute`, top: `0`, left: `0` }}
            />
          </div>
        </RightSection>
        <GridAreaSection>
          <TextContainer>
            <Text
              title="We manage our partners properties to deliver high returns and an outstanding experience
              "
              description="With exceptional service dedicated to guests and homeowners, our aim is to be the global standard in the luxury property market for short-term rentals. Designed with the diligent owner in mind, our mission is to turn their loved second homes into profitable investments, using technology to bring luxury hospitality to the private residence while creating unforgettable experiences. With ICONICO, owning a holiday home will be a profitable investment without the burdens of managing it"
            />
          </TextContainer>
          <PhotosContainer>
            <Iconico />
          </PhotosContainer>
        </GridAreaSection>
      </UpsSection>
      <section>
        <Hero2 title=" Invest in a beautiful world with our real estate funds" />
      </section>
      <InvestorSection>
        <RightSection>
          <Text
            title=" ICONICO real estate funds are the future of luxury property investment"
            description="Imagine you can own the holiday home of your dreams, without paying for it, enjoy it whenever you want and generate income when you’re not using it. Be part of a new way of owning luxury properties, join our network of investors and own a piece of paradise everywhere you go. With ICONICO real estate funds you can turn your dreams into memories, feel like royalty in your castle, bring friends to your award winning vineyard, ski with family right from your chalet or be romantic exploring the city charms from your downtown apartment. With our real estate investment funds all this is possible while making money
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
          <Text
            title=" Invest, profit and enjoy the world's most extraordinary homes"
            description="Our real estate investment funds are focused on bringing the highest returns and the best experiences to investors. We acquire iconic properties in the most sought-after locations, renovate and design for a luxury experience, and bring them to market under the ICONICO brand. Customers can rent these homes on the top vacation rental platforms worldwide and the rental yield is paid monthly to investors. But owning the world's most extraordinary homes would only be fun if our investors can enjoy it, therefore we offer 14 days per year for free in any of the properties, so our investors can create long-lasting memories and traditions with their family and friends
            "
          />
          <PhotosContainer>
            <Luxury />
          </PhotosContainer>
        </GridAreaSection>
        <div>
          <RightSection>
            <div>
              <Text
                title="Invest in PORTUGAL 88 real estate fund"
                description="Portugal 88 is ICONICO's latest fund and it's now open to investors. Portugal is a beautiful country with one of Europe’s fastest growing property appreciation rates. With our local expertise we’ll acquire up to 15 iconic luxury properties in the best locations across the country, from landmark downtown apartments in Lisbon and Porto, beautiful mansions and estates in Sintra, Comporta and the Azores islands to an award winning vineyard in the south. All while delivering high ROI from strong capital appreciation and rental yield. PORTUGAL 88 is a Golden Visa eligible fund with a limited number of investors and all properties will be available for them to enjoy with family and friends, 14 days per year, for free
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

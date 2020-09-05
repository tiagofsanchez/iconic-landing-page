/** @jsx jsx */
import { jsx, Embed } from "theme-ui"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import Hero2 from "../components/Hero/hero2"
import Luxury from "../components/shared/Luxury"
import Text from "../components/USP/text"
import Iconico from "../components/shared/Iconico"
import Portugal from "../components/shared/Portugal88"
import Portugal881 from "../components/shared/Portugal881"
import Form from "../components/Form/form"
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
      <Hero tagline="We believe the world’s most extraordinary homes are too important not to be share" />
      <UpsSection>
        <RightSection>
          <Text
            title="We turn dreams into memories"
            description="Our customers experience iconic properties in each destination with all the amenities, privacy, comfort and technology for a once in a lifetime experience with their family and friends. Each home can be found in the leading online platforms for short term rentals in the world and comes with 24 hours support and a wide range of on demand services available to enjoy."
          />
          <Embed src="https://www.youtube.com/embed/uej9t2FI4fA" />
        </RightSection>
        <GridAreaSection>
          <TextContainer>
            <Text
              title="ICONICO is luxury property management company offering short and mid-term rentals in true landmark properties"
              description="With personal service dedicated to our hosts and guests, ICONICO aims to be the global standard for short and mid term luxury rental property management. Designed for the diligent host in mind, our mission is to help landlords turn their loved private properties into profitable investments while keeping the care and affection that these unique homes deserve by using technology to bring the tradition of luxury hospitality to the private property market."
            />
          </TextContainer>
          <PhotosContainer>
            <Iconico />
          </PhotosContainer>
        </GridAreaSection>
      </UpsSection>
      <section>
        <Hero2 title="The future of luxury ownership in the real estate market" />
      </section>
      <div sx={{ width: `90%`, margin: `auto` }}>
        <Embed src="https://www.youtube.com/embed/uej9t2FI4fA" />
      </div>
      <InvestorSection>
        <RightSection>
          <Text
            title="Join our Real Estate Investment Funds"
            description="Our REIFs are truly unique, not only do you own and enjoy landmark properties across the world but you’ll get a monthly payment on your yield. ICONICO will manage all funds and properties, in a commission on profit model, allowing our funds to operate without a fixed cost structure maximizing ROI."
          />
          <Luxury />
        </RightSection>
        <div>
          <GridAreaSection>
            <TextContainer>
              <div>
                <Text
                  title="“Portugal is Europe’s Hottest Property Market...” by Bloomberg"
                  description="Portugal is a beautiful country with a solid track record returning on investment, our fund will acquire 15 iconic properties in key touristic locations of today and tomorrow expecting strong rental yields and one of Europe’s fastest growing property appreciation rates. All properties will be available for investors to enjoy."
                />
                <p>
                  PORTUGAL 88 is a Golden Visa eligible fund with a limited
                  number of investors.
                </p>
              </div>
            </TextContainer>
            <PhotosContainer>
              <Portugal />
            </PhotosContainer>
          </GridAreaSection>
          <div sx={{width: `90%`,  margin: `auto`, marginTop: `5px`}}>
            <Portugal881 />
          </div>
        </div>
      </InvestorSection>
      <section>
        <Form />
      </section>
    </Layout>
  )
}

export default Home

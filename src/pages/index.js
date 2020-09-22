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
import Portugal881 from "../components/shared/Portugal881"
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
      <Hero tagline="The world’s most extraordinary homes are too important not to be share" />
      <UpsSection>
        <RightSection>
          <Text
            title="We turn dreams into memories"
            description="Our customers can rent iconic properties across the world with all the amenities, comfort and privacy for a once in a lifetime trip with their family and friends. Each home is an experience with a wide range of on demand services available and 24 hours customer support, all enabled by our seamless technology at their fingertips."
          />
          <ReactPlayer
            width="100%"
            heigh="auto"
            url="https://www.youtube.com/embed/uej9t2FI4fA"
          />
        </RightSection>
        <GridAreaSection>
          <TextContainer>
            <Text
              title="ICONICO is a luxury property management company offering short and mid-term rentals in true landmark properties"
              description="With personal service dedicated to our hosts and guests, ICONICO aims to be the global standard for short and mid term luxury rental property management. Designed for the diligent host in mind, our mission is to help landlords turn their loved private properties into profitable investments while keeping the care and affection that these unique homes deserve by using technology to bring the tradition of luxury hospitality to the private property market."
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
            title="ICONICO smart funds are the future of luxury real estate investment"
            description="By managing hundreds of the world’s most beautiful properties, from independent owners and our funds, we’re uniquely positioned to find the best balance portfolio between strong ROI and unmatched experience for our fund investors to make money while also enjoying these properties."
          />
          <div sx={{ position: `relative`, paddingTop: `56.25%` }}>
            <ReactPlayer
              url="https://vimeo.com/455871305/e27885077d"
              width="100%"
              height="100%"
              controls="true"
              style={{ position: `absolute`, top: `0`, left: `0` }}
            />
          </div>
        </RightSection>
        <GridAreaSection>
          <Text
            title="Join our Smart Real Estate Investment Funds"
            description="Investors are shareholders of all properties in the fund by entering with a portion of the total value, ICONICO will market for short and mid-term rentals and manage everything about them to maximize returns and create the best experience for customers and investors to enjoy. We pay rental yields monthly and provide some of the best capital appreciation in the market by leveraging our funds capital to acquire iconic properties uniquely located with unmatched experience. When investing in one fund you can also enjoy homes for all funds worldwide, so everywhere you go there’s a dream home waiting for you."
          />
          <PhotosContainer>
            <Luxury />
          </PhotosContainer>
        </GridAreaSection>
        <div>
          <RightSection>
            <div>
              <Text
                title="PORTUGAL 88 Real Estate Fund"
                description="Portugal is a beautiful country with a solid track record returning on investment, our fund will acquire up to 15 iconic properties in key touristic locations of today and tomorrow expecting strong rental yields and one of Europe’s fastest growing property appreciation rates. All properties will be available for investors to enjoy 14 days per year. PORTUGAL 88 is a Golden Visa eligible fund with a limited number of investors."
              />
              <p sx={{ fontStyle: `italic` }}>
                “Portugal is Europe’s Hottest Property Market...” by Bloomberg
              </p>
            </div>
            <Portugal />
          </RightSection>
          <div sx={{ width: `90%`, margin: `auto`, marginTop: `5px` }}>
            <Portugal881 />
          </div>
        </div>
      </InvestorSection>
      <footer sx={{ variant: `layout.footer`, textAlign: `center` }}>
        <p>&#169; by ICONICO, 2020</p>
      </footer>
    </Layout>
  )
}

export default Home

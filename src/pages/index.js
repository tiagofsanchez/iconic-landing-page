/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import UspSection from "../components/Layout/uspSection"
import InvestorsSection from "../components/Layout/investorsSection"
import FormSection from "../components/Layout/formSection"
import Form from "../components/Form/form"
import { UspImageRight, UspImageLeft } from "../components/USP/usp"

import Iconic  from '../components/shared/Iconic'
import WhatWeDo  from '../components/shared/WhatWeDo'


const Home = () => {
  return (
    <Layout>
      <Hero tagline="The world’s most extraordinary homes with the highest standard of service can now make your dream holidays come true" />
      <UspSection>
        <UspImageRight
          imageComponent={<Iconic />}
          title="What is ICONICO"
          content="A luxury property management company focused on short and mid term rentals market targeting high-end tourism and executive business travel customers"
        />
        <UspImageLeft
          title="What do we do"
          imageComponent={<WhatWeDo />}
          content="We make money renting properties to customers through listing on multiple platforms (e.g. Airbnb, Booking, Agoda, etc.). We manage everything about these properties, from day to day maintenance to the entire rental guest experience from check-in to check-out. We’re not a tech company but certainly tech is at the core of our success"
        />
        <UspImageRight
        imageComponent={<Iconic />}
          title="We're the future of luxury hospitality"
          content="Customers enjoy total privacy and true at home feeling by renting the entire property. With a broad variety of properties within the same city or region we offer vastly different experiences unmatched by hotels. Outstanding customer experience supported by seamless technology, 24h support, consistent comfort across all properties and on demand services like private chef or at home massage, are all an integral part of our success."
        />
        <UspImageLeft
        imageComponent={<WhatWeDo />}
          title="Technology is at our core"
          content="The best experience is one where customers are in full control without the effort of doing so. We provide highly intuitive technology for customers to control everything about our homes during their stay. To our partners, property owners, we provide a platform for real time visibility on everything, from occupancy and payments to guest reports and reviews, about their property."
        />
      </UspSection>
      <InvestorsSection>
        <h1>The future of luxury ownership in the real estate market</h1>
        <UspImageRight
        imageComponent={<Iconic />}
          title="Invest with us and make money while enjoying your luxury homes"
          content="Our concept is simple and innovative, we gather a pool of investors to share the cost of buying the most iconic properties with the highest ROI. Our investors will not only have high capital and rental yields but also can enjoy every property. From century old castles to beautiful estates, from landmark vineyards to stunning mountain ranches, from secluded villas in paradise to iconic city center apartments all all for our investors to enjoy while profiting from owning these properties."
        />
        <UspImageLeft
        imageComponent={<WhatWeDo />}
          title="PORTUGAL 88"
          content="Our first fund is in Portugal, a beautiful country with a solid track record in high ROI, we’ll invest in 15 iconic properties for short and mid term rentals expecting strong rental yields and one of Europe’s fastest growing property appreciation. All properties in our funds are available for investors to enjoy. This fund is also Golden Visa eligible."
        />
        <UspImageRight
        imageComponent={<Iconic />}
          title="Become global property owner"
          content="Each investment fund is country specific but our investors can access all properties from any funds, so as we grow you also grow your portfolio of homes to enjoy. We target countries or regions with high ROI, solid year round tourism and economic friendly policies to safeguard the profitability of each investment fund."
        />
         <UspImageLeft
         imageComponent={<WhatWeDo />}
          title="What Investors get"
          content="High rental yield and capital appreciation
          Low risk investment, real estate is historically one of the safest assets to hold
          Enjoy any property anytime you want at no cost for 14 days per year
          Bring up to 8 family members or friends
          Golden Visa for up to 6 family members
          Exit anytime, we’ll find a replacement
          "
        />
      </InvestorsSection>
      <FormSection>
        <div>
          <h1>Contact Us</h1>
          <p>If you are keen to learn more!</p>
        </div>
        <Form />
      </FormSection>
    </Layout>
  )
}

export default Home

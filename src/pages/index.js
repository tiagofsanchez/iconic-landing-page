/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import Text from "../components/USP/text"
import Iconico from "../components/shared/Iconico"
import WhatWeDo from "../components/shared/WhatWeDo"

const Home = () => {
  return (
    <Layout>
      <Hero tagline="The world’s most extraordinary homes with the highest standard of service can now make your dream holidays come true." />
      <section>
        <div>
          <Text
            title="What is ICONICO"
            description="A luxury property management company focused on short and mid term rentals market targeting high-end tourism and executive business travel customers"
          />
          <Iconico />
        </div>
        <div>
          <Text
            title="What do we do"
            description="We make money renting properties to customers through listing on multiple platforms (e.g. Airbnb, Booking, Agoda, etc.). We manage everything about these properties, from day to day maintenance to the entire rental guest experience from check-in to check-out. We’re not a tech company but certainly tech is at the core of our success"
          />
        </div>
        <div>
          <Text
            title="We're the future of luxury hospitality"
            description="Customers enjoy total privacy and true at home feeling by renting the entire property. With a broad variety of properties within the same city or region we offer vastly different experiences unmatched by hotels. Outstanding customer experience supported by seamless technology, 24h support, consistent comfort across all properties and on demand services like private chef or at home massage, are all an integral part of our success."
          />
        </div>

        <div>
          <Text
            title="Technology is at our core"
            description="The best experience is one where customers are in full control without the effort of doing so. We provide highly intuitive technology for customers to control everything about our homes during their stay. To our partners, property owners, we provide a platform for real time visibility on everything, from occupancy and payments to guest reports and reviews, about their property."
          />
        </div>
      </section>
      <section>
        <h1>The future of luxury ownership in the real estate market</h1>
      </section>
      <section>
        <div>
          <Text
            title="Invest with us and make money while enjoying your luxury homes"
            description="Our concept is simple and innovative, we gather a pool of investors to share the cost of buying the most iconic properties with the highest ROI. Our investors will not only have high capital and rental yields but also can enjoy every property. From century old castles to beautiful estates, from landmark vineyards to stunning mountain ranches, from secluded villas in paradise to iconic city center apartments all all for our investors to enjoy while profiting from owning these properties."
          />
        </div>
        <div>
          <Text
            title="PORTUGAL 88"
            description="Our first fund is in Portugal, a beautiful country with a solid track record in high ROI, we’ll invest in 15 iconic properties for short and mid term rentals expecting strong rental yields and one of Europe’s fastest growing property appreciation. All properties in our funds are available for investors to enjoy. This fund is also Golden Visa eligible."
          />
        </div>

        <div>
          <Text
            title="Become global property owner"
            description="Each investment fund is country specific but our investors can access all properties from any funds, so as we grow you also grow your portfolio of homes to enjoy. We target countries or regions with high ROI, solid year round tourism and economic friendly policies to safeguard the profitability of each investment fund."
          />
        </div>
        <div>
          <h3 sx={{ marginTop: `0px` }}>What Investors get</h3>
          <p>High rental yield and capital appreciation</p>
          <p>
            Low risk investment, real estate is historically one of the safest
            assets to hold
          </p>
          <p>
            Enjoy any property anytime you want at no cost for 14 days per year
          </p>
          <p>Bring up to 8 family members or friends</p>
          <p>Golden Visa for up to 6 family members</p>
          <p>Exit anytime, we’ll find a replacement</p>
        </div>
      </section>
    </Layout>
  )
}

export default Home

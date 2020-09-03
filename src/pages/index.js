/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import Hero2 from "../components/Hero/hero2"
import Luxury from "../components/shared/Luxury"
import Text from "../components/USP/text"
import Iconico from "../components/shared/Iconico"
import Portugal from '../components/shared/Portugal88'
import Portugal881 from '../components/shared/Portugal881'

const Home = () => {
  return (
    <Layout>
      <Hero tagline="We believe the world’s most extraordinary homes are too important not to be share" />
      <section>
        <div>
          <Text
            title="We turn dreams into memories"
            description="Our customers experience iconic properties in each destination with all the amenities, privacy, comfort and technology for a once in a lifetime experience with their family and friends. Each home can be found in the leading online platforms for short term rentals in the world and comes with 24 hours support and a wide range of on demand services available to enjoy."
          />
        </div>
        <Iconico />
        <div>
          <Text
            title="ICONICO is luxury property management company offering short and mid-term rentals in true landmark properties"
            description="With personal service dedicated to our hosts and guests, ICONICO aims to be the global standard for short and mid term luxury rental property management. Designed for the diligent host in mind, our mission is to help landlords turn their loved private properties into profitable investments while keeping the care and affection that these unique homes deserve by using technology to bring the tradition of luxury hospitality to the private property market."
          />
          <Luxury />
        </div>
      </section>
      <section>
        <Hero2 title="The future of luxury ownership in the real estate market" />
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
          <div sx={{display: `grid`, gridGap: `5px`}}>
          <Portugal />
          <Portugal881 />
          </div>
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

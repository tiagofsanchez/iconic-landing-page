/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import UspSection from "../components/Layout/uspSection"
import InvestorsSection from "../components/Layout/investorsSection"
import FormSection from "../components/Layout/formSection"
import Form from "../components/Form/form"
import { UspImageRight, UspImageLeft } from "../components/USP/usp"

const Home =() => {
  return (
    <Layout>
      <Hero />
      <UspSection >
        <UspImageRight />
        <UspImageLeft />
        <UspImageRight />
      </UspSection>
      <InvestorsSection>
        <h1>FOR INVESTORS</h1>
        <UspImageRight />
        <UspImageLeft />
        <UspImageRight />
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
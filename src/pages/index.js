import React from "react"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import UspSection from "../components/Layout/uspSection"
import InvestorsSection from "../components/Layout/investorsSection"
import Header from "../components/Layout/header"
import { UspImageRight, UspImageLeft } from "../components/USP/usp"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Layout>
        <UspSection>
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
      </Layout>
    </>
  )
}

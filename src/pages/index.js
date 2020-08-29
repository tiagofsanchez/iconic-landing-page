import React from "react"
import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import Header from "../components/Layout/header"
import { UspImageRight, UspImageLeft } from "../components/USP/usp"

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <UspImageRight />
        <UspImageLeft />
        <UspImageRight />
        <div>Hello world!</div>
      </Layout>
    </>
  )
}

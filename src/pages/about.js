import React from "react"
import Layout from "../components/Layout/Layout"
import Container from "../components/Layout/Container"
import About from "../components/About"

export default () => (
  <Layout seoTitle="About" title="Who is Mang Cook?">
    <Container isCentered>
      <About />
    </Container>
  </Layout>
)

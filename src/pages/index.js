import React from "react"

import Layout from "../components/Layout/Layout"
import Container from "../components/Layout/Container"
import Home from "../components/Home"

export default () => (
  <Layout seoTitle="Home">
    <Container isCentered>
      <Home />
    </Container>
  </Layout>
)

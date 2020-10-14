import React from "react"

import Layout from "../components/Layout/Layout"
import Container from "../components/Layout/Container"
import Ingredients from "../components/Ingredients"

export default () => (
  <Layout
    title={
      <span>
        What's in your <span className="is-italic">kusina</span>, Mars?
      </span>
    }
    seoTitle="Enter Ingredients"
  >
    <Container isCentered>
      <Ingredients />
    </Container>
  </Layout>
)

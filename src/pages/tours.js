import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"
export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero>
          <Banner
            title="Tours"
            info="Check Our Qimia special tours program"
          ></Banner>
        </StyledHero>
        <Tours />
      </Layout>
    )
  }
}

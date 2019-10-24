import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
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
      </Layout>
    )
  }
}

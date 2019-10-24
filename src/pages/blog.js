import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"

const blog = () => {
  return (
    <Layout>
      <StyledHero>
        <Banner
          title="Blogs"
          info="Check the great Istanbul related blogs"
        ></Banner>
      </StyledHero>
    </Layout>
  )
}

export default blog

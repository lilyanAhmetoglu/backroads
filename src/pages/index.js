import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner title="Welcome To Istanbul" info="Qimia Anniversary Event, Istanbul/ 1-3 November">
          <Link to="/tours" className="btn-white">Our schedule</Link>
        </Banner>
      </SimpleHero>
     
    </Layout>
  </>
)

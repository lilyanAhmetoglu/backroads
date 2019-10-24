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
        <Banner title="Welcome Qimia" info="Hello QIMIA and welcome to Istanbul,">
          <Link to="/tours" className="btn-white">explore tours</Link>
        </Banner>
      </SimpleHero>
      <About />
    </Layout>
  </>
)

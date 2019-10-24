import React from "react"
import Title from "../Title"
import styles from "../css/about.module.css"

import {useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
const getHome = graphql`
query homeImage {
  homeImage: file(relativePath: {eq: "defaultBcg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 600) {
         ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`


const About = () => {
  const {homeImage} = useStaticQuery(getHome)
  return (
    <section className={styles.about}>
      <Title title="tour" subtitle="info" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
           
            <Img fluid={homeImage.childImageSharp.fluid} /> 
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore istanbul</h4>
          <p>
            Speechless. Overwhelming. Exciting. These impressions of Istanbul
            are forever lasting and it is probably the most memorable city we
            have ever explored.
          </p>
          <p>
           So <b>Qimia</b> we are ready to show you the best places in our city, are you ready?
           stay tuned and let's have fun together :)
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import styles from "../components/css/template.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Day from "../components/SingleTour/Day"
const Template = ({ data }) => {
  const {
    title,
    day,
    description: { description },
    gallery,
    schedual,
  } = data.tours

  const [mainImage, ...tourImages] = gallery
  console.log(mainImage)
  console.log(tourImages)
  return (
    <Layout>
      <StyledHero>
        <Banner
          title="Tours"
          info="Check Our Qimia special tours program"
        ></Banner>
      </StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <div className={styles.contentContainer}>
            <h2>{title}</h2>
            <h4>Day : {day}</h4>
            <p className={styles.desc}>{description}</p>
            <h2>Activities schedule</h2>
            <div className={styles.schedual}>
              {schedual.map((item, index) => {
                return <Day key={index} time={item.time} info={item.info} />
              })}
            </div>
            <Link fade to="/tours" className="btn-primary">
              back to tours
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tours: contentfulTour(slug: { eq: $slug }) {
      title
      day
      description {
        description
      }
      schedual {
        time
        info
      }
      gallery {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Template

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
    text: { json },
    schedual,
  } = data.tours

  const [mainImage, ...tourImages] = gallery
  console.log(mainImage)
  console.log(tourImages)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <img width="400" src={node.data.target.fields.file["en-US"].url} />
         
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { title, image, text } = node.data.target.fields
        console.log(text)

        return (
          <div>
            <br />
            <br />
            <br />
            <br />
            <h1>this is other post : {title["en-US"]}</h1>
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt=""
            />
            {documentToReactComponents(text["en-US"])}
            <br />
            <br />
            <br />
            <br />
          </div>
        )
      },
    },
  }
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
            {documentToReactComponents(json, options)}
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
      text {
        json
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

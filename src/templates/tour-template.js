import React from "react"
import { graphql } from "gatsby"
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

  return <h1>{title}</h1>
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
          src
        }
      }
    }
  }
`
export default Template

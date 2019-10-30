import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/css/single-blog.module.css"
import {Link} from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { log } from "util"
const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post
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
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <Link fade to="/blog" className="btn-primary">
            all posts
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default Blog

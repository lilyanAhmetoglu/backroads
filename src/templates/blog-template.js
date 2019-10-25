import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/css/single-blog.module.css"
import {Link} from "gatsby"
const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>

          <Link  to="/blog" className="btn-primary">
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

import React from "react"
import Image from "gatsby-image"
import {Link} from 'gatsby'
import styles from "../../components/css/tour.module.css"

const Tour = ({tour}) => {
  const {title,day,slug, gallery } = tour
  console.log(gallery)
  let mainImage = gallery[0].fluid
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <Link fade className={styles.link} to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>

          <div className={styles.details}>
            <h6>{day} day</h6>
            
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour

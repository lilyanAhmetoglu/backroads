import React from "react"
import Title from "../Title"
import styles from "../css/about.module.css"
import img from "../../images/defaultBcg.jpg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="tour" subtitle="info" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about qimia istanbul tour" />
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

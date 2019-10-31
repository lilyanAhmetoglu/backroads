import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import styles from "../css/day.module.css"
const Day = ({ time, info }) => {
  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }
  
  return (
    <article className={styles.day}>
      <p>
        <b>
          <span className="main-color">{time} :</span> {info}
        </b>
      </p>
      <hr></hr>
    </article>
  )
}

export default Day

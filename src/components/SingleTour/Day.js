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
      <h4>
        {time}
        <button className={styles.btn} onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day

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
       <button className={styles.btn} onClick={toggleInfo}>
      <h4>
        {time}
       
          <FaAngleDown />
        
      </h4>
      </button>
      {showInfo && <p><b>{info}</b></p>}
    </article>
  )
}

export default Day

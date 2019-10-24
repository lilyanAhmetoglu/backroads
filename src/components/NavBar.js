import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "./css/navbar.module.css"

import { FaAlignRight } from "react-icons/fa"
import links from "../constans/links"
import socialIcons from "../constans/social-icons"
import logo from "../images/logo.png"

const NavBar = () => {
//  const [isOpen, setNav] = useState()
//  const toggleNav = () => {
 //   setNav(isOpen => !isOpen)
//  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img className={styles.mainLogo} src={logo} alt="backroads logo" />
        </div>
        <ul
          className={ styles.navLinks
           /* isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`*/
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default NavBar

    import React from "react"
    import styles from "../components/css/footer.module.css"
    import links from "../constans/links"
    import socialIcons from "../constans/social-icons"
    import { Link } from "gatsby"
    import { FaRProject } from "react-icons/fa"
    const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.links}>
            {links.map((item, index) => {
            return (
                <Link key={index} to={item.path}>
                {item.text}
                </Link>
            )
            })}
        </div>
        <div className={styles.copyright}>
            copyright &copy; Qimia Istanbul Tour {new Date().getFullYear()} all
            rights reserved
        </div>
        </footer>
    )
    }

    export default Footer

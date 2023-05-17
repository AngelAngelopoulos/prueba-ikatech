import React from "react"
import { Props } from "../../interfaces/Props"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import styles from './MainFooter.module.css'

interface MainFooterProps extends Props {}

export const MainFooter: React.FC<MainFooterProps> = (props: MainFooterProps) => {
    return (
        <div className={`${styles.mainFooterContainer}`}>
            <span className={`${styles.mainFooterText}`}>@HUSHPUPPIESCO</span>
            <div className={`${styles.mainFooterLine}`} />
            <div className={`${styles.mainFooterIconsContainer}`}>
                <FaFacebookF className={`${styles.mainFooterIcon}`} />
                <FaInstagram className={`${styles.mainFooterIcon}`} />
            </div>
        </div>
    )
}

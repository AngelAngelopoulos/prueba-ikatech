import React from "react";
import { Props } from "../../interfaces/Props";
import { LinkContent } from "../../interfaces/Button";
import styles from './NavigationBar.module.css'

interface NavigationBarProps extends Props {
    links: Array<LinkContent>
}

export const NavigationBar: React.FC<NavigationBarProps> = (props: NavigationBarProps) => {

    const { links } = props

    return (
        <div className={`${styles.navigationBarContainer}`}>
            <div className={`${styles.navigationLinksList}`}>

            {
            links && links.map((link, key) => {
                return <div key={key} className={`${styles.navigationLinkContent}`}> { link.title }</div>
        })
    }</div></div >
    )
}

import React from "react";
import { Props } from "../../interfaces/Props";
import { LinkContent } from "../../interfaces/Button";
import styles from './MainNavigationBar.module.css';

interface MainNavigationBarProps extends Props {
    links: Array<LinkContent>;
    alignedTo?: string;
}

export const MainNavigationBar: React.FC<MainNavigationBarProps> = (props: MainNavigationBarProps) => {

    const { links, alignedTo } = props;

    return (
        <div className={`${ alignedTo  === 'left' ? styles.mainNavigationBarStart : styles.mainNavigationBarEnd}`}>
            {/* <div className={`${styles.linksContentList}`}> */}
            {
                links && links.map((link, key) => {
                    return (
                        <span key={key} className={`${styles.linkContentText}`}>{ link.title }</span>
                    )
                })
            }
            {/* </div> */}
        </div>
    )
}

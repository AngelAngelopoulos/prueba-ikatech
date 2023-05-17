import React from "react"
import { Props } from "../../interfaces/Props"
import { LinkContent } from "../../interfaces/Button"
import styles from './FooterLinkList.module.css'

interface FooterLinkListProps extends Props {
    buttons: Array<LinkContent>;
    titleSection: string;
}

export const FooterLinkList: React.FC<FooterLinkListProps> = (props: FooterLinkListProps) => {

    const { buttons, titleSection } = props;

    return (
        <div className={`${styles.footerLinkListContainer}`}>
            <span className={`${styles.footerLinkListSectionTitle}`}>{titleSection}</span>
            <div className={`${styles.footerLinkContentList}`}>
                {
                    buttons && buttons.map((button, key) => {
                        return <span className={`${styles.linkContentText}`} key={key}>{ button.title }</span>
                    })
                }
            </div>
        </div>
    )
}

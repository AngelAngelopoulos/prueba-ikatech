import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './OfferBanner.module.css'

interface OfferBannerProps extends Props {
    text: string;
}

export const OfferBanner: React.FC<OfferBannerProps> = (props: OfferBannerProps) => {

    const { text } = props;

    return (
        <div className={`${styles.offerBannerContainer}`}>
            <span className={`${styles.offerBannerText}`}>{text}</span>
        </div>
    )
}

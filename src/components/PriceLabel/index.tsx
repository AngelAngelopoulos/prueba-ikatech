import React from "react"
import { Props } from "../../interfaces/Props"
import styles from './PriceLabel.module.css'

interface PriceLabelProps extends Props {
    price: number
}

export const PriceLabel: React.FC<PriceLabelProps> = (props: PriceLabelProps) => {

    const { price } = props;

    return (
        <span className={`${styles.priceLabelText}`}>
            ${price}.00
        </span>
    )
}

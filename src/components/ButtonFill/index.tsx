import React from "react"
import { Props } from "../../interfaces/Props"
import styles from "./ButtonFill.module.css"

interface ButtonFillProps extends Props {
    text: string
    onClick: () => void
}

export const ButtonFill: React.FC<ButtonFillProps> = (
    props: ButtonFillProps
) => {
    const { text, onClick } = props

    return (
        <button onClick={onClick} className={`${styles.buttonFillContainer}`}>
            {text}
        </button>
    )
}

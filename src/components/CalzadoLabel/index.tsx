import React from "react"
import { Props } from "../../interfaces/Props"
import styles from './CalzadoLabel.module.css'

interface CalzadoLabelProps extends Props {
    text: string;
    onClick?: () => void
}

export const CalzadoLabel: React.FC<CalzadoLabelProps> = (props: CalzadoLabelProps) => {

    const { text, onClick } = props;

    return (
        <div onClick={onClick} className={`${styles.calzadoLabelText}`}>{text}</div>
    )
}

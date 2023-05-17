import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './CategoryTextLabel.module.css'

interface CategoryTextLabelProps extends Props {
    text: string
}

export const CategoryTextLabel: React.FC<CategoryTextLabelProps> = (props: CategoryTextLabelProps) => {

    const { text } = props;

    return (
        <span className={`${styles.categoryTextLabelText}`}>{ text }</span>
    )
}

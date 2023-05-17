import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './CategoryLabel.module.css'

interface CategoryLabelProps extends Props {
    category: string;
}

export const CategoryLabel: React.FC<CategoryLabelProps> = (props: CategoryLabelProps) => {

    const { category } = props;

    return (
        <span className={`${styles.categoryLabelText}`}>{ category }</span>
    )
}

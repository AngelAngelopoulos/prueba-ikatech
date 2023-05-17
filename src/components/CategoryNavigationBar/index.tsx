import React from "react";
import { Props } from "../../interfaces/Props";
import { RouteIndicator } from "../RouteIndicator";
import styles from './CategoryNavigationBar.module.css'

interface CategoryNavigationBarProps extends Props { }

export const CategoryNavigationBar: React.FC<CategoryNavigationBarProps> = (props: Props) => {

    const routes = ['hushpuppiesco', 'calzado']

    return (
        <div className={`${styles.categoryNavigationBarContainer}`}>
            <RouteIndicator routes={routes} />
        </div>
    )
}

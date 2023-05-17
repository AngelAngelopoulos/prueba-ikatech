import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './SubDivider.module.css'

interface SubDividerProps extends Props {
    subtitle: string;
}

export const SubDivider: React.FC<SubDividerProps> = (props: SubDividerProps) => {

    const { subtitle } = props;

    return (
        <div className={`${styles.subDividerContainer}`}>
            <span className={styles.subDividerText} > { subtitle } </span>
            <div className={`${styles.subDividerLine}`} />
        </div>
    )
}

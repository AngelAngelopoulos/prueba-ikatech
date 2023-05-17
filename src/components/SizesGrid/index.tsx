import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './SizesGrid.module.css'

interface SizesGridProps extends Props {
    sizes: Array<number>;
    availableSizes?: Array<number>;
}

export const SizesGrid: React.FC<SizesGridProps> = (props: SizesGridProps) => {

    const { sizes, availableSizes } = props;

    return (
        <div className={`${styles.sizesGridContainer}`}>
            {
                sizes && sizes.map((size, key) => {
                        return (
                            <div key={key} className={`${availableSizes?.includes(size) ? styles.sizeElementEnabled : styles.sizeElementDisabled}`}>
                                <span>{ size.toString() }</span>
                            </div>
                        )
                })
            }
        </div>
    )
}

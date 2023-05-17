import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './Carrousel.module.css';
import { Zapato } from "../../interfaces/Zapato";

interface CarrouselProps extends Props {
    zapatos: Array<Zapato>;
    onSelect: (zapato: Zapato) => void
}

export const Carrousel: React.FC<CarrouselProps> = (props: CarrouselProps) => {

    const { zapatos, onSelect } = props;


    return (
        <div className={`${styles.carrouselContainer}`}>
            {
                zapatos && zapatos.map((zapato, key) => {
                    return (
                        <div onClick={() => { onSelect(zapato) }} className={`${styles.carrouselZapatoImage}`}>
                            <img width={50} key={key} alt="zapato.jpg" src={`assets/img/${zapato.foto}`}></img>
                        </div>
                    )
                })
            }
        </div>
    )
}

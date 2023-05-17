/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { Props } from "../../interfaces/Props"
import { Zapato } from "../../interfaces/Zapato"
import styles from './CalzadoCard.module.css'
import { HeartButton } from "../HeartButton"
import { CalzadoLabel } from "../CalzadoLabel"
import { PriceLabel } from "../PriceLabel"
import { useNavigate } from "react-router-dom"

interface CalzadoCardProps extends Props {
    zapato: Zapato;
}

export const CalzadoCard: React.FC<CalzadoCardProps> = (props: CalzadoCardProps) => {

    const { zapato } = props;

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${zapato.referencia}`)
    }

    return (
        <div className={`${styles.calzadoCardContainer}`}>
            <div className={`${styles.calzadoCardImage}`}>
                <div onClick={handleClick}  className={styles.calzadoZapato}>
                    <img style={{justifySelf: 'center'}} width={200} alt="zapato.jpg" src={`assets/img/${zapato.foto}`} />
                </div>
                <HeartButton onChangeState={async (fav) => {console.log(fav)}} absolute/>
            </div>
            <CalzadoLabel onClick={handleClick} text={`${zapato.nombre}`} />
            <PriceLabel price={zapato.precio} />
            <div className={`${styles.calzadoCardDivider}`}/>
        </div>
    )
}

import React, { useEffect, useState } from "react";
import { Props } from "../../interfaces/Props";
import styles from './Zapato.module.css';
import { useGetZapatos } from "../../hooks/zapato";
import { CalzadoCard } from "../../components/CalzadoCard";
import { SubDivider } from "../../components/SubDivider";
import { Carrousel } from "../../components/Carrousel";
import { PriceLabel } from "../../components/PriceLabel";
import { CategoryLabel } from "../../components/CategoryLabel";
import { SizesGrid } from "../../components/SizesGrid";
import { ButtonFill } from "../../components/ButtonFill";
import { useAppDispatch } from "../../hooks/cart";
import { addArticle } from "../../reducers/cart";

interface ZapatoPageProps extends Props {

 }

export const ZapatoPage: React.FC<ZapatoPageProps> = () => {

    const dispatch = useAppDispatch()
    const zapatos = useGetZapatos().slice(0, 10)

    const zapatosVariants = useGetZapatos().slice(10, useGetZapatos().length - 1)

     const [zapatoSelected, setZapatoSelected] = useState(zapatosVariants[0])

    useEffect(() => {

    }, [zapatoSelected])

    const addToCart = () => {
        dispatch(addArticle(zapatoSelected))
    }

    return (
        <div className={`${styles.zapatoPage}`}>

            <div className={`${styles.zapatoDescriptionAndPhoto}`}>
                <div style={{ height: 500, minWidth: 700, textAlign: 'center' }}>
                    <img style={{ maxWidth: 700 }} height={500} src={`assets/img/${zapatoSelected.foto}`} alt="zapato.jpg" />
                </div>
                <div className={`${styles.zapatoDescription}`}>
                    <CategoryLabel category={zapatoSelected.nombre}></CategoryLabel>
                    <PriceLabel price={zapatoSelected.precio}></PriceLabel>
                    <span>Codigo de producto {zapatoSelected.referencia}</span>
                    <SizesGrid sizes={[6, 6.5, 7, 7.5, 8, 9]} availableSizes={[6, 7, 7.5, 8, 9]}/>
                    <ButtonFill text="agregar al carrito" onClick={() => addToCart()}/>
                    <span>  </span>
                </div>
            </div>


            <Carrousel onSelect={(zapato) => setZapatoSelected(zapato)} zapatos={zapatosVariants} />

            <SubDivider subtitle="detalles de producto"/>

            <SubDivider subtitle="tecnologia"/>

            <SubDivider subtitle="productos recomendados"/>
            <div className={`${styles.recommendationsBar}`}>
                {
                    zapatos && zapatos.slice(0, 5).map((zapato, key) => {
                        return <CalzadoCard key={key} zapato={zapato}></CalzadoCard>
                    })
                }
            </div>
        </div>
    )
}

import React from "react";
import { Props } from "../../interfaces/Props";
import zapatoJSON from '../../data/zapato.json'
import { Zapato } from "../../interfaces/Zapato";
import { CalzadoCard } from "../../components/CalzadoCard";
import styles from './Calzado.module.css'
import { CategoryNavigationBar } from "../../components/CategoryNavigationBar";
import { CategoryLabel } from "../../components/CategoryLabel";
import { CategoryTextLabel } from "../../components/CategoryTextLabel";
import { CalzadoLabel } from "../../components/CalzadoLabel";
import { SizesGrid } from "../../components/SizesGrid";

interface CalzadoProps extends Props {}

const CalzadoPage: React.FC<CalzadoProps> = (props: CalzadoProps) => {

    const zapatos: Array<Zapato> = zapatoJSON.slice(0, 10);

    return (
        <div className={`${styles.calzadoPage}`}>
            <div className={`${styles.categorySide}`}>
                <CategoryNavigationBar />
                <CategoryLabel category="calzado" />
                <CategoryTextLabel text={`TODOS (${zapatos.length})`} />
                <div className={`${styles.informationDisplay}`} >
                    <CalzadoLabel text="TALLA" />
                    <div className={`${styles.informationDisplayProperties}`}>
                        <SizesGrid sizes={[1, 2, 3, 4, 5]} availableSizes={[1, 2, 3, 5]} />
                    </div>
                    <CalzadoLabel text="PRECIO" />
                    <div className={`${styles.informationDisplayProperties}`}>
                        <CategoryTextLabel text={`150.000 - 300.000`} />
                        <CategoryTextLabel text={`300.000 - 400.000`} />
                    </div>
                    <CalzadoLabel text="MATERIAL" />
                    <div className={`${styles.informationDisplayProperties}`}>
                        <CategoryTextLabel text={`Cuero (18)`} />
                        <CategoryTextLabel text={`Nubuck (8)`} />
                    </div>
                    <CalzadoLabel text="COLOR" />
                    <div className={`${styles.informationDisplayProperties}`}>
                        <CategoryTextLabel text={`NEGRO (12)`} />
                        <CategoryTextLabel text={`AZUL (12)`} />
                        <CategoryTextLabel text={`CAFE (12)`} />
                        <CategoryTextLabel text={`ORO (12)`} />
                    </div>
                    <CalzadoLabel text="TECNOLOGIA" />
                    <div className={`${styles.informationDisplayProperties}`}>
                        <CategoryTextLabel text={`HPO2Flex (5)`} />
                        <CategoryTextLabel text={`BioBevel (1)`} />
                        <CategoryTextLabel text={`flexGroove (2)`} />
                    </div>
                </div>
            </div>
            <div className={`${styles.calzadoList}`}>
                {
                    zapatos && zapatos.map((zapato: Zapato, key: number) => {
                        return <CalzadoCard zapato={zapato} key={key} />
                    })
                }
            </div>

        </div>
    )
}

export default CalzadoPage;

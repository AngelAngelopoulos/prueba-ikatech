import React from "react";
import { Props } from "../../interfaces/Props";
import { MainIcon } from "../MainIcon";
import styles from './MainHeader.module.css'
import { MainNavigationBar } from "../MainNavigationBar";
import { LinkContent } from "../../interfaces/Button";
import { InputBar } from "../InputBar";
import { PropmtLabel } from "../PromptLabel";
import { useAppSelector } from "../../hooks/cart";

interface MainHeaderProps extends Props {}

export const MainHeader: React.FC<MainHeaderProps> = () => {

    const cart = useAppSelector((state) => state.cart)

    const linkList: Array<LinkContent> = [
        {
            title: 'hombre',
            link: '',
        },
        {
            title: 'mujer',
            link: ''
        },
        {
            title: 'blog',
            link: ''
        },
        {
            title: 'historia',
            link: ''
        },
        {
            title: 'tiendas',
            link: ''
        }
    ]

    return (
        <div className={`${styles.mainHeaderContainer}`}>
            <div className={`${styles.leftHeaderContent}`}>
                <MainIcon width={300} />
                <MainNavigationBar alignedTo="left" links={linkList}/>
            </div>
            <div className={`${styles.rightHeaderContent}`}>
                <InputBar placeholder="BUSCAR" />
                <PropmtLabel text="envio gratis para pedidos superiores a $300" />
                <MainNavigationBar alignedTo="right" links={[{link: '', title: `CARRITO ${cart.articles.length}`}]}/>
            </div>
        </div>
    )
}

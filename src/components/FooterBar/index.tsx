import { LinkContent } from "../../interfaces/Button"
import { Props } from "../../interfaces/Props"
import { FooterLinkList } from "../FooterLinkList"
import { InputBar } from "../InputBar"
import styles from './FooterBar.module.css'

interface FooterBarProps extends Props {}

export const FooterBar = (props: FooterBarProps) => {

    const linkList1: Array<LinkContent> = [
        {
            title: 'contáctenos',
            link: ''
        },
        {
            title: 'cambios y devoluciones',
            link: ''
        },
        {
            title: 'políticas del la tienda',
            link: ''
        },
        {
            title: 'políticas de datos',
            link: ''
        }
    ]

    const linkList2: Array<LinkContent> = [
        {
            title: 'mis pedidos',
            link: ''
        },
        {
            title: 'mis devoluciones',
            link: ''
        },
    ]

    const linkList3: Array<LinkContent> = [
        {
            title: 'tiendas',
            link: ''
        },
        {
            title: 'devoluciones',
            link: ''
        },
    ]

    return (
        <div className={`${styles.footerBarContainer}`}>
            <FooterLinkList titleSection="servicio al cliente" buttons={linkList1}></FooterLinkList>
            <FooterLinkList titleSection="mi cuenta" buttons={linkList2}></FooterLinkList>
            <FooterLinkList titleSection="recursos" buttons={linkList3}></FooterLinkList>
            <div className={`${styles.footerEmailConatner}`}>
                <span className={`${styles.footerEmailBarTitle}`}>newsletter</span>
                <span className={`${styles.footerEmailText}`}>Regístrate para ser el primero en recibir nuestras noticias</span>
                <InputBar placeholder="E-MAIL" onSubmit={async (value) => console.log(value) } />
            </div>
        </div>
    )
}

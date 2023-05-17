/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { Props } from "../../interfaces/Props"
import { FaHeart } from "react-icons/fa"
import styles from './HeartButton.module.css'

interface HeartButtonProps extends Props {
    absolute?: boolean;
    onChangeState?: (favorite: boolean) => Promise<void>
}

export const HeartButton: React.FC<HeartButtonProps> = (props: HeartButtonProps) => {

    const [favorite, setFavorite] = useState(false)

    const { absolute, onChangeState } = props;


    const handleOnChange = () => {
        setFavorite(!favorite)
    }

    useEffect(() => {
        (async function () {
            if (onChangeState) await onChangeState(favorite);
        })();
    }, [favorite])

    return (
        <FaHeart onClick={handleOnChange} size={30} className={`${absolute ? styles.calzadoCardHeartAbs : styles.calzadoCardHeartRel}`} color={`${ !favorite ?  '#C6c5ca' : 'black'}`} />
    )
}

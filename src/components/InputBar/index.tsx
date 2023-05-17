import React, { useState } from "react"
import { Props } from "../../interfaces/Props"
import styles from './InputBar.module.css'
import { FaChevronRight } from 'react-icons/fa';


interface InputBarProps extends Props {
    placeholder?: string;
    onSubmit?: (value: string) => Promise<void>
}

export const InputBar: React.FC<InputBarProps> = (props: InputBarProps) => {

    const { placeholder, onSubmit } = props;

    const [value, setValue] = useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSubmit = async () => {
        if (onSubmit) await onSubmit(value);
    }

    return (
        <div className={`${styles.searchBarContainer}`}>
            <input onChange={handleOnChange} className={`${styles.searchBarInput}`} placeholder={placeholder ?? 'BUSCAR'} type="text"/>
            <button className={`${styles.searchBarButton}`} onClick={handleSubmit}> <FaChevronRight/> </button>
        </div>
    )
}

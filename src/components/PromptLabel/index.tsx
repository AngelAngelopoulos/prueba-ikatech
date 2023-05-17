import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './PromptLabel.module.css'

interface PromptLabelProps extends Props {
    text: string;
}

export const PropmtLabel: React.FC<PromptLabelProps> = (props: PromptLabelProps) => {

    const { text } = props;

    return (
        <span className={`${styles.promptLabelText}`}>{ text }</span>
    )
}

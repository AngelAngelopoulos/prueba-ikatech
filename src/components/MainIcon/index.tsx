import React from "react";
import { Props } from "../../interfaces/Props";

interface MainIconProps extends Props {
    width?: number;
    height?: number;
}

export const MainIcon: React.FC<MainIconProps> = (props: MainIconProps) => {

    const { width, height } = props;

    return (
        <img width={width} height={height} src={`assets/logo.jpeg`} alt="logo.jpg" />
    )
}

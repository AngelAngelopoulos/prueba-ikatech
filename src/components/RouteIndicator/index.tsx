import React from "react";
import { Props } from "../../interfaces/Props";
import styles from './RouteIndicator.module.css'

interface RouteIndicatorProps extends Props {
    routes: Array<string>;
}

export const RouteIndicator: React.FC<RouteIndicatorProps> = (props: RouteIndicatorProps) => {

    const { routes } = props;

    return (
        <div className={`${styles.routeIndicatorText}`}>
            {
                routes && routes.map((route, key) => {
                    return <span key={key}> / { route }</span>
                })
            }
        </div>
    )
}

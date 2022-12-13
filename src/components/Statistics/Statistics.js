import React from "react";
import {Substance} from "../Substance/Substance";

import './Statistics.css'

export const Statistics = props => {
    return (
        <section className="Statistics">
            <div className="Statistics__container">
            <Substance name="Masa całkowita" value={props.totalMass}/>
            <Substance name="Tłuszcz" value={props.fatPercent}/>
            <Substance name="Cukier" value={props.sugarPercent}/>
            </div>
        </section>
    )
}
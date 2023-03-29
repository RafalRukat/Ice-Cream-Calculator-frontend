import React from "react";
import {Substance} from "../Substance/Substance";

import './Statistics.css'

export const Statistics = props => {
    return (
        <section className="Statistics">
            <div className="Statistics__container">
            <Substance name="Masa całkowita" value={props.totalMass} newTotal={props.totalMassNew}/>
            <Substance name="Tłuszcz" value={props.fatPercent}/>
            <Substance name="Cukier" value={props.sugarPercent}/>
            <Substance name="Nowa masa" value={props.totalMassNew}/>
            <Substance name="Nowy proc tłuszczu" value={props.newFatPercent}/>
            <Substance name="Nowy proc. cukru" value={props.newSugarPercent}/>
            </div>
        </section>
    )
}

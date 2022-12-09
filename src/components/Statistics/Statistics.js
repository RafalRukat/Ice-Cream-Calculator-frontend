import React from "react";
import {Substance} from "../Substance/Substance";

import './Statistics.css'

export const Statistics = props => {
    return (
        <section className="Statistics">
            <Substance name="Masa całkowita" value={props.totalMass}/>
            <Substance name="Tłuszcz" value={0}/>
            <Substance name="Cukier" value={0}/>
        </section>
    )
}
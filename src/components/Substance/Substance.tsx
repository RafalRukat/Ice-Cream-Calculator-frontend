import React, {useEffect} from "react";
import {useState} from "react";

import './Substance.css'

export const Substance = props => {
    return (
        <div className="Substance">
            <span className="Substance__name">{props.name}</span>
            <span className="Substance__value">{props.value} {props.name !== "Masa całkowita" ? "%" : "g"}</span>
        </div>
    )
};
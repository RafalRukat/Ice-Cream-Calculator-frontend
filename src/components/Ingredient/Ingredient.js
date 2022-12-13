import React, {useEffect, useState} from "react";

import './Ingredient.css'

export const Ingredient = props => {

    const [value, setValue] = useState(0);
    const [fat, setFat] = useState(0);
    const [sugar, setSugar] = useState(0);


    const handleMyValue = (e) => {
        e.preventDefault();
        const givenValue = Number(e.target.value);
         setValue(givenValue);
         setFat(givenValue * (props.fatPercentage / 100));
         setSugar(givenValue * (props.sugarPercentage / 100));
    }

    const changeEmptyBracketToZero = (e) => {
       if (e.target.value === "") {e.target.value = 0};
        }


    const resetValueIfZero = (e) => {
        if (e.target.value === "0") {e.target.value = ""};
    }

useEffect(() => {props.changeIngredientMass(props.index, value, fat, sugar)},[value])

    return (
        <div className="Ingredient">
            <span className="Ingredient__name">{props.name}</span>
            {/*<span>{value}</span>*/}
            <input
                className="Ingredient__value"
                type="number" value={value}
                onChange={handleMyValue}
                onClick={resetValueIfZero}
                onBlur={changeEmptyBracketToZero}>
            </input>
        </div>
    )
};
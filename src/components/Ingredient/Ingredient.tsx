import React, {ChangeEvent, useEffect, useState} from "react";

import './Ingredient.css'

export const Ingredient = props => {

    const [value, setValue] = useState(0);
    const [fat, setFat] = useState(0);
    const [sugar, setSugar] = useState(0);


    const handleMyValue = (e) => {
            const givenValue = Number(e.target.value);
                if (givenValue <= 0){setValue(0)} else {
                    setValue(givenValue)}
                    setFat(givenValue * (props.fatPercentage / 100));
                    setSugar(givenValue * (props.sugarPercentage / 100));
    };

    const changeEmptyBracketToZero = (e) => {
        if (e.target.value === "") {e.target.value = 0};
    };

    const resetValueIfZero = (e) => {
        if (e.target.value === "0") {e.target.value = ""};
    };

useEffect(() => {
    props.handleMaps(props.name, value, fat, sugar);
    },[value]);


    return (
        <div className="Ingredient">
            <span className="Ingredient__name">{props.name}</span>
            <input
                className="Ingredient__value"
                type="number"
                value={value}
                onChange={handleMyValue}
                onClick={resetValueIfZero}
                onKeyUp={resetValueIfZero}
                onBlur={changeEmptyBracketToZero}
            >
            </input>
        </div>
    )
};

import React, {useEffect, useState} from 'react';
import {Product} from '../Product/Product'
import {Statistics} from '../Statistics/Statistics'
import {ingredientsTable} from "../../data/ingredientsList";

import './App.css';
import {LogPanel} from "../LogPanel/LogPanel";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";

export const App = () => {

const [ingredientsList, setIngredientsList] = useState(ingredientsTable)
  const [totalMass, setTotalMass] = useState(0);
  const [fatPercent,setFatPercent] = useState(0);
  const [sugarPercent, setSugarPercent] = useState(0);

    const handleTotalMass = () => {
        let massOfAll = [];
        let fatOfAll = [];
        let sugarOfAll = [];
        ingredientsList.forEach((ingredient) =>  {
            massOfAll.push(ingredient.mass);
            fatOfAll.push(ingredient.fat);
            sugarOfAll.push(ingredient.sugar);
        });
        const totalMass = massOfAll.reduce((prev, curr) => {return prev + curr});
        const totalFat = fatOfAll.reduce((prev, curr) => {return prev + curr});
        const totalSugar = sugarOfAll.reduce((prev, curr) => {return prev + curr});

        setTotalMass(totalMass);
        if (totalMass){
            setFatPercent((totalFat * 100 / totalMass).toFixed(2));
            setSugarPercent((totalSugar * 100 / totalMass).toFixed(2));
        } else {
            setFatPercent(0);
            setSugarPercent(0);
        };
    }
    const changeIngredientMass = (index, mass, fat, sugar) => {
        const newTable = [...ingredientsList]
        newTable[index].mass = mass;
        newTable[index].fat = fat;
        newTable[index].sugar = sugar;
        setIngredientsList(newTable);
    };

    useEffect(handleTotalMass, [ingredientsList]);

    return (
        <div className="App">
            <Product ingredientsList={ingredientsList} changeIngredientMass={changeIngredientMass} />
            <Statistics totalMass={totalMass} fatPercent={fatPercent} sugarPercent={sugarPercent}/>
            {/*<LogPanel/>*/}
        </div>
)
};
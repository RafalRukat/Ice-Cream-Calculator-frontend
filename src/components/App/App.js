import React, {useEffect, useState} from 'react';
import {Product} from '../Product/Product'
import {Statistics} from '../Statistics/Statistics'
import {ingredientsTable} from "../../data/ingredientsList";

import './App.css';

export const App = () => {

const [ingredientsList, setIngredientsList] = useState(ingredientsTable)
  const [totalMass, setTotalMass] = useState(0);
  const [fatPercent,setFatPercent] = useState(0);
  const [sugarPercent, setSugarPercent] = useState(0);

    const handleTotalMass = () => {
        let massOfEachIngredient = [];
        ingredientsList.forEach((ingredient) =>  massOfEachIngredient.push(ingredient.mass));
        const totalMass = massOfEachIngredient.reduce((prev, curr) => {return prev + curr})
        setTotalMass(totalMass);
    }

    const changeIngredientMass = (index, newMass) => {
        const newTable = [...ingredientsList]
        newTable[index].mass = newMass;
        setIngredientsList(newTable);
        console.log(`nowa tablica to ${newTable}`)
    };

    useEffect(handleTotalMass, [ingredientsList])

    useEffect(() => {console.log(`Masa całkowita produktu to ${totalMass}`)}, [totalMass]);


    return (
        <div className="App">
            <Product ingredientsList={ingredientsList} changeIngredientMass={changeIngredientMass} />
            <Statistics totalMass={totalMass}/>
        </div>
)
};
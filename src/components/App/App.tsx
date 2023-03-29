import React, {useEffect, useState} from 'react';
import {Product} from '../Product/Product'
import {Statistics} from '../Statistics/Statistics'
import {defaultIngredientsList} from "../../data/defaultIngredientsList";

import './App.css';

export const App = () => {

    const defaultMassOfEach = new Map();
    const defaultFatOfEach = new Map();
    const defaultSugarOfEach = new Map();

    defaultIngredientsList.map(({name, mass, fat, sugar}) => {
        defaultMassOfEach.set(name, mass);
        defaultFatOfEach.set(name, fat);
        defaultSugarOfEach.set(name, sugar);
    });

    const [totalMass, setTotalMass] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalSugar, setTotalSugar] = useState(0)
    const [ingredientsList, setIngredientsList] = useState(defaultIngredientsList);
    const [massOfEach, setMassOfEach] = useState(defaultMassOfEach);
    const [fatOfEach, setFatOfEach] = useState(defaultFatOfEach);
    const [sugarOfEach, setSugarOfEach] = useState(defaultSugarOfEach);

    useEffect(()=> {
        setTotalMass([...massOfEach.values()].reduce((prev, curr) => prev + curr, 0));
        setTotalFat([...fatOfEach.values()].reduce((prev, curr) => prev + curr, 0));
        setTotalSugar([...sugarOfEach.values()].reduce((prev, curr) => prev + curr, 0));
        console.log(totalMass, massOfEach);
    }, [massOfEach]);

    const handleMaps = (name: string, mass: number, fat: number, sugar:number) => {
        setMassOfEach(prevMap => new Map(prevMap).set(name, mass));
        setFatOfEach(prevMap => new Map(prevMap).set(name, fat));
        setSugarOfEach(prevMap => new Map(prevMap).set(name, sugar));
        //    todo w drugiej kolejności pomyśl, co zrobić, żeby obsługiwać tłuszcz i cukier tylko wtedy, gdy się zmieniają
    }

    const addIngredient = (newIngredientName, fatPercent, sugarPercent) => {
        const newIngredient = {
            name: newIngredientName,
            fatPercentage: fatPercent,
            sugarPercentage: sugarPercent,
            fat: 0,
            sugar: 0,
            mass: 0,
        };
        setIngredientsList([...ingredientsList, newIngredient]);
    }

    return (
        <div className="App">
            <Product handleMaps={handleMaps} ingredientsList={ingredientsList} addIngredient={addIngredient} />
            <Statistics totalMass={totalMass} massOfEach={massOfEach} totalMassNew={totalMass} newFatPercent={!totalFat ? 0 : Math.floor(totalFat / 100 * totalMass)} newSugarPercent={!totalSugar ? 0 : Math.round(totalSugar / 100 * totalMass)}/>
        </div>
)
};

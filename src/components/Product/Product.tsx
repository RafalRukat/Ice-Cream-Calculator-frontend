import React, {useEffect, useState} from 'react';
import {Ingredient} from "../Ingredient/Ingredient";
import {AddIngredientBtn} from "../AddIngredientBtn/AddIngredientBtn";
import {NewIngredientPropsTable} from "../AddIngredientBtn/NewIngredientPropsTable";

import './Product.css'

export const Product = props => {

        return (
            <section className="Product">
                {props.ingredientsList.map((ingredient, index) => {
                    return <Ingredient
                        key={ingredient.name}
                        index={index}
                        name={ingredient.name}
                        fatPercentage={ingredient.fatPercentage}
                        sugarPercentage={ingredient.sugarPercentage}
                        mass={ingredient.mass}
                        handleMaps = {props.handleMaps}
                    />})}
                <AddIngredientBtn addIngredient={props.addIngredient}/>
            </section>
        )
    };

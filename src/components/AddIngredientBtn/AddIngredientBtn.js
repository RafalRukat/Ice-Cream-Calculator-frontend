import React, {useState} from "react";
import {NewIngredientPropsTable} from "./NewIngredientPropsTable";
import './AddIngredientBtn.css'


export const AddIngredientBtn = props => {

    const [newIngredientPanel, setNewIngredientPanel] = useState(false)

    const handlePanel = () => {
        setNewIngredientPanel(!newIngredientPanel);
    };

    return (
        <>
            <div className="Ingredient">
                <span className="Ingredient__name">Dodaj składnik</span>
                <span className="Ingredient__name Ingredient__add" onClick={handlePanel}>+</span>
            </div>
            <NewIngredientPropsTable addIngredient={props.addIngredient} newIngredientPanel={newIngredientPanel} handlePanel={handlePanel}/>
        </>
    )
}
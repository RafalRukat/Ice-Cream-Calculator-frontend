import React, {useState} from "react";
import './AddIngredientBtn.css'

export const NewIngredientPropsTable = props => {

    const [name, setName] = useState("");
    const [fatPercent, setFatPercent] = useState(0);
    const [sugarPercent, setSugarPercent] = useState(0);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleFatPercent = (e) => {
        setFatPercent(Number(e.target.value));
    }
    const handleSugarPercent = (e) => {
        setSugarPercent(Number(e.target.value));
    }

    const saveNewIngredient = (event) => {
        event.preventDefault();
        console.log(event.defaultPrevented);

        props.addIngredient(name, fatPercent, sugarPercent);
        props.handlePanel();
    }

    const resetValueIfZero = (e) => {
        if (e.target.value === "0") {e.target.value = ""};
    };

    return (
        props.newIngredientPanel ?
        <form className="NewIngredientPropsTable">
            <label className="NewIngredientPropsTable__label" htmlFor="name">Nazwa składnika: </label>
            <input className="NewIngredientPropsTable__input" type="text" id="name" value={name} onChange={handleName}/>
            <label className="NewIngredientPropsTable__label" htmlFor="fat">Procentowa zawartość tłuszczu: </label>
            <input className="NewIngredientPropsTable__input" type="number" id={"fat"} value={fatPercent} onChange={handleFatPercent} onKeyUp={resetValueIfZero} onClick={resetValueIfZero}
            />
            <label className="NewIngredientPropsTable__label" htmlFor="sugar">Procentowa zawartość cukru: </label>
            <input className="NewIngredientPropsTable__input" type="number" id={"sugar"} value={sugarPercent} onChange={handleSugarPercent} onKeyUp={resetValueIfZero} onClick={resetValueIfZero}/>
            <button className="NewIngredientPropsTable__btn" onClick={saveNewIngredient}>Zapisz</button>
</form>
            : null
    )
}


// name: "Mleko 3,2%", fatPercentage: 3.2, sugarPercentage: 0, mass: 0,
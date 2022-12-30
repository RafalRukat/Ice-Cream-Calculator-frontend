import React, {useState} from "react";
import "./LogPanel.css"

export const LogPanel = props => {

    const [loginIsValid, setLoginIsValid] = useState(false);

    // const loginValidation = (e) => {
    //     const value = e.target.value;
    //     if (value.includes('@') && value.includes('.') && ((value.indexOf('@') + 1) < value.lastIndexOf('.')) && value.lastIndexOf('.') < (value.length - 1)) {
    //         setLoginIsValid(true)
    //     } else {
    //         setLoginIsValid(false)
    //     }

        function logUser(e) {
            e.preventDefault();

            if (loginIsValid) {
                return (
                    <span className="Log-panel__confirmation">Zalogowano!</span>
                )
            } else {
                return (
                    <span className="Log-panel__confirmation--invalid">Niepoprawne logowanie!</span>

                )
            }
        }

        return (
            <form className="Log-panel" onSubmit={logUser}>
                <label className="Log-panel__label" htmlFor="email">Adres e-mail</label>
                <input className="Log-panel__input" type="text" id="email" name="email" />
                <label className="Log-panel__label" htmlFor="password">Hasło</label>
                <input className="Log-panel__input" type="password" id="password" name="password"/>
                <button className="Log-panel__button">Zaloguj się</button>
            </form>
        );
}
import "../styles/login.css"
import React , { useState }from "react";
import { Navigate } from "react-router-dom";

export const Login = () => {

    const [loginOk, setLoginOk] = useState(false);

    const handleSubmitLogin = () => {
        if(true) {
            setLoginOk(true)
        }
    }

    return (
        <>
            <div className="background">

                <section className="login__section">
                    <h1>NotApi</h1>
                    <form className="login__section__form">
                        <input type="text" placeholder="Usuario" className="login__user__input"></input>
                        <input type="password"placeholder="Contraseña" className="login__pass__input"></input>
                        <input type="submit" className="login__button" onClick={handleSubmitLogin}></input>
                    </form>
                </section>
            </div>
            <div>
                {loginOk && <Navigate to="/home"></Navigate>}
            </div>
        </>
    )
}
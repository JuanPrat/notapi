import "../styles/login.css"

export const Login = () => {

    return (
        <>
            <div className="background">

                <section className="login__section">
                    <h1>NotApi</h1>
                    <form className="login__section__form">
                        <input type="text" placeholder="Usuario" className="login__user__input"></input>
                        <input type="password"placeholder="Contraseña" className="login__pass__input"></input>
                        <input type="submit" className="login__button"></input>
                    </form>
                </section>
            </div>
        </>
    )
}
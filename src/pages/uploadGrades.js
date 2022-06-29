import * as React from "react";
import { Navbar } from "../components/stateless/navbar";
import '../styles/uploadGrades.css'

export const UploadPage = () => {

    return (
        <div className="uploadgrades__landing">
            <Navbar></Navbar>
            <div className="uploadgrades__section__form">
                <h1>Subir Notas</h1>
                <form>
                    <input type="text" placeholder="Estudiante"></input>
                    <input type="text" placeholder="Institucion"></input>
                    <input type="number" placeholder="nota"></input>
                    <button>Enviar</button>
                </form>
            </div>
        </div>

    )
}
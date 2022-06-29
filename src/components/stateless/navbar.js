import "../../styles/navbar.css"
import { Navigate } from "react-router-dom";
import React, { useState } from "react";

export const Navbar = () => {

    const [seeGrades, setSeeGrades] = useState(false);
    const [uploadGrades, setUploadGrades] = useState(false);
    const [seeHome, setSeeHome] = useState(false);

    const handleActionNavButton = (event) => {
        if (event.target.id == "uploadGrades" && !uploadGrades) {
            debugger
            setUploadGrades(true)
            setSeeGrades(false)
            setSeeHome(false)
        }
        else if (event.target.id == "seeGrades" && !seeGrades) {
            debugger
            setSeeGrades(true)
            setUploadGrades(false)
            setSeeHome(false)
        }
        else if (event.target.id == "home" && !seeHome) {
            debugger
            setSeeHome(true)
            setUploadGrades(false)
            setSeeGrades(false)
        }
    }

    return (
        <nav>
            <div className="nav-div">
                <button
                    className="nav__action__button"
                    id="uploadGrades"
                    onClick={e => handleActionNavButton(e)}>Subir Notas
                </button>
                <button className="logo" onClick={e => handleActionNavButton(e)} id="home">
                    <h3 id="home" onClick={e => handleActionNavButton(e)}>NotApi</h3>
                </button>
                <button
                    className="nav__action__button"
                    id="seeGrades"
                    onClick={e => handleActionNavButton(e)}>Ver Notas
                </button>
                <div>
                    {uploadGrades && <Navigate to="/uploadGrades"></Navigate>}
                    {seeGrades && <Navigate to="/grades"></Navigate>}
                    {seeHome && <Navigate to="/"></Navigate>}
                </div>
            </div>
        </nav>
    )

}
import "../../styles/navbar.css"
import { Navigate } from "react-router-dom";
import React , { useState } from "react";

export const Navbar = () => {

    const [seeGrades, setSeeGrades] = useState(false);
    const [uploadGrades, setUploadGrades] = useState(false);

    const handleActionNavButton = (event) => {
        debugger
        if(event.target.id == "uploadGrades") {
            setUploadGrades(true)
            setSeeGrades(false)
        }
        else if(event.target.id == "seeGrades") {
            setSeeGrades(true)
            setUploadGrades(false)
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
                <div className="logo">
                    <p>NotApi</p>
                </div>
                <button 
                    className="nav__action__button"
                    id="seeGrades"
                    onClick={e => handleActionNavButton(e)}>Ver Notas
                </button>
                <div>
                    {uploadGrades && <Navigate to="/uploadGrades"></Navigate>}
                    {seeGrades && <Navigate to="/grades"></Navigate>}
                </div>
            </div>
        </nav>
    )

}
import { Navbar } from '../components/stateless/navbar';
import "../styles/home.css"
import * as React from "react";
export const Home = (props) => {

    return (
        <>
            
            <section className='home__central__section'>
            <Navbar></Navbar>
                <h1>
                    Bienvenidos a NotApi
                </h1>
            </section>


        </>
    )
}
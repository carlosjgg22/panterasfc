import React, { useState } from "react";
import "../../styles/stylesheet.css"; 

const ObjetivosView = () => {
    const [hola, setHola] = useState('');
    const [cargando,] = useState(false);


    const ejemploFuncion = () => {
        console.log(hola)
    };

    return (
        <>
            <div className="mainpage">
                {cargando ? (
                    <span className="loader position-absolute start-50 top-50 mt-3"></span>
                ) : (
                    <div className="container">
                        <h1>OBJETIVOS VIEW</h1>
                        <h3>Conseguir Autos y Gente con Dinero</h3>
                        <input
                            value={hola}
                            onChange={(e) => { setHola(e.target.value) }}
                        ></input>
                        <button
                            onClick={ejemploFuncion}>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
};
export default ObjetivosView;
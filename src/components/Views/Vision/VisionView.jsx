import React, { useState } from "react";
import "../../styles/stylesheet.css"; 

const VisionView = () => {
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
                        <h1>VISION VIEW</h1>
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
export default VisionView;
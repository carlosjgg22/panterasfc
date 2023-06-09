import Nav from "./Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";
import "../components/styles/stylesheet.css";

const Navigation = () => {
    const [cargando,] = useState(false);

    return (
        <>
            {cargando ? (
                <span className="loader position-absolute start-50 top-50 mt-3"></span>
            ) : (
                <>
                    <div className="navigation">
                        <div className="profile">
                            <img src={logo} alt="profile" className="profile-img" />
                            <p>Binvenidos a Panteras FC</p>
                        </div>
                        <div className="navigation-links">
                            <Link to="/" className="text-decoration-none link-light"><Nav title="Inicio" /></Link>
                            <Link to="/mision" className="text-decoration-none link-light"><Nav title="Mision" /></Link>
                            <Link to="/vision" className="text-decoration-none link-light"><Nav title="Vision" /></Link>
                            <Link to="/objetivos" className="text-decoration-none link-light"><Nav title="Objetivos" /></Link>
                            <Link to="/plantilla" className="text-decoration-none link-light"><Nav title="Plantilla" /> </Link>
                            <Link to="/contacto" className="text-decoration-none link-light"><Nav title="Contacto" /> </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navigation;
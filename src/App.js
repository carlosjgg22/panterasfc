import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from './components/Views/Home/HomeView';
import MisionView from './components/Views/Mision/MisionView';
import VisionView from './components/Views/Vision/VisionView';
import ObjetivosView from './components/Views/Objetivos/ObjetivosView';
import PlantillaView from './components/Views/Plantilla/PlantillaView';
import ContactoView from './components/Views/Contacto/ContactoView';
import Navigation from './Navigation/Navigation';
import Footer from './Navigation/Footer';

function App() {

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="mision" element={<MisionView />} />
                <Route path="vision" element={<VisionView />} />
                <Route path="objetivos" element={<ObjetivosView />} />
                <Route path="plantilla" element={<PlantillaView />} />
                <Route path="contacto" element={<ContactoView />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;


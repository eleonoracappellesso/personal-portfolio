import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Hook per accedere alla location corrente
import { scroller } from 'react-scroll'; // Utility per effettuare lo scroll animato verso un elemento

// Importazione dei componenti della homepage
import Jumbotron from "../components/Jumbotron";
import ChiSono from "../components/ChiSono";
import Progetti from "../components/Progetti";
import Contatti from "../components/Contatti";

export default function Homepage() {
    const location = useLocation(); // Ottiene la location attuale dalla libreria React Router

    useEffect(() => {
        // Controlla se c'è uno stato 'scrollTo' nella location
        if (location.state && location.state.scrollTo) {
            const element = location.state.scrollTo;
            
            // Usa un piccolo timeout per dare al DOM il tempo di renderizzare
            setTimeout(() => {
                scroller.scrollTo(element, {
                    duration: 800, // Durata animazione in ms
                    delay: 0, // Nessun ritardo
                    smooth: 'easeInOutQuart', // Tipo di animazione
                    offset: -70 // Offset per tenere conto dell'altezza dell'header
                });
            }, 100);
        }
    }, [location]); // Esegui questo effetto ogni volta che la location cambia

    return (
        <>
        {/* Componente iniziale a tutta larghezza */}
            <Jumbotron />
            <div className="container">
                {/* Sezioni della homepage */}
                <ChiSono />
                <Progetti />
                <Contatti />
            </div>
        </>
    );
}
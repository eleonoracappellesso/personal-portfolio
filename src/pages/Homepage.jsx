import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Jumbotron from "../components/Jumbotron";
import ChiSono from "../components/ChiSono";
import Progetti from "../components/Progetti";
import Contatti from "../components/Contatti";

export default function Homepage() {
    const location = useLocation();

    useEffect(() => {
        // Controlla se c'è uno stato 'scrollTo' nella location
        if (location.state && location.state.scrollTo) {
            const element = location.state.scrollTo;
            
            // Usa un piccolo timeout per dare al DOM il tempo di renderizzare
            setTimeout(() => {
                scroller.scrollTo(element, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                    offset: -70 // Il tuo offset dell'header
                });
            }, 100);
        }
    }, [location]); // Esegui questo effetto ogni volta che la location cambia

    return (
        <>
            <Jumbotron />
            <div className="container">
                <ChiSono />
                <Progetti />
                <Contatti />
            </div>
        </>
    );
}
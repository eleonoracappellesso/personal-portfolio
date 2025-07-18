import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion"; // libreria animazioni
import Particles from "react-tsparticles"; // componente per particelle animate
import { loadSlim } from "tsparticles-slim"; // Versione ottimizzata del motore particellare
import particlesConfig from "../particles-config"; // Configuratore custom per le particelle
import styles from "./Jumbotron.module.css"; // CSS module per styling

export default function Jumbotron() {
    // testo simulato da "macchina da scrivere"
    const fullText = `if (Success()) {\n  celebrate();\n} else {\n  tryAgain();\n}\nbeAwesome();`;

    const [typedText, setTypedText] = useState(""); // stato del testo visualizzato in tempo reale
    const [currentIndex, setCurrentIndex] = useState(0); // indice del carattere attuale

    // Funzione per inizializzare il motore delle particelle
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // Carica la versione slim
    }, []);

    // Effetto "typing" per la scrittura automatica (1 carattere per volta)
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => prev + fullText[currentIndex]); // aggiunge il carattere corrente
                setCurrentIndex(prev => prev + 1); // passa al successivo
            }, 100); // ritardo in ms tra ogni carattere
            return () => clearTimeout(timeout); // pulisce il timeout se il componente viene aggiornato
        }
    }, [currentIndex, fullText]); // l'effetto si riattiva ogni volta che l'indice cambia

    return (
        <section className={styles.jumbotron}>
            {/* Componente Particelle per lo sfondo animato */}
            <Particles
                id="tsparticles"
                init={particlesInit} // inizializzazione del motore
                options={particlesConfig}
                className={styles.particles}
            />

            {/* Titolo principale con animazione di entrata */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }} // parte dall'alto e trasparente
                animate={{ opacity: 1, y: 0 }} // entra e diventa visibile
                transition={{ duration: 1 }} // durata animazione
            >
                Ciao, sono <span>Eleonora</span>
            </motion.h1>

            {/* Sottotitolo con leggera animazione */}
            <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }} // ritardata per effetto cascata
            >
                Junior Web Developer
            </motion.h4>

            {/* Finestra di codice con effetto typing */}
            <motion.div
                className={styles.codeWindow}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
            >
                {/* Header della "finestra" con tre dot */}
                <div className={styles.windowHeader}>
                    <div className={styles.dot} style={{ background: '#ff5f56' }}></div>
                    <div className={styles.dot} style={{ background: '#ffbd2e' }}></div>
                    <div className={styles.dot} style={{ background: '#27c93f' }}></div>
                </div>

                {/* Area di scrittura con il testo animato e il cursore lampeggiante */}
                <p className={styles.typing}>
                    {typedText}
                    <span className={styles.cursor}>|</span>
                </p>
            </motion.div>

            {/* Indicatore per invitare allo scroll */}
            <a href="#chi-sono" className={styles.scrollDownIndicator}>
                <div className={styles.arrow}></div>
            </a>
        </section>
    );
}

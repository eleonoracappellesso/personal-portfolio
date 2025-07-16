import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "../particles-config";
import styles from "./Jumbotron.module.css";

export default function Jumbotron() {
    const fullText = `if (Success()) {\n  celebrate();\n} else {\n  tryAgain();\n}\nbeAwesome();`;
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    // Funzione per inizializzare il motore delle particelle
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    // Effetto per la scrittura automatica
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    return (
        <section className={styles.jumbotron}>
            {/* Componente Particelle per lo sfondo animato */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
                className={styles.particles}
            />

            {/* Contenuto del Jumbotron */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Ciao, sono <span>Eleonora</span>
            </motion.h1>

            <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                Junior Web Developer
            </motion.h4>

            {/* Finestra di codice animata */}
            <motion.div
                className={styles.codeWindow}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.5 }}
            >
                <div className={styles.windowHeader}>
                    <div className={styles.dot} style={{ background: '#ff5f56' }}></div>
                    <div className={styles.dot} style={{ background: '#ffbd2e' }}></div>
                    <div className={styles.dot} style={{ background: '#27c93f' }}></div>
                </div>
                <p className={styles.typing}>
                    {typedText}
                    <span className={styles.cursor}>|</span>
                </p>
            </motion.div>

            {/* Indicatore per invitare allo scroll */}
            <a href="#chi-sono-section" className={styles.scrollDownIndicator}>
                <div className={styles.arrow}></div>
            </a>
        </section>
    );
}

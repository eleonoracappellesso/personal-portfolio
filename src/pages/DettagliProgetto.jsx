import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { progetti } from "../data/projects"; // Importo i dati
import { IoArrowBack } from "react-icons/io5";
import styles from "./DettagliProgetto.module.css";

export default function DettagliProgetto() {
    const { slug } = useParams(); // Legge lo 'slug' dalla URL
    const navigate = useNavigate();

    const progetto = progetti.find(p => p.slug === slug);

    // Effetto per scrollare in cima alla pagina quando si naviga
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Se il progetto non esiste, torna alla homepage
    if (!progetto) {
        useEffect(() => {
            navigate('/');
        }, [navigate]);
        return null; // Renderizza nulla mentre reindirizza
    }

    // Filtra per trovare altri progetti da suggerire
    const suggeriti = progetti.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            <Link to="/#progetti" className={styles.backButton}>
                <IoArrowBack />
                Indietro            
            </Link>

            <div className={styles.header}>
                <h1 className={styles.title}>{progetto.titolo}</h1>
                <span className={styles.typeLabel}>{progetto.type}</span>
            </div>

            <motion.img
                src={progetto.immagine}
                alt={progetto.titolo}
                className={styles.mainImage}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            />

            <div className={styles.content}>
                <p className={styles.description}>{progetto.descrizione}</p>

                <div className={styles.techSection}>
                    <h3>Tecnologie Utilizzate</h3>
                    <div className={styles.techList}>
                        {progetto.technologies.map((tech, index) => (
                            <span key={index} className={styles.techTag}>{tech}</span>
                        ))}
                    </div>
                </div>

                {progetto.link && (
                    <a href={progetto.link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        Visita il Sito Live
                    </a>
                )}
            </div>

            <div className={styles.suggerimentiSection}>
                <h2>Altri Progetti</h2>
                <div className={styles.suggerimentiGrid}>
                    {suggeriti.map(sugg => (
                        <Link to={`/progetti/${sugg.slug}`} key={sugg.id} className={styles.suggerimentoCard}>
                            <img src={sugg.immagine} alt={sugg.titolo} />
                            <h3>{sugg.titolo}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
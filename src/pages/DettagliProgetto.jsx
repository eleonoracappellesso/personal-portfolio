import { useParams, Link, useNavigate } from "react-router-dom"; // Hook per URL e navigazione
import { useEffect } from "react";
import { motion } from "framer-motion"; // Per animazioni fluide
import { progetti } from "../data/projects"; // Importo i dati
import { IoArrowBack } from "react-icons/io5"; // Icona per pulsante 'indietro'
import styles from "./DettagliProgetto.module.css"; // css module per styling locale

export default function DettagliProgetto() {
    const { slug } = useParams(); // Legge lo 'slug' dalla URL
    const navigate = useNavigate(); // Hook per navigare programmaticamente

    const progetto = progetti.find(p => p.slug === slug); // Trova il progetto corrispondente allo slug

    // Effetto per scrollare in cima alla pagina quando si naviga
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Se il progetto non esiste, reindirizza alla homepage
    if (!progetto) {
        useEffect(() => {
            navigate('/'); // Naviga alla home
        }, [navigate]);
        return null; // Non renderizza nulla mentre effettua il redirect
    }

    // Filtra per trovare altri progetti da suggerire (escludento quello attuale)
    const suggeriti = progetti.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0 }} // stato iniziale dell'animazione
            animate={{ opacity: 1 }} // stato finale
            transition={{ duration: 0.5 }} // durata dell'animazione
        >

            {/* Pulsante per tornare indietro */}
            <Link to="/" state={{scrollTo:'progetti'}} className={styles.backButton}>
                <IoArrowBack />
                Tutti i ptogetti            
            </Link>

            {/* Header con titolo e tipo del progetto */}
            <div className={styles.header}>
                <h1 className={styles.title}>{progetto.titolo}</h1>
                <span className={styles.typeLabel}>{progetto.type}</span>
            </div>

            {/* Immagine principale con animazione */}
            <motion.img
                src={progetto.immagine}
                alt={progetto.titolo}
                className={styles.mainImage}
                initial={{ y: 20, opacity: 0 }} // Parte bassa e trasparente
                animate={{ y: 0, opacity: 1 }} // sale e diventa visibile
                transition={{ delay: 0.2, duration: 0.5 }}
            />

            {/* Contenuto descrittivo del progetto */}
            <div className={styles.content}>
                <p className={styles.description}>{progetto.descrizione}</p>

                {/* Sezione delle tecnologie utilizzate */}
                <div className={styles.techSection}>
                    <h3>Tecnologie Utilizzate</h3>
                    <div className={styles.techList}>
                        {progetto.technologies.map((tech, index) => (
                            <span key={index} className={styles.techTag}>{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Link al sito live del progetto, se presente */}
                {progetto.link && (
                    <a href={progetto.link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        Visita il Sito Live
                    </a>
                )}
            </div>

            {/* Sezione con suggerimenti di altri progetti */}
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
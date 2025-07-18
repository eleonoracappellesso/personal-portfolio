import { motion } from "framer-motion"; // per animazioni su scroll
import { Link } from "react-router-dom"; // per navigazione dinamica tra pagine
import { progetti } from "../data/projects"; // importo i dati 
import styles from './Progetti.module.css'; // CSS module per lo styling

export default function Progetti() {
    return (
        // sezione ID per l'ancoraggio via scroll
        <section id="progetti" className={styles.container}>
            <h2 className={styles.title}>I miei progetti</h2>
            
            {/* Contenitore dei progetti */}
            <div className={styles.projects}>
                {progetti.map((progetto, index) => (
                    // Link verso la pagina dettagliata del progetto
                    <Link to={`/progetti/${progetto.slug}`} key={progetto.id} className={styles.projectLink}>
                        
                        {/* Card animata con framer-motion */}
                        <motion.div
                            className={styles.project}
                            initial={{ opacity: 0, 
                                x: index % 2 === 0 ? 100 : -100 // alterna la direzionedell'entrata (dx/sx)
                            }}
                            whileInView={{ opacity: 1, x: 0 }} // animazione quando entra nel viewport
                            transition={{ duration: 0.8, delay: 0.2 }} // durata e ritardo dell'animazione
                            viewport={{ once: false, amount: 0.3 }} // ri-anima se rientra nel viewport al 30%
                        >
                            {/* Immagine di anteprima del progetto */}
                            <img
                                src={progetto.immagine}
                                alt={progetto.titolo}
                                className={styles.image}
                            />

                            {/* Testo descrittivo */}
                            <div className={styles.text}>
                                <h3>{progetto.titolo}</h3>
                                <p className={styles.shortDesc}>
                                    {/* mostra solo i primi 150 caratteri */}
                                    {progetto.descrizione.substring(0, 150)}...
                                </p>
                                <span className={styles.cta}>Scopri di più →</span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
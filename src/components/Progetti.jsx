import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { progetti } from "../data/projects";
import styles from './Progetti.module.css';

export default function Progetti() {
    return (
        <section id="progetti" className={styles.container}>
            <h2 className={styles.title}>I miei progetti</h2>
            <div className={styles.projects}>
                {progetti.map((progetto, index) => (
                    <Link to={`/progetti/${progetto.slug}`} key={progetto.id} className={styles.projectLink}>
                        <motion.div
                            className={styles.project}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <img
                                src={progetto.immagine}
                                alt={progetto.titolo}
                                className={styles.image}
                            />
                            <div className={styles.text}>
                                <h3>{progetto.titolo}</h3>
                                <p className={styles.shortDesc}>
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
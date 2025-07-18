import { motion } from "framer-motion"; // per le animazioni
import styles from "./Tecnologie.module.css"; // CSS module per lo styling

// Array tecnologie usate con nome e immagine associata
const technologies = [
    { name: "HTML", img: "/technologies/html.png" },
    { name: "CSS", img: "/technologies/css.png" },
    { name: "JavaScript", img: "/technologies/javascript.png" },
    { name: "React", img: "/technologies/react.png" },
    { name: "Node.js", img: "/technologies/node.png" },
    { name: "Express.js", img: "/technologies/express.png" },
    { name: "Typescript", img: "/technologies/typescript.png" },
    { name: "REST API", img: "/technologies/rest-api.png" },
    { name: "MySQL", img: "/technologies/mysql.png" },
    { name: "Bootstrap", img: "/technologies/bootstrap.png" },
    { name: "Tailwind", img: "/technologies/tailwind.png" },
    { name: "Figma", img: "/technologies/figma.png" },
];

// Definisco le varianti di animazione per il contenitore
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Applica un ritardo di 0.1s tra l'animazione di ogni card
        },
    },
};

// Varianti di animazione per ogni card
const cardVariants = {
    hidden: { y: 20, opacity: 0 }, // Stato iniziale: 20px più in basso e invisibile
    visible: { y: 0, opacity: 1 }, // Stato finale: posizione originale e visibile
};

export default function Tecnologie() {
    return (
        <section id="tecnologie" className={styles.container}>
            {/* Titolo delle sezioni */}
            <h4>Le <span>tecnologie</span> che uso attualmente sono:</h4>

            {/* Griglia animata contenente tutte le card */}
            <motion.div
                className={styles.grid}
                variants={containerVariants} // applica animazione collettiva
                initial="hidden" // stato iniziale invisibile
                whileInView="visible" // L'animazione parte quando la sezione è visibile nel viewport
                viewport={{ once: true, amount: 0.2 }} // L'animazione si esegue una sola volta
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        className={styles.cardWrapper}
                        variants={cardVariants} // Applica l'animazione di entrata
                        whileHover={{ scale: 1.1, y: -10 }} // Effetto al passaggio del mouse
                        transition={{ type: "spring", stiffness: 300, damping: 15 }} // Transizione elastica
                    >
                        <div className={styles.card}>
                            {/* icona della tecnologia */}
                            <img src={tech.img} alt={tech.name} className={styles.icon} />
                            {/* nome della tecnologia */}
                            <p className={styles.techName}>{tech.name}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
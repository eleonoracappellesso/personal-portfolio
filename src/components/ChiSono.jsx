import { motion } from "framer-motion";
import Tecnologie from "./Tecnologie";
import styles from "./ChiSono.module.css";

export default function ChiSono() {
    return (
        <section id="chi-sono" className={styles.container}>
            <h2>Chi Sono</h2>

            <motion.div 
                className={styles.textContainer}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >

                <p>
                    Il mio percorso verso lo sviluppo web non è stato lineare, ma è proprio questo che definisce il mio approccio. Una laurea in Relazioni Internazionali mi ha insegnato a decifrare sistemi complessi e a comunicare con chiarezza: due abilità che oggi applico ogni giorno, non più tra dinamiche globali, ma tra componenti React e API.
                </p>
                <p>
                    La curiosità per il mondo digitale si è trasformata in una professione dopo un percorso intensivo in <span className={styles.highlight}>Full-Stack Development</span>. 
                    Oggi, ciò che mi guida è la possibilità di risolvere problemi concreti attraverso il codice, trasformando la logica in esperienze utente che siano non solo funzionali, ma anche intuitive e accessibili.
                </p>
                <p>
                    Ho trovato nel <span className={styles.highlight}>frontend</span> il mio ambiente ideale: un affascinante punto d'incontro tra struttura, design e psicologia dell'utente. La mia cassetta degli attrezzi si concentra su React e l'ecosistema moderno del web, ma vedo le tecnologie come strumenti per un fine più grande: costruire prodotti digitali solidi e curati.
                </p>
                <p>
                    Sono una persona precisa e metodica, ma credo fermamente che i migliori risultati nascano dalla collaborazione e dall'apprendimento continuo. Sono sempre pronta a fare domande, ad accogliere un feedback e a contribuire con entusiasmo a un team.
                </p>
            </motion.div>

            {/* Componente che mostra le tecnologie utilizzate */}
            <Tecnologie />
        </section>
    );
}
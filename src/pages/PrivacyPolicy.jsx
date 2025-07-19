import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
    // Scrolla in cima quando la pagina viene caricata
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Privacy Policy</h1>
            <p className={styles.lastUpdated}>Ultimo aggiornamento: 19 Luglio 2025</p>

            <section>
                <h2>1. Titolare del Trattamento</h2>
                <p>
                    Eleonora Cappellesso (di seguito "Titolare"), in qualità di titolare del trattamento dei dati personali, informa gli utenti sull'utilizzo dei dati raccolti tramite questo sito web.
                </p>
            </section>

            <section>
                <h2>2. Dati Personali Raccolti</h2>
                <p>
                    Questo sito raccoglie i seguenti dati personali forniti volontariamente dall'utente tramite il form di contatto:
                </p>
                <ul>
                    <li>Nome e Cognome</li>
                    <li>Indirizzo Email</li>
                    <li>Contenuto del messaggio</li>
                </ul>
            </section>

            <section>
                <h2>3. Finalità del Trattamento</h2>
                <p>
                    I dati personali sono raccolti e trattati esclusivamente per la seguente finalità:
                </p>
                <ul>
                    <li>Rispondere alle richieste inviate dall'utente tramite il form di contatto, siano esse richieste di informazioni o proposte di collaborazione.</li>
                </ul>
            </section>

            <section>
                <h2>4. Responsabile del Trattamento (Servizio di Terze Parti)</h2>
                <p>
                    Per la gestione dei messaggi inviati tramite il form, questo sito si avvale del servizio fornito da <strong>Formspree, Inc.</strong>. I dati inviati vengono trasmessi a Formspree, che li elabora per conto del Titolare al fine di recapitare l'email. Per maggiori dettagli, si invita a consultare la <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy di Formspree</a>.
                </p>
            </section>

            <section>
                <h2>5. Diritti dell'Interessato</h2>
                <p>
                    In conformità con il GDPR, l'utente ha il diritto di:
                </p>
                <ul>
                    <li>Chiedere l'accesso ai propri dati personali.</li>
                    <li>Ottenere la rettifica o la cancellazione degli stessi.</li>
                    <li>Opporsi al trattamento.</li>
                </ul>
                <p>
                    Per esercitare tali diritti, è possibile contattare il Titolare all'indirizzo email: <strong>cappellessoeleonora@gmail.com</strong>.
                </p>
            </section>

            <Link to="/" className={styles.homeButton}>Torna alla Homepage</Link>
        </motion.div>
    );
}
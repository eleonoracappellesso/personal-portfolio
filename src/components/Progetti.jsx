import styles from './Progetti.module.css';

export default function Progetti() {
    const progetti = [
        {
            id: 1,
            titolo: "Bool B&B",
            descrizione: "Replica di una piattaforma per affitti brevi, sviluppata in team con MySQL, Node.js ed Express per la gestione del database e del backend. Frontend realizzato con React. Applicazione completamente responsiva.",
            immagine: "/projects/BoolBnB.png"
        },
        {
            id: 2,
            titolo: "Book Shop",
            descrizione: "Descrizione del secondo progetto.",
            immagine: "/projects/BookShop.png"
        },
        {
            id: 3,
            titolo: "Boolflix",
            descrizione: "Replica piattaforma di streaming con caricamento dinamico dei contenuti, sviluppata con Express per il backend e React per il frontend.L'integrazione con TMDB API permette di gestire cataloghi di film e serie TV in tempo reale.",
            immagine: "/projects/Netflix.png"
        },
        {
            id: 4,
            titolo: "Boolify",
            descrizione: "Interfaccia utente per una piattaforma di streaming musicale, sviluppata con HTML e CSS.Design responsivo realizzato tramite Flexbox, media queries e variabili CSS. Include una sidebar interattiva, un player musicale e animazioni hover.",
            immagine: "/projects/Spotify.png"
        },
        {
            id: 5,
            titolo: "Dropbox",
            descrizione: `Il progetto web disponibile all'indirizzo è una replica della homepage di Dropbox, sviluppata utilizzando HTML e CSS. L'obiettivo principale è riprodurre il layout e lo stile del sito originale, concentrandosi sulla fedeltà visiva e sulla responsività del design.​ La pagina presenta una struttura simile a quella di Dropbox, con sezioni dedicate alle funzionalità, ai piani e prezzi, nonché testimonianze di clienti.Include anche elementi interattivi come pulsanti per iniziare una prova gratuita o contattare l'ufficio vendite. Questo progetto rappresenta un esercizio pratico per migliorare le competenze nello sviluppo front-end, focalizzandosi sull'uso di media query per l'adattamento a diversi dispositivi e sull'applicazione di convenzioni di naming come SUIT CSS.`,
            immagine: "/projects/Dropbox.png",
            link: "https://eleonoracappellesso.github.io/htmlcss-dropbox/"
        }
    ];

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>I miei progetti</h2>
            <div className={styles.projects}>
                {progetti.map((progetto) => (
                    <div key={progetto.id} className={styles.project}>
                        <img
                            src={progetto.immagine}
                            alt={progetto.titolo}
                            className={styles.image}
                        />
                        <div className={styles.text}>
                            <h3>{progetto.titolo}</h3>
                            <p>{progetto.descrizione}</p>
                            <a href={progetto.link} target='_blank'>{progetto.link}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

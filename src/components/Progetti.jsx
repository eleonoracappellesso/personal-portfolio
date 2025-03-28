import styles from './Progetti.module.css';

export default function Progetti() {
    const progetti = [
        {
            id: 1,
            titolo: "Bool B&B",
            descrizione: "Descrizione del primo progetto.",
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
            descrizione: "Descrizione del terzo progetto.",
            immagine: "/projects/Netflix.png"
        },
        {
            id: 4,
            titolo: "Boolify",
            descrizione: "Descrizione del terzo progetto.",
            immagine: "/projects/Spotify.png"
        },
        {
            id: 5,
            titolo: "Dropbox",
            descrizione: "Descrizione del terzo progetto.",
            immagine: "/projects/Dropbox.png"
        }
    ];

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>I miei progetti</h2>
            <div className={styles.projects}>
                {progetti.map((progetto, index) => (
                    <div key={progetto.id} className={styles.project}>
                        <img
                            src={progetto.immagine}
                            alt={progetto.titolo}
                            className={styles.image}
                        />
                        <div className={styles.text}>
                            <h3>{progetto.titolo}</h3>
                            <p>{progetto.descrizione}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

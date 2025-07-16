import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <a href="https://github.com/eleonoracappellesso" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/eleonora-cappellesso-6499271b4/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {/* Sostituisci tuoUsername con il tuo vero username! */}
                <a href="https://www.instagram.com/tuoUsername" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p className={styles.copyright}>
                © {new Date().getFullYear()} Eleonora Cappellesso. Tutti i diritti riservati.
            </p>
        </footer>
    )
}
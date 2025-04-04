import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="https://github.com/eleonoracappellesso" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/eleonora-cappellesso-6499271b4/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://www.instagram.com/tuoUsername" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="mailto:cappellessoeleonora@gmail.com">
                    Contattami
                </a>
                <a href="/CV_EleonoraCappellesso.pdf" target="_blank" rel="noopener noreferrer">
                    Curriculum
                </a>
            </nav>
        </header>
    )
}
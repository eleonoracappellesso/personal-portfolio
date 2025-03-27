import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="https://github.com/tuoUsername" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/tuoUsername" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://www.instagram.com/tuoUsername" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
            </nav>
        </header>
    )
}
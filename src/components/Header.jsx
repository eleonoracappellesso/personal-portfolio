import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";


export default function Header() {
    return (
        <header className={styles.header}>
            {/* Link di Navigazione Interna */}
            <nav className={styles.navLinks}>
                <a href="/#chi-sono">About</a>
                <a href="/#progetti">Progetti</a>
                <a href="/#contatti">Contatti</a>
            </nav>

            {/* Link Social e Esterni */}
            <div className={styles.socialLinks}>
                <a href="https://github.com/eleonoracappellesso" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/eleonora-cappellesso-6499271b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="mailto:cappellessoeleonora@gmail.com" aria-label="Email">
                    <IoIosMail />
                </a>
                <a href="/CV_EleonoraCappellesso.pdf" target="_blank" rel="noopener noreferrer" aria-label="Curriculum Vitae">
                    <IoDocumentText />
                </a>
            </div>
        </header>
    )
}
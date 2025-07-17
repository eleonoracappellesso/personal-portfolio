import { useLocation } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import styles from "./Header.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";

export default function Header() {
    // Ottiengo la posizione corrente dell'URL
    const location = useLocation();

    // Controllo se siamo sulla homepage
    const isHomepage = location.pathname === '/';

    // Creo un array per i link per rendere il codice più pulito
    const navLinks = [
        { to: "chi-sono", label: "About" },
        { to: "progetti", label: "Progetti" },
        { to: "contatti", label: "Contatti" },
    ];

    return (
        <header className={styles.header}>
            <nav className={styles.navLinks}>
                {navLinks.map(link => (
                    // Renderizzazione Condizionale per ogni link
                    isHomepage ? (
                        // SE SIAMO SULLA HOMEPAGE: Usa react-scroll
                        <ScrollLink
                            key={link.to}
                            activeClass={styles.active}
                            to={link.to}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                        >
                            {link.label}
                        </ScrollLink>
                    ) : (
                        // SE NON SIAMO SULLA HOMEPAGE: Usa un link normale
                        <a key={link.to} href={`/#${link.to}`}>
                            {link.label}
                        </a>
                    )
                ))}
            </nav>

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
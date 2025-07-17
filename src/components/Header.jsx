import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./Header.module.css";

export default function Header() {
    const location = useLocation(); // Ottengo la posizione corrente dell'URL
    const isHomepage = location.pathname === '/'; // Controllo se siamo sulla homepage
    const [menuOpen, setMenuOpen] = useState(false); // Stato per il menu mobile

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [menuOpen]);

    // Creo un array per i link per rendere il codice più pulito
    const navLinks = [
        { to: "chi-sono", label: "About" },
        { to: "progetti", label: "Progetti" },
        { to: "contatti", label: "Contatti" },
    ];
    
    const SocialLinks = () => (
        <>
            <a href="https://github.com/eleonoracappellesso" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/eleonora-cappellesso-6499271b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:cappellessoeleonora@gmail.com" aria-label="Email"><IoIosMail /></a>
            <a href="/CV_EleonoraCappellesso.pdf" target="_blank" rel="noopener noreferrer" aria-label="Curriculum Vitae"><IoDocumentText /></a>
        </>
    );

    // Funzione per chiudere il menu quando un link viene cliccato
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            {/* Navigazione Desktop con i link ripristinati */}
            <nav className={styles.desktopNavLinks}>
                {navLinks.map(link => (
                    isHomepage ? (
                        <ScrollLink key={link.to} activeClass={styles.active} to={link.to} spy={true} smooth={true} offset={-80} duration={500}>
                            {link.label}
                        </ScrollLink>
                    ) : (
                        <a key={link.to} href={`/#${link.to}`}>{link.label}</a>
                    )
                ))}
            </nav>
            
            <div className={styles.mobileLogo}>
                 <a href="/" aria-label="Torna alla Homepage">EC</a>
            </div>

            <div className={styles.socialLinks}>
                <SocialLinks />
            </div>

            {/* Bottone Hamburger (solo per mobile) */}
            <button className={styles.hamburgerButton} onClick={() => setMenuOpen(true)} aria-label="Apri menu">
                <FaBars />
            </button>
            
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button className={styles.closeButton} onClick={() => setMenuOpen(false)} aria-label="Chiudi menu">
                            <FaTimes />
                        </button>
                        <nav className={styles.mobileNavLinks}>
                            {navLinks.map(link => (
                                isHomepage ? (
                                    <ScrollLink key={link.to} to={link.to} spy={true} smooth={true} offset={-80} duration={500} onClick={handleLinkClick}>
                                        {link.label}
                                    </ScrollLink>
                                ) : (
                                    <a key={link.to} href={`/#${link.to}`} onClick={handleLinkClick}>{link.label}</a>
                                )
                            ))}
                        </nav>
                        <div className={styles.mobileSocialLinks}>
                            <SocialLinks />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
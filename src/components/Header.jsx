import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Per gestire il routing
import { Link as ScrollLink, scroller, animateScroll } from "react-scroll"; // per scroll animato interno alla pagina
import { FaGithub, FaLinkedin } from "react-icons/fa"; // icone social
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa"; // icone per hamburger menu
import { motion, AnimatePresence } from 'framer-motion'; // per animazioni dinamiche
import styles from "./Header.module.css"; // CSS module per styling 

export default function Header() {
    const location = useLocation(); // ottiene la posizione attuale del router
    const isHomepage = location.pathname === '/'; // controlla se siamo nella homepage
    const [menuOpen, setMenuOpen] = useState(false); // stato per apertura/chiusura menu mobile

    // Blocca lo scroll del body quando il menu mobile è aperto
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll'); // impedisce lo scroll sotto il menu
        } else {
            document.body.classList.remove('no-scroll');
        }
        // funzione di cleanup per rimuovere la classe se il componente viene smontato
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [menuOpen]);

    // Funzione dedicata per lo scroll-to-top con animazione
    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 800,
            smooth: 'easeInOutQuint'
        });
    };

    // Array dei link di navigazione
    const navLinks = [
        { to: "chi-sono", label: "About" },
        { to: "progetti", label: "Progetti" },
        { to: "contatti", label: "Contatti" },
    ];
    
    // componente inline per i link ai social
    const SocialLinks = () => (
        <>
            <a href="https://github.com/eleonoracappellesso" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/eleonora-cappellesso-6499271b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:cappellessoeleonora@gmail.com" aria-label="Email"><IoIosMail /></a>
            <a href="/CV_EleonoraCappellesso.pdf" target="_blank" rel="noopener noreferrer" aria-label="Curriculum Vitae"><IoDocumentText /></a>
        </>
    );

    // Chiude il menu mobile dopo un click su un link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    // Rende i link di navigazione diversi a seconda che siamo o no sulla homepage
    const renderNavLinks = (isMobile = false) => {
        return navLinks.map(link => (
            isHomepage ? (
                // Se siamo nella homepage scrolla alla sezione con react-scroll
                <ScrollLink 
                    key={link.to} 
                    activeClass={styles.active} 
                    to={link.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={500}
                    onClick={isMobile ? handleLinkClick : undefined}
                >
                    {link.label}
                </ScrollLink>
            ) : (
                // Se non siamo nella homepage va ad home e poi scrolla con stato
                <Link 
                    key={link.to} 
                    to="/" 
                    state={{ scrollTo: link.to }}
                    onClick={isMobile ? handleLinkClick : undefined}
                    className={isMobile ? styles.mobileNavLinkRouter : styles.desktopNavLinkRouter}
                >
                    {link.label}
                </Link>
            )
        ));
    };


    return (
        <header className={styles.header}>
            <nav className={styles.desktopNavLinks}>
                {renderNavLinks()}
            </nav>
            
            {/* Logo centrale con comportamento diverso se siamo in homepage */}
            <div className={styles.mobileLogo}>
                 {isHomepage ? (
                    // Se sei sulla homepage, usa react-scroll per tornare su
                    <a onClick={scrollToTop} className={styles.logoLink}>
                        EC
                    </a>
                 ) : (
                    // Se sei su un'altra pagina, usa react-router per tornare alla homepage
                    <Link to="/" className={styles.logoLink}>
                        EC
                    </Link>
                 )}
            </div>

            {/* Icone social sempre visibili su desktop */}
            <div className={styles.socialLinks}>
                <SocialLinks />
            </div>

            {/* Pulsante hamburger per aprire il menu mobile */}
            <button className={styles.hamburgerButton} onClick={() => setMenuOpen(true)} aria-label="Apri menu">
                <FaBars />
            </button>
            
            {/* Menu mobile con animazione di apertura/chiusura */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Bottone per chiudere il menu */}
                        <button className={styles.closeButton} onClick={() => setMenuOpen(false)} aria-label="Chiudi menu">
                            <FaTimes />
                        </button>

                        {/* Link di navigazione nel menu mobile */}
                        <nav className={styles.mobileNavLinks}>
                            {renderNavLinks(true)}
                        </nav>

                        {/* Icone social anche nel menu mobile */}
                        <div className={styles.mobileSocialLinks}>
                            <SocialLinks />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
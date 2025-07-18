import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Link as ScrollLink, scroller, animateScroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./Header.module.css";

export default function Header() {
    const location = useLocation();
    const isHomepage = location.pathname === '/';
    const [menuOpen, setMenuOpen] = useState(false);

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

    // Funzione dedicata per lo scroll-to-top
    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 800,
            smooth: 'easeInOutQuint'
        });
    };

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

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    const renderNavLinks = (isMobile = false) => {
        return navLinks.map(link => (
            isHomepage ? (
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

            <div className={styles.socialLinks}>
                <SocialLinks />
            </div>

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
                            {renderNavLinks(true)}
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
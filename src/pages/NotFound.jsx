import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <motion.section 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.glitchText} data-text="404">404</h1>
      <p className={styles.message}>
        Oops! Sembra che tu abbia trovato un bug nel sistema... o forse solo un link rotto.
      </p>
      <Link to="/" className={styles.homeButton}>
        Torna alla Homepage
      </Link>
    </motion.section>
  );
}
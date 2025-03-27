import { FiChevronDown } from 'react-icons/fi';
import styles from "./Jumbotron.module.css";

export default function Jumbotron() {
    return (
        <section className={`debug ${styles.jumbotron}`}>
            <h1>Ciao, sono <span>Eleonora</span></h1>
            <h4>Junior Web Developer</h4>
            {/* <button><FiChevronDown /></button> */}
        </section >
    )
}
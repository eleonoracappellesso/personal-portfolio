// import styles from "./Jumbotron.module.css";

// export default function Jumbotron() {
//     return (
//         <section className={`debug ${styles.jumbotron}`}>
//             <h1>Ciao, sono <span>Eleonora</span></h1>
//             <h4>Junior Web Developer</h4>
//         </section >
//     )
// }

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Jumbotron.module.css";

export default function Jumbotron() {
    const fullText = `if (Success()) {\n  celebrate();\n} else {\n  tryAgain();\n}\nbeAwesome();`;
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    return (
        <section className={`debug ${styles.jumbotron}`}>
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Ciao, sono <span>Eleonora</span>
            </motion.h1>

            <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                Junior Web Developer
            </motion.h4>

            <p className={styles.typing}>
                {typedText}
                <span className={styles.cursor}>|</span>
            </p>

        </section>
    );
}

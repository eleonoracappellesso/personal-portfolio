import Tecnologie from "./Tecnologie" // importa il componente 
import styles from "./ChiSono.module.css"; // CSS module per styling locale 

// Componente che rappresenta la sezione "Chi Sono" della pagina
export default function ChiSono() {
    return (
        // Sezione identificata con un ID per permettere l'ancoraggio via scroll
        <section id="chi-sono">
            <h2>Chi Sono</h2>
            <p>
                La mia storia parte da un percorso in Scienze Politiche e Relazioni Internazionali, che mi ha insegnato a osservare il mondo con spirito critico e a risolvere problemi con metodo. Poi, un giorno, ho scoperto il coding... ed è stato un colpo di fulmine!
                <br /><br />
                Spinta dalla mia curiosità e dalla voglia di capire a fondo come funzionano le cose, ho intrapreso un master in Full Stack Web Development, immergendomi completamente nel mondo della programmazione. Durante il corso ho costruito applicazioni reali, affinando le mie competenze in HTML, CSS, JavaScript e React. Nell'ultima fase, ho deciso di dedicarmi con particolare attenzione al front-end, perché amo progettare e sviluppare interfacce moderne, dinamiche e user-friendly, capaci di lasciare il segno.
            </p>
            {/* Componente che mostra le tecnologie utilizzate */}
            <Tecnologie />

        </section>
    )
}
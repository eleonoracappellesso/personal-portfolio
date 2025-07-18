import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react'; // Hook per gestire invio form via Formspree
import styles from './Contatti.module.css'; // CSS module per styling 

export default function Contatti() {
    const formKey = import.meta.env.VITE_KEY_FORM; // Chiave di fromspree presa dalle variabili d'ambiente
    const [state, formspreeHandleSubmit] = useForm(formKey); // Hook d formspree per gestire invio e stato

    // Stato per i valori del form
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        messaggio: '',
    });

    // Stato locale per memorizzare eventuali errori di validazione
    const [errors, setErrors] = useState({});

    // Funzione per gestire i cambiamenti nei campi del form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // Aggiorna il campo modificato mantenendo gli altri invariati
        }));
    };

    // Funzione per validare i campi del form prima dell'invio
    const validate = () => {
        const newErrors = {};
        if (!formData.nome) newErrors.nome = 'Il nome è obbligatorio.';
        if (!formData.cognome) newErrors.cognome = 'Il cognome è obbligatorio.';
        if (!formData.email) {
            newErrors.email = "L'email è obbligatoria.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "L'indirizzo email non è valido.";
        }
        if (!formData.messaggio) newErrors.messaggio = 'Il messaggio non può essere vuoto.';

        return newErrors; // Ritorna eventuali errori
    };

    // Funzione che gestisce il submit del form
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene il ricaricamento della pagina
        const validationErrors = validate(); // valida i dati inseriti
        setErrors(validationErrors); // Aggiorna gli errori nello stato

        // Se non ci sono errori, procede con l'invio tramite Formspree
        if (Object.keys(validationErrors).length === 0) {
            formspreeHandleSubmit(formData);
        }
    };

    // Messaggio di conferma dopo invio riuscito
    if (state.succeeded) {
        return <p className={styles.successMessage}>Grazie per il tuo messaggio! Ti risponderò al più presto.</p>;
    }

    return (
        <section id="contatti" className={styles.container}>
            <h2>Contattami</h2>
            <p className={styles.intro}>Hai un'idea o un progetto in mente? Scrivimi!</p>

            {/* Form personalizzato con validazione manuale */}
            <form onSubmit={handleSubmit} noValidate className={styles.form}>

                <div className={styles.formRow}>
                    {/* Campo Nome */}
                    <div className={styles.formGroup}>
                        <label htmlFor="nome">Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            placeholder="Es. Mario"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                        {errors.nome && <span className={styles.errorMessage}>{errors.nome}</span>}
                    </div>

                    {/* Campo Cognome */}
                    <div className={styles.formGroup}>
                        <label htmlFor="cognome">Cognome</label>
                        <input
                            id="cognome"
                            type="text"
                            name="cognome"
                            placeholder="Es. Rossi"
                            value={formData.cognome}
                            onChange={handleChange}
                        />
                        {errors.cognome && <span className={styles.errorMessage}>{errors.cognome}</span>}
                    </div>
                </div>

                {/* Campo Email */}
                <div className={styles.formGroup}>
                    <label htmlFor="email">Indirizzo Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="es. mario.rossi@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* Mostra errori personalizzati e quelli da Formspree */}
                    {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className={styles.errorMessage}
                    />
                </div>

                {/* Campo Messaggio */}
                <div className={styles.formGroup}>
                    <label htmlFor="messaggio">Messaggio</label>
                    <textarea
                        id="messaggio"
                        name="messaggio"
                        rows="5"
                        placeholder="Scrivi qui il tuo messaggio..."
                        value={formData.messaggio}
                        onChange={handleChange}
                    />
                    {errors.messaggio && <span className={styles.errorMessage}>{errors.messaggio}</span>}
                </div>

                <div className={styles.btnGroup}>
                    <button type="submit" disabled={state.submitting} className={styles.submitButton}>
                        {state.submitting ? 'Invio in corso...' : 'Invia Messaggio'}
                    </button>
                </div>
            </form>
        </section>
    );
}
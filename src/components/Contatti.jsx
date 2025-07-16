import { useForm, ValidationError } from '@formspree/react';
import styles from './Contatti.module.css';

export default function Contatti() {

    const [state, handleSubmit] = useForm("xdkdoypn");

    if (state.succeeded) {
        return <p className={styles.successMessage}>Grazie per il tuo messaggio! Ti risponderò al più presto.</p>;
    }

    return (
        <section className={styles.container}>
            <h2>Contattami</h2>
            <p className={styles.intro}>Hai un'idea o un progetto in mente? Scrivimi!</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">
                        Nome
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email">
                        Indirizzo Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className={styles.errorMessage}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message">
                        Messaggio
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className={styles.errorMessage}
                    />
                </div>

                <button type="submit" disabled={state.submitting} className={styles.submitButton}>
                    {state.submitting ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>
            </form>
        </section>
    );
}
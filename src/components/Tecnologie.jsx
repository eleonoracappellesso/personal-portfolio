import styles from "./Tecnologie.module.css";

const technologies = [
    { name: "HTML", img: "/technologies/html.png" },
    { name: "CSS", img: "/technologies/css.png" },
    { name: "JavaScript", img: "/technologies/javascript.png" },
    { name: "React", img: "/technologies/react.png" },
    { name: "Node.js", img: "/technologies/node.png" },
    { name: "Express.js", img: "/technologies/express.png" },
    { name: "MySQL", img: "/technologies/mysql.png" },
    { name: "Bootstrap", img: "/technologies/bootstrap.png" },
    { name: "Tailwind", img: "/technologies/tailwind.png" },
];

export default function Tecnologie() {
    return (
        <div className={styles.container}>
            <h4>Le <span>tecnologie</span> che uso attualmente sono:</h4>
            <div className={styles.grid}>
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.card}>
                        <img src={tech.img} alt={tech.name} className={styles.icon} />
                        <p className={styles.techName}>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
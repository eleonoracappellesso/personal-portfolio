import styles from "./Tecnologie.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px", // Aggiunge spazio laterale
    };

    return (
        <div className={styles.container}>
            <h4>Le tecnologie che uso attualmente sono:</h4>
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>
                    {technologies.map((tech, index) => (
                        <div key={index} className={styles.cardWrapper}>
                            <div className={styles.card}>
                                <img src={tech.img} alt={tech.name} className={styles.icon} />
                                <p className={styles.techName}>{tech.name}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

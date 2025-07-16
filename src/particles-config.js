const particlesConfig = {
    fullScreen: {
        enable: false,
        zIndex: 0,
    },
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 3,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff", // Colore delle linee
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            out_mode: "out",
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 140,
                line_opacity: 1,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
    background: {
        color: "transparent"
    }
};

export default particlesConfig;
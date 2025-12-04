export const defaultLang = "en";

export const languages = {
  en: "EN",
  es: "ES",
  eu: "EU",
};

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.greeting": "Hello, I'm",
    "hero.title": "Software Engineer & Full Stack Developer",
    "hero.description":
      "Building high-performance web applications with a focus on premium design and seamless user experiences. Currently developing at",
    "hero.viewWork": "View Work",
    "hero.contactMe": "Contact Me",

    "experience.title": "Experience",
    "experience.present": "Present",
    "experience.role": "Software Engineer",
    "experience.ubikare_desc":
      "Developing Naiha, a healthcare platform built with Clojure, ClojureScript, and Datomic. Focusing on building robust, data-driven applications for the healthcare sector.",

    "projects.title": "Selected Projects",
    "projects.naiha_desc":
      "A healthcare platform developed at Ubikare. Built with Clojure, ClojureScript, and Datomic for robust data management.",
    "projects.laguntza_desc":
      "Professional physiotherapy clinic website. Multilingual (Basque/Spanish) with interactive Leaflet maps, GSAP animations, and accessibility-first design.",
    "projects.besaide_desc":
      "A modern website for a mountaineering club. Features a clean interface and fast loading times using Astro.",
    "projects.colortools_desc":
      "A Clojure(Script) library for color manipulation and conversion. Open source contribution.",

    "contact.title": "Get in Touch",
    "contact.text":
      "You can reach me through the following means",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",

    "footer.rights": "All rights reserved.",
    "themeSwitcher.toggleTheme": "Toggle theme",
  },
  es: {
    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    "hero.greeting": "Hola, soy",
    "hero.title": "Ingeniero de Software y Desarrollador Full Stack",
    "hero.description":
      "Creando aplicaciones web de alto rendimiento con un enfoque en diseño premium y experiencias de usuario fluidas. Actualmente desarrollando en",
    "hero.viewWork": "Ver Trabajos",
    "hero.contactMe": "Contáctame",

    "experience.title": "Experiencia",
    "experience.present": "Presente",
    "experience.role": "Ingeniero de Software",
    "experience.ubikare_desc":
      "Desarrollando Naiha, una plataforma de salud construida con Clojure, ClojureScript y Datomic. Enfocado en crear aplicaciones robustas y orientadas a datos para el sector salud.",

    "projects.title": "Proyectos Seleccionados",
    "projects.naiha_desc":
      "Plataforma de salud desarrollada en Ubikare. Construida con Clojure, ClojureScript y Datomic para una gestión de datos robusta.",
    "projects.laguntza_desc":
      "Sitio web profesional de clínica de fisioterapia. Multilingüe (euskera/español) con mapas interactivos Leaflet, animaciones GSAP y diseño accesible.",
    "projects.besaide_desc":
      "Sitio web moderno para un club de montañismo. Interfaz limpia y tiempos de carga rápidos usando Astro.",
    "projects.colortools_desc":
      "Librería Clojure(Script) para manipulación y conversión de colores. Contribución de código abierto.",

    "contact.title": "Contacto",
    "contact.text":
      "Puedes contactarme de las siguientes maneras",
    "contact.email": "Correo",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",

    "footer.rights": "Todos los derechos reservados.",
    "themeSwitcher.toggleTheme": "Cambiar tema",
  },
  eu: {
    "nav.home": "Hasiera",
    "nav.experience": "Esperientzia",
    "nav.projects": "Proiektuak",
    "nav.contact": "Kontaktua",

    "hero.greeting": "Kaixo!",
    "hero.title": "Software Ingeniaria eta Full Stack Garatzailea",
    "hero.description":
      "Errendimendu handiko web aplikazioak sortzen, diseinu premium eta erabiltzaile esperientzia bikainetan zentratuta. Gaur egun garatzen",
    "hero.viewWork": "Lanak Ikusi",
    "hero.contactMe": "Kontaktatu",

    "experience.title": "Esperientzia",
    "experience.present": "Orain",
    "experience.role": "Software Ingeniaria",
    "experience.ubikare_desc":
      "Naiha garatzen, Clojure, ClojureScript eta Datomic erabiliz soratutako osasun plataforma bat. Sektoreko datuetan oinarritutako aplikazioak garatzen ditugu.",

    "projects.title": "Nire proiektuak",
    "projects.naiha_desc":
      "Ubikaren garatutako osasun plataforma. Clojure, ClojureScript eta Datomic erabiliz eraikia datuen kudeaketa sendorako.",
    "projects.laguntza_desc":
      "Fisioterapia klinika profesionalaren webgunea. Eleaniztuna (euskara/gaztelania) Leaflet mapa interaktiboekin, GSAP animazioekin eta irisgarritasun-lehentasunezko diseinuarekin.",
    "projects.besaide_desc":
      "Sitio web moderno para un club de montañismo. Interfaz limpia y tiempos de carga rápidos usando Astro.",
    "projects.colortools_desc":
      "Koloreen manipulazio eta bihurketarako Clojure(Script) liburutegia. Kode irekiko ekarpena.",

    "contact.title": "Harremanetan Jarri",
    "contact.text":
      "Hurrengo balideen bitartez jarri zaitezke nirekin harremanetan",
    "contact.email": "Emaila:",
    "contact.github": "GitHub:",
    "contact.linkedin": "LinkedIn:",

    "footer.rights": "Eskubide guztiak erreserbatuta.",
    "themeSwitcher.toggleTheme": "Gaia aldatu",
  },
} as const;

export type Langs = keyof typeof ui;
export type UIKeys = keyof typeof ui.en;

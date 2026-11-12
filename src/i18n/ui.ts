export const defaultLang = 'en';

export const languages = {
  en: 'EN',
  es: 'ES',
  eu: 'EU',
};

export const ui = {
  en: {
    'meta.title': 'Jon Ramos — Software engineer and web developer in Gipuzkoa',
    'meta.description':
      'Software engineer in Urnieta, Gipuzkoa. Fast websites for local businesses around Donostia, and web applications in Clojure and ClojureScript.',

    'nav.home': 'Home',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contributions': 'Contributions',
    'nav.contact': 'Contact',

    'hero.greeting': "Hello, I'm",
    'hero.title': 'Software engineer in Urnieta, Gipuzkoa',
    'hero.description':
      "I build fast websites for local businesses in Gipuzkoa and complex web applications in Clojure. Right now I'm building Naiha, a healthcare platform, at",
    'hero.descAfter': '.',
    'hero.doorLocal': 'I run a business and need a website',
    'hero.doorTech': "I'm looking for a Clojure engineer",
    'hero.replHint':
      'This is a real Clojure REPL. Type (help) and press Enter.',
    'nav.local': 'Business websites',
    'nav.work': 'Software',
    'hero.viewWork': 'View Work',
    'hero.contactMe': 'Contact Me',
    'hero.available': 'Open to new projects',

    'experience.title': 'Experience',
    'experience.present': 'Present',
    'experience.role': 'Software Engineer',
    'experience.ubikare_desc':
      'Developing Naiha, a healthcare platform built with Clojure, ClojureScript, and Datomic. Focusing on building robust, data-driven applications for the healthcare sector.',
    'experience.highlight1':
      'Building Naiha end to end — from the data model to the user interface.',
    'experience.highlight2':
      'Designing robust, data-driven systems for the healthcare sector.',
    'experience.highlight3':
      'Upstreaming fixes to the open source tools the team relies on.',

    'publications.title': 'Research',
    'publications.intro':
      'Through my work at Ubikare, I contributed to the technology and data infrastructure supporting multicenter clinical research carried out by the COVID-19 Spanish ICU Network.',
    'publications.association': 'COVID-19 Spanish ICU Network, with Ubikare',
    'publications.link': 'Open in PMC',
    'publications.listLabel': 'Scientific publications',

    'projects.title': 'Selected Projects',
    'projects.subtitle':
      "A selection of projects I've built and contributed to",
    'projects.featured': 'Featured',
    'projects.naiha_desc':
      'A healthcare platform developed at Ubikare. Built with Clojure, ClojureScript, and Datomic for robust data management.',
    'projects.laguntza_desc':
      'Professional physiotherapy clinic website. Multilingual (Basque/Spanish) with interactive Leaflet maps, GSAP animations, and accessibility-first design.',
    'projects.besaide_desc':
      'A multilingual (Basque/Spanish) website for Besaide Mendizale Elkartea. Built with Astro and Keystatic CMS, with i18n routing, accessibility-first components and zero-JS navigation.',
    'projects.colortools_desc':
      'A Clojure and ClojureScript color library: conversion, palettes, accessible themes and WCAG contrast, with an interactive demo.',
    'projects.jon_nested_menu_desc':
      'A nested MUI menu library for Reagent/ClojureScript and React: dropdowns, a right-click context menu, per-item icons, custom labels and keyboard navigation. Published to Clojars and npm.',
    'projects.norwegian_singles_desc':
      'A high-performance training plan generator based on the Norwegian Singles methodology. Built with Astro and React.',
    'projects.newton_desc':
      'Educational deep-dive into polynomial interpolation — Newton, Lagrange, barycentric and cubic splines in Python, with an interactive Newton demo in JavaScript. Explores Chebyshev nodes, the Runge phenomenon and benchmarks.',

    'contact.title': 'Get in touch',
    'contact.text':
      'Software developer based in Urnieta, Basque Country (Euskal Herria). Available for professional connections and technical discussions.',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.title': 'Contact Me Directly',
    'contact.form.description':
      "Got a question or proposal? Fill out the form and I'll get back to you shortly.",
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending…',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message. Please try again.',

    'footer.rights': 'All rights reserved.',
    'footer.backToTop': 'Back to top',
    'footer.siteLinks': 'Site',
    'contributions.home.subtitle':
      'Building and improving developer tools through open source',
    'themeSwitcher.toggleTheme': 'Toggle theme',
    'email.membership.subject.membership': 'Membership Application',
    'email.membership.subject.federation': 'Federation Application',
    'email.membership.subject.membership-and-federation':
      'Membership and Federation Application',

    'contributions.page.title': 'Open Source Contributions | Jon Ramos',
    'contributions.page.description':
      'Merged pull requests to clj-kondo, Calva, Logseq, Kit and other Clojure tools: linters, editor support and developer experience fixes.',
    'contributions.hero.title': 'Open Source Contributions',
    'contributions.hero.subtitle':
      'Building better developer tools and experiences through meaningful contributions to open source projects',
    'contributions.stats.merged': 'Merged Contributions',
    'contributions.stats.merged.desc': 'Production-ready code improvements',
    'contributions.stats.projects': 'Projects',
    'contributions.stats.projects.desc': 'Widely-used open source tools',
    'contributions.stats.technologies': 'Technologies',
    'contributions.section.projects': 'Projects',
    'contributions.section.timeline': 'Contribution Timeline',
    'contributions.section.subtitle':
      'Contributing to {projects} projects with {contributions}',
    'contributions.card.contributions': 'Contribution',
    'contributions.card.contributions_plural': 'Contributions',
    'contributions.card.more': 'more',
    'contributions.card.repository': 'Repository',
    'contributions.card.website': 'Website',
    'contributions.card.viewPR': 'View Pull Request',
    'contributions.timeline.viewPR': 'View PR →',
    'contributions.home.viewAll': 'View All Contributions',
    'contributions.stats.contributions': 'Contributions',
    'contributions.filter.all': 'All Projects',
    'contributions.filter.search': 'Search contributions...',
    'contributions.card.showMore': 'Show {count} more',
    'contributions.card.showLess': 'Show less',
  },
  es: {
    'meta.title': 'Jon Ramos — Programador y desarrollador web en Gipuzkoa',
    'meta.description':
      'Programador en Urnieta (Gipuzkoa). Páginas web rápidas para negocios de Donostia y alrededores, y aplicaciones web en Clojure y ClojureScript.',

    'nav.home': 'Inicio',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contributions': 'Contribuciones',
    'nav.contact': 'Contacto',

    'hero.greeting': 'Hola, soy',
    'hero.title': 'Programador en Urnieta, Gipuzkoa',
    'hero.description':
      'Hago páginas web rápidas para negocios de Gipuzkoa y aplicaciones web complejas en Clojure. Ahora mismo construyo Naiha, una plataforma sanitaria, en',
    'hero.descAfter': '.',
    'hero.doorLocal': 'Tengo un negocio y quiero una web',
    'hero.doorTech': 'Busco a alguien que programe en Clojure',
    'hero.replHint':
      'Esto es un REPL de Clojure de verdad. Escribe (help) y pulsa Enter.',
    'nav.local': 'Webs para negocios',
    'nav.work': 'Software',
    'hero.viewWork': 'Ver Trabajos',
    'hero.contactMe': 'Contáctame',
    'hero.available': 'Abierto a nuevos proyectos',

    'experience.title': 'Experiencia',
    'experience.present': 'Presente',
    'experience.role': 'Ingeniero de Software',
    'experience.ubikare_desc':
      'Desarrollando Naiha, una plataforma de salud construida con Clojure, ClojureScript y Datomic. Enfocado en crear aplicaciones robustas y orientadas a datos para el sector salud.',
    'experience.highlight1':
      'Construyendo Naiha de principio a fin: del modelo de datos a la interfaz.',
    'experience.highlight2':
      'Diseñando sistemas robustos y orientados a datos para el sector salud.',
    'experience.highlight3':
      'Aportando mejoras a las herramientas open source que usa el equipo.',

    'publications.title': 'Investigación',
    'publications.intro':
      'A través de mi trabajo en Ubikare, contribuí a la tecnología y la infraestructura de datos que respaldaron la investigación clínica multicéntrica realizada por la Red de UCI Española para COVID-19.',
    'publications.association': 'Red española de UCI COVID-19, con Ubikare',
    'publications.link': 'Abrir en PMC',
    'publications.listLabel': 'Publicaciones científicas',

    'projects.title': 'Proyectos Seleccionados',
    'projects.subtitle':
      'Una selección de proyectos que he construido y en los que he contribuido',
    'projects.featured': 'Destacado',
    'projects.naiha_desc':
      'Plataforma de salud desarrollada en Ubikare. Construida con Clojure, ClojureScript y Datomic para una gestión de datos robusta.',
    'projects.laguntza_desc':
      'Sitio web profesional de clínica de fisioterapia. Multilingüe (euskera/español) con mapas interactivos Leaflet, animaciones GSAP y diseño accesible.',
    'projects.besaide_desc':
      'Sitio web multilingüe (euskera/español) para Besaide Mendizale Elkartea. Construido con Astro y Keystatic CMS, con enrutado i18n, componentes accesibles y navegación sin JavaScript.',
    'projects.colortools_desc':
      'Librería de color para Clojure y ClojureScript: conversión, paletas, temas accesibles y contraste WCAG, con demo interactiva.',
    'projects.jon_nested_menu_desc':
      'Librería de menús MUI anidados para Reagent/ClojureScript y React: desplegables, menú contextual con clic derecho, iconos por elemento, etiquetas personalizadas y navegación por teclado. Publicada en Clojars y npm.',
    'projects.norwegian_singles_desc':
      'Generador de planes de entrenamiento de alta eficiencia basado en la metodología Norwegian Singles. Construido con Astro y React.',
    'projects.newton_desc':
      'Guía educativa sobre interpolación polinómica: Newton, Lagrange, baricéntrico y splines cúbicos en Python, con una demo interactiva de Newton en JavaScript. Explora los nodos de Chebyshev, el fenómeno de Runge y benchmarks.',

    'contact.title': 'Escríbeme',
    'contact.text':
      'Desarrollador de software en Urnieta, País Vasco (Euskal Herria). Disponible para conexiones profesionales y discusiones técnicas.',
    'contact.email': 'Correo',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.message': 'Mensaje',
    'contact.form.title': 'Contáctame directamente',
    'contact.form.description':
      '¿Tienes una pregunta o propuesta? Completa el formulario y te responderé pronto.',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.sending': 'Enviando…',
    'contact.form.success': '¡Mensaje enviado correctamente!',
    'contact.form.error':
      'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.backToTop': 'Volver arriba',
    'footer.siteLinks': 'Secciones',
    'contributions.home.subtitle':
      'Construyendo y mejorando herramientas para desarrolladores a través del open source',
    'themeSwitcher.toggleTheme': 'Cambiar tema',
    'email.membership.subject.membership': 'Solicitud de Membresía',
    'email.membership.subject.federation': 'Solicitud de Federación',
    'email.membership.subject.membership-and-federation':
      'Solicitud de Membresía y Federación',

    'contributions.page.title': 'Contribuciones Open Source | Jon Ramos',
    'contributions.page.description':
      'Pull requests aceptados en clj-kondo, Calva, Logseq, Kit y otras herramientas de Clojure: linters, soporte de editores y mejoras de experiencia.',
    'contributions.hero.title': 'Contribuciones Open Source',
    'contributions.hero.subtitle':
      'Construyendo mejores herramientas y experiencias para desarrolladores a través de contribuciones significativas a proyectos open source',
    'contributions.stats.merged': 'Contribuciones Fusionadas',
    'contributions.stats.merged.desc':
      'Mejoras de código listas para producción',
    'contributions.stats.projects': 'Proyectos',
    'contributions.stats.projects.desc':
      'Herramientas open source ampliamente utilizadas',
    'contributions.stats.technologies': 'Tecnologías',
    'contributions.section.projects': 'Proyectos',
    'contributions.section.timeline': 'Línea de Tiempo de Contribuciones',
    'contributions.section.subtitle':
      'Contribuyendo a {projects} proyectos con {contributions} contribuciones',
    'contributions.card.contributions': 'Contribución',
    'contributions.card.contributions_plural': 'Contribuciones',
    'contributions.card.more': 'más',
    'contributions.card.repository': 'Repositorio',
    'contributions.card.website': 'Sitio Web',
    'contributions.card.viewPR': 'Ver Pull Request',
    'contributions.timeline.viewPR': 'Ver PR →',
    'contributions.home.viewAll': 'Ver Todas las Contribuciones',
    'contributions.stats.contributions': 'Contribuciones',
    'contributions.filter.all': 'Todos los Proyectos',
    'contributions.filter.search': 'Buscar contribuciones...',
    'contributions.card.showMore': 'Ver {count} más',
    'contributions.card.showLess': 'Ver menos',
  },
  eu: {
    'meta.title': 'Jon Ramos — Programatzailea eta web garatzailea Gipuzkoan',
    'meta.description':
      'Programatzailea Urnietan (Gipuzkoa). Web orri azkarrak Donostia inguruko negozioentzat, eta web aplikazioak Clojure eta ClojureScript-en.',

    'nav.home': 'Hasiera',
    'nav.experience': 'Esperientzia',
    'nav.projects': 'Proiektuak',
    'nav.contributions': 'Ekarpenak',
    'nav.contact': 'Kontaktua',

    'hero.greeting': 'Kaixo!',
    'hero.title': 'Programatzailea Urnietan, Gipuzkoan',
    'hero.description':
      'Web orri azkarrak egiten ditut Gipuzkoako negozioentzat, eta web aplikazio konplexuak Clojuren. Gaur egun Naiha eraikitzen ari naiz, osasun plataforma bat,',
    'hero.descAfter': 'n.',
    'hero.doorLocal': 'Negozio bat daukat eta web bat behar dut',
    'hero.doorTech': 'Clojuren programatzen duen norbait bilatzen dut',
    'hero.replHint':
      'Benetako Clojure REPL bat da. Idatzi (help) eta sakatu Enter.',
    'nav.local': 'Negozioentzako webak',
    'nav.work': 'Softwarea',
    'hero.viewWork': 'Lanak Ikusi',
    'hero.contactMe': 'Kontaktatu',
    'hero.available': 'Proiektu berrietarako prest',

    'experience.title': 'Esperientzia',
    'experience.present': 'Orain',
    'experience.role': 'Software Ingeniaria',
    'experience.ubikare_desc':
      'Naiha garatzen, Clojure, ClojureScript eta Datomic erabiliz soratutako osasun plataforma bat. Sektoreko datuetan oinarritutako aplikazioak garatzen ditugu.',
    'experience.highlight1':
      'Naiha hasieratik bukaerara eraikitzen: datu-eredutik interfazera.',
    'experience.highlight2':
      'Osasun sektorerako sistema sendoak eta datuetan oinarritutakoak diseinatzen.',
    'experience.highlight3':
      'Taldeak erabiltzen dituen kode irekiko tresnak hobetzen.',

    'publications.title': 'Ikerketa',
    'publications.intro':
      'Ubikareko lanaren bidez, COVID-19aren Espainiako ZIU Sareak egindako zentro anitzeko ikerketa klinikoa babestu zuten teknologia- eta datu-azpiegituretan lagundu nuen.',
    'publications.association':
      'COVID-19aren Espainiako ZIU Sarea, Ubikarerekin',
    'publications.link': 'Ireki PMC-n',
    'publications.listLabel': 'Argitalpen zientifikoak',

    'projects.title': 'Nire proiektuak',
    'projects.subtitle': 'Eraiki eta lagundu ditudan proiektuen aukeraketa bat',
    'projects.featured': 'Nabarmendua',
    'projects.naiha_desc':
      'Ubikaren garatutako osasun plataforma. Clojure, ClojureScript eta Datomic erabiliz eraikia datuen kudeaketa sendorako.',
    'projects.laguntza_desc':
      'Fisioterapia klinika profesionalaren webgunea. Eleaniztuna (euskera/gaztelania) Leaflet mapa interaktiboekin, GSAP animazioekin eta irisgarritasun-lehentasunezko diseinuarekin.',
    'projects.besaide_desc':
      'Besaide Mendizale Elkartearen webgune eleaniztuna (euskara/gaztelania). Astro eta Keystatic CMS-rekin eraikia, i18n bideratzearekin, irisgarritasunean oinarritutako osagaiekin eta JavaScript gabeko nabigazioarekin.',
    'projects.colortools_desc':
      'Clojure eta ClojureScript-erako kolore liburutegia: bihurketa, paletak, gai irisgarriak eta WCAG kontrastea, demo interaktiboarekin.',
    'projects.jon_nested_menu_desc':
      'MUI menu habiaratuen liburutegia Reagent/ClojureScript eta React-erako: zabaltzeko menuak, eskuin-klik testuinguru-menua, elementu bakoitzeko ikonoak, etiketa pertsonalizatuak eta teklatu bidezko nabigazioa. Clojars eta npm-en argitaratua.',
    'projects.norwegian_singles_desc':
      'Entrenamendu planak sortzeko aplikazioa, Norwegian Singles metodologian oinarritua. Astro eta React bidez eraikia.',
    'projects.newton_desc':
      'Interpolazio polinomikoaren gida hezitzailea: Newton, Lagrange, barizentriko eta spline kubikoak Python-en, Newton-en demo interaktiboarekin JavaScript-en. Chebyshev nodoak, Runge fenomenoa eta benchmark-ak aztertzen ditu.',

    'contact.title': 'Nire harremanetarako datuak',
    'contact.text':
      'Software garatzailea Urnietan, Euskal Herrian. Konexio profesionaletarako eta eztabaida teknikoetarako eskuragarri.',
    'contact.email': 'Emaila:',
    'contact.github': 'GitHub:',
    'contact.linkedin': 'LinkedIn:',
    'contact.form.name': 'Izena',
    'contact.form.email': 'Emaila',
    'contact.form.message': 'Mezua',
    'contact.form.title': 'Kontaktatu zuzenean',
    'contact.form.description':
      'Galdera edo proposamenik? Bete formularioa eta laster erantzungo dizut.',
    'contact.form.send': 'Bidali mezua',
    'contact.form.sending': 'Bidaltzen…',
    'contact.form.success': 'Mezua ondo bidali da!',
    'contact.form.error': 'Errorea mezua bidaltzean. Saiatu berriro.',

    'footer.rights': 'Eskubide guztiak erreserbatuta.',
    'footer.backToTop': 'Gora itzuli',
    'footer.siteLinks': 'Atalak',
    'contributions.home.subtitle':
      'Garatzaileentzako tresnak eraikitzen eta hobetzen kode irekiaren bidez',
    'themeSwitcher.toggleTheme': 'Gaia aldatu',
    'email.membership.subject.membership': 'Bazkidetza Eskaera',
    'email.membership.subject.federation': 'Federazio Eskaera',
    'email.membership.subject.membership-and-federation':
      'Bazkidetza eta Federazio Eskaera',

    'contributions.page.title': 'Kode Irekiko Ekarpenak | Jon Ramos',
    'contributions.page.description':
      'clj-kondo, Calva, Logseq, Kit eta beste Clojure tresna batzuetan onartutako pull requestak: linterrak, editoreen euskarria eta hobekuntzak.',
    'contributions.hero.title': 'Kode Irekiko Ekarpenak',
    'contributions.hero.subtitle':
      'Garatzaile-tresna eta esperientzia hobeak eraikitzen kode irekiko proiektuetara ekapen esanguratsuak eginez',
    'contributions.stats.merged': 'Bateratutako Ekarpenak',
    'contributions.stats.merged.desc':
      'Produkziora prest dauden kode-hobekuntzak',
    'contributions.stats.projects': 'Proiektuak',
    'contributions.stats.projects.desc':
      'Erabili asko diren kode irekiko tresnak',
    'contributions.stats.technologies': 'Teknologiak',
    'contributions.section.projects': 'Proiektuak',
    'contributions.section.timeline': 'Ekarpenen Denbora-lerroa',
    'contributions.section.subtitle':
      '{projects} proiekturi laguntzen {contributions} ekarpenekin',
    'contributions.card.contributions': 'Ekarpena',
    'contributions.card.contributions_plural': 'Ekarpenak',
    'contributions.card.more': 'gehiago',
    'contributions.card.repository': 'Biltegia',
    'contributions.card.website': 'Webgunea',
    'contributions.card.viewPR': 'Pull Request-a Ikusi',
    'contributions.timeline.viewPR': 'PR-a ikusi →',
    'contributions.home.viewAll': 'Ekarpen Guztiak Ikusi',
    'contributions.stats.contributions': 'Ekarpenak',
    'contributions.filter.all': 'Proiektu Guztiak',
    'contributions.filter.search': 'Bilatu ekarpenak...',
    'contributions.card.showMore': 'Ikusi {count} gehiago',
    'contributions.card.showLess': 'Ikusi gutxiago',
  },
} as const;

export type Langs = keyof typeof ui;
export type UIKeys = keyof typeof ui.en;

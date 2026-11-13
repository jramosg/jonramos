import type { Langs } from '@/i18n/ui';

/**
 * Copy for the local-business landing page (web design for shops,
 * bars, clinics and associations in Gipuzkoa). Kept out of ui.ts
 * because it is long-form and only this page reads it.
 */

/** Last meaningful edit of this page, for the sitemap's lastmod. */
export const localUpdated = '2026-11-13';

export const towns = [
  'Donostia',
  'Urnieta',
  'Hernani',
  'Andoain',
  'Lasarte-Oria',
  'Astigarraga',
  'Usurbil',
  'Tolosa',
  'Errenteria',
  'Pasaia',
  'Oiartzun',
  'Lezo',
  'Irun',
  'Hondarribia',
  'Zarautz',
  'Orio',
  'Villabona',
  'Azpeitia',
  'Beasain',
  'Arrasate',
];

interface Step {
  title: string;
  body: string;
}

interface Faq {
  q: string;
  a: string;
}

interface Work {
  name: string;
  place: string;
  href: string;
  image: 'laguntza' | 'besaide';
  body: string;
  /** Scores 100 in every Lighthouse category; linked as proof. */
  perfect?: boolean;
}

interface SpeedTest {
  label: string;
  placeholder: string;
  button: string;
  loading: string;
  resultLabel: string;
  /** Under 50, 50 to 89, 90 and over. */
  verdicts: [string, string, string];
  cta: string;
  invalid: string;
  busy: string;
  /** Carried into the contact form; {url} and {score} are filled in. */
  message: string;
}

export interface LocalCopy {
  metaTitle: string;
  metaDescription: string;
  h1: string[];
  townsLead: string;
  /** Town names as they read after townsLead (Basque declines them). */
  rotatingTowns: string[];
  lede: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** A few sentences that ink in word by word on scroll. */
  about: string;
  aboutLink: string;
  /** Lead-in to the PageSpeed links of the sites in `work`. */
  speedProof: string;
  test: SpeedTest;
  /** The one-line prompt docked at the bottom of the screen. */
  barLabel: string;
  barPlaceholder: string;
  barButton: string;
  speedTitle: string;
  speedBody: string;
  stepsTitle: string;
  steps: Step[];
  includesTitle: string;
  includes: string[];
  workTitle: string;
  workVisit: string;
  work: Work[];
  townsTitle: string;
  townsBody: string;
  faqTitle: string;
  faq: Faq[];
  contactTitle: string;
  contactBody: string;
  contactOr: string;
  serviceName: string;
  serviceDescription: string;
}

export const localCopy: Record<Langs, LocalCopy> = {
  es: {
    metaTitle: 'Diseño de páginas web en Donostia y Gipuzkoa | Jon Ramos',
    metaDescription:
      'Diseño de páginas web para comercios, bares, clínicas y asociaciones de Donostia-San Sebastián, Urnieta y toda Gipuzkoa. En euskera y castellano, rápidas y hechas para Google.',
    h1: ['Páginas web', 'para negocios', 'de Gipuzkoa'],
    townsLead: 'Para tu negocio en',
    rotatingTowns: [
      'Donostia',
      'Urnieta',
      'Hernani',
      'Andoain',
      'Lasarte-Oria',
      'Astigarraga',
      'Tolosa',
      'Errenteria',
      'Zarautz',
      'Hondarribia',
      'Irun',
      'Usurbil',
    ],
    lede: 'Diseño y programo la web de tu comercio, bar, taller, clínica o asociación en Donostia-San Sebastián y toda Gipuzkoa: rápida en el móvil, en euskera y castellano, y pensada para que te encuentren en Google.',
    ctaPrimary: 'Cuéntame tu proyecto',
    ctaSecondary: 'Ver webs que he hecho',
    about:
      'Soy Jon y vivo en Urnieta. En mi día a día programo Naiha, una plataforma sanitaria, y colaboro en herramientas de código abierto que usan programadores de todo el mundo. La web de tu negocio la hago con ese mismo cuidado.',
    aboutLink: 'Ver mi trabajo como programador',
    speedProof: 'Compruébalo tú en PageSpeed:',
    test: {
      label: '¿Ya tienes web? Mídela aquí',
      placeholder: 'tunegocio.com',
      button: 'Medir',
      loading:
        'Google está abriendo tu web en un móvil. Tarda unos 20 segundos…',
      resultLabel: 'Velocidad en el móvil',
      verdicts: [
        'Tu web va lenta en el móvil. Ahí se pierden clientes antes de ver nada.',
        'Tu web se puede acelerar bastante en el móvil.',
        'Tu web va rápida. Enhorabuena a quien la hizo.',
      ],
      cta: 'Hablemos de tu web',
      invalid:
        'No he podido medir esa dirección. Comprueba que está bien escrita.',
      busy: 'Ahora mismo no puedo medirla. Prueba dentro de un rato.',
      message:
        'Mi web actual es {url} y saca {score} de 100 en velocidad en el móvil.',
    },
    barLabel: 'Cuéntame tu negocio en una línea',
    barPlaceholder: 'Tengo una panadería en Hernani y quiero…',
    barButton: 'Seguir',
    speedTitle: 'Webs que cargan al momento',
    speedBody:
      'Mis webs sacan 100 en Lighthouse, la herramienta de Google que mide velocidad, accesibilidad y buenas prácticas. Una web rápida retiene más clientes y Google la posiciona mejor.',
    stepsTitle: 'Así trabajamos',
    steps: [
      {
        title: 'Hablamos',
        body: 'Un café en Urnieta o en Donostia, o una llamada. Me cuentas qué haces, para quién y qué quieres conseguir con la web.',
      },
      {
        title: 'Precio cerrado',
        body: 'Una web que presenta tu negocio cuesta menos que una con tienda online o reservas, que lleva más trabajo detrás. Antes de empezar sabes exactamente lo que vas a pagar.',
      },
      {
        title: 'Diseño a tu medida',
        body: 'Nada de plantillas. La web se parece a tu negocio, con tus fotos, tus colores y tu manera de hablar.',
      },
      {
        title: 'Te ponemos en Google',
        body: 'Publico la web, la doy de alta en Google y preparo tu ficha de Google Business Profile para que salgas en el mapa.',
      },
      {
        title: 'Y después, sigo aquí',
        body: '¿Cambia el horario, la carta o una foto? Me escribes y lo cambio. Estoy a un paso.',
      },
    ],
    includesTitle: 'Qué incluye tu web',
    includes: [
      'Diseño propio, pensado primero para el móvil',
      'Versión en euskera y en castellano',
      'Carga casi instantánea',
      'Alta en Google y ficha de Google Business Profile',
      'Formulario de contacto, WhatsApp o reservas',
      'Horarios, mapa y cómo llegar',
      'Un panel sencillo para cambiar textos y fotos, si lo quieres',
      'El dominio y la web son tuyos',
    ],
    workTitle: 'Webs que he hecho',
    workVisit: 'Visitar la web',
    work: [
      {
        name: 'Laguntza Fisioterapia',
        place: 'Urnieta',
        href: 'https://laguntzafisioterapia.com/',
        image: 'laguntza',
        perfect: true,
        body: 'Clínica de fisioterapia y osteopatía. Web en euskera y castellano con servicios, mapa y cita previa.',
      },
      {
        name: 'Besaide Mendizale Elkartea',
        place: 'Arrasate',
        href: 'https://besaide.eus/',
        image: 'besaide',
        body: 'Asociación de montaña fundada en 1957. Agenda de salidas, noticias e inscripciones que la propia asociación actualiza.',
      },
    ],
    townsTitle: 'En toda Gipuzkoa',
    townsBody:
      'Vivo en Urnieta, al lado de Donostia-San Sebastián, así que puedo pasar por tu negocio para conocerlo. También trabajo en remoto con cualquier sitio.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cuánto cuesta una página web?',
        a: 'Depende de lo que tenga que hacer la web. Si solo presenta tu negocio (quién eres, qué ofreces, dónde estás y cómo contactar), es más sencilla y más barata. Si además tiene que vender, coger reservas o guardar datos de clientes, lleva más trabajo detrás y cuesta más. La primera conversación es gratis y después te doy un precio cerrado.',
      },
      {
        q: '¿Cuánto se tarda en hacerla?',
        a: 'Una web sencilla está lista en pocas semanas. Lo que más suele tardar es reunir los textos y las fotos, y en eso también te ayudo.',
      },
      {
        q: 'Ya tengo Instagram. ¿Necesito una web?',
        a: 'Instagram va bien para el día a día, pero cuando alguien busca en Google "fisioterapeuta en Urnieta" o "bar en Hernani", lo que aparece son webs y fichas de Google Business Profile.',
      },
      {
        q: '¿Me ayudas a salir en Google Maps?',
        a: 'Sí. Creo o reviso tu ficha de Google Business Profile, la enlazo con la web y te explico cómo conseguir reseñas de tus clientes.',
      },
      {
        q: '¿Podré cambiar cosas yo?',
        a: 'Sí, si quieres te dejo un panel sencillo para editar textos, fotos o la carta. Y si prefieres no tocar nada, me lo pides a mí.',
      },
      {
        q: '¿Haces webs en euskera?',
        a: 'Sí, siempre que lo necesites. Hablo euskera y castellano, y cada idioma tiene su versión completa, no una traducción automática.',
      },
    ],
    contactTitle: 'Cuéntame tu proyecto',
    contactBody:
      'Escríbeme qué negocio tienes y qué necesitas. Te respondo en menos de un día y, cuando sepa qué necesitas, te doy un precio cerrado, sin compromiso.',
    contactOr: 'O escríbeme directamente a',
    serviceName: 'Diseño de páginas web en Gipuzkoa',
    serviceDescription:
      'Diseño y desarrollo de páginas web para comercios, hostelería, clínicas y asociaciones de Gipuzkoa, en euskera y castellano.',
  },

  eu: {
    metaTitle: 'Web orrien diseinua Donostian eta Gipuzkoan | Jon Ramos',
    metaDescription:
      'Web orrien diseinua Donostia, Urnieta eta Gipuzkoa osoko denda, taberna, klinika eta elkarteentzat. Euskaraz eta gaztelaniaz, azkarrak eta Googlerako pentsatuak.',
    h1: ['Web orriak', 'Gipuzkoako', 'negozioentzat'],
    townsLead: 'Zure negozioarentzat',
    rotatingTowns: [
      'Donostian',
      'Urnietan',
      'Hernanin',
      'Andoainen',
      'Lasarte-Orian',
      'Astigarragan',
      'Tolosan',
      'Errenterian',
      'Zarautzen',
      'Hondarribian',
      'Irunen',
      'Usurbilen',
    ],
    lede: 'Zure denda, taberna, tailer, klinika edo elkartearen weba diseinatu eta programatzen dut, Donostian eta Gipuzkoa osoan: mugikorrean azkarra, euskaraz eta gaztelaniaz, eta Googlen aurki zaitzaten pentsatua.',
    ctaPrimary: 'Kontatu zure proiektua',
    ctaSecondary: 'Egin ditudan webak ikusi',
    about:
      'Jon naiz eta Urnietan bizi naiz. Egunerokoan Naiha osasun-plataforma programatzen dut, eta mundu osoko programatzaileek erabiltzen dituzten kode irekiko tresnetan laguntzen dut. Zure negozioaren weba arreta berarekin egiten dut.',
    aboutLink: 'Ikusi nire lana programatzaile gisa',
    speedProof: 'Egiaztatu zuk zeuk PageSpeeden:',
    test: {
      label: 'Baduzu weba? Neurtu hemen',
      placeholder: 'zurenegozioa.eus',
      button: 'Neurtu',
      loading:
        'Google zure weba mugikor batean irekitzen ari da. 20 segundo inguru behar ditu…',
      resultLabel: 'Abiadura mugikorrean',
      verdicts: [
        'Zure weba motel dabil mugikorrean. Hor galtzen dira bezeroak, ezer ikusi aurretik.',
        'Zure weba dezente azkartu daiteke.',
        'Zure weba azkar dabil. Zorionak egin zuenari.',
      ],
      cta: 'Hitz egin dezagun zure webaz',
      invalid:
        'Ezin izan dut helbide hori neurtu. Egiaztatu ondo idatzita dagoela.',
      busy: 'Oraintxe ezin dut neurtu. Saiatu geroxeago.',
      message:
        'Nire oraingo weba {url} da eta 100etik {score} ateratzen du mugikorreko abiaduran.',
    },
    barLabel: 'Kontatu zure negozioa lerro batean',
    barPlaceholder: 'Okindegi bat dut Hernanin eta…',
    barButton: 'Jarraitu',
    speedTitle: 'Berehala kargatzen diren webak',
    speedBody:
      'Nire webek 100 ateratzen dute Lighthousen, abiadura, irisgarritasuna eta jardunbide egokiak neurtzen dituen Googleren tresnan. Web azkar batek bezero gehiago mantentzen ditu, eta Googlek hobeto kokatzen du.',
    stepsTitle: 'Horrela egiten dugu lan',
    steps: [
      {
        title: 'Hitz egingo dugu',
        body: 'Kafe bat Urnietan edo Donostian, edo dei bat. Zer egiten duzun, norentzat eta webarekin zer lortu nahi duzun kontatuko didazu.',
      },
      {
        title: 'Prezio itxia',
        body: 'Zure negozioa aurkezten duen web batek gutxiago balio du online denda edo erreserbak dituen batek baino, lan gehiago baitu atzean. Hasi aurretik badakizu zehazki zenbat ordainduko duzun.',
      },
      {
        title: 'Zuretzat diseinua',
        body: 'Txantiloirik ez. Webak zure negozioaren itxura du: zure argazkiak, zure koloreak eta zure hitz egiteko modua.',
      },
      {
        title: 'Googlen jarriko zaitugu',
        body: 'Weba argitaratu, Googlen alta eman eta zure Google Business Profile fitxa prestatzen dut, mapan ager zaitezen.',
      },
      {
        title: 'Eta gero, hemen jarraitzen dut',
        body: 'Ordutegia, karta edo argazki bat aldatu behar da? Idatzi eta aldatuko dut. Gertu nago.',
      },
    ],
    includesTitle: 'Zer dakar zure webak',
    includes: [
      'Diseinu propioa, mugikorrerako pentsatua lehenik',
      'Euskarazko eta gaztelaniazko bertsioa',
      'Ia berehalako karga',
      'Googlen alta eta Google Business Profile fitxa',
      'Harremanetarako formularioa, WhatsApp edo erreserbak',
      'Ordutegiak, mapa eta nola iritsi',
      'Testuak eta argazkiak aldatzeko panel erraz bat, nahi baduzu',
      'Domeinua eta weba zureak dira',
    ],
    workTitle: 'Egin ditudan webak',
    workVisit: 'Weba bisitatu',
    work: [
      {
        name: 'Laguntza Fisioterapia',
        place: 'Urnieta',
        href: 'https://laguntzafisioterapia.com/',
        image: 'laguntza',
        perfect: true,
        body: 'Fisioterapia eta osteopatia klinika. Weba euskaraz eta gaztelaniaz, zerbitzuekin, maparekin eta hitzordu-eskaerarekin.',
      },
      {
        name: 'Besaide Mendizale Elkartea',
        place: 'Arrasate',
        href: 'https://besaide.eus/',
        image: 'besaide',
        body: '1957an sortutako mendi elkartea. Irteeren agenda, albisteak eta izen-emateak, elkarteak berak eguneratzen dituenak.',
      },
    ],
    townsTitle: 'Gipuzkoa osoan',
    townsBody:
      'Urnietan bizi naiz, Donostiaren ondoan, beraz zure negoziotik pasa naiteke ezagutzeko. Urrunetik ere lan egiten dut edozein lekurekin.',
    faqTitle: 'Ohiko galderak',
    faq: [
      {
        q: 'Zenbat balio du web orri batek?',
        a: 'Webak egin behar duenaren araberakoa da. Zure negozioa aurkeztu besterik egiten ez badu (nor zaren, zer eskaintzen duzun, non zauden eta nola jarri harremanetan), errazagoa eta merkeagoa da. Saldu, erreserbak hartu edo bezeroen datuak gorde behar baditu, lan gehiago du atzean eta gehiago balio du. Lehen elkarrizketa doakoa da, eta ondoren prezio itxia emango dizut.',
      },
      {
        q: 'Zenbat denbora behar da?',
        a: 'Web erraz bat aste gutxitan egoten da prest. Gehien kostatzen dena testuak eta argazkiak biltzea izan ohi da, eta horretan ere laguntzen dizut.',
      },
      {
        q: 'Instagram badut. Web bat behar dut?',
        a: 'Instagram ondo dago egunerokorako, baina norbaitek Googlen "fisioterapeuta Urnietan" edo "taberna Hernanin" bilatzen duenean, webak eta Google Business Profile fitxak agertzen dira.',
      },
      {
        q: 'Google Mapsen agertzen lagunduko didazu?',
        a: 'Bai. Zure Google Business Profile fitxa sortu edo berrikusten dut, webarekin lotzen dut eta bezeroen iritziak nola lortu azaltzen dizut.',
      },
      {
        q: 'Neuk aldatu ahal izango ditut gauzak?',
        a: 'Bai, nahi baduzu testuak, argazkiak edo karta editatzeko panel erraz bat utziko dizut. Ezer ukitu nahi ez baduzu, niri eskatu.',
      },
      {
        q: 'Webak euskaraz egiten dituzu?',
        a: 'Bai, beti. Euskaraz eta gaztelaniaz hitz egiten dut, eta hizkuntza bakoitzak bere bertsio osoa du, ez itzulpen automatiko bat.',
      },
    ],
    contactTitle: 'Kontatu zure proiektua',
    contactBody:
      'Idatzi zer negozio duzun eta zer behar duzun. Egun bat baino lehen erantzungo dizut eta, zer behar duzun jakitean, prezio itxia emango dizut, konpromisorik gabe.',
    contactOr: 'Edo idatzi zuzenean helbide honetara:',
    serviceName: 'Web orrien diseinua Gipuzkoan',
    serviceDescription:
      'Web orrien diseinua eta garapena Gipuzkoako denda, ostalaritza, klinika eta elkarteentzat, euskaraz eta gaztelaniaz.',
  },

  en: {
    metaTitle: 'Web design in San Sebastián & Gipuzkoa | Jon Ramos',
    metaDescription:
      'Web design for shops, bars, clinics and associations in Donostia-San Sebastián, Urnieta and all of Gipuzkoa. In Basque and Spanish, fast, and built to be found on Google.',
    h1: ['Websites', 'for businesses', 'in Gipuzkoa'],
    townsLead: 'For your business in',
    rotatingTowns: [
      'Donostia',
      'Urnieta',
      'Hernani',
      'Andoain',
      'Lasarte-Oria',
      'Astigarraga',
      'Tolosa',
      'Errenteria',
      'Zarautz',
      'Hondarribia',
      'Irun',
      'Usurbil',
    ],
    lede: 'I design and build the website for your shop, bar, workshop, clinic or association in Donostia-San Sebastián and across Gipuzkoa: fast on phones, in Basque and Spanish, and built so people find you on Google.',
    ctaPrimary: 'Tell me about your project',
    ctaSecondary: "See websites I've built",
    about:
      "I'm Jon and I live in Urnieta. My day job is building Naiha, a healthcare platform, and I contribute to open-source tools used by developers around the world. Your business's website gets the same care.",
    aboutLink: 'See my work as a software engineer',
    speedProof: 'Check it yourself on PageSpeed:',
    test: {
      label: 'Already have a website? Measure it here',
      placeholder: 'yourbusiness.com',
      button: 'Measure',
      loading:
        'Google is opening your site on a phone. It takes about 20 seconds…',
      resultLabel: 'Speed on a phone',
      verdicts: [
        'Your site is slow on phones. That is where customers leave before seeing anything.',
        'Your site could be a good deal faster on phones.',
        'Your site is fast. Well done to whoever built it.',
      ],
      cta: "Let's talk about your website",
      invalid: "I couldn't measure that address. Check it is spelled right.",
      busy: "I can't measure it right now. Try again in a while.",
      message:
        'My current website is {url} and it scores {score} out of 100 for speed on phones.',
    },
    barLabel: 'Tell me about your business in one line',
    barPlaceholder: 'I run a bakery in Hernani and I want…',
    barButton: 'Continue',
    speedTitle: 'Websites that load instantly',
    speedBody:
      "My websites score 100 on Lighthouse, Google's tool for measuring speed, accessibility and best practices. A fast site keeps more customers, and Google ranks it higher.",
    stepsTitle: 'How we work',
    steps: [
      {
        title: 'We talk',
        body: 'A coffee in Urnieta or Donostia, or a call. You tell me what you do, who for, and what you want the website to achieve.',
      },
      {
        title: 'A fixed price',
        body: "A site that presents your business costs less than one with an online shop or bookings, which takes more work behind the scenes. Before we start you know exactly what you'll pay.",
      },
      {
        title: 'Designed for you',
        body: 'No templates. The site looks like your business, with your photos, your colours and your way of talking.',
      },
      {
        title: 'We put you on Google',
        body: 'I publish the site, register it with Google and set up your Google Business Profile so you show up on the map.',
      },
      {
        title: "And after that, I'm still here",
        body: 'New opening hours, a new menu, a new photo? Send me a message and I change it. I live nearby.',
      },
    ],
    includesTitle: "What's included",
    includes: [
      'A design of your own, built for phones first',
      'Basque and Spanish versions',
      'Near-instant loading',
      'Google registration and a Google Business Profile',
      'Contact form, WhatsApp or bookings',
      'Opening hours, map and directions',
      'A simple panel to edit text and photos, if you want one',
      'You own the domain and the website',
    ],
    workTitle: "Websites I've built",
    workVisit: 'Visit the website',
    work: [
      {
        name: 'Laguntza Fisioterapia',
        place: 'Urnieta',
        href: 'https://laguntzafisioterapia.com/',
        image: 'laguntza',
        perfect: true,
        body: 'Physiotherapy and osteopathy clinic. Basque and Spanish site with services, map and appointment requests.',
      },
      {
        name: 'Besaide Mendizale Elkartea',
        place: 'Arrasate',
        href: 'https://besaide.eus/',
        image: 'besaide',
        body: 'Mountaineering club founded in 1957. Outing calendar, news and sign-ups that the club updates itself.',
      },
    ],
    townsTitle: 'All over Gipuzkoa',
    townsBody:
      'I live in Urnieta, just outside Donostia-San Sebastián, so I can drop by your business to get to know it. I also work remotely with anyone, anywhere.',
    faqTitle: 'Questions',
    faq: [
      {
        q: 'How much does a website cost?',
        a: 'It depends on what the website has to do. If it only presents your business (who you are, what you offer, where you are and how to get in touch), it is simpler and cheaper. If it also has to sell, take bookings or store customer details, there is more work behind it and it costs more. The first conversation is free, and after it I give you a fixed price.',
      },
      {
        q: 'How long does it take?',
        a: 'A simple site is ready in a few weeks. What usually takes longest is gathering the text and photos, and I help with that too.',
      },
      {
        q: 'I already have Instagram. Do I need a website?',
        a: 'Instagram is great day to day, but when someone searches Google for "physio in Urnieta" or "bar in Hernani", what comes up are websites and Google Business Profiles.',
      },
      {
        q: 'Can you help me show up on Google Maps?',
        a: 'Yes. I create or review your Google Business Profile, link it to the website and show you how to get reviews from your customers.',
      },
      {
        q: 'Will I be able to change things myself?',
        a: "Yes. If you like, I'll set up a simple panel for editing text, photos or your menu. If you'd rather not touch anything, just ask me.",
      },
      {
        q: 'Do you build websites in Basque?',
        a: 'Yes, whenever you need it. I speak Basque and Spanish, and each language gets a full version, not a machine translation.',
      },
    ],
    contactTitle: 'Tell me about your project',
    contactBody:
      "Write to me about your business and what you need. I'll reply within a day and, once I know what you need, give you a fixed price with no obligation.",
    contactOr: 'Or email me directly at',
    serviceName: 'Web design in Gipuzkoa',
    serviceDescription:
      'Website design and development for shops, hospitality, clinics and associations in Gipuzkoa, in Basque and Spanish.',
  },
};

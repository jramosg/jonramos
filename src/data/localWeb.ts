import type { Langs } from '@/i18n/ui';

/**
 * Copy for the local-business landing page (web design for shops,
 * bars, clinics and associations in Gipuzkoa). Kept out of ui.ts
 * because it is long-form and only this page reads it.
 */

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
    metaTitle: 'Páginas web para negocios en Gipuzkoa | Jon Ramos, Urnieta',
    metaDescription:
      'Páginas web para comercios, bares, clínicas y asociaciones de Donostia, Urnieta y toda Gipuzkoa. En euskera y castellano, rápidas y pensadas para Google.',
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
    lede: 'Soy Jon, programador de Urnieta. Hago la web de tu comercio, bar, taller, clínica o asociación: rápida en el móvil, en euskera y castellano, y pensada para que te encuentren en Google.',
    ctaPrimary: 'Cuéntame tu proyecto',
    ctaSecondary: 'Ver webs que he hecho',
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
        body: 'Antes de empezar sabes exactamente lo que vas a pagar y qué incluye.',
      },
      {
        title: 'Diseño a tu medida',
        body: 'Nada de plantillas. La web se parece a tu negocio, con tus fotos, tus colores y tu manera de hablar.',
      },
      {
        title: 'Euskera y castellano',
        body: 'Las dos versiones bien hechas, cada una con su dirección, para que Google enseñe a cada cliente la suya.',
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
      'Vivo en Urnieta, así que puedo pasar por tu negocio para conocerlo. También trabajo en remoto con cualquier sitio.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Cuánto cuesta una página web?',
        a: 'Depende de lo que necesites: no es lo mismo una web de presentación que una con reservas o tienda. Después de la primera conversación, que es gratis, te doy un precio cerrado.',
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
      'Escríbeme qué negocio tienes y qué necesitas. Te respondo en menos de un día y quedamos para hablarlo.',
    contactOr: 'O escríbeme directamente a',
    serviceName: 'Diseño de páginas web en Gipuzkoa',
    serviceDescription:
      'Diseño y desarrollo de páginas web para comercios, hostelería, clínicas y asociaciones de Gipuzkoa, en euskera y castellano.',
  },

  eu: {
    metaTitle: 'Web orriak Gipuzkoako negozioentzat | Jon Ramos, Urnieta',
    metaDescription:
      'Web orriak Donostia, Urnieta eta Gipuzkoa osoko denda, taberna, klinika eta elkarteentzat. Euskaraz eta gaztelaniaz, azkarrak eta Googlerako pentsatuak.',
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
    lede: 'Jon naiz, Urnietako programatzailea. Zure denda, taberna, tailer, klinika edo elkartearen weba egiten dut: mugikorrean azkarra, euskaraz eta gaztelaniaz, eta Googlen aurki zaitzaten pentsatua.',
    ctaPrimary: 'Kontatu zure proiektua',
    ctaSecondary: 'Egin ditudan webak ikusi',
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
        body: 'Hasi aurretik badakizu zenbat ordainduko duzun eta zer sartzen den.',
      },
      {
        title: 'Zuretzat diseinua',
        body: 'Txantiloirik ez. Webak zure negozioaren itxura du: zure argazkiak, zure koloreak eta zure hitz egiteko modua.',
      },
      {
        title: 'Euskaraz eta gaztelaniaz',
        body: 'Bi bertsioak ondo eginda, bakoitza bere helbidearekin, Googlek bezero bakoitzari berea erakuts diezaion.',
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
      'Urnietan bizi naiz, beraz zure negoziotik pasa naiteke ezagutzeko. Urrunetik ere lan egiten dut edozein lekurekin.',
    faqTitle: 'Ohiko galderak',
    faq: [
      {
        q: 'Zenbat balio du web orri batek?',
        a: 'Behar duzunaren araberakoa da: ez da berdina aurkezpen-web bat edo erreserbak edo denda dituena. Lehen elkarrizketaren ondoren, doakoa dena, prezio itxia emango dizut.',
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
      'Idatzi zer negozio duzun eta zer behar duzun. Egun bat baino lehen erantzungo dizut eta hitz egiteko geratuko gara.',
    contactOr: 'Edo idatzi zuzenean helbide honetara:',
    serviceName: 'Web orrien diseinua Gipuzkoan',
    serviceDescription:
      'Web orrien diseinua eta garapena Gipuzkoako denda, ostalaritza, klinika eta elkarteentzat, euskaraz eta gaztelaniaz.',
  },

  en: {
    metaTitle: 'Websites for local businesses in Gipuzkoa | Jon Ramos',
    metaDescription:
      'Websites for shops, bars, clinics and associations in Donostia, Urnieta and all of Gipuzkoa. In Basque and Spanish, fast, and built to be found on Google.',
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
    lede: "I'm Jon, a software engineer from Urnieta. I build the website for your shop, bar, workshop, clinic or association: fast on phones, in Basque and Spanish, and built so people find you on Google.",
    ctaPrimary: 'Tell me about your project',
    ctaSecondary: "See websites I've built",
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
        body: "Before we start you know exactly what you'll pay and what's included.",
      },
      {
        title: 'Designed for you',
        body: 'No templates. The site looks like your business, with your photos, your colours and your way of talking.',
      },
      {
        title: 'Basque and Spanish',
        body: 'Both versions done properly, each at its own address, so Google shows every customer the right one.',
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
      'I live in Urnieta, so I can drop by your business to get to know it. I also work remotely with anyone, anywhere.',
    faqTitle: 'Questions',
    faq: [
      {
        q: 'How much does a website cost?',
        a: "It depends on what you need: a simple presentation site isn't the same as one with bookings or a shop. After a first conversation, which is free, I give you a fixed price.",
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
      "Write to me about your business and what you need. I'll reply within a day and we'll arrange a time to talk.",
    contactOr: 'Or email me directly at',
    serviceName: 'Web design in Gipuzkoa',
    serviceDescription:
      'Website design and development for shops, hospitality, clinics and associations in Gipuzkoa, in Basque and Spanish.',
  },
};

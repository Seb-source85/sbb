// script.js - versión consolidada y reparada
function normalizeMediaUrl(url) {
    if (!url) return url;

    let cleanUrl = url.trim().replace(/\\/g, '/');

    // Normalizar rutas locales a URL absoluta
    if (/^[a-z]:\//i.test(cleanUrl) && cleanUrl.includes('/beeldmateriaal/')) {
        cleanUrl = `https://www.steigerbouwbrabant.nl/beeldmateriaal/${cleanUrl.split('/beeldmateriaal/').pop()}`;
    }

    // Solo codificar espacios, NO forzar la extensión
    return cleanUrl.replace(/ /g, '%20');
}

function getMediaPosterUrl(url) {
    if (!url) return '';
    return normalizeMediaUrl(url);
}

function getDisplayDescription(description) {
    if (!description) return '';

    const lang = (document.documentElement.lang || document.body?.dataset?.lang || '').toLowerCase();
    const isSpanish = lang === 'es' || window.location.pathname.toLowerCase().includes('_es') || window.location.href.toLowerCase().includes('/es/');

    if (!isSpanish) return description;

    let translated = description;
    const replacements = [
        { regex: /\bsteig(?:er|ers|ering|en)\b/gi, value: 'andamio' },
        { regex: /\bmetselsteiger\b/gi, value: 'andamio de albañilería' },
        { regex: /\bmetsel\b/gi, value: 'albañilería' },
        { regex: /\bnieuwbouw\b/gi, value: 'obra nueva' },
        { regex: /\brenovatie\b/gi, value: 'renovación' },
        { regex: /\bwerkvloer\b/gi, value: 'plataforma de trabajo' },
        { regex: /\binstallatie\b/gi, value: 'instalación' },
        { regex: /\btransportband\b/gi, value: 'cinta transportadora' },
        { regex: /\btrappentoren\b/gi, value: 'torre de escalera' },
        { regex: /\boverspanning\b/gi, value: 'estructura de cercha' },
        { regex: /\bbouw\b/gi, value: 'construcción' },
        { regex: /\bveilig(?:heid)?\b/gi, value: 'seguridad' },
        { regex: /\bproject\b/gi, value: 'proyecto' },
        { regex: /\btoegankelijkheid\b/gi, value: 'accesibilidad' }
    ];

    replacements.forEach(({ regex, value }) => {
        translated = translated.replace(regex, value);
    });

    return translated;
}

function cargarImagenes() {
    const imagenes = document.querySelectorAll('img'); // Seleccionar todas las imágenes de la página
    imagenes.forEach(imagen => {
        let src = imagen.getAttribute('src');
        if (src && src.includes(' ')) {
            const srcCodificado = src.replace(/ /g, '%20');
            imagen.setAttribute('src', srcCodificado);
        }

        const srcNormalizado = normalizeMediaUrl(imagen.getAttribute('src'));
        if (srcNormalizado && srcNormalizado !== imagen.getAttribute('src')) {
            imagen.setAttribute('src', srcNormalizado);
        }

        if (!imagen.getAttribute('alt') && imagen.getAttribute('src')) {
            imagen.setAttribute('alt', imagen.getAttribute('src').split('/').pop());
        }
    });
}

window.addEventListener('load', cargarImagenes);
const slideshowData = {
    industrie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-steiger-machine-onderhoud_resultaat.png",
            description: "Situación antes de colocar un andamio para mantenimiento de máquinas en entorno industrial. Construcción de andamios especializada para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-van-de-industie-steiger_resultaat.png",
            description: "Situación antes de colocar el andamio industrial. Construcción de andamios especializada para accesibilidad óptima y seguridad para la realización de mantenimiento de máquinas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Construcción de andamios para revisión de máquinas industriales. Construcción de andamios especializada para accesibilidad óptima y seguridad durante trabajos de mantenimiento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(6)_resultaat.png",
            description: "Construcción de andamios industriales para revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(7)_resultaat.png",
            description: "Construcción de andamios industriales para revisión de máquinas con dispositivos de seguridad integrados."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(8)_resultaat.png",
            description: "Construcción de andamios industriales para revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Andamio de inspección completo con plataformas de seguridad integradas para mantenimiento de depuración de agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(17)_resultaat.png",
            description: "Construcción de andamios industriales para revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(15)_resultaat.png",
            description: "Construcción de andamios industriales para revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(10)_resultaat.png",
            description: "andamio para mantenimiento de máquinas en entorno industrial. Industria alimentaria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(11)_resultaat.png",
            description: "Construcción de andamios industriales para revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-steiger-installatie-techniek-industie-plat-twee-levels-plat-dak_resultaat.png",
            description: "Situación de instalación de andamios en entorno industrial con techos planos."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Situación antes de colocar el andamio industrial en Tilburg. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },       
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Proyecto de revisión de máquinas en Helmond Industriegebied Zuid. Construcción de andamios especializada para mantenimiento de máquinas industriales."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (12)_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo para revisión de máquinas. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-14-hoogte-vrije-werkvloer_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo libre de 14 metros de altura para revisión de máquinas. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-distributie-centrum_resultaat.png",
            description: "Construcción de andamios industriales en centro de distribución. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-waalwijk-industrie-werkvloer-14-hoog-_resultaat.png",
            description: "Construcción de andamios industriales en Waalwijk con plataforma de trabajo a 14 metros de altura. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },            
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerconstructie-industriele-lopende-band_resultaat.png",
            description: "Construcción de andamios a medida para cinta transportadora industrial. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (5)_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo para revisión de máquinas. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-steigerbouw-werkvloer-met-leuningen_resultaat.png",
            description: "Construcción de andamios segura con plataforma de trabajo y barandillas para revisión de máquinas industriales. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },        
        {
            image:  "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerconstructie-binnen-distributiecentrum_resultaat.png",
            description: "Construcción de andamios industriales dentro de centro de distribución. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/32-meter-lang-3-meter-breed-14-hoog-tijdelijke-werkvoer-vrij-platform_resultaat.png",
            description: "Plataforma de trabajo temporal de 32 metros de largo, 3 metros de ancho y 14 metros de alto con plataforma libre para revisión de máquinas industriales. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/montage-werkvloer-waalwijk-steigerbouw_resultaat.png",
            description: "Montaje de plataforma de trabajo en Waalwijk para construcción de andamios industriales. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriele-steigerbouw-lopende-band-overbrugging_resultaat.png",
            description: "Construcción de andamios industriales con puente sobre cinta transportadora. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-werkvloer-distributiecentrum-transportsysteem_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo en centro de distribución para sistema de transporte. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilig-steiger-looppad-industriele-hal_resultaat.png",
            description: "Andamio seguro con pasarela en nave industrial. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steiger-interne-transportsystemen-waalwijk_resultaat.png",
            description: "Andamio a medida para sistemas de transporte internos en Waalwijk. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-industriesteiger-tussen-ruimtes-logistiek_resultaat.png",
            description: "Andamio industrial seguro entre espacios en centro logístico. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/complexe-steigerbouw-logistieke-sector-brabant_resultaat.png",
            description: "Construcción de andamios compleja en el sector logístico en Brabant. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriesteiger-transportband-bol-com-waalwijk_resultaat.png",
            description: " Andamio industrial para cinta transportadora en Bol.com en Waalwijk. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industrie-steiger-steigernontage-transportband-steigerbouw-machinepark_resultaat.png",
            description: "Andamio industrial para desmontaje de andamio de cinta transportadora en parque de máquinas. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },    
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-vrijstaande-werkvloer-industrie-aanleg-machinepark-1_resultaat.png",
            description: "Andamio independiente en instalación industrial. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
            {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Construcción de andamios espacial con dos plantas para cinta transportadora. Construcción de andamios especializada para accesibilidad óptima y seguridad."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-montage-distributiecentrum-bol-com_resultaat.png",
            description: "Montaje de andamios en centro de distribución Bol.com. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-distributiecentrum-waalwijk-machinepark_resultaat.png",
            description: "Construcción de andamios en centro de distribución Waalwijk para parque de máquinas. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
          {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Construcción de andamios espacial con dos plantas para cinta transportadora. Construcción de andamios especializada para accesibilidad óptima y seguridad."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat_resultaat.png",
            description: "Andamio para acceso a boca de hombre en entorno industrial. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat-industrie-opslagtank-zuiveren-brabant-water_resultaat.png",
            description: "Andamio para acceso a boca de hombre en entorno industrial. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-besloten-ruimte_resultaat.png",
            description: "Andamio para acceso a espacio confinado en entorno industrial. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        }
    ],
    utiliteit: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/detail-steiger-werkvloer-kantplanken_resultaat.png",
            description: "Detalle de plataforma de trabajo de andamio con rodapiés para seguridad adicional."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerbouw-locatie-waterzuivering_resultaat.png",
            description: "Construcción de andamios a medida en planta de depuración de agua. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/leuningwerk-inspectiesteiger-waterzuivering-industrie_resultaat.png",
            description: "Sistema de barandillas para andamio de inspección en planta de depuración de agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/tube-lock-inspectiesteiger-waterzuivering-basis_resultaat.png",
            description: "Tube-lock para andamio de inspección en planta de depuración de agua."
        },
        { 
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-grote-werk-inspectie-vloer_resultaat.png",
            description: "Gran plataforma de trabajo de inspección para construcción de andamios."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (39)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (38)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (37)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (36)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (35)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (34)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (33)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (31)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (32)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (30)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (29)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (28)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (26)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (25)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (24)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (23)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (22)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (21)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (20)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (16)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (14)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (13)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (9)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)-1_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)-1_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-inspectiesteiger-overzicht_resultaat.png",
            description: "Vista general de andamios de inspección en la industria."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en planta de depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-hapert-riwz_resultaat.png",
            description: "Andamios RIWZ Hapert."
        }
    ],
    nieuwbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio de albañilería fase de acabado construcción de viviendas Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Andamios de sistema pesado para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje de andamio de albañilería en proyecto de obra nueva en Gorichem. Construcción de andamios especializada para construcción de viviendas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio de albañilería fase de acabado construcción de viviendas Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Andamios de sistema pesado para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje de andamio de albañilería en proyecto de obra nueva en Gorichem. Construcción de andamios especializada para construcción de viviendas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woningen_resultaat.png",
            description: "Desmontaje de andamio en viviendas de obra nueva. Soluciones de andamios eficientes y seguras para proyectos de construcción de viviendas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woning-waterkant_resultaat.png",
            description: "Desmontaje de andamio en viviendas de obra nueva junto al agua. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-gilze-rijen_resultaat.png",
            description: "Desmontaje de andamio de albañilería en proyecto de obra nueva en Gilze-Rijen. Construcción de andamios especializada para construcción de viviendas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-rijen_resultaat.png",
            description: "Desmontaje de andamio de albañilería en proyecto de obra nueva en Rijen. Construcción de andamios especializada para construcción de viviendas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/bouwsteiger_hoge_slagen_gelijk_met_verdieping_derde_leuning_voorloopleuning_tijdens_op_en_afbouw_resultaat.png",
            description: "Andamio de construcción con niveles altos iguales a la altura de planta, tercera barandilla y barandilla de avance durante montaje y desmontaje. Construcción de andamios especializada para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/complete-gevelsteiger-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio de fachada completo para apartamentos de obra nueva. Construcción de andamios especializada para accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage_tube_lock_metsel_steiger_resultaat.png",
            description: "Desmontaje de andamio de albañilería apartamentos de obra nueva, nivel igual a altura de planta, tercera barandilla y barandilla de avance."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-apartementen-rijen-brabant-nederland_resultaat.png",
            description: "Desmontaje de andamio de albañilería apartamentos de obra nueva en Rijen, Brabant, Países Bajos. Construcción de andamios especializada para desmontaje eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metsel-steiger-gorichem_resultaat.png",
            description: "Desmontaje de andamio de albañilería apartamentos de obra nueva en Gorichem. Construcción de andamios especializada para desmontaje eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-met-goederenlift_resultaat.png",
            description: "Desmontaje de andamio de albañilería apartamentos de obra nueva con montacargas. Construcción de andamios especializada para desmontaje eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste_slag_metsel_steiger_schimmert_resultaat.png",
            description: "Primer nivel andamio de albañilería apartamentos de obra nueva en Schijndel. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste-slag-werkvloer-metselsteiger-windreductie_resultaat.png",
            description: "Primer nivel plataforma de trabajo andamio de albañilería con reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist_resultaat.png",
            description: "Fase desmontaje material listo para transporte transporte vertical operador de grúa."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist-rijen_resultaat.png",
            description: "Fase desmontaje material listo para transporte transporte vertical operador de grúa-rijen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_metselsteiger_voorloopleuning_materiaal_dichtbij_de_steiger_resultaat.png",
            description: "Fase montaje andamio de albañilería con barandilla de avance y material cerca del andamio. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_resultaat.png",
            description: "Fase montaje montar construir andamio de albañilería."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_tube_lock_klasse4_resultaat.png",
            description: "Fase montaje montar construir andamio de albañilería tube lock clase 4. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/gevelsteiger-nieuwbouw-appartementencomplex_resultaat.png",
            description: "Fase montaje andamio de fachada complejo de apartamentos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/intern_ladderhuis_zware_steiger_klasse4_metsel_steiger_resultaat.png",
            description: "Escalera interna andamio pesado clase 4 andamio de albañilería. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/layher allround metselsteiger deurne_resultaat.png",
            description: "Andamio de albañilería Layher Allround Deurne. Construcción de andamios especializada para progreso eficiente de la construcción."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_01_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva. Construcción de andamios especializada para progreso eficiente de la construcción."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_02_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva. Construcción de andamios especializada para progreso eficiente de la construcción."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva en Schijndel. Construcción de andamios especializada para progreso eficiente de la construcción."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_woningen_met_toren_kraan_resultaat.png",
            description: "Andamio de albañilería viviendas de obra nueva con grúa torre. Construcción de andamios especializada para progreso eficiente de la construcción."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio de albañilería Schijndel Moeskops apartamentos de obra nueva. Construcción de andamios especializada para progreso eficiente de la construcción."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio de albañilería Schijndel Moeskops apartamentos de obra nueva con construcción de cerchas. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_slag_gelijk_met_hoogte_verdieping_derde_leuning_resultaat.png",
            description: "Andamio de albañilería nivel igual a altura de planta, tercera barandilla. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_vrijstaande_woning_resultaat.png",
            description: "Andamio de albañilería vivienda unifamiliar. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_werkvloer_op_etage_hoogte_nieuwbouw_appartementen_resultaat.png",
            description: "Andamio de albañilería plataforma de trabajo a altura de planta apartamentos de obra nueva. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger (2)_resultaat.png",
            description: "Andamio de albañilería para proyecto de obra nueva. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_bevoorraad_stenen_hogeslag_staander_om-en-om_600kgm2_resultaat.png",
            description: "Andamio de albañilería abastecido ladrillos nivel alto montante alternado 600kg/m². Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_extern_ladderhuis_resultaat.png",
            description: "Andamio prefabricado con escalera externa para flujo óptimo. Acceso vertical eficiente con máxima seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_goederen_lift_inklimpreventie-windreductie-steiger-gaas-tilburg_resultaat.png",
            description: "Andamio de albañilería con montacargas, prevención de intrusión y malla de reducción del viento en Tilburg. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_met_goederen_lift_nieuwbouw_woningen_resultaat.png",
            description: "Andamio de albañilería con montacargas para viviendas de obra nueva. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_materiaal_dichtbij_steiger_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva abastecido con ladrillos, material cerca del andamio. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_verspringing-breda_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva abastecido con ladrillos, retranqueo en Breda. Construcción de andamios especializada para progreso eficiente de la construcción."
        }
    ],
    woningbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva montaje y construcción. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001.png_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva montaje y construcción. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva montaje y construcción en Breda. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_oppersteiger_aanvoersteiger_nieuwbouw_werkvloer_op_verdiepingshoogte_resultaat.png",
            description: "Andamio de albañilería, andamio superior y andamio de suministro para obra nueva con plataforma de trabajo a altura de planta. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock01_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock02_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_uitbouw_naar_breedte_vloer_resultaat.png",
            description: "Andamio de albañilería ampliación hacia ancho de plataforma. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_werkvloer_gereed_voor_metsellaar_resultaat.png",
            description: "Andamio de albañilería plataforma de trabajo lista para albañil. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-nieuwbouwproject_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-appartementen-eindhoven-aanvoersteiger_resultaat.png",
            description: "Andamio de albañilería apartamentos Eindhoven andamio de suministro. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw  /metsel-steiger-dubbele-heup-leuning-knie-leuning-en-kant-plank-Tube-Lock_resultaat.png",
            description: "Andamio de albañilería con doble barandilla de cadera, barandilla de rodilla y rodapié Tube Lock. Construcción de andamios especializada para progreso eficiente de la construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-fase-demontage-hoge-slag-werkvloer-gelijk_aan-verdiepingsvloer_resultaat.png",
            description: "Andamio de albañilería fase de desmontaje, altura de planta elevada, plataforma de trabajo a nivel del forjado. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-in-gorinchem_resultaat.png",
            description: "Andamio de albañilería en Gorinchem. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-iopbouwen-nieuwbouw-appartementen_resultaat.png",
            description: "Montaje de andamio de albañilería obra nueva apartamentos. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-met-intern-ladderhuis_resultaat.png",
            description: "Andamio de albañilería con escalera interna. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-nieuwbouw-woningen-gorichem_resultaat.png",
            description: "Andamio de albañilería obra nueva viviendas en Gorichem. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-op-plat-dak-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio de albañilería sobre cubierta plana obra nueva apartamentos. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para obra nueva pareada. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje de andamio de albañilería obra nueva apartamentos en Brabant. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje de andamio de albañilería de acero obra nueva. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje de andamio de albañilería replanteo de nivel de base. Construcción especializada de andamios para un progreso eficiente de la obra."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para obra nueva pareada. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje de andamio de albañilería obra nueva apartamentos en Brabant. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje de andamio de albañilería de acero obra nueva. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje de andamio de albañilería replanteo de nivel de base. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para obra nueva pareada. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje de andamio de albañilería obra nueva apartamentos en Brabant. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje de andamio de albañilería de acero obra nueva. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje de andamio de albañilería replanteo de nivel de base. Construcción especializada de andamios para un progreso eficiente de la obra."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-veldhoven-metselsteiger_nieuwbouw_appartementen_vierdeplank_verlenger_uitschuifkorteling_resultaat.png",
            description: "Montaje Veldhoven andamio de albañilería obra nueva apartamentos con extensión de cuarta tabla y acortamiento extensible. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montag-nieuwbouw-appartementen-metselsteiger-slag-gelijk-verdiepingshoogte-derde-leuning-voorloopleuning_resultaat.png",
            description: "Montaje obra nueva apartamentos andamio de albañilería altura igual a altura de planta, tercera barandilla y barandilla de avance. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_bouw-helmond_resultaat.png",
            description: "Obra nueva apartamentos construcción de andamio de albañilería en Helmond. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning_resultaat.png",
            description: "Obra nueva apartamentos andamio de albañilería altura igual a altura de planta, tercera barandilla y barandilla de avance. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Obra nueva apartamentos andamio pesado de acero con montacargas, redes de andamio, malla prevención de escalada en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Proyecto obra nueva apartamentos andamio pesado clase 4 alturas elevadas. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Obra nueva vivienda andamio de albañilería tubelock construcción de andamios. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Obra nueva apartamentos andamio de albañilería andamio de suministro construcción. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Obra nueva apartamentos andamio construcción de cerchas estructura de cercha garajes construcción en Schijndel. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Obra nueva colocación de tejas cubierta andamio desmontaje de andamio en Chorichem. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Obra nueva viviendas andamios de albañilería barrio residencial junto al agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Parte inferior de la altura superior plataforma de trabajo andamio de albañilería. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/opgeleverd-metselsteiger-gorichem-nieuwbouw-woningen_resultaat.png",
            description: "Entrega de andamio de albañilería Gorichem obra nueva viviendas. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/overzicht-stalen-systeemsteigers-bouwproject_resultaat.png",
            description: "Vista general andamios de sistema de acero proyecto de construcción. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-nieuwbouw-woning-steiger-deurne_resultaat.png",
            description: "Andamio vivienda prefabricada obra nueva en Deurne. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-woningbouw-zware-klasse4-metselsteiger-binnenleunin-console-dubbele-vlonder_resultaat.png",
            description: "Construcción de viviendas prefabricadas andamio pesado clase 4 con barandilla interior, ménsula y tablero doble. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Obra nueva apartamentos andamio pesado de acero con montacargas, redes de andamio, malla prevención de escalada en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Proyecto obra nueva apartamentos andamio pesado clase 4 alturas elevadas. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Obra nueva vivienda andamio de albañilería tubelock construcción de andamios. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Obra nueva apartamentos andamio de albañilería andamio de suministro construcción. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Obra nueva apartamentos andamio construcción de cerchas estructura de cercha garajes construcción en Schijndel. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Obra nueva colocación de tejas cubierta andamio desmontaje de andamio en Chorichem. Construcción especializada de andamios para un progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Obra nueva viviendas andamios de albañilería barrio residencial junto al agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Parte inferior de la altura superior plataforma de trabajo andamio de albañilería. Construcción especializada de andamios para un progreso eficiente de la obra."
        },

        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio de albañilería apartamentos de obra nueva en Schijndel. Construcción de andamios especializada para progreso eficiente de la construcción."
        }
    ],
    renovatie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-werkvloer-trottoir-smalle-straat_resultaat.png",
            description: "Construcción de andamio de albañilería a medida por Team Steigerbouw Brabant para renovación de una vivienda en una calle estrecha. La plataforma de trabajo se ha colocado sobre la acera para garantizar una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/technische-situatieschets-steigerbouw-voorgevel_resultaat.png",
            description: "Esquema técnico de situación de la construcción de andamios para la fachada frontal de un proyecto de renovación."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/smalle-gevelsteiger-binnenstad-renovatie_resultaat.png",
            description: "Andamio de fachada estrecho a medida por Team Steigerbouw Brabant para renovación de una vivienda en el centro. El andamio está especialmente diseñado para encajar en calles estrechas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/stalen-gevelsteiger-voetgangerszone-veiligheid_resultaat.png",
            description: "Andamio de fachada de acero a medida por Team Steigerbouw Brabant para renovación de una vivienda en Hasseltstraat en Tilburg en el centro. El andamio está diseñado pensando en la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-schuin-dak-schoorsteen-tilburg_resultaat.png",
            description: "Construcción de andamios a medida por Team Steigerbouw Brabant para renovación de cubierta y mantenimiento de chimenea en una villa en Bredaseweg en Tilburg."
        },   
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/schoorsteensteiger-veilig-leuningwerk-schuin-dak_resultaat.png",
            description: "Andamio de cubierta con barandilla certificada. Montado especialmente sin cargar la cubierta, ideal para cubiertas frágiles que se están renovando."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/dakrenovatie-steiger-villa-bredaseweg-tilburg_resultaat.png",
            description: "Andamio profesional para renovación de cubierta alrededor de una gran villa en Bredaseweg en Tilburg - Team Steigerbouw Brabant"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/daksteiger-dakkapel-veilig-werken-op-hoogte_resultaat.png",
            description: "Andamio de cubierta seguro para renovación de buhardilla. Team Steigerbouw Brabant garantiza una seguridad de trabajo óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-woningrenovatie-steigerbouw-brabant_resultaat.png",
            description: "Andamio de fachada para renovación de vivienda en Waalwijk Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/kappenkap-steiger-doorwerksysteem-renovatie_resultaat.png",
            description: "Andamio para renovación de cubierta y pintura por el pintor de una casa señorial en Waalwijk." // Voeg hier een relevante beschrijving toe
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-dakrenovatie-werkvloer-loon-op-zand_resultaat.png",
            description: "Andamio de renovación de cubierta en Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouwer-aanhuis-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Andamio de renovación de cubierta en Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-situatieschets-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Esquema de situación del andamio de renovación de cubierta en Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerconstructie-woningbouw-renovatie-brabant_resultaat.png",
            description: "Construcción de andamio para renovación de construcción de viviendas en Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/tube-lock-steiger-uitkraging-dakkapel_resultaat.png",
            description: "Andamio tube-lock para voladizo de buhardilla."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/veilig-werken-op-hoogte-dakmontage_resultaat.png",
            description: "Trabajo seguro en altura en montaje de cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/maatwerk-gevelsteiger-particuliere-woning_resultaat.png",
            description: "Andamio de fachada a medida para vivienda particular."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/opbouw-renovatiesteiger-met-puinvanger_resultaat.png",
            description: "Andamio de renovación pesado con recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger_tilburg_resultaat.png",
            description: "Andamio de renovación para renovación de cubierta en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Andamio de renovación pesado con recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Andamio de renovación para renovación de cubierta en Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Andamio de renovación pesado con recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-zware-belastbaar-fase-montage_resultaat.png",
            description: "Andamio de renovación pesado en fase de montaje."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigeroplossing-dakrenovatie_resultaat.png",
            description: "Solución de andamio para renovación de cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-gevel-renovatie-steiger-puinvanger_resultaat.png",
            description: "Andamio de renovación de fachada pesado con recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Andamio de renovación para renovación de cubierta en Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-layher-allround-steiger-windreductie-binnenleuningen-console-puinvanger_resultaat.png",
            description: "Andamio de renovación Layher Alround pesado con ménsula, reducción del viento y recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-monteren-eindhoven_resultaat.png",
            description: "Andamio de renovación pesado con reducción del viento en Eindhoven con recogedor de escombros y reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-windreductie-rotterdam_resultaat.png",
            description: "Andamio de renovación pesado con reducción del viento en Rotterdam con recogedor de escombros y reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/aanvoer-steiger-tbv-lift-gemeentehuis-uden_resultaat.png",
            description: "Andamio de suministro para ascensores en el ayuntamiento de Uden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-dakrenovatie-tilburg_resultaat.png",
            description: "Andamio de fachada para renovación de cubierta en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steiger-dakrenovatie_resultaat.png",
            description: "Andamio de fachada para renovación de cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steigeroplossing-dakrenovatie_resultaat.png",
            description: "Solución de andamio de fachada para renovación de cubierta."
        }
    ],
    scheepvaart: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Montaje de andamio de revisión para grúa de carga naval offshore."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouw-revisie-steiger-offshore_resultaat.png",
            description: "Montaje de andamio para revisión de grúa de construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger_aan_boord_scheepsbouw_resultaat.png",
            description: "Montaje de andamio para revisión de grúa de construcción naval, detalle 01."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-aan-boord-schip-kraan-revisie_resultaat.png",
            description: "Andamio a bordo para revisión de grúa de construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-antwerpen-haven-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Andamio en el puerto de Antwerpen para revisión de grúa de construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-aan-boord-schip-kraan_resultaat.png",
            description: "Andamio a bordo para trabajos de construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-schip-revisie_resultaat.png",
            description: "Construcción especializada de andamios para mantenimiento naval. Revisión de grúa de carga con medidas de seguridad adaptadas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-rederij_resultaat.png",
            description: "Construcción de andamios marítimos para mantenimiento de grúas. Construcción compleja con componentes impermeables."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-revisie-steiger-scheepvaart_resultaat.png",
            description: "Montaje de andamio para revisión sector naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger_scheepsbouw-kraan-revisie_resultaat.png",
            description: "Montaje de andamio para revisión de grúa de construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-vrijstraander-werkvloer-pompkamer-scheepsbouw_resultaat.png",
            description: "Andamio de alta calidad para reparación naval. Solución a medida para trabajos marítimos."
        }
    ],
    zwembad: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-nieuw-bouw_resultaat.png",
            description: "Nuevo andamio para construcción de piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-over-kapping-met-ballast_resultaat.png",
            description: "Andamio sobre cubierta con lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-overkapping-zwembad-betegelen_resultaat.png",
            description: "Andamio cubierta de piscina alicatado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-spanten-constructie-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Andamio construcción de cerchas cubierta de piscina lámina retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_betegelen_steiger_overkapping_krimpfolie_ballast_resultaat.png",
            description: "Andamio alicatado piscina cubierta lámina retráctil lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_spantenconstructie_tralieligger_krimpfolie_ballast_tegelzetter_resultaat.png",
            description: "Cubierta de piscina construcción de cerchas viga de celosía lámina retráctil lastre alicatador."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_tegelzetter_betegelen_zwembad_steiger_montage_fase_006_resultaat.png",
            description: "Cubierta de piscina alicatador alicatado piscina andamio fase de montaje 006."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad-overkapping-egelzetter-betegelen-zwembad-steiger-montage-fase_resultaat.png",
            description: "Cubierta de piscina alicatador alicatado piscina andamio fase de montaje."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Andamio de trabajo continuo prevención influencias climáticas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Construcción de cubierta embalada construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Andamio cubierta embalada construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Montaje embalaje lámina retráctil andamio construcción de cerchas cubierta piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Cubierta construcción de cerchas embalada lámina retráctil andamio viga de celosía."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Andamio cubierta lámina retráctil piscina construcción de cerchas embalado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Andamio cubierta lámina retráctil piscina alicatador construcción de cerchas viga de celosía lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Construcción de cubierta cubierta andamio embalado lámina retráctil construcción de cerchas viga de celosía lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Construcción de cerchas cubierta embalada construcción de andamios Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Construcción de cerchas embalada lámina retráctil cubierta prevención climática andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ballast-overkapping-krimpfolie-ingepakt-steiger-zwembad_resultaat.png",
            description: "Lastre cubierta lámina retráctil andamio embalado piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Andamio de trabajo continuo prevención influencias climáticas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Construcción de cubierta embalada construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Andamio cubierta embalada construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Montaje embalaje lámina retráctil andamio construcción de cerchas cubierta piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Cubierta construcción de cerchas embalada lámina retráctil andamio viga de celosía."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Andamio cubierta lámina retráctil piscina construcción de cerchas embalado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Andamio cubierta lámina retráctil piscina alicatador construcción de cerchas viga de celosía lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Construcción de cubierta cubierta andamio embalado lámina retráctil construcción de cerchas viga de celosía lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Construcción de cerchas cubierta embalada construcción de andamios brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Construcción de cerchas embalada lámina retráctil cubierta prevención climática andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-tralieligger-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Construcción de cercha con viga de celosía, cubierta de piscina, lámina retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-brabant-kap-constructie_resultaat.png",
            description: "Construcción de andamios Brabant, construcción de cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-foto-in-het-zwemad-onder-de-spanten-constructie_resultaat.png",
            description: "Foto de construcción de andamios en la piscina bajo la construcción de cerchas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-krimpfolie-en-kap_resultaat.png",
            description: "Construcción de andamios con lámina retráctil y cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-over-het-zwembad-zodat-er-doorgewerkt-kan-worden_resultaat.png",
            description: "Construcción de andamios sobre la piscina para poder continuar trabajando."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-met-kripfolie_resultaat.png",
            description: "Construcción de andamios, cubierta de piscina con lámina retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-ter-water-resistentie_resultaat.png",
            description: "Construcción de andamios, cubierta de piscina para resistencia al agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-constructie-zwembad-overkapping_met-krimfolie_resultaat.png",
            description: "Construcción de andamios, cubierta de piscina con lámina retráctil."
        }
    ],
    trappentoren: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/opbouwen-vrijstaande-trappentoren-bouwverlichting_resultaat.png",
            description: "Fase de montaje: Torre de escaleras independiente con medidas de seguridad integradas. Construcción modular para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/stalen-trappentoren-22-meter-hoogbouw_resultaat.png",
            description: "Torre de escaleras independiente para alcanzar la cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-industrieële-trappentoren_resultaat.png",
            description: "Torre de escaleras independiente de 22 metros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-vrijstaande-trapentoren-zonder-ankers_resultaat.png",
            description: "Torre de escaleras independiente sin anclajes."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steiger-trappentoren-distributiecentrum-logistiek_resultaat.png",
            description: "Torre de escaleras de andamio para centros de distribución e instalaciones logísticas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/tijdelijke-trappentoren-zonnepanelen-waalwijk-montage-fase_resultaat.png",
            description: "Torre de escaleras temporal para paneles solares en Waalwijk. Fase de montaje con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren_onverankerd_vrijstaand_18meter_01_resultaat.png",
            description: "Montaje de torre de escaleras independiente de 18 metros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren-met-steunbeer-en-ballast-vrijstaand_resultaat.png",
            description: "Torre de escaleras independiente con contrafuerte y lastre. Estabilidad óptima para acceso seguro a todos los niveles de trabajo."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-22m-industriele-steigerbouw_resultaat.png",
            description: "Torre de escaleras independiente de 22 metros para construcción de andamios industriales. Construcción robusta con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-nieuwbouw-zundert-coldstore_resultaat.png",
            description: "Torre de escaleras independiente para obra nueva en Zundert en una cámara frigorífica. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steigerbouw-brabant_resultaat.png",
            description: "Torre de escaleras independiente de 22 metros. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steiger-voor-bereiken-van-het-dak_resultaat.png",
            description: "Torre de escaleras independiente para alcanzar la cubierta. Construcción robusta con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/Industriële-trappen-toren-bij-bol.com-waalwijk-steigerbouw-brabant_resultaat.png",
            description: "Torre de escaleras industrial en bol.com en Waalwijk. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/industrie-waalwijk-trappentoren-fase-montage_resultaat.png",
            description: "Industria Waalwijk, torre de escaleras en fase de montaje. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappentoren_resultaat.png",
            description: "Montaje de una torre de escaleras. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren_resultaat.png",
            description: "Montaje de torre de escaleras independiente. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter_resultaat.png",
            description: "Montaje de torre de escaleras independiente de 18 metros de altura. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter-layher_resultaat.png",
            description: "Montaje de torre de escaleras independiente de 18 metros de altura con sistemas Layher. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/monteren-steiger-trappentoren-onverankerd-vrijstaand-18meter_resultaat.png",
            description: "Montaje de torre de escaleras independiente sin anclajes de 18 metros. Construcción de andamios especializada para progreso eficiente de la obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappen-toren_resultaat.png",
            description: "Montaje de una torre de escaleras. Construcción de andamios especializada para progreso eficiente de la obra."
        }
    ],
    werkplatform: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/brede-houten-werkvloer-steigerbouw-staalconstructie_resultaat.png",
            description: "Fase de montaje: Plataforma de trabajo ampliada con medidas de seguridad integradas. Solución profesional para trabajos en altura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steigerbouw-werkvloer-boven-trappengat_resultaat.png",
            description: "Plataforma de trabajo sobre hueco de escalera. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steiger-veilige-werkvloer-montagewerk-staalbouw_resultaat.png",
            description: "Plataforma de trabajo segura para trabajos de montaje. Construcción de andamios especial para accesibilidad óptima."
        }
    ],
    overspanning: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-metselsteiger-overspanning-parkeer-garage-ingang_resultaat.png",
            description: "Construcción de cercha profesional para estructura de cercha sobre garajes. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spantenconstructie-tralieliggers-14m2_resultaat.png",
            description: "Construcción de cercha innovadora con vigas de celosía de 14m2. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/montage-spanten-constructie_resultaat.png",
            description: "Montaje de construcción de cercha para estructura de cercha sobre garajes. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-garageboxen-aanvoersteiger_resultaat.png",
            description: "Estructura de cercha sobre garajes, andamio de alimentación. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-spanten_constructie-over-garage-boxen_resultaat.png",
            description: "Estructura de cercha sobre garajes. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/spantenconstructie-over-garageboxen-tbv-metselsteiger01_resultaat.png",
            description: "Construcción de cercha sobre garajes para andamio de albañilería. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-schijndel_resultaat.png",
            description: "Construcción de andamios, construcción de cercha Schijndel. Construcción de andamios especial para accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steiger-dak-overspanning-metsel-steiger_resultaat.png",
            description: "Construcción de andamios, estructura de cercha de cubierta, andamio de albañilería. Construcción de andamios especial para accesibilidad óptima."
        }
    ],
    podium: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/podiumbouw/podium-op-de-helling-aan-gracht-met-steiger-voor-de-boot_resultaat.png",
            description: "Andamio de escenario para eventos y presentaciones. Construcción robusta con acceso seguro y plataformas de trabajo. Y andamio de amarre para un barco a lo largo del canal."
        }
    ],
    windreductie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-prefab-woningbouw-metsel-steiger-binnenleuning-dubbele-uitschuif-console-windreductie-net_resultaat.png",
            description: "Construcción de andamios, construcción de viviendas prefabricadas, andamio de albañilería, barandilla interior, consola telescópica doble, red de reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-steiger-nieuwbouw-overkapping-windreductie.png",
            description: "Montaje de andamio de obra nueva con cubierta y reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steiger-demontage-nieuwbouw-afbouw-beekse-bergen-hoofdgebouw-inter-deel_resultaat.png",
            description: "Desmontaje de andamio de obra nueva, acabado Beekse Bergen edificio principal parte interior."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Construcción de andamios, obra nueva, construcción edificio principal, cubierta de continuación de trabajo, construcción de cubierta, malla de reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción de andamios, obra nueva Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Entregado, estucador, pintor, desmontaje, andamio de continuación de trabajo, acabado, redes de reducción del viento, construcción de cubierta, vista de andamio interior."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Construcción de andamios de renovación Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción de andamios, construcción de cubierta, lámina retráctil, reducción del viento, prevención meteorológica."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción de andamios Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigergaas-windreducie-steigerbouw-hilvaren-beek_resultaat.png",
            description: "Malla de andamio, reducción del viento, construcción de andamios Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción de andamios, construcción de cubierta, lámina retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/tube-lock-steiger-met-windreductie-netten-steiger-gaas-kapconstructie-krimpfolie_resultaat.png",
            description: "Andamio Tube lock con redes de reducción del viento, malla de andamio, construcción de cubierta, lámina retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/zware-renovatie-steiger-met-steigergaas-en-puinvanger_resultaat.png",
            description: "Andamio de renovación pesada con malla de andamio y colector de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/metselsteiger-met-windreductie-net_resultaat.png",
            description: "Andamio de albañilería con red de reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-layhe-blitz-steiger-nieuwbouw-overkapping-windreductie_resultaat.png",
            description: "Montaje de andamio Layher Blitz de obra nueva, cubierta, reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Andamio de obra nueva, construcción edificio principal, cubierta de continuación de trabajo, construcción de cubierta, malla de reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-hilvarenbeek_resultaat.png",
            description: "Andamio de obra nueva en Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Entregado, estucador, pintor, desmontaje, andamio de continuación de trabajo, acabado, redes de reducción del viento, construcción de cubierta, vista de andamio interior."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Construcción de andamios de renovación Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción de andamios, construcción de cubierta, lámina retráctil, reducción del viento, prevención meteorológica."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción de andamios Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-hilvarenbeek-krimpfolie-windreductie_resultaat.png",
            description: "Construcción de andamios Hilvarenbeek, lámina retráctil, reducción del viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción de andamios, construcción de cubierta, lámina retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-krimpfolie-steigergaas_resultaat.png",
            description: "Construcción de andamios, lámina retráctil, malla de andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-layher-blitz-nieuwbouw_resultaat.png",
            description: "Construcción de andamios Layher Blitz, obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción de andamios, obra nueva Hilvarenbeek."
        }
    ],
    // Proyectos de clase 4 / obra gruesa y construcción con sistemas
ruwbouw_klasse4: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/ruwbouw-steiger-kalkzandsteen-blokken_resultaat.png",
        description: "Construcción de andamios pesada clase 4 para obra gruesa con bloques de hormigón celular. Estabilidad máxima para carga pesada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/systeembouw-steiger-nieuwbouw-woningen-lift_resultaat.png",
        description: "Montaje de andamio de sistema para viviendas de obra nueva, equipado con elevador de materiales y personas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steigerbouw-bovenaanzicht-engels-baksteen-project_resultaat.png",
        description: "Vista superior de un andamio de albañilería clase 4 en un proyecto de ladrillo inglés a gran escala."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steiger-loop-pad-bouwplaats-dura-vermeer_resultaat.png",
        description: "Pasarela de andamio segura y sin obstáculos conforme a las normas de seguridad más estrictas en la obra."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/nieuwbouwwijk-steiger-afzetting-bouwhekken_resultaat.png",
        description: "Instalación completa de andamios incluyendo vallado ordenado y vallas de obra para un barrio de obra nueva seguro."
    }
],

// Renovación, trabajos de cubierta y logística
renovatie_logistiek: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/daksteiger-schoorsteen-renovatie-project_resultaat.png",
        description: "Andamio de cubierta a medida para renovación segura de chimeneas y trabajos de cubierta sin daños a la cubierta."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/gevelsteiger-renovatie-vrijstaande-woning_resultaat.png",
        description: "Andamio de fachada para la renovación completa y sostenibilidad de una vivienda independiente."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/mobiele-kraan-van-riel-steiger-montage_resultaat.png",
        description: "Montaje eficiente de andamios y logística en colaboración con las grúas móviles de Van Riel."
    }
],
    betonfabriek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger01_resultaat.png",
            description: "Construcción de andamios especializada para fábrica de hormigón en Oosterhout. Construcción robusta para aplicaciones industriales pesadas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger02_resultaat.png",
            description: "Construcción de andamios especializada para fábrica de hormigón en Oosterhout. Construcción robusta para aplicaciones industriales pesadas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger03_resultaat.png",
            description: "Construcción de andamios especializada para fábrica de hormigón en Oosterhout. Construcción robusta para aplicaciones industriales pesadas."
        },                                
    ],
    infra: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-tijdelijke-loopbrug-tilburg-industrie_resultaat.png",
            description: "Pasarela temporal con conexión a tierra para alta tensión en Tilburg, andamio de infraestructura para público y peatones."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Construcción de andamios industriales para infraestructura temporal."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Construcción de andamio para mantenimiento de turbinas eólicas en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Acceso seguro a aerogeneradores mediante torre de escaleras en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Torre de escaleras temporal para construcción de andamios de turbinas eólicas en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Torre de escaleras pública para acceso a aerogeneradores en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Torre de escaleras industrial para construcción de andamios en aerogeneradores, primer plano."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Infraestructura temporal para acceso a turbinas eólicas en Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouwen-steiger-valbeveiliging-efteling-loon-op-zand-achtbaan-baron_resultaat.png",
            description: "Construcción de andamio para protección contra caídas en Efteling, ubicación Loon op Zand, montaña rusa Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouw-steiger-valpreventie-efteling-achtbaan-baron-brabant_resultaat.png",
            description: "Construcción de andamio para prevención de caídas en Efteling, ubicación Loon op Zand, montaña rusa Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerbouw-efteling-achtbaan-valpreventie_resultaat.png",
            description: "Construcción de andamios para prevención de caídas en Efteling, ubicación Loon op Zand, montaña rusa Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infra-steiger-loopbrug-hoogspanning-tilburg_resultaat.png",
            description: "Barandillas dobles con pica de tierra para conexión a tierra de pasarela en Tilburg, infraestructura temporal para accesibilidad a estación de servicio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-loopbrug-bereikbaarheid-pompstation-bp-hazenest-tilburg_resultaat.png",
            description: ""
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-loopbrug-steiger-tilburg-aardpen-hoogspanning_resultaat.png",
            description: ""
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-loopbrug-trap-voetganger-publiek-verkeer-bereikbaarheid-tankstation-bp_resultaat.png",
            description: ""
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-loopburg-dubbele-leuningen-industrie-bereikbaarheid-winkelend-publiek_resultaat.png",
            description: "Montaje de pasarela 100000 Voltios, andamio con conexión a tierra bajo torre de alta tensión para tráfico peatonal público en estación de servicio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/montage_loopbrug_100000Volt_aanleg_hoogspanning_geaard_steiger_onder_hoogspanningsmast_openbare_ruimte_openbaar_voetganger_verkeer_bereikbaarheid_benzinepomp_resultaat.png",
            description: "Montaje de pasarela 100000 Voltios, andamio con conexión a tierra bajo torre de alta tensión para tráfico peatonal público en estación de servicio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-electrisch-hoogspanningsnet-tilburg-tijdelijke-brug-bereikbaarheid-voetgangers-bp-hazenest_resultaat.png",
            description: "Montaje de andamio en industria de Tilburg, pasarela 100000 Voltios con conexión a tierra bajo torre de alta tensión para peatones en estación de servicio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-loopbrug-bereikbaarheid-van-bp-tankstation_resultaat.png",
            description: "Andamio en red eléctrica de alta tensión en Tilburg, puente temporal para accesibilidad peatonal en BP Hazenest."
        }
    ],
    infra1: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Infraestructura temporal y torre de escaleras construida por Team Steigerbouw Brabant para acceso seguro a una turbina eólica."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Toma de detalle de una torre de escaleras industrial segura con barandillas de alta calidad, montada de forma ajustada a lo largo del mástil de un aerogenerador para trabajos de inspección."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Infraestructura temporal: Torre de escaleras segura para mantenimiento de turbinas eólicas"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Torre de escaleras a medida para acceso a aerogeneradores"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Construcción de andamios industriales: Sistemas de acceso seguro para el sector energético"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Torre de escaleras temporal a medida por Team Steigerbouw Brabant para un acceso seguro y estable a la entrada de un aerogenerador."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Construcción de andamio robusta y autoportante con escaleras integradas y barandillas, diseñada específicamente para el sector de la energía renovable."
        }
    ],
    "trapgat-raalte": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie_aanvraag_trapgat met glas_resultaat.png",
        description: "Situación de la solicitud para una construcción de andamio sobre el hueco de escalera con paredes de cristal."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-aanvraag-trappengat-binnen_resultaat.png",
        description: "Situación interior de la caja de escalera para la ingeniería de la estructura de cercha."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-steiger-aanvraag_resultaat.png",
        description: "Visión general de la situación del proyecto para la solicitud del andamio interior."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steigerbouw-vrije-doorgang-motage-werkvloer_resultaat.png",
        description: "Construcción de andamio con paso libre garantizado bajo la plataforma de trabajo de montaje."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-constructie-overspanning-trap-blijft-in-gebruik_resultaat.png",
        description: "Construcción de andamio inteligente con una estructura de cercha para que la escalera fija permanezca completamente en uso."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspannende-werkvloer-ter-montagewerk-boven-vaste-trap_resultaat.png",
        description: "Plataforma de trabajo en voladizo para trabajos de montaje justo encima de la escalera fija."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspanning-binnen-met-vrije-doorgang-daaronder_resultaat.png",
        description: "Andamio interior con una estructura de cercha segura y un paso completamente libre debajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/trap-binnen-kantoor-blijft-in-gebruik_resultaat.png",
        description: "La escalera interior fija de la oficina permanece permanentemente transitable durante los trabajos."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "Plataforma de trabajo segura montada sobre el hueco de escalera permanentemente transitable y abierto."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-trapgat-in-raalte_resultaat.png",
        description: "Plataforma de trabajo a medida sobre el hueco de escalera para un proyecto de mantenimiento en Raalte."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-en-vaste-trap-blijven-in-gebruik_resultaat.png",
        description: "Tanto la plataforma de trabajo superior como la escalera fija inferior permanecen en uso simultáneamente."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-in-gebruik-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "La plataforma de trabajo del andamio montada está en pleno uso sobre el hueco de escalera de paso seguro."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-montage-werk-overspanning-boven-verdieping_resultaat.png",
        description: "Trabajos de montaje desde la plataforma de trabajo en voladizo en la planta superior."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-op-boven-verdieping-met-permanent-vrije-doorgang-daaronder_resultaat.png",
        description: "Disposición del andamio en la planta superior con un paso libre garantizado y permanente debajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-overspanning-boven-trapgat_resultaat.png",
        description: "Estructura sólida de plataforma de trabajo en voladizo para poder trabajar de forma segura sobre un hueco de escalera profundo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-trapgat_resultaat.png",
        description: "Detalle de la plataforma de trabajo estable del andamio especial para hueco de escalera."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-traphuis_resultaat.png",
        description: "Plataforma de trabajo segura y ergonómicamente responsable incorporada en la caja de escalera."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-vanaf-onderkant_resultaat.png",
        description: "Vista de la plataforma de trabajo del andamio en voladizo vista desde abajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/overbruggende-werkvloer-over-een-trap-met-vrije-doorgang_resultaat.png",
        description: "Plataforma de trabajo puente sobre una escalera operativa manteniendo el paso completamente libre."
    }
],
    "prefabwoningbouw": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/lichte-verspringing-steigervloer_resultaat.png",
        description: "Andamio de albañilería con un ligero desnivel en el suelo del andamio, perfectamente adaptado a los contornos de la vivienda prefabricada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/metselsteiger-met-extern-ladderhuis-veiligheid-en-werkvloer-efficientie_resultaat.png",
        description: "Andamio de albañilería profesional equipado con una torre de escalera externa para una seguridad óptima y una plataforma de trabajo eficiente."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/overbrugging-platdak-aanbouw_resultaat.png",
        description: "Puente de andamio a medida sobre la cubierta plana de un anexo para trabajos de fachada seguros."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/prefab-woningbouw-metselsteiger_resultaat.png",
        description: "Construcción de andamio de albañilería robusta especialmente configurada para las rápidas fases de montaje en la construcción de viviendas prefabricadas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoningbouw_resultaat.png",
        description: "Ejecución eficiente de proyecto de construcción de andamios para construcción de viviendas prefabricadas a gran escala."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoning-metselsteiger_resultaat.png",
        description: "Andamio de albañilería seguro y ergonómicamente responsable instalado en una vivienda prefabricada moderna."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-kopse-kant_resultaat.png",
        description: "Vista lateral de la construcción de andamio estable en el lado frontal de la vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-prefabwoning_resultaat.png",
        description: "Andamio de fachada montado alrededor para el acabado seguro de una vivienda prefabricada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/intern-ladderhuis-met-valpreventie-prefab-woningbouw-steiger_resultaat.png",
        description: "Torre de escalera interna integrada con prevención de caídas certificada en un andamio de construcción de viviendas prefabricadas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/klasse-4-steiger-prefab-woning_resultaat.png",
        description: "Disposición de andamio pesado clase IV (Clase 4) para una vivienda prefabricada, adecuado para trabajos intensivos de albañilería."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-klasse4-ring54_resultaat.png",
        description: "Sistema de andamio Layher Allround Clase IV con configuración ring 54 para máxima estabilidad y capacidad de carga."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-ring54-prefabwoning-metselsteiger_resultaat.png",
        description: "Andamio de albañilería modular Layher Allround ring 54, flexible y de montaje rápido alrededor de la vivienda prefabricada."
    }
],
    "transportband": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag-overspanning-vrije-werkvloer-14m3m-hier-werkvloer-zware-klasse-maxbelasting-3kNm2-5,5kNm2_resultaat.png",
        description: "Solicitud estructura de cercha plataforma de trabajo libre 14m x 3m - Plataforma de trabajo clase pesada con carga máxima de 3 kN/m² hasta 5,5 kN/m²."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/boven-aanzicht-complexe-industie-werkvloer_resultaat.png",
        description: "Vista superior de la compleja plataforma de trabajo industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/hier-stopt-het-reeds geinstalleerde-vaste-constructie-liggers-H-profielen-hier-en-verdieping-gewisseld-compex-steiger-gemaakt_resultaat.png",
        description: "Conexión a construcción fija existente (perfiles H) y cambio de nivel para trabajo de andamio complejo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/impressie-situatie-voor-het-monteren-steiger-overbrugging_resultaat.png",
        description: "Impresión de la situación previa al montaje del puente de andamio."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/montage-overspanning-werkvloer_resultaat.png",
        description: "Montaje de la estructura de cercha para la plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/realisatie-werkplatform-voor-zware-montage-meerder-etages-en-ruimte_resultaat.png",
        description: "Realización de la plataforma de trabajo para montaje pesado con múltiples plantas y espacio de trabajo adicional."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_complexe-grote-belasting-steiger-overbrugging-zonder-stemplels-op-de-ondergrond-binnen_resultaat.png",
        description: "Solicitud de puente de andamio complejo y de carga pesada interior, sin puntales en el suelo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_werkvloer_boven_uitsparing-hoge-werkvloer-lange-complex-steiger-binnen_resultaat.png",
        description: "Solicitud de plataforma de trabajo elevada sobre abertura. Trabajo de andamio interior largo y complejo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/steiger-montage-interne-deel-werkvloer_resultaat.png",
        description: "Montaje de andamio de la parte interna de la plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd5_resultaat.png",
        description: "Entrega de la plataforma de trabajo (Fase 5)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd_resultaat.png",
        description: "Plataforma de trabajo realizada y entrega exitosa del proyecto."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd1_resultaat.png",
        description: "Plataforma de trabajo realizada y entrega del proyecto (Detalle 1)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd2_resultaat.png",
        description: "Plataforma de trabajo realizada y entrega del proyecto (Detalle 2)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd3_resultaat.png",
        description: "Entrega de la plataforma de trabajo (Fase 3)."
    }
],
"industrie-tilburg": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/werk-opgeleverd-na-demontage-van-de-steiger_resultaat.png",
        description: "El resultado final de la instalación industrial después de que el andamio se haya desmontado profesionalmente."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag_-nstallatie-machine-industrie-steiger-werkvloer_resultaat.png",
        description: "Medición y solicitud para una plataforma de trabajo de andamio estable alrededor de una máquina industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag-situatie-steigerbehoefte_resultaat.png",
        description: "Análisis de la situación del proyecto para determinar la necesidad exacta de andamio industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/fase-montage-werkvloer-industrieële-installatie_resultaat.png",
        description: "Fase del montaje de la plataforma de trabajo pesada alrededor de la instalación industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/ladderhuis-om-de-steigers-op-de-daken-rondom-de-machines-te-betreden_resultaat.png",
        description: "Torre de escalera montada de forma segura para acceder a los andamios en las cubiertas alrededor de las máquinas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/montage-steiger-ladderhuis-toegang-steiger-werkvloer-installatie-industrieël-luchtkanaal_resultaat.png",
        description: "Montaje de la torre de escalera de andamio para un acceso seguro al conducto de aire industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/oplossing-steiger-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "La solución final de andamio: una plataforma de trabajo a medida alrededor de la máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-tilburg-industrie_resultaat.png",
        description: "Ejecución de una solicitud de andamio industrial compleja en ubicación en Tilburg."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "Plataforma de trabajo detallada para trabajos de montaje en una máquina industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steigerbehoefte-voor-installatie-montage-machine_resultaat.png",
        description: "Disposición de andamio segura diseñada para la instalación y montaje de máquinas pesadas."
    }
],

"trapgat-helmond": [
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/steiger-in-trappenhuis-wilting-coare-helmond-industrieterrein-habraken_resultaat.png",
        "description": "Andamio montado de forma segura en la caja de escaleras para los trabajos en Wilting / Coare, en el polígono industrial Habraken."
    },
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/uitbouw-boven-trappenhuis_resultaat.png",
        "description": "Ampliación a medida y plataforma de trabajo de andamio segura sobre la caja de escaleras."
    }
],
    "klasse2": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/klasse-2-frame-steiger-layher-blitz-bungalow_resultaat.png",
        description: "Andamio de marco clase 2 con el sistema Layher Blitz en un bungalow de obra nueva."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-snelbouwsteiger-project-brabant_resultaat.png",
        description: "Andamio de construcción rápida Layher Blitz desplegado en un proyecto en Brabant."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-steigerbouw-nieuwbouw-bungalow_resultaat.png",
        description: "Construcción de andamios Layher Blitz para la realización de un bungalow de obra nueva."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/montage-klasse-2-gevelsteiger-cascobouw_resultaat.png",
        description: "Montaje de un andamio de fachada clase 2 para construcción de casco."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/nieuwbouw_14persoons_bungalow_frame_steiger_demontage_resultaat.png",
        description: "Desmontaje de un andamio de marco en un gran bungalow de obra nueva de 14 personas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steiger-werkvloer-overzicht-nieuwbouw-bungalows_resultaat.png",
        description: "Visión general de las plataformas de trabajo seguras de andamios en bungalows de obra nueva."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-hoofdgebouw-krimpfolie-kapconstructie_resultaat.png",
        description: "Construcción de andamios en el edificio principal provisto de lámina retráctil y una estructura de cubierta."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-klasse-2-utiliteitsbouw-layher_resultaat.png",
        description: "Construcción de andamios profesional clase 2 con componentes Layher para edificación no residencial."
    }
],
    installatieTechniek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steiger-werkplatform-industriële-installatie-machine_resultaat.png",
            description: "Andamio especializado para técnica de instalaciones."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Andamio de instalación técnica con múltiples niveles de trabajo. Solución profesional para mantenimiento y montaje."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Construcción de andamios avanzada para trabajo de instalaciones. Acceso seguro a todos los componentes técnicos."
        }
    ],
    videos: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-udenhout-brabant.mp4",
            description: "Andamio de renovación mantenimiento inmobiliario trabajos de pintura Udenhout"
        }
    ],
    videos1:[
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/nieuwbouw-appartementen-metselsteiger.mp4",
            description: "Andamio de albañilería apartamentos obra nueva"
        }
    ],
    videos2: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-luxe-villa-tilburg.mp4",
            description: "Andamio de renovación transformación a villa de lujo moderna Tilburg"
        }
    ],
    videos3: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-villa-bredaseweg-tilburg-brabant.mp4",
            description: "Andamio de renovación villa Bredaseweg Tilburg Brabant"
        }
    ],
    videos4: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-tilburg-renovatie-klasse-4-steige.mp4",
            description: "Construcción de andamios Tilburg renovación andamio clase 4"
        }
    ],
    videos5: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vijstaande_trappen_toren.mp4",
            description: "Torre de escaleras autoportante para acceso seguro a alturas. El vídeo muestra la construcción y el uso de la torre de escaleras en un entorno industrial."
        }
    ],
    videos6: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-werkvloer-op-ideale-werkhoogte.mp4",
            description: "Construcción de andamios plataforma de trabajo a altura de trabajo ideal"
        }
    ],
    videos7: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-overdekte-kap-constructie-wind-reductie-netten-beekse-bergen.mp4",
            description: "Construcción de andamios construcción de cubierta cubierta redes de reducción del viento Beekse Bergen" 
        }
    ],
    videos8: [  
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/grote-werkvloer-over-uitsaring-verdiepingsvloer-bol.com.mp4",
            description: "Gran plataforma de trabajo de 3 metros de ancho a 14 metros de alto 32 metros de largo sobre abertura forjado de planta en bol.com"
        }
    ],
    videos9: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-industrie-bol-transportbad-door-twee-ruimtes-en-twee-verdiepingen-boven-uitsparing-verdiepingsvloer.mp4",
            description: "Construcción de andamios industria bol.com en Waalwijk, cinta transportadora a través de dos espacios y dos plantas sobre abertura forjado de planta"
        }
    ],
    videos10: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Pompkamersteiger-scheepswerf-De-Werken-werkendam.mp4",
            description: "Plataforma de trabajo autoportante para trabajos de revisión en la sala de bombas de un barco. En Scheepswerf De Werken en Werkendam."
        }
    ],
    videos11: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Bungalows-nieuwbouw-frame-steiger-klasse-2.mp4",
            description: "Bungalows obra nueva andamio de marco clase 2"
        }
    ],
    videos12: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-machine-revisie-industrie-beton-fabriek-oosterhout.mp4",
            description: "Construcción de andamios revisión de máquinas industria fábrica de hormigón Oosterhout"
        }
    ],
    videos13: [
        {  
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", 
            description: "Andamio de renovación con dos puentes edificio monumental en Waalwijk"
        }
    ],
    videos14: [
        { 
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/industrie-machine-installatietechniek-op-plat-dak.mp4",
            description: "Industria máquina técnica de instalaciones en cubierta plana"
        }
    ]   
};

function createSlideshow(containerId, slides) {
    if (!slides || slides.length === 0) return;
    const container = document.getElementById(containerId);
    if (!container) return;

    // Crear las diapositivas
    slides.forEach((slideData, index) => {
        const slide = document.createElement('div');
        slide.className = 'compact-slide';
        if (index === 0) slide.classList.add('active');

        if (slideData.image) {
            const imageUrl = normalizeMediaUrl(slideData.image);
            const imageAlt = getDisplayDescription(slideData.description || `Slide ${index + 1}`);
            slide.innerHTML = `
                <img src="${imageUrl}" alt="${imageAlt}" loading="lazy" decoding="async">
                <div class="compact-description">${imageAlt}</div>
            `;
        } else if (slideData.video) {
            const videoPoster = getMediaPosterUrl(slideData.video);
            const videoDescription = getDisplayDescription(slideData.description || '');
            slide.innerHTML = `
                <div class="compact-description">${videoDescription}</div>
                <video controls poster="${videoPoster}" style="width:100%;height:auto;" preload="metadata">
                    <source src="${slideData.video}" type="video/mp4">
                    Su navegador no admite la etiqueta de vídeo.
                </video>
            `;
        }
        container.appendChild(slide);
    });

    const slideElements = container.querySelectorAll('.compact-slide');
    if (!slideElements.length) return;

    let currentSlide = 0;
    function nextSlide() {
        slideElements[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideElements.length;
        slideElements[currentSlide].classList.add('active');
    }
    // Asegurar que el intervalo solo se ejecute si hay más de 1 diapositiva
    if (slideElements.length > 1) setInterval(nextSlide, 4500);
}

// Un único inicializador seguro tras DOM listo
document.addEventListener('DOMContentLoaded', function () {
    try {
        const categoryMap = {
            industrie: 'Industria',
            videos1: 'Vídeo',
            nieuwbouw: 'Obra nueva',
            videos2: 'Vídeo',            
            renovatie: 'Renovación',
            utiliteit: 'Edificación no residencial',
            videos: 'Vídeo',            
            videos11: 'Vídeo',
            videos12: 'Vídeo',
            videos13: 'Vídeo',
            videos14: 'Vídeo',
            woningbouw: 'Construcción de viviendas',
            videos3: 'Vídeo',
            gevelonderhoud: 'Mantenimiento de fachadas',
            onderhoud: 'Mantenimiento',
            videos4: 'Vídeo',
            scheepvaart: 'Sector naval',
            videos5: 'Vídeo',
            zwembad: 'Piscina',
            trappentoren: 'Torre de escaleras',
            videos6: 'Vídeo',
            overspanning: 'Estructura de cercha',
            videos7: 'Vídeo',
            werkplatform: 'Plataforma de trabajo',
            videos8: 'Vídeo',
            windreductie: 'Reducción del viento',
            videos9: 'Vídeo',
            betonfabriek: 'Fábrica de hormigón',
            videos10: 'Vídeo',
            infra: 'Infraestructura',
        };

        document.querySelectorAll('.compact-slideshow').forEach(section => {
            const key = section.id || '';
            section.dataset.category = key.startsWith('videos') ? 'video' : (categoryMap[key] ? key : section.dataset.category || key);
            section.dataset.label = categoryMap[key] || key;
            section.dataset.searchText = `${section.dataset.label} ${key} ${section.innerText || ''}`.toLowerCase();
        });

        // Inicializar las presentaciones (comprueba si los contenedores existen)
        Object.entries(slideshowData).forEach(([id, slides]) => {
            createSlideshow(id, slides);
            const section = document.getElementById(id);
            if (section) {
                section.dataset.searchText = `${section.dataset.label || ''} ${id} ${slides.map(slide => `${slide.description || ''} ${slide.image || ''} ${slide.video || ''}`).join(' ')}`.toLowerCase();
            }
        });

        const searchInput = document.getElementById('gallerySearch');
        const categoryButtons = document.querySelectorAll('.gallery-filter-btn');
        const gallerySections = document.querySelectorAll('.compact-slideshow');
        let activeCategory = 'all';

        function normalizeSearchText(text) {
            return (text || '').toLowerCase().replace(/\s+/g, ' ').trim();
        }

        function applyGalleryFilter() {
            if (!searchInput) return;
            const searchTerm = normalizeSearchText(searchInput.value);
            gallerySections.forEach(section => {
                const sectionText = normalizeSearchText(section.dataset.searchText || '');
                const categoryMatches = activeCategory === 'all' || section.dataset.category === activeCategory;
                const searchMatches = !searchTerm || sectionText.includes(searchTerm);
                const shouldShow = categoryMatches && searchMatches;
                const initialDisplay = section.dataset.initialDisplay || '';
                const displayValue = initialDisplay === 'none' ? 'block' : initialDisplay;
                section.style.display = shouldShow ? displayValue : 'none';
            });
        }

        gallerySections.forEach(section => {
            section.dataset.initialDisplay = section.style.display || '';
        });

        categoryButtons.forEach(button => {
            button.addEventListener('click', function () {
                activeCategory = button.dataset.category || 'all';
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyGalleryFilter();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', applyGalleryFilter);
            applyGalleryFilter();
        }

        // Botones y contenedores con comprobaciones de null
        const botonMasFotos = document.getElementById('meerFotosKnop');
        const botonMasVideos = document.getElementById('meerVideosKnop');
        const botonLeerMas = document.getElementById('leesMeerKnop');
        const slideshowContainer = document.querySelector('.carousel');
        const videoContainer = document.getElementById('extraVideos');
        const carousel = document.getElementById('carousel');

        // botonMasFotos: añade fotos adicionales si el botón existe
        if (botonMasFotos && slideshowContainer) {
            botonMasFotos.addEventListener('click', function () {
                const fotosExtra = [
                    "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger_bouw.jpg",
                    "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning.png"
                ];
                fotosExtra.forEach(src => {
                    const img = document.createElement('img');
                    img.src = normalizeMediaUrl(src);
                    img.alt = (document.documentElement.lang || '').toLowerCase() === 'es' ? 'Foto adicional' : 'Foto adicional';
                    img.loading = 'lazy';
                    slideshowContainer.appendChild(img);
                });
                botonMasFotos.style.display = 'none';
            });
        }

        // botonMasVideos: carga vídeos adicionales
        if (botonMasVideos && (carousel || videoContainer)) {
            botonMasVideos.addEventListener('click', function () {
                const videoData = [
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie_steigers/Renovatie-steiger-vastgoed-onderhoud-schilderwerk-udenhout.mp4", description: "Andamio de renovación mantenimiento inmobiliario trabajos de pintura Udenhout" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger.mp4", description: "Andamio de albañilería apartamentos obra nueva" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", description: "Andamio de renovación con dos puentes edificio monumental en Waalwijk" }
                ];
                videoData.forEach(video => {
                    const videoElement = document.createElement('div');
                    const poster = getMediaPosterUrl(video.src);
                    const description = getDisplayDescription(video.description || '');
                    videoElement.innerHTML = `
                        <div class="compact-description">${description}</div>
                        <video controls poster="${poster}" style="width:100%;height:auto;" preload="metadata">
                            <source src="${video.src}" type="video/mp4">
                            Su navegador no admite la etiqueta de vídeo.
                        </video>
                    `;
                    if (carousel) carousel.appendChild(videoElement);
                    else if (videoContainer) videoContainer.appendChild(videoElement);
                });
                if (videoContainer) videoContainer.style.display = 'grid';
                botonMasVideos.style.display = 'none';
            });
        }

        // botonLeerMas: muestra presentaciones adicionales si están presentes
        if (botonLeerMas) {
            botonLeerMas.addEventListener('click', function () {
                const slideshows = [
                    'renovatie', 'utiliteit', 'woningbouw', 'gevelonderhoud', 'onderhoud',
                    'schilderwerk', 'scheepvaart', 'zwembad', 'trappentoren', 'werkplatform',
                    'overspanning', 'windreductie', 'betonfabriek', 'infra',
                    'transportband', 'klasse2', 'installatieTechniek', 'videos4','videos5',
                    'videos6', 'videos7', 'videos8', 'videos9', 'videos10'
                ];
                slideshows.forEach(id => {
                    const slideshow = document.getElementById(id);
                    if (slideshow) slideshow.style.display = 'block';
                });
                botonLeerMas.style.display = 'none';
            });
        }

        // Extra: alternadores para las funciones auxiliares existentes (comprobaciones seguras)
        const toggleVideosBtn = document.getElementById('toggleVideosBtn'); // opcional
        if (toggleVideosBtn && videoContainer) {
            toggleVideosBtn.addEventListener('click', function () {
                videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';
            });
        }

        // Ocultar extraVideos inicialmente si está presente
        if (videoContainer) videoContainer.style.display = 'none';
    } catch (err) {
        // Registrar en silencio evita romper el sitio
        console.error('Error de inicialización del script:', err);
    }
});

// las demás funciones auxiliares pueden permanecer debajo
function mostrarMasSlides() {
    const slides = document.querySelectorAll('.compact-slideshow[style*="display: none"]');
    slides.forEach((slide, index) => {
        if (index < 5) slide.style.display = 'block';
    });
}

function mostrarMasFotos() {
    alert('Se están cargando más fotos...');
}

function mostrarMasVideos() {
    const extraVideos = document.getElementById('extraVideos');
    if (!extraVideos) return;
    extraVideos.style.display = extraVideos.style.display === 'none' ? 'block' : 'none';
}

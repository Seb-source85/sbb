// script.js - versión consolidada y reparada
function normalizeMediaUrl(url) {
    if (!url) return url;

    let cleanUrl = url.trim().replace(/\\/g, '/');

    // Normalizar las rutas locales a una URL absoluta
    if (/^[a-z]:\//i.test(cleanUrl) && cleanUrl.includes('/beeldmateriaal/')) {
        cleanUrl = `https://www.steigerbouwbrabant.nl/beeldmateriaal/${cleanUrl.split('/beeldmateriaal/').pop()}`;
    }

    // Codificar solo los espacios, NO forzar la extensión
    return cleanUrl.replace(/ /g, '%20');
}

function getMediaPosterUrl(url) {
    if (!url) return '';
    return normalizeMediaUrl(url);
}

function laadAfbeeldingen() {
    const afbeeldingen = document.querySelectorAll('img'); // Seleccionar todas las imágenes de la página
    afbeeldingen.forEach(afbeelding => {
        let src = afbeelding.getAttribute('src');
        if (src && src.includes(' ')) {
            const gecodeerdeSrc = src.replace(/ /g, '%20');
            afbeelding.setAttribute('src', gecodeerdeSrc);
        }

        const normalizedSrc = normalizeMediaUrl(afbeelding.getAttribute('src'));
        if (normalizedSrc && normalizedSrc !== afbeelding.getAttribute('src')) {
            afbeelding.setAttribute('src', normalizedSrc);
        }

        if (!afbeelding.getAttribute('alt') && afbeelding.getAttribute('src')) {
            afbeelding.setAttribute('alt', afbeelding.getAttribute('src').split('/').pop());
        }
    });
}

window.addEventListener('load', laadAfbeeldingen);
const slideshowData = {
    industrie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-steiger-machine-onderhoud_resultaat.png",
            description: "Situación previa a la colocación de un andamio para el mantenimiento de máquinas en un entorno industrial. Construcción de andamios especializada para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-van-de-industie-steiger_resultaat.png",
            description: "Situación previa a la colocación del andamio industrial. Construcción de andamios especializada para una accesibilidad y seguridad óptimas en la ejecución del mantenimiento de máquinas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Construcción de andamios para la revisión de máquinas industriales. Construcción de andamios especializada para una accesibilidad y seguridad óptimas durante los trabajos de mantenimiento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(6)_resultaat.png",
            description: "Construcción de andamios industriales para la revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(7)_resultaat.png",
            description: "Construcción de andamios industriales para la revisión de máquinas con dispositivos de seguridad integrados."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(8)_resultaat.png",
            description: "Construcción de andamios industriales para la revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Andamio de inspección completo con plataformas de seguridad integradas para el mantenimiento de la depuradora de agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(17)_resultaat.png",
            description: "Construcción de andamios industriales para la revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(15)_resultaat.png",
            description: "Construcción de andamios industriales para la revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(10)_resultaat.png",
            description: "andamio destinado al mantenimiento de máquinas en un entorno industrial. Industria alimentaria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(11)_resultaat.png",
            description: "Construcción de andamios industriales para la revisión de máquinas con dispositivos de seguridad integrados y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-steiger-installatie-techniek-industie-plat-twee-levels-plat-dak_resultaat.png",
            description: "Situación de la instalación del andamio en un entorno industrial con cubiertas planas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Situación previa a la colocación del andamio industrial en Tilburg. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },       
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Proyecto de revisión de máquinas en Helmond, polígono industrial Zuid. Construcción de andamios especializada para el mantenimiento de máquinas industriales."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (12)_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo para la revisión de máquinas. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-14-hoogte-vrije-werkvloer_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo libre a 14 metros de altura para la revisión de máquinas. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-distributie-centrum_resultaat.png",
            description: "Construcción de andamios industriales en un centro de distribución. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-waalwijk-industrie-werkvloer-14-hoog-_resultaat.png",
            description: "Construcción de andamios industriales en Waalwijk con plataforma de trabajo a 14 metros de altura. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },            
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerconstructie-industriele-lopende-band_resultaat.png",
            description: "Estructura de andamio a medida para una cinta transportadora industrial. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (5)_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo para la revisión de máquinas. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-steigerbouw-werkvloer-met-leuningen_resultaat.png",
            description: "Construcción segura de andamios con plataforma de trabajo y barandillas para la revisión de máquinas industriales. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },        
        {
            image:  "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerconstructie-binnen-distributiecentrum_resultaat.png",
            description: "Estructura de andamio industrial dentro de un centro de distribución. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/32-meter-lang-3-meter-breed-14-hoog-tijdelijke-werkvoer-vrij-platform_resultaat.png",
            description: "Plataforma de trabajo temporal de 32 metros de largo, 3 metros de ancho y 14 metros de alto con plataforma libre para la revisión de máquinas industriales. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/montage-werkvloer-waalwijk-steigerbouw_resultaat.png",
            description: "Montaje de la plataforma de trabajo en Waalwijk para la construcción de andamios industriales. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriele-steigerbouw-lopende-band-overbrugging_resultaat.png",
            description: "Construcción de andamios industriales con paso elevado sobre la cinta transportadora. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-werkvloer-distributiecentrum-transportsysteem_resultaat.png",
            description: "Construcción de andamios industriales con plataforma de trabajo en un centro de distribución para el sistema de transporte. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilig-steiger-looppad-industriele-hal_resultaat.png",
            description: "Andamio seguro con pasarela en una nave industrial. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steiger-interne-transportsystemen-waalwijk_resultaat.png",
            description: "Andamio a medida para sistemas de transporte internos en Waalwijk. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-industriesteiger-tussen-ruimtes-logistiek_resultaat.png",
            description: "Andamio industrial seguro entre espacios en un centro logístico. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/complexe-steigerbouw-logistieke-sector-brabant_resultaat.png",
            description: "Construcción de andamios compleja en el sector logístico de Brabante. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriesteiger-transportband-bol-com-waalwijk_resultaat.png",
            description: " Andamio industrial para la cinta transportadora de Bol.com en Waalwijk. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industrie-steiger-steigernontage-transportband-steigerbouw-machinepark_resultaat.png",
            description: "Andamio industrial para el montaje del andamio de la cinta transportadora en el parque de máquinas. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },    
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-vrijstaande-werkvloer-industrie-aanleg-machinepark-1_resultaat.png",
            description: "Andamio autoportante en una instalación industrial. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
            {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Estructura de andamio espacial de dos plantas para la cinta transportadora. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-montage-distributiecentrum-bol-com_resultaat.png",
            description: "Montaje de andamios en el centro de distribución de Bol.com. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-distributiecentrum-waalwijk-machinepark_resultaat.png",
            description: "Construcción de andamios en el centro de distribución de Waalwijk para el parque de máquinas. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
          {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Estructura de andamio espacial de dos plantas para la cinta transportadora. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat_resultaat.png",
            description: "Andamio para el acceso a una boca de hombre en un entorno industrial. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat-industrie-opslagtank-zuiveren-brabant-water_resultaat.png",
            description: "Andamio para el acceso a una boca de hombre en un entorno industrial. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-besloten-ruimte_resultaat.png",
            description: "Andamio para el acceso a un espacio confinado en un entorno industrial. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        }
    ],
    utiliteit: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/detail-steiger-werkvloer-kantplanken_resultaat.png",
            description: "Detalle de la plataforma de trabajo del andamio con rodapiés para mayor seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerbouw-locatie-waterzuivering_resultaat.png",
            description: "Construcción de andamios a medida en las instalaciones de la depuradora de agua. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/leuningwerk-inspectiesteiger-waterzuivering-industrie_resultaat.png",
            description: "Barandillas para el andamio de inspección en las instalaciones de la depuradora de agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/tube-lock-inspectiesteiger-waterzuivering-basis_resultaat.png",
            description: "Tube-lock para el andamio de inspección en las instalaciones de la depuradora de agua."
        },
        { 
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-grote-werk-inspectie-vloer_resultaat.png",
            description: "Gran plataforma de inspección para la construcción de andamios."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (39)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (38)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (37)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (36)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (35)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (34)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (33)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (31)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (32)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (30)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (29)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (28)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (26)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (25)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (24)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (23)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (22)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (21)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (20)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (16)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (14)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (13)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (9)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)-1_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)-1_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-inspectiesteiger-overzicht_resultaat.png",
            description: "Vista general de los andamios de inspección en la industria."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)_resultaat.png",
            description: "Andamio de inspección con plataforma de trabajo segura en las instalaciones de la depuradora de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-hapert-riwz_resultaat.png",
            description: "Andamios Hapert RIWZ."
        }
    ],
    nieuwbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio de albañilería en fase de acabado en construcción residencial en Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Andamios de sistema pesados para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje del andamio de albañilería en un proyecto de obra nueva en Gorichem. Construcción de andamios especializada para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio de albañilería en fase de acabado en construcción residencial en Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Andamios de sistema pesados para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje del andamio de albañilería en un proyecto de obra nueva en Gorichem. Construcción de andamios especializada para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woningen_resultaat.png",
            description: "Desmontaje del andamio en viviendas de obra nueva. Soluciones de andamiaje eficientes y seguras para proyectos de vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woning-waterkant_resultaat.png",
            description: "Desmontaje del andamio en viviendas de obra nueva junto al agua. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-gilze-rijen_resultaat.png",
            description: "Desmontaje del andamio de albañilería en un proyecto de obra nueva en Gilze-Rijen. Construcción de andamios especializada para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-rijen_resultaat.png",
            description: "Desmontaje del andamio de albañilería en un proyecto de obra nueva en Rijen. Construcción de andamios especializada para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/bouwsteiger_hoge_slagen_gelijk_met_verdieping_derde_leuning_voorloopleuning_tijdens_op_en_afbouw_resultaat.png",
            description: "Andamio de obra con niveles altos a la altura de la planta, tercera barandilla y barandilla de avance durante el montaje y el desmontaje. Construcción de andamios especializada para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/complete-gevelsteiger-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio de fachada completo para apartamentos de obra nueva. Construcción de andamios especializada para una accesibilidad y seguridad óptimas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage_tube_lock_metsel_steiger_resultaat.png",
            description: "Desmontaje del andamio de albañilería en apartamentos de obra nueva, nivel igual a la altura de la planta, tercera barandilla y barandilla de avance."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-apartementen-rijen-brabant-nederland_resultaat.png",
            description: "Desmontaje del andamio de albañilería en apartamentos de obra nueva en Rijen, Brabante, Países Bajos. Construcción de andamios especializada para un desmontaje eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metsel-steiger-gorichem_resultaat.png",
            description: "Desmontaje del andamio de albañilería en apartamentos de obra nueva en Gorichem. Construcción de andamios especializada para un desmontaje eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-met-goederenlift_resultaat.png",
            description: "Desmontaje del andamio de albañilería en apartamentos de obra nueva con montacargas. Construcción de andamios especializada para un desmontaje eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste_slag_metsel_steiger_schimmert_resultaat.png",
            description: "Primer nivel del andamio de albañilería en apartamentos de obra nueva en Schijndel. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste-slag-werkvloer-metselsteiger-windreductie_resultaat.png",
            description: "Primer nivel de la plataforma de trabajo del andamio de albañilería con reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist_resultaat.png",
            description: "Fase de desmontaje, material listo para el transporte, transporte vertical, operador de grúa."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist-rijen_resultaat.png",
            description: "Fase de desmontaje, material listo para el transporte, transporte vertical, operador de grúa - Rijen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_metselsteiger_voorloopleuning_materiaal_dichtbij_de_steiger_resultaat.png",
            description: "Fase de montaje del andamio de albañilería con barandilla de avance y material cerca del andamio. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_resultaat.png",
            description: "Fase de montaje: montar y levantar el andamio de albañilería."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_tube_lock_klasse4_resultaat.png",
            description: "Fase de montaje: montar y levantar el andamio de albañilería tube lock clase 4. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/gevelsteiger-nieuwbouw-appartementencomplex_resultaat.png",
            description: "Fase de montaje del andamio de fachada en un complejo de apartamentos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/intern_ladderhuis_zware_steiger_klasse4_metsel_steiger_resultaat.png",
            description: "Caseta de escalera interna, andamio pesado de albañilería clase 4. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/layher allround metselsteiger deurne_resultaat.png",
            description: "Andamio de albañilería Layher Allround en Deurne. Construcción de andamios especializada para un avance de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_01_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_02_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva en Schijndel. Construcción de andamios especializada para un avance de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_woningen_met_toren_kraan_resultaat.png",
            description: "Andamio de albañilería para viviendas de obra nueva con grúa torre. Construcción de andamios especializada para un avance de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio de albañilería Schijndel Moeskops, apartamentos de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio de albañilería Schijndel Moeskops, apartamentos de obra nueva con estructura de cerchas. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_slag_gelijk_met_hoogte_verdieping_derde_leuning_resultaat.png",
            description: "Andamio de albañilería con nivel a la altura de la planta, tercera barandilla. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_vrijstaande_woning_resultaat.png",
            description: "Andamio de albañilería en vivienda unifamiliar aislada. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_werkvloer_op_etage_hoogte_nieuwbouw_appartementen_resultaat.png",
            description: "Andamio de albañilería con plataforma de trabajo a la altura de la planta en apartamentos de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger (2)_resultaat.png",
            description: "Andamio de albañilería para un proyecto de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_bevoorraad_stenen_hogeslag_staander_om-en-om_600kgm2_resultaat.png",
            description: "Andamio de albañilería abastecido con ladrillos, nivel alto, montantes alternados, 600 kg/m². Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_extern_ladderhuis_resultaat.png",
            description: "Andamio prefabricado con caseta de escalera externa para una circulación óptima. Acceso vertical eficiente con la máxima seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_goederen_lift_inklimpreventie-windreductie-steiger-gaas-tilburg_resultaat.png",
            description: "Andamio de albañilería con montacargas, prevención de escalada y malla de reducción de viento en Tilburg. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_met_goederen_lift_nieuwbouw_woningen_resultaat.png",
            description: "Andamio de albañilería con montacargas para viviendas de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_materiaal_dichtbij_steiger_resultaat.png",
            description: "Andamio de albañilería en apartamentos de obra nueva abastecido con ladrillos, material cerca del andamio. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_verspringing-breda_resultaat.png",
            description: "Andamio de albañilería en apartamentos de obra nueva abastecido con ladrillos, con desfase, en Breda. Construcción de andamios especializada para un avance de obra eficiente."
        }
    ],
    woningbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen_resultaat.png",
            description: "Andamio de albañilería en apartamentos de obra nueva, montaje y levantamiento. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001.png_resultaat.png",
            description: "Andamio de albañilería en apartamentos de obra nueva, montaje y levantamiento. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001_resultaat.png",
            description: "Andamio de albañilería en apartamentos de obra nueva, montaje y levantamiento en Breda. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_oppersteiger_aanvoersteiger_nieuwbouw_werkvloer_op_verdiepingshoogte_resultaat.png",
            description: "Andamio de albañilería, andamio de suministro y andamio de aprovisionamiento para obra nueva con plataforma de trabajo a la altura de la planta. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock01_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock02_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_uitbouw_naar_breedte_vloer_resultaat.png",
            description: "Andamio de albañilería ampliado al ancho del forjado. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_werkvloer_gereed_voor_metsellaar_resultaat.png",
            description: "Plataforma de trabajo del andamio de albañilería lista para el albañil. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-nieuwbouwproject_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción de andamios especializada para un avance de obra eficiente."
        },
        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-appartementen-eindhoven-aanvoersteiger_resultaat.png",
            description: "Andamio de albañilería en apartamentos de Eindhoven, andamio de aprovisionamiento. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw  /metsel-steiger-dubbele-heup-leuning-knie-leuning-en-kant-plank-Tube-Lock_resultaat.png",
            description: "Andamio de albañilería con doble barandilla, barandilla intermedia y rodapié Tube Lock. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-fase-demontage-hoge-slag-werkvloer-gelijk_aan-verdiepingsvloer_resultaat.png",
            description: "Andamio de albañilería en fase de desmontaje, plataforma de trabajo de nivel alto a la altura del forjado. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-in-gorinchem_resultaat.png",
            description: "Andamio de albañilería en Gorinchem. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-iopbouwen-nieuwbouw-appartementen_resultaat.png",
            description: "Levantamiento del andamio de albañilería en apartamentos de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-met-intern-ladderhuis_resultaat.png",
            description: "Andamio de albañilería con caseta de escalera interna. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-nieuwbouw-woningen-gorichem_resultaat.png",
            description: "Andamio de albañilería para viviendas de obra nueva en Gorichem. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-op-plat-dak-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio de albañilería sobre cubierta plana en apartamentos de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para viviendas pareadas de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje del andamio de albañilería en apartamentos de obra nueva en Brabante. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje del andamio de albañilería de acero en obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje del andamio de albañilería: replanteo de la base. Construcción de andamios especializada para un avance de obra eficiente."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para viviendas pareadas de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje del andamio de albañilería en apartamentos de obra nueva en Brabante. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje del andamio de albañilería de acero en obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje del andamio de albañilería: replanteo de la base. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para viviendas pareadas de obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje del andamio de albañilería en apartamentos de obra nueva en Brabante. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje del andamio de albañilería de acero en obra nueva. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje del andamio de albañilería: replanteo de la base. Construcción de andamios especializada para un avance de obra eficiente."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-veldhoven-metselsteiger_nieuwbouw_appartementen_vierdeplank_verlenger_uitschuifkorteling_resultaat.png",
            description: "Montaje en Veldhoven del andamio de albañilería en apartamentos de obra nueva con cuarto tablón prolongador y travesaño extensible. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montag-nieuwbouw-appartementen-metselsteiger-slag-gelijk-verdiepingshoogte-derde-leuning-voorloopleuning_resultaat.png",
            description: "Montaje del andamio de albañilería en apartamentos de obra nueva con nivel igual a la altura de la planta, tercera barandilla y barandilla de avance. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_bouw-helmond_resultaat.png",
            description: "Construcción del andamio de albañilería en apartamentos de obra nueva en Helmond. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning_resultaat.png",
            description: "Apartamentos de obra nueva, andamio de albañilería con nivel igual a la altura de la planta, tercera barandilla y barandilla de avance. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Apartamentos de obra nueva con andamio pesado de acero, montacargas, mallas de andamio y prevención de escalada en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Proyecto de obra nueva de apartamentos con andamio pesado clase 4 y niveles altos. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Vivienda de obra nueva, andamio de albañilería tubelock. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Apartamentos de obra nueva, montaje del andamio de albañilería y del andamio de aprovisionamiento. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Apartamentos de obra nueva, andamio con estructura de cerchas para salvar los garajes, en Schijndel. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Obra nueva, andamio para el tejador y desmontaje del andamio en Chorichem. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Viviendas de obra nueva, andamios de albañilería en un barrio junto al agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Parte inferior del nivel superior de la plataforma de trabajo del andamio de albañilería. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/opgeleverd-metselsteiger-gorichem-nieuwbouw-woningen_resultaat.png",
            description: "Entrega del andamio de albañilería en viviendas de obra nueva en Gorichem. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/overzicht-stalen-systeemsteigers-bouwproject_resultaat.png",
            description: "Vista general de andamios de sistema de acero en un proyecto de construcción. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-nieuwbouw-woning-steiger-deurne_resultaat.png",
            description: "Andamio prefabricado para vivienda de obra nueva en Deurne. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-woningbouw-zware-klasse4-metselsteiger-binnenleunin-console-dubbele-vlonder_resultaat.png",
            description: "Andamio de albañilería pesado clase 4 para vivienda prefabricada con barandilla interior, ménsula y doble plataforma. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Apartamentos de obra nueva con andamio pesado de acero, montacargas, mallas de andamio y prevención de escalada en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Proyecto de obra nueva de apartamentos con andamio pesado clase 4 y niveles altos. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Vivienda de obra nueva, andamio de albañilería tubelock. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Apartamentos de obra nueva, montaje del andamio de albañilería y del andamio de aprovisionamiento. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Apartamentos de obra nueva, andamio con estructura de cerchas para salvar los garajes, en Schijndel. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Obra nueva, andamio para el tejador y desmontaje del andamio en Chorichem. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Viviendas de obra nueva, andamios de albañilería en un barrio junto al agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Parte inferior del nivel superior de la plataforma de trabajo del andamio de albañilería. Construcción de andamios especializada para un avance de obra eficiente."
        },

        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva en Schijndel. Construcción de andamios especializada para un avance de obra eficiente."
        }
    ],
    renovatie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-werkvloer-trottoir-smalle-straat_resultaat.png",
            description: "Construcción de andamios de albañilería a medida por Team Steigerbouw Brabant para la renovación de una vivienda en una calle estrecha. La plataforma de trabajo se ha colocado sobre la acera para garantizar una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/technische-situatieschets-steigerbouw-voorgevel_resultaat.png",
            description: "Esquema técnico de la situación del andamio para la fachada principal de un proyecto de renovación."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/smalle-gevelsteiger-binnenstad-renovatie_resultaat.png",
            description: "Andamio de fachada estrecho a medida por Team Steigerbouw Brabant para la renovación de una vivienda en el centro de la ciudad. El andamio se ha diseñado especialmente para encajar en calles estrechas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/stalen-gevelsteiger-voetgangerszone-veiligheid_resultaat.png",
            description: "Andamio de fachada de acero a medida por Team Steigerbouw Brabant para la renovación de una vivienda en la Hasseltstraat de Tilburg, en el centro de la ciudad. El andamio se ha diseñado pensando en la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-schuin-dak-schoorsteen-tilburg_resultaat.png",
            description: "Construcción de andamios a medida por Team Steigerbouw Brabant para la renovación de la cubierta y el mantenimiento de la chimenea de un chalé en la Bredaseweg de Tilburg."
        },   
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/schoorsteensteiger-veilig-leuningwerk-schuin-dak_resultaat.png",
            description: "Andamio de cubierta con barandillas certificadas. Montado especialmente sin cargar el tejado, ideal para cubiertas delicadas que se renuevan."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/dakrenovatie-steiger-villa-bredaseweg-tilburg_resultaat.png",
            description: "Andamio profesional para la renovación de la cubierta alrededor de un gran chalé en la Bredaseweg de Tilburg - Team Steigerbouw Brabant"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/daksteiger-dakkapel-veilig-werken-op-hoogte_resultaat.png",
            description: "Andamio de cubierta seguro para la renovación de una buhardilla. Team Steigerbouw Brabant garantiza una seguridad de trabajo óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-woningrenovatie-steigerbouw-brabant_resultaat.png",
            description: "Andamio de fachada para la renovación de una vivienda en Waalwijk, Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/kappenkap-steiger-doorwerksysteem-renovatie_resultaat.png",
            description: "Andamio destinado a la renovación de la cubierta y al pintado por parte del pintor de una casa señorial en Waalwijk." // Añade aquí una descripción relevante
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-dakrenovatie-werkvloer-loon-op-zand_resultaat.png",
            description: "Andamio para la renovación de cubierta en Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouwer-aanhuis-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Andamio para la renovación de cubierta en Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-situatieschets-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Esquema de situación del andamio para la renovación de cubierta en Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerconstructie-woningbouw-renovatie-brabant_resultaat.png",
            description: "Estructura de andamio para la renovación de viviendas en Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/tube-lock-steiger-uitkraging-dakkapel_resultaat.png",
            description: "Andamio tube-lock para el voladizo de una buhardilla."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/veilig-werken-op-hoogte-dakmontage_resultaat.png",
            description: "Trabajo seguro en altura durante el montaje en cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/maatwerk-gevelsteiger-particuliere-woning_resultaat.png",
            description: "Andamio de fachada a medida para una vivienda particular."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/opbouw-renovatiesteiger-met-puinvanger_resultaat.png",
            description: "Andamio de renovación pesado con recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger_tilburg_resultaat.png",
            description: "Andamio de renovación para la renovación de cubierta en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Andamio de renovación pesado con recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Andamio de renovación para la renovación de cubierta en Goirle."
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
            description: "Solución de andamiaje para la renovación de cubiertas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-gevel-renovatie-steiger-puinvanger_resultaat.png",
            description: "Andamio pesado de renovación de fachada con recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Andamio de renovación para la renovación de cubierta en Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-layher-allround-steiger-windreductie-binnenleuningen-console-puinvanger_resultaat.png",
            description: "Andamio de renovación pesado Layher Allround con ménsula, reducción de viento y recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-monteren-eindhoven_resultaat.png",
            description: "Andamio de renovación pesado con reducción de viento en Eindhoven, con recogedor de escombros y reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-windreductie-rotterdam_resultaat.png",
            description: "Andamio de renovación pesado con reducción de viento en Rotterdam, con recogedor de escombros y reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/aanvoer-steiger-tbv-lift-gemeentehuis-uden_resultaat.png",
            description: "Andamio de aprovisionamiento para los ascensores del ayuntamiento de Uden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-dakrenovatie-tilburg_resultaat.png",
            description: "Andamio de fachada para la renovación de cubierta en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steiger-dakrenovatie_resultaat.png",
            description: "Andamio de fachada para la renovación de cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steigeroplossing-dakrenovatie_resultaat.png",
            description: "Solución de andamio de fachada para la renovación de cubierta."
        }
    ],
    scheepvaart: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Montaje del andamio de revisión para una grúa de carga naval offshore."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouw-revisie-steiger-offshore_resultaat.png",
            description: "Montaje del andamio para la revisión de grúas en la construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger_aan_boord_scheepsbouw_resultaat.png",
            description: "Montaje del andamio para la revisión de grúas en la construcción naval, detalle 01."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-aan-boord-schip-kraan-revisie_resultaat.png",
            description: "Andamio a bordo para la revisión de grúas en la construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-antwerpen-haven-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Andamio en el puerto de Amberes para la revisión de grúas en la construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-aan-boord-schip-kraan_resultaat.png",
            description: "Andamio a bordo para trabajos de construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-schip-revisie_resultaat.png",
            description: "Construcción de andamios especializada para el mantenimiento de buques. Revisión de la grúa de carga con dispositivos de seguridad adaptados."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-rederij_resultaat.png",
            description: "Construcción de andamios marítimos para el mantenimiento de grúas. Estructura compleja con componentes estancos."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-revisie-steiger-scheepvaart_resultaat.png",
            description: "Montaje del andamio para la revisión en el sector naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger_scheepsbouw-kraan-revisie_resultaat.png",
            description: "Montaje del andamio para la revisión de grúas en la construcción naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-vrijstraander-werkvloer-pompkamer-scheepsbouw_resultaat.png",
            description: "Andamio de alta calidad para la reparación de buques. Solución a medida para trabajos marítimos."
        }
    ],
    zwembad: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-nieuw-bouw_resultaat.png",
            description: "Nuevo andamio para la construcción de una piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-over-kapping-met-ballast_resultaat.png",
            description: "Andamio de cubierta con lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-overkapping-zwembad-betegelen_resultaat.png",
            description: "Cubierta de andamio para el alicatado de la piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-spanten-constructie-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Andamio con estructura de cerchas para la cubierta de la piscina con film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_betegelen_steiger_overkapping_krimpfolie_ballast_resultaat.png",
            description: "Alicatado de la piscina, cubierta de andamio con film retráctil y lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_spantenconstructie_tralieligger_krimpfolie_ballast_tegelzetter_resultaat.png",
            description: "Cubierta de piscina con estructura de cerchas, viga de celosía, film retráctil, lastre y alicatador."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_tegelzetter_betegelen_zwembad_steiger_montage_fase_006_resultaat.png",
            description: "Cubierta de piscina, alicatador alicatando, fase de montaje del andamio de la piscina 006."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad-overkapping-egelzetter-betegelen-zwembad-steiger-montage-fase_resultaat.png",
            description: "Cubierta de piscina, alicatador alicatando, fase de montaje del andamio de la piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Andamio para trabajo continuo con protección frente a las inclemencias del tiempo."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Estructura de cubierta envuelta, construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Andamio con estructura de cubierta envuelta, construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Montaje y envoltura con film retráctil del andamio con estructura de cerchas para la cubierta de la piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Cubierta con estructura de cerchas envuelta en film retráctil, andamio con viga de celosía."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Cubierta de andamio con film retráctil sobre la piscina, estructura de cerchas envuelta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Cubierta de andamio con film retráctil sobre la piscina, alicatador, estructura de cerchas, viga de celosía y lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Estructura de cubierta con andamio envuelto en film retráctil, estructura de cerchas, viga de celosía y lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Estructura de cerchas con cubierta envuelta, construcción de andamios en Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Estructura de cerchas envuelta en film retráctil, cubierta de andamio con protección frente al clima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ballast-overkapping-krimpfolie-ingepakt-steiger-zwembad_resultaat.png",
            description: "Lastre, cubierta con film retráctil, andamio envuelto sobre la piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Andamio para trabajo continuo con protección frente a las influencias del tiempo."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Estructura de cubierta envuelta, construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Andamio con estructura de cubierta envuelta, construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Montaje y envoltura con film retráctil del andamio con estructura de cerchas para la cubierta de la piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Cubierta con estructura de cerchas envuelta en film retráctil, andamio con viga de celosía."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Cubierta de andamio con film retráctil sobre la piscina, estructura de cerchas envuelta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Cubierta de andamio con film retráctil sobre la piscina, alicatador, estructura de cerchas, viga de celosía y lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Estructura de cubierta con andamio envuelto en film retráctil, estructura de cerchas, viga de celosía y lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Estructura de cerchas con cubierta envuelta, construcción de andamios en brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Estructura de cerchas envuelta en film retráctil, cubierta de andamio con protección frente al clima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-tralieligger-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Estructura de cerchas con viga de celosía para la cubierta de la piscina con film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-brabant-kap-constructie_resultaat.png",
            description: "Estructura de cubierta, construcción de andamios en Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-foto-in-het-zwemad-onder-de-spanten-constructie_resultaat.png",
            description: "Foto de la construcción del andamio en la piscina bajo la estructura de cerchas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-krimpfolie-en-kap_resultaat.png",
            description: "Construcción de andamios con film retráctil y cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-over-het-zwembad-zodat-er-doorgewerkt-kan-worden_resultaat.png",
            description: "Construcción de andamios sobre la piscina para poder seguir trabajando."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-met-kripfolie_resultaat.png",
            description: "Construcción de andamios para la cubierta de la piscina con film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-ter-water-resistentie_resultaat.png",
            description: "Construcción de andamios para la cubierta de la piscina con resistencia al agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-constructie-zwembad-overkapping_met-krimfolie_resultaat.png",
            description: "Estructura de andamio para la cubierta de la piscina con film retráctil."
        }
    ],
    trappentoren: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/opbouwen-vrijstaande-trappentoren-bouwverlichting_resultaat.png",
            description: "Fase de montaje: torre de escaleras autoportante con dispositivos de seguridad integrados. Estructura modular para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/stalen-trappentoren-22-meter-hoogbouw_resultaat.png",
            description: "Torre de escaleras autoportante para acceder a la cubierta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-industrieële-trappentoren_resultaat.png",
            description: "Torre de escaleras autoportante de 22 metros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-vrijstaande-trapentoren-zonder-ankers_resultaat.png",
            description: "Torre de escaleras autoportante sin anclajes."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steiger-trappentoren-distributiecentrum-logistiek_resultaat.png",
            description: "Torre de escaleras de andamio para centros de distribución e instalaciones logísticas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/tijdelijke-trappentoren-zonnepanelen-waalwijk-montage-fase_resultaat.png",
            description: "Torre de escaleras temporal para paneles solares en Waalwijk. Fase de montaje con dispositivos de seguridad integrados."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren_onverankerd_vrijstaand_18meter_01_resultaat.png",
            description: "Montaje de una torre de escaleras autoportante de 18 metros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren-met-steunbeer-en-ballast-vrijstaand_resultaat.png",
            description: "Torre de escaleras autoportante con contrafuerte y lastre. Estabilidad óptima para un acceso seguro a todos los niveles de trabajo."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-22m-industriele-steigerbouw_resultaat.png",
            description: "Torre de escaleras autoportante de 22 metros para la construcción de andamios industriales. Estructura robusta con dispositivos de seguridad integrados."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-nieuwbouw-zundert-coldstore_resultaat.png",
            description: "Torre de escaleras autoportante para obra nueva en Zundert, en un almacén frigorífico. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steigerbouw-brabant_resultaat.png",
            description: "Torre de escaleras autoportante de 22 metros. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steiger-voor-bereiken-van-het-dak_resultaat.png",
            description: "Torre de escaleras autoportante para acceder a la cubierta. Estructura robusta con dispositivos de seguridad integrados."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/Industriële-trappen-toren-bij-bol.com-waalwijk-steigerbouw-brabant_resultaat.png",
            description: "Torre de escaleras industrial en bol.com en Waalwijk. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/industrie-waalwijk-trappentoren-fase-montage_resultaat.png",
            description: "Torre de escaleras en la industria de Waalwijk en fase de montaje. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappentoren_resultaat.png",
            description: "Montaje de una torre de escaleras. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren_resultaat.png",
            description: "Montaje de una torre de escaleras autoportante. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter_resultaat.png",
            description: "Montaje de una torre de escaleras autoportante de 18 metros de altura. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter-layher_resultaat.png",
            description: "Montaje de una torre de escaleras autoportante de 18 metros de altura con sistemas Layher. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/monteren-steiger-trappentoren-onverankerd-vrijstaand-18meter_resultaat.png",
            description: "Montaje de una torre de escaleras autoportante y sin anclar de 18 metros. Construcción de andamios especializada para un avance de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappen-toren_resultaat.png",
            description: "Montaje de una torre de escaleras. Construcción de andamios especializada para un avance de obra eficiente."
        }
    ],
    werkplatform: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/brede-houten-werkvloer-steigerbouw-staalconstructie_resultaat.png",
            description: "Fase de montaje: plataforma de trabajo ampliada con dispositivos de seguridad integrados. Solución profesional para trabajos en altura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steigerbouw-werkvloer-boven-trappengat_resultaat.png",
            description: "Plataforma de trabajo sobre el hueco de escalera. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steiger-veilige-werkvloer-montagewerk-staalbouw_resultaat.png",
            description: "Plataforma de trabajo segura para trabajos de montaje. Construcción de andamios especial para una accesibilidad óptima."
        }
    ],
    overspanning: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-metselsteiger-overspanning-parkeer-garage-ingang_resultaat.png",
            description: "Estructura de cerchas profesional para salvar los garajes. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spantenconstructie-tralieliggers-14m2_resultaat.png",
            description: "Estructura de cerchas innovadora con vigas de celosía de 14 m2. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/montage-spanten-constructie_resultaat.png",
            description: "Montaje de la estructura de cerchas para salvar los garajes. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-garageboxen-aanvoersteiger_resultaat.png",
            description: "Andamio de aprovisionamiento sobre los garajes. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-spanten_constructie-over-garage-boxen_resultaat.png",
            description: "Estructura de cerchas sobre los garajes. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/spantenconstructie-over-garageboxen-tbv-metselsteiger01_resultaat.png",
            description: "Estructura de cerchas sobre los garajes para el andamio de albañilería. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-schijndel_resultaat.png",
            description: "Construcción de andamios con estructura de cerchas en Schijndel. Construcción de andamios especial para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steiger-dak-overspanning-metsel-steiger_resultaat.png",
            description: "Construcción de andamios con salvado de luz en cubierta para el andamio de albañilería. Construcción de andamios especial para una accesibilidad óptima."
        }
    ],
    podium: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/podiumbouw/podium-op-de-helling-aan-gracht-met-steiger-voor-de-boot_resultaat.png",
            description: "Andamio de escenario para eventos y presentaciones. Estructura robusta con acceso seguro y plataformas de trabajo. Y andamio de atraque para una embarcación junto al canal."
        }
    ],
    windreductie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-prefab-woningbouw-metsel-steiger-binnenleuning-dubbele-uitschuif-console-windreductie-net_resultaat.png",
            description: "Construcción de andamios para vivienda prefabricada: andamio de albañilería con barandilla interior, doble ménsula extensible y malla de reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-steiger-nieuwbouw-overkapping-windreductie.png",
            description: "Montaje del andamio en obra nueva con cubierta y reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steiger-demontage-nieuwbouw-afbouw-beekse-bergen-hoofdgebouw-inter-deel_resultaat.png",
            description: "Desmontaje del andamio en la obra nueva de acabado del edificio principal de Beekse Bergen, parte interior."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Construcción de andamios en la obra nueva del edificio principal con cubierta para trabajo continuo, estructura de cubierta y malla de reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción de andamios en obra nueva en Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Entregado: escayolista y pintor, desmontaje del andamio de trabajo continuo, acabado, redes de reducción de viento, estructura de cubierta, vista interior del andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Construcción de andamios de renovación en Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción de andamios con estructura de cubierta, film retráctil y reducción de viento como protección frente al clima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción de andamios en Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigergaas-windreducie-steigerbouw-hilvaren-beek_resultaat.png",
            description: "Malla de andamio para reducción de viento, construcción de andamios en Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción de andamios con estructura de cubierta y film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/tube-lock-steiger-met-windreductie-netten-steiger-gaas-kapconstructie-krimpfolie_resultaat.png",
            description: "Andamio tube lock con redes de reducción de viento, malla de andamio, estructura de cubierta y film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/zware-renovatie-steiger-met-steigergaas-en-puinvanger_resultaat.png",
            description: "Andamio de renovación pesado con malla de andamio y recogedor de escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/metselsteiger-met-windreductie-net_resultaat.png",
            description: "Andamio de albañilería con malla de reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-layhe-blitz-steiger-nieuwbouw-overkapping-windreductie_resultaat.png",
            description: "Montaje del andamio layher blitz en obra nueva con cubierta y reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Andamio de obra nueva del edificio principal con cubierta para trabajo continuo, estructura de cubierta y malla de reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-hilvarenbeek_resultaat.png",
            description: "Andamio de obra nueva en Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Entregado: escayolista y pintor, desmontaje del andamio de trabajo continuo, acabado, redes de reducción de viento, estructura de cubierta, vista interior del andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Construcción de andamios de renovación en Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción de andamios con estructura de cubierta, film retráctil y reducción de viento como protección frente al clima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción de andamios en Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-hilvarenbeek-krimpfolie-windreductie_resultaat.png",
            description: "Construcción de andamios en Hilvarenbeek con film retráctil y reducción de viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción de andamios con estructura de cubierta y film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-krimpfolie-steigergaas_resultaat.png",
            description: "Construcción de andamios con film retráctil y malla de andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-layher-blitz-nieuwbouw_resultaat.png",
            description: "Construcción de andamios layher blitz en obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción de andamios en obra nueva en Hilvarenbeek."
        }
    ],
    // Proyectos de clase 4 / obra gruesa y construcción con sistemas
ruwbouw_klasse4: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/ruwbouw-steiger-kalkzandsteen-blokken_resultaat.png",
        description: "Construcción de andamios pesada clase 4 para obra gruesa con bloques silicocalcáreos. Máxima estabilidad para cargas pesadas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/systeembouw-steiger-nieuwbouw-woningen-lift_resultaat.png",
        description: "Disposición de andamios de sistema para viviendas de obra nueva, equipada con montacargas de material y de personas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steigerbouw-bovenaanzicht-engels-baksteen-project_resultaat.png",
        description: "Vista superior de un andamio de albañilería clase 4 en un proyecto de ladrillo inglés a gran escala."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steiger-loop-pad-bouwplaats-dura-vermeer_resultaat.png",
        description: "Pasarela de andamio segura y libre de obstáculos conforme a las normas de seguridad más estrictas en la obra."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/nieuwbouwwijk-steiger-afzetting-bouwhekken_resultaat.png",
        description: "Instalación completa del andamio, incluidos un vallado ordenado y vallas de obra para un barrio de obra nueva seguro."
    }
],

// Renovación, trabajos de cubierta y logística
renovatie_logistiek: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/daksteiger-schoorsteen-renovatie-project_resultaat.png",
        description: "Andamio de cubierta a medida para la renovación segura de chimeneas y los trabajos en cubierta sin dañar el tejado."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/gevelsteiger-renovatie-vrijstaande-woning_resultaat.png",
        description: "Andamio de fachada para la renovación completa y la mejora energética de una vivienda unifamiliar aislada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/mobiele-kraan-van-riel-steiger-montage_resultaat.png",
        description: "Montaje y logística de andamios eficientes en colaboración con las grúas móviles de Van Riel."
    }
],
    betonfabriek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger01_resultaat.png",
            description: "Construcción de andamios especializada para una fábrica de hormigón en Oosterhout. Estructura robusta para aplicaciones industriales pesadas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger02_resultaat.png",
            description: "Construcción de andamios especializada para una fábrica de hormigón en Oosterhout. Estructura robusta para aplicaciones industriales pesadas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger03_resultaat.png",
            description: "Construcción de andamios especializada para una fábrica de hormigón en Oosterhout. Estructura robusta para aplicaciones industriales pesadas."
        },                                
    ],
    infra: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-tijdelijke-loopbrug-tilburg-industrie_resultaat.png",
            description: "Pasarela temporal con puesta a tierra bajo la alta tensión en Tilburg, andamio de infraestructura para el público y los peatones."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Construcción de andamios industriales para infraestructura temporal."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Estructura de andamio para el mantenimiento de aerogeneradores en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Acceso seguro a los aerogeneradores mediante una torre de escaleras en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Torre de escaleras temporal para la construcción de andamios en aerogeneradores en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Torre de escaleras pública para el acceso a los aerogeneradores en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Torre de escaleras industrial para la construcción de andamios en aerogeneradores, primer plano."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Infraestructura temporal para el acceso a aerogeneradores en Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouwen-steiger-valbeveiliging-efteling-loon-op-zand-achtbaan-baron_resultaat.png",
            description: "Montaje del andamio para la protección anticaídas en Efteling, ubicación Loon op Zand, montaña rusa Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouw-steiger-valpreventie-efteling-achtbaan-baron-brabant_resultaat.png",
            description: "Montaje del andamio para la prevención de caídas en Efteling, ubicación Loon op Zand, montaña rusa Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerbouw-efteling-achtbaan-valpreventie_resultaat.png",
            description: "Construcción de andamios para la prevención de caídas en Efteling, ubicación Loon op Zand, montaña rusa Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infra-steiger-loopbrug-hoogspanning-tilburg_resultaat.png",
            description: "Barandillas dobles con pica de tierra para la puesta a tierra de la pasarela en Tilburg, infraestructura temporal para el acceso a la gasolinera."
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
            description: "Montaje de una pasarela bajo 100000 voltios, andamio con puesta a tierra bajo una torre de alta tensión para el tránsito peatonal público junto a la gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/montage_loopbrug_100000Volt_aanleg_hoogspanning_geaard_steiger_onder_hoogspanningsmast_openbare_ruimte_openbaar_voetganger_verkeer_bereikbaarheid_benzinepomp_resultaat.png",
            description: "Montaje de una pasarela bajo 100000 voltios, andamio con puesta a tierra bajo una torre de alta tensión para el tránsito peatonal público junto a la gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-electrisch-hoogspanningsnet-tilburg-tijdelijke-brug-bereikbaarheid-voetgangers-bp-hazenest_resultaat.png",
            description: "Montaje del andamio en la industria de Tilburg, pasarela bajo 100000 voltios con puesta a tierra bajo una torre de alta tensión para peatones junto a la gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-loopbrug-bereikbaarheid-van-bp-tankstation_resultaat.png",
            description: "Andamio en la red eléctrica de alta tensión de Tilburg, puente temporal para el acceso peatonal en BP Hazenest."
        }
    ],
    infra1: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Infraestructura temporal y torre de escaleras montadas por Team Steigerbouw Brabant para un acceso seguro a un aerogenerador."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Detalle de una torre de escaleras industrial segura con barandillas de alta calidad, montada ajustada al mástil de un aerogenerador para trabajos de inspección."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Infraestructura temporal: torre de escaleras segura para el mantenimiento de aerogeneradores"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Torre de escaleras pública a medida para el acceso a los aerogeneradores"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Construcción de andamios industriales: sistemas de acceso seguros para el sector energético"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Torre de escaleras temporal a medida por Team Steigerbouw Brabant para un acceso seguro y estable a la entrada de un aerogenerador."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Estructura de andamio robusta y autoportante con escaleras y barandillas integradas, diseñada específicamente para el sector de las energías renovables."
        }
    ],
    "trapgat-raalte": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie_aanvraag_trapgat met glas_resultaat.png",
        description: "Situación de la solicitud de una estructura de andamio sobre el hueco de escalera con paredes de vidrio."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-aanvraag-trappengat-binnen_resultaat.png",
        description: "Situación interior de la caja de escalera para la ingeniería del salvado de luz."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-steiger-aanvraag_resultaat.png",
        description: "Vista general de la situación del proyecto para la solicitud del andamio interior."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steigerbouw-vrije-doorgang-motage-werkvloer_resultaat.png",
        description: "Estructura de andamio con paso libre garantizado bajo la plataforma de trabajo de montaje."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-constructie-overspanning-trap-blijft-in-gebruik_resultaat.png",
        description: "Estructura de andamio inteligente con un salvado de luz para que la escalera fija siga plenamente en uso."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspannende-werkvloer-ter-montagewerk-boven-vaste-trap_resultaat.png",
        description: "Plataforma de trabajo que salva la luz para trabajos de montaje justo encima de la escalera fija."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspanning-binnen-met-vrije-doorgang-daaronder_resultaat.png",
        description: "Andamio interior con un salvado de luz seguro y un paso totalmente libre por debajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/trap-binnen-kantoor-blijft-in-gebruik_resultaat.png",
        description: "La escalera interior fija de la oficina permanece transitable de forma permanente durante los trabajos."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "Plataforma de trabajo segura montada sobre el hueco de escalera abierto y permanentemente transitable."
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
        description: "Trabajos de montaje desde la plataforma de trabajo que salva la luz en la planta superior."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-op-boven-verdieping-met-permanent-vrije-doorgang-daaronder_resultaat.png",
        description: "Disposición del andamio en la planta superior con un paso libre permanente garantizado por debajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-overspanning-boven-trapgat_resultaat.png",
        description: "Sólida plataforma de trabajo que salva la luz para poder trabajar con seguridad sobre un hueco de escalera profundo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-trapgat_resultaat.png",
        description: "Detalle de la plataforma de trabajo estable del andamio especial para huecos de escalera."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-traphuis_resultaat.png",
        description: "Plataforma de trabajo segura y ergonómicamente correcta integrada en la caja de escalera."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-vanaf-onderkant_resultaat.png",
        description: "Vista de la plataforma de trabajo del andamio que salva la luz, vista desde abajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/overbruggende-werkvloer-over-een-trap-met-vrije-doorgang_resultaat.png",
        description: "Plataforma de trabajo que salva una escalera en uso manteniendo el paso completo."
    }
],
    "prefabwoningbouw": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/lichte-verspringing-steigervloer_resultaat.png",
        description: "Andamio de albañilería con un ligero desfase en la plataforma, perfectamente adaptado a los contornos de la vivienda prefabricada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/metselsteiger-met-extern-ladderhuis-veiligheid-en-werkvloer-efficientie_resultaat.png",
        description: "Andamio de albañilería profesional provisto de una caseta de escalera externa para una seguridad óptima y una plataforma de trabajo eficiente."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/overbrugging-platdak-aanbouw_resultaat.png",
        description: "Paso elevado de andamio a medida sobre la cubierta plana de un anexo para realizar trabajos seguros en la fachada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/prefab-woningbouw-metselsteiger_resultaat.png",
        description: "Estructura robusta de andamio de albañilería especialmente dispuesta para las rápidas fases de montaje en la construcción de viviendas prefabricadas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoningbouw_resultaat.png",
        description: "Ejecución eficiente de proyectos de construcción de andamios para vivienda prefabricada a gran escala."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoning-metselsteiger_resultaat.png",
        description: "Andamio de albañilería seguro y ergonómicamente correcto montado en una vivienda prefabricada moderna."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-kopse-kant_resultaat.png",
        description: "Vista lateral de la estructura estable del andamio en el testero de la vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-prefabwoning_resultaat.png",
        description: "Andamio de fachada montado en todo el perímetro para el acabado seguro de una vivienda prefabricada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/intern-ladderhuis-met-valpreventie-prefab-woningbouw-steiger_resultaat.png",
        description: "Caseta de escalera interna integrada con prevención de caídas certificada en un andamio de vivienda prefabricada."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/klasse-4-steiger-prefab-woning_resultaat.png",
        description: "Disposición de andamio pesado clase IV (clase 4) para una vivienda prefabricada, apta para trabajos intensivos de albañilería."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-klasse4-ring54_resultaat.png",
        description: "Sistema de andamio Layher Allround clase IV con configuración de anillo 54 para una máxima estabilidad y capacidad de carga."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-ring54-prefabwoning-metselsteiger_resultaat.png",
        description: "Andamio de albañilería modular Layher Allround anillo 54, flexible y de montaje rápido alrededor de la vivienda prefabricada."
    }
],
    "transportband": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag-overspanning-vrije-werkvloer-14m3m-hier-werkvloer-zware-klasse-maxbelasting-3kNm2-5,5kNm2_resultaat.png",
        description: "Solicitud de plataforma de trabajo libre de 14 m x 3 m - Plataforma de trabajo de clase pesada con una carga máxima de 3 kN/m² a 5,5 kN/m²."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/boven-aanzicht-complexe-industie-werkvloer_resultaat.png",
        description: "Vista superior de la compleja plataforma de trabajo industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/hier-stopt-het-reeds geinstalleerde-vaste-constructie-liggers-H-profielen-hier-en-verdieping-gewisseld-compex-steiger-gemaakt_resultaat.png",
        description: "Conexión con la estructura fija existente (perfiles H) y cambio de nivel para un andamiaje complejo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/impressie-situatie-voor-het-monteren-steiger-overbrugging_resultaat.png",
        description: "Impresión de la situación previa al montaje del paso elevado de andamio."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/montage-overspanning-werkvloer_resultaat.png",
        description: "Montaje del salvado de luz para la plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/realisatie-werkplatform-voor-zware-montage-meerder-etages-en-ruimte_resultaat.png",
        description: "Realización de la plataforma de trabajo para montaje pesado con varias plantas y espacio de trabajo adicional."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_complexe-grote-belasting-steiger-overbrugging-zonder-stemplels-op-de-ondergrond-binnen_resultaat.png",
        description: "Solicitud de un paso elevado de andamio complejo y muy cargado en interior, sin apoyos sobre el suelo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_werkvloer_boven_uitsparing-hoge-werkvloer-lange-complex-steiger-binnen_resultaat.png",
        description: "Solicitud de una plataforma de trabajo elevada sobre una abertura. Andamiaje interior largo y complejo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/steiger-montage-interne-deel-werkvloer_resultaat.png",
        description: "Montaje del andamio de la parte interna de la plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd5_resultaat.png",
        description: "Entrega de la plataforma de trabajo (fase 5)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd_resultaat.png",
        description: "Plataforma de trabajo realizada y entrega exitosa del proyecto."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd1_resultaat.png",
        description: "Plataforma de trabajo realizada y entrega del proyecto (detalle 1)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd2_resultaat.png",
        description: "Plataforma de trabajo realizada y entrega del proyecto (detalle 2)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd3_resultaat.png",
        description: "Entrega de la plataforma de trabajo (fase 3)."
    }
],
"industrie-tilburg": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/werk-opgeleverd-na-demontage-van-de-steiger_resultaat.png",
        description: "El resultado final de la instalación industrial después de desmontar el andamio con profesionalidad."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag_-nstallatie-machine-industrie-steiger-werkvloer_resultaat.png",
        description: "Medición y solicitud de una plataforma de trabajo de andamio estable alrededor de una máquina industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag-situatie-steigerbehoefte_resultaat.png",
        description: "Análisis de la situación del proyecto para determinar la necesidad exacta de andamiaje industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/fase-montage-werkvloer-industrieële-installatie_resultaat.png",
        description: "Fase de montaje de la plataforma de trabajo pesada alrededor de la instalación industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/ladderhuis-om-de-steigers-op-de-daken-rondom-de-machines-te-betreden_resultaat.png",
        description: "Caseta de escalera montada de forma segura para acceder a los andamios en las cubiertas alrededor de las máquinas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/montage-steiger-ladderhuis-toegang-steiger-werkvloer-installatie-industrieël-luchtkanaal_resultaat.png",
        description: "Montaje de la caseta de escalera del andamio para un acceso seguro al conducto de aire industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/oplossing-steiger-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "La solución de andamiaje definitiva: una plataforma de trabajo hecha a medida alrededor de la máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-tilburg-industrie_resultaat.png",
        description: "Ejecución de una solicitud compleja de andamiaje industrial en Tilburg."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "Plataforma de trabajo detallada para trabajos de montaje en una máquina industrial."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steigerbehoefte-voor-installatie-montage-machine_resultaat.png",
        description: "Disposición de andamio segura diseñada para la instalación y el montaje de máquinas pesadas."
    }
],

"trapgat-helmond": [
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/steiger-in-trappenhuis-wilting-coare-helmond-industrieterrein-habraken_resultaat.png",
        "description": "Veilig gemonteerde steiger in het trappenhuis ten behoeve van werkzaamheden bij Wilting / Coare op industrieterrein Habraken."
    },
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/uitbouw-boven-trappenhuis_resultaat.png",
        "description": "Op maat gemaakte uitbouw en veilige steigerwerkvloer boven het trappenhuis."
    }
],
    "klasse2": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/klasse-2-frame-steiger-layher-blitz-bungalow_resultaat.png",
        description: "Andamio de marco clase 2 con el sistema Layher Blitz en un bungaló de obra nueva."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-snelbouwsteiger-project-brabant_resultaat.png",
        description: "Andamio de montaje rápido Layher Blitz utilizado en un proyecto en Brabante."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-steigerbouw-nieuwbouw-bungalow_resultaat.png",
        description: "Construcción de andamios Layher Blitz para la realización de un bungaló de obra nueva."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/montage-klasse-2-gevelsteiger-cascobouw_resultaat.png",
        description: "Montaje de un andamio de fachada clase 2 para la construcción de la estructura."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/nieuwbouw_14persoons_bungalow_frame_steiger_demontage_resultaat.png",
        description: "Desmontaje de un andamio de marco en un gran bungaló de obra nueva para 14 personas."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steiger-werkvloer-overzicht-nieuwbouw-bungalows_resultaat.png",
        description: "Vista general de las plataformas de trabajo seguras del andamio en bungalós de obra nueva."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-hoofdgebouw-krimpfolie-kapconstructie_resultaat.png",
        description: "Construcción de andamios en el edificio principal provisto de film retráctil y estructura de cubierta."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-klasse-2-utiliteitsbouw-layher_resultaat.png",
        description: "Construcción de andamios profesional clase 2 con componentes Layher para edificación no residencial."
    }
],
    installatieTechniek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steiger-werkplatform-industriële-installatie-machine_resultaat.png",
            description: "Andamio especializado para instalaciones técnicas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Andamio para instalaciones técnicas con varios niveles de trabajo. Solución profesional para mantenimiento y montaje."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Construcción de andamios avanzada para trabajos de instalación. Acceso seguro a todos los componentes técnicos."
        }
    ],
    videos: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-udenhout-brabant.mp4",
            description: "Andamio de renovación, mantenimiento inmobiliario y trabajos de pintura en Udenhout"
        }
    ],
    videos1:[
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/nieuwbouw-appartementen-metselsteiger.mp4",
            description: "Andamio de albañilería para apartamentos de obra nueva"
        }
    ],
    videos2: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-luxe-villa-tilburg.mp4",
            description: "Andamio de renovación para la transformación en un chalé moderno de lujo en Tilburg"
        }
    ],
    videos3: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-villa-bredaseweg-tilburg-brabant.mp4",
            description: "Andamio de renovación en el chalé de la Bredaseweg, Tilburg, Brabante"
        }
    ],
    videos4: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-tilburg-renovatie-klasse-4-steige.mp4",
            description: "Construcción de andamios en Tilburg, andamio de renovación clase 4"
        }
    ],
    videos5: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vijstaande_trappen_toren.mp4",
            description: "Torre de escaleras autoportante para un acceso seguro a las alturas. El vídeo muestra la construcción y el uso de la torre de escaleras en un entorno industrial."
        }
    ],
    videos6: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-werkvloer-op-ideale-werkhoogte.mp4",
            description: "Plataforma de trabajo de andamio a la altura de trabajo ideal"
        }
    ],
    videos7: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-overdekte-kap-constructie-wind-reductie-netten-beekse-bergen.mp4",
            description: "Construcción de andamios con estructura de cubierta y redes de reducción de viento en Beekse Bergen" 
        }
    ],
    videos8: [  
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/grote-werkvloer-over-uitsaring-verdiepingsvloer-bol.com.mp4",
            description: "Gran plataforma de trabajo de 3 metros de ancho, a 14 metros de altura y 32 metros de largo sobre una abertura del forjado en bol.com"
        }
    ],
    videos9: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-industrie-bol-transportbad-door-twee-ruimtes-en-twee-verdiepingen-boven-uitsparing-verdiepingsvloer.mp4",
            description: "Construcción de andamios industriales en bol.com de Waalwijk, cinta transportadora a través de dos espacios y dos plantas sobre una abertura del forjado"
        }
    ],
    videos10: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Pompkamersteiger-scheepswerf-De-Werken-werkendam.mp4",
            description: "Plataforma de trabajo autoportante para trabajos de revisión en la sala de bombas de un buque. En el astillero Scheepswerf De Werken en Werkendam."
        }
    ],
    videos11: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Bungalows-nieuwbouw-frame-steiger-klasse-2.mp4",
            description: "Bungalós de obra nueva, andamio de marco clase 2"
        }
    ],
    videos12: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-machine-revisie-industrie-beton-fabriek-oosterhout.mp4",
            description: "Construcción de andamios para la revisión de máquinas en la industria, fábrica de hormigón de Oosterhout"
        }
    ],
    videos13: [
        {  
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", 
            description: "Andamio de renovación con dos pasos elevados en un edificio monumental de Waalwijk"
        }
    ],
    videos14: [
        { 
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/industrie-machine-installatietechniek-op-plat-dak.mp4",
            description: "Instalación técnica de máquinas industriales sobre cubierta plana"
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
            const imageAlt = slideData.description || `Diapositiva ${index + 1}`;
            slide.innerHTML = `
                <img src="${imageUrl}" alt="${imageAlt}" loading="lazy" decoding="async">
                <div class="compact-description">${imageAlt}</div>
            `;
        } else if (slideData.video) {
            const videoPoster = getMediaPosterUrl(slideData.video);
            const videoDescription = slideData.description || '';
            slide.innerHTML = `
                <div class="compact-description">${videoDescription}</div>
                <video controls poster="${videoPoster}" style="width:100%;height:auto;" preload="metadata">
                    <source src="${slideData.video}" type="video/mp4">
                    Your browser does not support the video tag.
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

// Un único inicializador seguro después de DOM ready
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
            woningbouw: 'Construcción residencial',
            videos3: 'Vídeo',
            gevelonderhoud: 'Mantenimiento de fachadas',
            onderhoud: 'Mantenimiento',
            videos4: 'Vídeo',
            scheepvaart: 'Sector naval',
            videos5: 'Vídeo',
            zwembad: 'Piscina',
            trappentoren: 'Torre de escaleras',
            videos6: 'Vídeo',
            overspanning: 'Grandes luces',
            videos7: 'Vídeo',
            werkplatform: 'Plataforma de trabajo',
            videos8: 'Vídeo',
            windreductie: 'Reducción de viento',
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

        // Inicializar los pases de diapositivas (comprueba si existen los contenedores)
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
        const meerFotosKnop = document.getElementById('meerFotosKnop');
        const meerVideosKnop = document.getElementById('meerVideosKnop');
        const leesMeerKnop = document.getElementById('leesMeerKnop');
        const slideshowContainer = document.querySelector('.carousel');
        const videoContainer = document.getElementById('extraVideos');
        const carousel = document.getElementById('carousel');

        // meerFotosKnop: añade fotos adicionales si el botón existe
        if (meerFotosKnop && slideshowContainer) {
            meerFotosKnop.addEventListener('click', function () {
                const extraFotos = [
                    "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger_bouw.jpg",
                    "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning.png"
                ];
                extraFotos.forEach(src => {
                    const img = document.createElement('img');
                    img.src = normalizeMediaUrl(src);
                    img.alt = "Foto adicional";
                    img.loading = 'lazy';
                    slideshowContainer.appendChild(img);
                });
                meerFotosKnop.style.display = 'none';
            });
        }

        // meerVideosKnop: carga vídeos adicionales
        if (meerVideosKnop && (carousel || videoContainer)) {
            meerVideosKnop.addEventListener('click', function () {
                const videoData = [
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie_steigers/Renovatie-steiger-vastgoed-onderhoud-schilderwerk-udenhout.mp4", description: "Andamio de renovación, mantenimiento inmobiliario y trabajos de pintura en Udenhout" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger.mp4", description: "Andamio de albañilería para apartamentos de obra nueva" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", description: "Andamio de renovación con dos pasos elevados en un edificio monumental de Waalwijk" }
                ];
                videoData.forEach(video => {
                    const videoElement = document.createElement('div');
                    const poster = getMediaPosterUrl(video.src);
                    videoElement.innerHTML = `
                        <div class="compact-description">${video.description}</div>
                        <video controls poster="${poster}" style="width:100%;height:auto;" preload="metadata">
                            <source src="${video.src}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    `;
                    if (carousel) carousel.appendChild(videoElement);
                    else if (videoContainer) videoContainer.appendChild(videoElement);
                });
                if (videoContainer) videoContainer.style.display = 'grid';
                meerVideosKnop.style.display = 'none';
            });
        }

        // leesMeerKnop: muestra los pases de diapositivas adicionales si están presentes
        if (leesMeerKnop) {
            leesMeerKnop.addEventListener('click', function () {
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
                leesMeerKnop.style.display = 'none';
            });
        }

        // Extra: conmutadores para las funciones auxiliares existentes (comprobaciones seguras)
        const toggleVideosBtn = document.getElementById('toggleVideosBtn'); // opcional
        if (toggleVideosBtn && videoContainer) {
            toggleVideosBtn.addEventListener('click', function () {
                videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';
            });
        }

        // Ocultar extraVideos inicialmente si está presente
        if (videoContainer) videoContainer.style.display = 'none';
    } catch (err) {
        // Registrar el error de forma silenciosa evita que el sitio se rompa
        console.error('Error de inicialización del script:', err);
    }
});

// las posibles funciones auxiliares restantes pueden permanecer más abajo
function toonMeerSlides() {
    const slides = document.querySelectorAll('.compact-slideshow[style*="display: none"]');
    slides.forEach((slide, index) => {
        if (index < 5) slide.style.display = 'block';
    });
}

function toonMeerFotos() {
    alert('Se están cargando más fotos...');
}

function toonMeerVideos() {
    const extraVideos = document.getElementById('extraVideos');
    if (!extraVideos) return;
    extraVideos.style.display = extraVideos.style.display === 'none' ? 'block' : 'none';
}

// script_es.js - versión consolidada y reparada
function normalizeMediaUrl(url) {
    if (!url) return url;

    let cleanUrl = url.trim().replace(/\\/g, '/');

    // Normalizar rutas locales a URL absolutas
    if (/^[a-z]:\//i.test(cleanUrl) && cleanUrl.includes('/beeldmateriaal/')) {
        cleanUrl = `https://www.steigerbouwbrabant.nl/beeldmateriaal/${cleanUrl.split('/beeldmateriaal/').pop()}`;
    }

    // Codificar solo espacios, SIN forzar extensión
    return cleanUrl.replace(/ /g, '%20');
}

function getMediaPosterUrl(url) {
    if (!url) return '';
    return normalizeMediaUrl(url);
}

function laadAfbeeldingen() {
    const afbeeldingen = document.querySelectorAll('img'); // Seleccionar todas imágenes en la página
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
            description: "Situación previa a la instalación de un andamio para mantenimiento de maquinaria en entorno industrial. Construcción especializada en andamios para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-van-de-industie-steiger_resultaat.png",
            description: "Situación previa a la instalación del andamio industrial. Construcción especializada en andamios para una accesibilidad óptima y seguridad para realizar mantenimiento de maquinaria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Construcción de andamios para revisión de maquinaria industrial. Construcción especializada en andamios para una accesibilidad óptima y seguridad durante trabajos de mantenimiento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(6)_resultaat.png",
            description: "Industrial construcción de andamios para revisión de maquinaria con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(7)_resultaat.png",
            description: "Industrial construcción de andamios para revisión de maquinaria con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(8)_resultaat.png",
            description: "Industrial construcción de andamios para revisión de maquinaria con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Andamio de inspección completo con plataformas de seguridad integradas para mantenimiento de depuración de agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(17)_resultaat.png",
            description: "Industrial construcción de andamios para revisión de maquinaria con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(15)_resultaat.png",
            description: "Industrial construcción de andamios para revisión de maquinaria con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(10)_resultaat.png",
            description: "andamio para fines de mantenimiento de maquinaria en entorno industrial. industria alimentaria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(11)_resultaat.png",
            description: "Industrial construcción de andamios para revisión de maquinaria con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-steiger-installatie-techniek-industie-plat-twee-levels-plat-dak_resultaat.png",
            description: "Situación de instalación de andamio en entorno industrial con cubiertas planas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Situación previa a la instalación del andamio industrial en Tilburg. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },       
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Proyecto de revisión de maquinaria en la zona industrial sur de Helmond. Construcción especializada en andamios para mantenimiento industrial de la maquinaria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (12)_resultaat.png",
            description: "Industrial construcción de andamios con plataforma de trabajo para revisión de maquinaria. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-14-hoogte-vrije-werkvloer_resultaat.png",
            description: "Industrial construcción de andamios con 14 metros altura libre plataforma de trabajo para revisión de maquinaria. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-distributie-centrum_resultaat.png",
            description: "Industrial construcción de andamios en centro de distribución. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-waalwijk-industrie-werkvloer-14-hoog-_resultaat.png",
            description: "Construcción industrial de andamios en Waalwijk con plataforma de trabajo a 14 metros de altura. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },            
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerconstructie-industriele-lopende-band_resultaat.png",
            description: "Personalizada construcción del andamio para industrial transportadora cinta. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (5)_resultaat.png",
            description: "Industrial construcción de andamios con plataforma de trabajo para revisión de maquinaria. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-steigerbouw-werkvloer-met-leuningen_resultaat.png",
            description: "Segura construcción de andamios con plataforma de trabajo en barandillas para industrial revisión de maquinaria. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },        
        {
            image:  "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerconstructie-binnen-distributiecentrum_resultaat.png",
            description: "Industrial construcción del andamio dentro centro de distribución. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/32-meter-lang-3-meter-breed-14-hoog-tijdelijke-werkvoer-vrij-platform_resultaat.png",
            description: "32 metros larga, 3 metros ancha en 14 metros alta temporal plataforma de trabajo con libre plataforma para industrial revisión de maquinaria. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/montage-werkvloer-waalwijk-steigerbouw_resultaat.png",
            description: "Montaje de plataforma de trabajo en Waalwijk para construcción industrial de andamios. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriele-steigerbouw-lopende-band-overbrugging_resultaat.png",
            description: "Industrial construcción de andamios con transportadora cinta overbrugging. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-werkvloer-distributiecentrum-transportsysteem_resultaat.png",
            description: "Industrial construcción de andamios con plataforma de trabajo en centro de distribución para transportsysteem. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilig-steiger-looppad-industriele-hal_resultaat.png",
            description: "Segura andamio con pasarela en industrial nave. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steiger-interne-transportsystemen-waalwijk_resultaat.png",
            description: "Andamio a medida para sistemas internos de transporte en Waalwijk. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-industriesteiger-tussen-ruimtes-logistiek_resultaat.png",
            description: "Segura andamio industrial entre espacios en logístico centro. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/complexe-steigerbouw-logistieke-sector-brabant_resultaat.png",
            description: "Compleja construcción de andamios en la logística sector en Brabant. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriesteiger-transportband-bol-com-waalwijk_resultaat.png",
            description: "Andamio industrial para cinta transportadora en Bol.com, Waalwijk. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industrie-steiger-steigernontage-transportband-steigerbouw-machinepark_resultaat.png",
            description: "Industrie-andamio para montaje de andamios la cinta transportadora en parque de maquinaria. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },    
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-vrijstaande-werkvloer-industrie-aanleg-machinepark-1_resultaat.png",
            description: "Vrijstaande andamio en industrial aanleg. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
            {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Ruimtelijke construcción del andamio con dos plantas para cinta transportadora. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-montage-distributiecentrum-bol-com_resultaat.png",
            description: "Steigermontage en centro de distribución Bol.com. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-distributiecentrum-waalwijk-machinepark_resultaat.png",
            description: "Construcción de andamios en centro de distribución Waalwijk para parque de maquinaria. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
          {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Ruimtelijke construcción del andamio con dos plantas para cinta transportadora. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat_resultaat.png",
            description: "Andamio para entrar un registro en entorno industrial. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat-industrie-opslagtank-zuiveren-brabant-water_resultaat.png",
            description: "Andamio para entrar un registro en entorno industrial. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-besloten-ruimte_resultaat.png",
            description: "Andamio para entrar espacio cerrado en entorno industrial. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        }
    ],
    utiliteit: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/detail-steiger-werkvloer-kantplanken_resultaat.png",
            description: "Detalle la plataforma de trabajo de andamio con rodapiés para seguridad adicional."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerbouw-locatie-waterzuivering_resultaat.png",
            description: "Personalizada construcción de andamios en ubicación depuración de agua. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/leuningwerk-inspectiesteiger-waterzuivering-industrie_resultaat.png",
            description: "Trabajo de barandillas para andamio la inspección en ubicación depuración de agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/tube-lock-inspectiesteiger-waterzuivering-basis_resultaat.png",
            description: "Tube-lock para andamio de inspección en ubicación depuración de agua."
        },
        { 
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-grote-werk-inspectie-vloer_resultaat.png",
            description: "Gran trabajo inspección suelo para construcción de andamios."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (39)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (38)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (37)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (36)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (35)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (34)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (33)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (31)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (32)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (30)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (29)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (28)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (26)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (25)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (24)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (23)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (22)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (21)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (20)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (16)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (14)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (13)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (9)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)-1_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)-1_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-inspectiesteiger-overzicht_resultaat.png",
            description: "Resumen de inspección andamios en la industria."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)_resultaat.png",
            description: "Andamio de inspección con seguras plataforma de trabajo en ubicación depuración de agua."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-hapert-riwz_resultaat.png",
            description: "Hapert RIWZ andamios."
        }
    ],
    nieuwbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio de albañilería fase de acabado vivienda Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Pesados andamios de sistema para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje andamio de albañilería en proyecto de obra nueva en Gorichem. Construcción especializada en andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio de albañilería fase de acabado vivienda Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Pesados andamios de sistema para proyectos de obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje andamio de albañilería en proyecto de obra nueva en Gorichem. Construcción especializada en andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woningen_resultaat.png",
            description: "Desmontaje andamio en obra nueva viviendas. Eficientes soluciones eficientes y seguras de andamios para proyectos de vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woning-waterkant_resultaat.png",
            description: "Desmontaje andamio en obra nueva viviendas a la orilla del agua. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-gilze-rijen_resultaat.png",
            description: "Desmontaje andamio de albañilería en proyecto de obra nueva en Gilze-Rijen. Construcción especializada en andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-rijen_resultaat.png",
            description: "Desmontaje andamio de albañilería en proyecto de obra nueva en Rijen. Construcción especializada en andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/bouwsteiger_hoge_slagen_gelijk_met_verdieping_derde_leuning_voorloopleuning_tijdens_op_en_afbouw_resultaat.png",
            description: "Andamio la obra con alta niveles a nivel con planta, tercera barandilla en barandilla avanzada durante en- en acabado. Construcción especializada en andamios para proyectos la obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/complete-gevelsteiger-nieuwbouw-appartementen_resultaat.png",
            description: "Completo andamio la fachada para obra nueva apartamentos. Construcción especializada en andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage_tube_lock_metsel_steiger_resultaat.png",
            description: "Desmontaje andamio de albañilería obra nueva apartamentos, nivel a nivel a altura la planta, tercera barandilla en barandilla avanzada."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-apartementen-rijen-brabant-nederland_resultaat.png",
            description: "Desmontaje andamio de albañilería obra nueva apartamentos en Rijen, Brabant, Nederland. Especializada construcción de andamios para eficientes acabado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metsel-steiger-gorichem_resultaat.png",
            description: "Desmontaje andamio de albañilería obra nueva apartamentos en Gorichem. Especializada construcción de andamios para eficientes acabado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-met-goederenlift_resultaat.png",
            description: "Desmontaje de andamio de albañilería en apartamentos de obra nueva con montacargas. Especializada construcción de andamios para eficientes acabado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste_slag_metsel_steiger_schimmert_resultaat.png",
            description: "Primer nivel de andamio de albañilería para apartamentos de obra nueva en Schijndel. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste-slag-werkvloer-metselsteiger-windreductie_resultaat.png",
            description: "Primer nivel plataforma de trabajo andamio de albañilería con reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist_resultaat.png",
            description: "Fase desmontaje material listo para transporte vertical transport operador la grúa."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist-rijen_resultaat.png",
            description: "Fase desmontaje material listo para transporte vertical transport operador la grúa-rijen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_metselsteiger_voorloopleuning_materiaal_dichtbij_de_steiger_resultaat.png",
            description: "Fase montaje andamio de albañilería con barandilla avanzada con material cerca del andamio. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_resultaat.png",
            description: "Fase montaje montaje y armado andamio de albañilería."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_tube_lock_klasse4_resultaat.png",
            description: "Fase montaje montaje y armado andamio de albañilería tube lock clase 4. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/gevelsteiger-nieuwbouw-appartementencomplex_resultaat.png",
            description: "Fase montaje andamio la fachada obra nueva complejo la apartamentos."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/intern_ladderhuis_zware_steiger_klasse4_metsel_steiger_resultaat.png",
            description: "Interno torre la escaleras pesado andamio clase 4 andamio de albañilería. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/layher allround metselsteiger deurne_resultaat.png",
            description: "Layher Allround andamio de albañilería Deurne. Construcción especializada en andamios para un progreso de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_01_resultaat.png",
            description: "Andamio de albañilería obra nueva apartamentos. Construcción especializada en andamios para un progreso de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_02_resultaat.png",
            description: "Andamio de albañilería obra nueva apartamentos. Construcción especializada en andamios para un progreso de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva en Schijndel. Construcción especializada en andamios para un progreso de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_woningen_met_toren_kraan_resultaat.png",
            description: "Andamio de albañilería obra nueva viviendas con grúa torre. Construcción especializada en andamios para un progreso de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio de albañilería Schijndel Moeskops obra nueva apartamentos. Construcción especializada en andamios para un progreso de obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio de albañilería Schijndel Moeskops obra nueva apartamentos con estructura la cerchas. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_slag_gelijk_met_hoogte_verdieping_derde_leuning_resultaat.png",
            description: "Andamio de albañilería nivel a nivel con altura planta, tercera barandilla. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_vrijstaande_woning_resultaat.png",
            description: "Andamio de albañilería independiente vivienda. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_werkvloer_op_etage_hoogte_nieuwbouw_appartementen_resultaat.png",
            description: "Andamio de albañilería plataforma de trabajo en etage altura obra nueva apartamentos. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger (2)_resultaat.png",
            description: "Andamio de albañilería para proyecto de obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_bevoorraad_stenen_hogeslag_staander_om-en-om_600kgm2_resultaat.png",
            description: "Andamio de albañilería abastecido ladrillos nivel alto montante alternado 600kg/m². Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_extern_ladderhuis_resultaat.png",
            description: "Prefabricado andamio con extern torre la escaleras para óptima flujo. Eficientes vertical acceso con máxima seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_goederen_lift_inklimpreventie-windreductie-steiger-gaas-tilburg_resultaat.png",
            description: "Andamio de albañilería con montacargas, prevención de intrusiones y malla cortaviento en Tilburg. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_met_goederen_lift_nieuwbouw_woningen_resultaat.png",
            description: "Andamio de albañilería con montacargas para viviendas de obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_materiaal_dichtbij_steiger_resultaat.png",
            description: "Andamio de albañilería obra nueva apartamentos abastecido con ladrillos, material cerca en andamio. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_verspringing-breda_resultaat.png",
            description: "Andamio de albañilería obra nueva apartamentos abastecido con ladrillos, desfase en Breda. Construcción especializada en andamios para un progreso de obra eficiente."
        }
    ],
    woningbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen_resultaat.png",
            description: "Andamio de albañilería obra nueva apartamentos montaje en montar. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001.png_resultaat.png",
            description: "Andamio de albañilería obra nueva apartamentos montaje en montar. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001_resultaat.png",
            description: "Andamio de albañilería obra nueva apartamentos montaje en montar en Breda. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_oppersteiger_aanvoersteiger_nieuwbouw_werkvloer_op_verdiepingshoogte_resultaat.png",
            description: "Andamio de albañilería, andamio superior en andamio de suministro para obra nueva con plataforma de trabajo en altura la planta. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock01_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock02_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_uitbouw_naar_breedte_vloer_resultaat.png",
            description: "Andamio de albañilería extensión a breedte suelo. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_werkvloer_gereed_voor_metsellaar_resultaat.png",
            description: "Andamio de albañilería plataforma de trabajo listo para albañil. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-nieuwbouwproject_resultaat.png",
            description: "Andamio de albañilería Tubelock. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-appartementen-eindhoven-aanvoersteiger_resultaat.png",
            description: "Andamio de albañilería apartamentos Eindhoven andamio de suministro. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw  /metsel-steiger-dubbele-heup-leuning-knie-leuning-en-kant-plank-Tube-Lock_resultaat.png",
            description: "Andamio de albañilería con doble barandilla superior, knie-barandilla en rodapié Tube Lock. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-fase-demontage-hoge-slag-werkvloer-gelijk_aan-verdiepingsvloer_resultaat.png",
            description: "Andamio de albañilería fase desmontaje alta nivel plataforma de trabajo a nivel a forjado de planta. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-in-gorinchem_resultaat.png",
            description: "Andamio de albañilería en Gorinchem. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-iopbouwen-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio de albañilería montar obra nueva apartamentos. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-met-intern-ladderhuis_resultaat.png",
            description: "Andamio de albañilería con intern torre la escaleras. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-nieuwbouw-woningen-gorichem_resultaat.png",
            description: "Andamio de albañilería obra nueva viviendas en Gorichem. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-op-plat-dak-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio de albañilería en plano tejado obra nueva apartamentos. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para dos-onder-un-kap obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje andamio de albañilería obra nueva apartamentos en Brabant. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje del andamio de acero de albañilería obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje andamio de albañilería base replanteo. Construcción especializada en andamios para un progreso de obra eficiente."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para dos-onder-un-kap obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje andamio de albañilería obra nueva apartamentos en Brabant. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje del andamio de acero de albañilería obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje andamio de albañilería base replanteo. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio de albañilería para dos-onder-un-kap obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase de montaje andamio de albañilería obra nueva apartamentos en Brabant. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase de montaje del andamio de acero de albañilería obra nueva. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje andamio de albañilería base replanteo. Construcción especializada en andamios para un progreso de obra eficiente."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-veldhoven-metselsteiger_nieuwbouw_appartementen_vierdeplank_verlenger_uitschuifkorteling_resultaat.png",
            description: "Montaje Veldhoven andamio de albañilería obra nueva apartamentos con cuarta tablón extensor en ajuste telescópico. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montag-nieuwbouw-appartementen-metselsteiger-slag-gelijk-verdiepingshoogte-derde-leuning-voorloopleuning_resultaat.png",
            description: "Montaje obra nueva apartamentos andamio de albañilería nivel a nivel altura la planta, tercera barandilla en barandilla avanzada. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_bouw-helmond_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva obra en Helmond. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva nivel a nivel altura la planta, tercera barandilla en barandilla avanzada. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Apartamentos de obra nueva con andamio pesado de acero, montacargas, redes, malla de andamio y prevención de intrusiones en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Obra nueva proyecto apartamentos pesado andamio clase 4 alta niveles. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Obra nueva vivienda tubelock andamio de albañilería obra andamio. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva andamio de suministro obra. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Apartamentos de obra nueva con andamio de cerchas y estructura de pasarela para garajes en Schijndel. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Obra nueva colocador de tejas cubierta de tejado andamio desmontaje andamio en Chorichem. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Obra nueva viviendas andamios de albañilería woonwijk a agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Onderkant superior nivel plataforma de trabajo andamio de albañilería. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/opgeleverd-metselsteiger-gorichem-nieuwbouw-woningen_resultaat.png",
            description: "Oplevering andamio de albañilería Gorichem obra nueva viviendas. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/overzicht-stalen-systeemsteigers-bouwproject_resultaat.png",
            description: "Resumen del andamio de aceros de sistema proyecto de obra. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-nieuwbouw-woning-steiger-deurne_resultaat.png",
            description: "Prefabricado obra nueva vivienda andamio en Deurne. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-woningbouw-zware-klasse4-metselsteiger-binnenleunin-console-dubbele-vlonder_resultaat.png",
            description: "Prefabricado vivienda pesado clase 4 andamio de albañilería con barandilla interior, consola en doble plataforma. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Apartamentos de obra nueva con andamio pesado de acero, montacargas, redes, malla de andamio y prevención de intrusiones en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Obra nueva proyecto apartamentos pesado andamio clase 4 alta niveles. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Obra nueva vivienda tubelock andamio de albañilería obra andamio. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva andamio de suministro obra. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Apartamentos de obra nueva con andamio de cerchas y estructura de pasarela para garajes en Schijndel. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Obra nueva colocador de tejas cubierta de tejado andamio desmontaje andamio en Chorichem. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Obra nueva viviendas andamios de albañilería woonwijk a agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Onderkant superior nivel plataforma de trabajo andamio de albañilería. Construcción especializada en andamios para un progreso de obra eficiente."
        },

        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio de albañilería para apartamentos de obra nueva en Schijndel. Construcción especializada en andamios para un progreso de obra eficiente."
        }
    ],
    renovatie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-werkvloer-trottoir-smalle-straat_resultaat.png",
            description: "Personalizada metselsteigerbouw por Team Andamios Brabant para renovación de un vivienda en un smalle straat. De plataforma de trabajo is geplaatst en el trottoir om óptima accesibilidad te garanderen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/technische-situatieschets-steigerbouw-voorgevel_resultaat.png",
            description: "Technische situatieschets la construcción de andamios para la fachada frontal de un renovatieproject."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/smalle-gevelsteiger-binnenstad-renovatie_resultaat.png",
            description: "Personalizada smalle andamio la fachada por Team Andamios Brabant para renovación de un vivienda en la centro urbano. De andamio is speciaal ontworpen om en smalle straten te passen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/stalen-gevelsteiger-voetgangerszone-veiligheid_resultaat.png",
            description: "Personalizada del andamio de acero la fachada por Team Andamios Brabant para renovación de un vivienda a la Hasseltstraat te Tilburg en la centro urbano. De andamio is ontworpen con seguridad en gedachten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-schuin-dak-schoorsteen-tilburg_resultaat.png",
            description: "Construcción de andamios a medida por Team Andamios Brabant para renovación de tejado y mantenimiento de chimenea en una villa en Bredaseweg, Tilburg."
        },   
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/schoorsteensteiger-veilig-leuningwerk-schuin-dak_resultaat.png",
            description: "Andamio la tejado con gecertificeerd barandillas. Speciaal montado zonder el tejado te belasten, ideaal para frágiles tejados die gerenoveerd se están."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/dakrenovatie-steiger-villa-bredaseweg-tilburg_resultaat.png",
            description: "Andamio profesional de renovación de tejado alrededor de una gran villa en Bredaseweg, Tilburg - Team Andamios Brabant"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/daksteiger-dakkapel-veilig-werken-op-hoogte_resultaat.png",
            description: "Segura daksteiger para renovación la buhardilla. Team Andamios Brabant garantiza para óptima seguridad laboral."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-woningrenovatie-steigerbouw-brabant_resultaat.png",
            description: "Andamio de fachada para renovación de vivienda en Waalwijk, Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/kappenkap-steiger-doorwerksysteem-renovatie_resultaat.png",
            description: "Andamio para renovación de tejado y trabajos de pintura de una casa señorial en Waalwijk." // Añade aquí una descripción relevante
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-dakrenovatie-werkvloer-loon-op-zand_resultaat.png",
            description: "Dakrenovatie andamio en Loon en Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouwer-aanhuis-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Dakrenovatie andamio en Loon en Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-situatieschets-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Esquema la situación la renovación de tejado andamio en Loon en Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerconstructie-woningbouw-renovatie-brabant_resultaat.png",
            description: "Construcción del andamio para renovación la vivienda en Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/tube-lock-steiger-uitkraging-dakkapel_resultaat.png",
            description: "Tube-lock andamio para voladizo buhardilla."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/veilig-werken-op-hoogte-dakmontage_resultaat.png",
            description: "Seguro trabajar en altura en montaje la tejado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/maatwerk-gevelsteiger-particuliere-woning_resultaat.png",
            description: "Personalizada andamio la fachada para privada vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/opbouw-renovatiesteiger-met-puinvanger_resultaat.png",
            description: "Pesados renovatiesteiger con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger_tilburg_resultaat.png",
            description: "Andamio de renovación para renovación de tejado en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Pesados renovatiesteiger con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Renovatiesteiger para renovación de tejado en Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Pesados renovatiesteiger con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-zware-belastbaar-fase-montage_resultaat.png",
            description: "Pesados renovatiesteiger en la fase la montaje."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigeroplossing-dakrenovatie_resultaat.png",
            description: "Solución del andamio para renovación de tejado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-gevel-renovatie-steiger-puinvanger_resultaat.png",
            description: "Pesados andamio la renovación la fachada con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Renovatiesteiger para renovación de tejado en Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-layher-allround-steiger-windreductie-binnenleuningen-console-puinvanger_resultaat.png",
            description: "Pesados Layher Alround renovatiesteiger con consola, reducción la viento en retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-monteren-eindhoven_resultaat.png",
            description: "Pesados renovatiesteiger con reducción la viento en Eindhoven con retenedor la escombros en reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-windreductie-rotterdam_resultaat.png",
            description: "Pesados renovatiesteiger con reducción la viento en Rotterdam con retenedor la escombros en reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/aanvoer-steiger-tbv-lift-gemeentehuis-uden_resultaat.png",
            description: "Andamio la suministro para liften en el ayuntamiento te Uden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-dakrenovatie-tilburg_resultaat.png",
            description: "Andamio de fachada para renovación de tejado en Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steiger-dakrenovatie_resultaat.png",
            description: "Gevelsteiger para renovación de tejado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steigeroplossing-dakrenovatie_resultaat.png",
            description: "Gevelsteigeroplossing para renovación de tejado."
        }
    ],
    scheepvaart: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Montaje revisión andamio para offshore grúa la carga naval."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouw-revisie-steiger-offshore_resultaat.png",
            description: "Opbouwen andamio para construcción naval kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger_aan_boord_scheepsbouw_resultaat.png",
            description: "Opbouwen andamio para construcción naval kraanrevisie, detail 01."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-aan-boord-schip-kraan-revisie_resultaat.png",
            description: "Andamio a bordo para construcción naval kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-antwerpen-haven-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Andamio en la puerto la Antwerpen para construcción naval kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-aan-boord-schip-kraan_resultaat.png",
            description: "Andamio a bordo para construcción naval trabajos."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-schip-revisie_resultaat.png",
            description: "Especializada construcción de andamios para mantenimiento naval. Grúa la carga revisión con adaptadas medidas la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-rederij_resultaat.png",
            description: "Marítima construcción de andamios para mantenimiento la grúa. Compleja construcción con impermeables componentes."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-revisie-steiger-scheepvaart_resultaat.png",
            description: "Opbouwen andamio para scheepvaart revisión."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger_scheepsbouw-kraan-revisie_resultaat.png",
            description: "Opbouwen andamio para construcción naval kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-vrijstraander-werkvloer-pompkamer-scheepsbouw_resultaat.png",
            description: "Alta calidad andamio para reparación naval. Personalizada oplossing para maritieme trabajos."
        }
    ],
    zwembad: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-nieuw-bouw_resultaat.png",
            description: "Nuevo andamio para piscina obra."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-over-kapping-met-ballast_resultaat.png",
            description: "Andamio over cubierta con lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-overkapping-zwembad-betegelen_resultaat.png",
            description: "Andamio overkapping piscina alicatar."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-spanten-constructie-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Andamio cerchas construcción piscina overkapping krimp folie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_betegelen_steiger_overkapping_krimpfolie_ballast_resultaat.png",
            description: "Zwembad alicatar andamio overkapping film retráctil lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_spantenconstructie_tralieligger_krimpfolie_ballast_tegelzetter_resultaat.png",
            description: "Zwembad overkapping estructura la cerchas viga celosía film retráctil lastre alicatador."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_tegelzetter_betegelen_zwembad_steiger_montage_fase_006_resultaat.png",
            description: "Zwembad overkapping alicatador alicatar piscina andamio montaje fase 006."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad-overkapping-egelzetter-betegelen-zwembad-steiger-montage-fase_resultaat.png",
            description: "Zwembad overkapping alicatador alicatar piscina andamio montaje fase."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Trabajo continuo andamio prevención condiciones meteorológicas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte overkapping construcción construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte andamio overkapping construcción construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Opbouwen film retráctil inpakken andamio cerchas construcción overkapping piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Overkapping cerchas construcción envuelta film retráctil andamio viga celosía."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Overkapping andamio film retráctil piscina cerchas construcción envuelta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Overkapping andamio film retráctil piscina alicatador estructura la cerchas viga celosía lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Cubierta estructura la cubierta andamio envuelta film retráctil estructura la cerchas viga celosía lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Cerchas construcción ingepakte overkapping construcción de andamios Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Spantenconstructie envuelta film retráctil overkapping weerspreventie andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ballast-overkapping-krimpfolie-ingepakt-steiger-zwembad_resultaat.png",
            description: "Ballast overkapping film retráctil envuelta andamio piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Trabajo continuo andamio prevención weers invloeden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte overkapping construcción construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte andamio overkapping construcción construcción de andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Opbouwen film retráctil inpakken andamio cerchas construcción overkapping piscina."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Overkapping cerchas construcción envuelta film retráctil andamio viga celosía."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Overkapping andamio film retráctil piscina cerchas construcción envuelta."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Overkapping andamio film retráctil piscina alicatador estructura la cerchas viga celosía lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Cubierta estructura la cubierta andamio envuelta krimpfoli estructura la cerchas tralie ligger lastre."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Cerchas construcción ingepakte overkapping construcción de andamios brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Spantenconstructie envuelta film retráctil overkapping weerspreventie andamio."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-tralieligger-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Cerchas construcción viga celosía piscina overkapping krimp folie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-brabant-kap-constructie_resultaat.png",
            description: "Construcción de andamios brabant kap construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-foto-in-het-zwemad-onder-de-spanten-constructie_resultaat.png",
            description: "Construcción de andamios foto en el piscina onder la cerchas construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-krimpfolie-en-kap_resultaat.png",
            description: "Construcción de andamios film retráctil en kap."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-over-het-zwembad-zodat-er-doorgewerkt-kan-worden_resultaat.png",
            description: "Construcción de andamios over el piscina para que er se pueda seguir trabajando kan se están."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-met-kripfolie_resultaat.png",
            description: "Construcción de andamios piscina overkapping con kripfolie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-ter-water-resistentie_resultaat.png",
            description: "Construcción de andamios piscina overkapping ter agua resistencia."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-constructie-zwembad-overkapping_met-krimfolie_resultaat.png",
            description: "Construcción de andamios construcción piscina overkapping con film retráctil."
        }
    ],
    trappentoren: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/opbouwen-vrijstaande-trappentoren-bouwverlichting_resultaat.png",
            description: "Fase montaje: Vrijstaande torre la escaleras con medidas de seguridad integradas. Modular construcción para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/stalen-trappentoren-22-meter-hoogbouw_resultaat.png",
            description: "Vrijstaande torre la escaleras andamio para el alcanzar la el tejado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-industrieële-trappentoren_resultaat.png",
            description: "Vrijstaande torre la escaleras la 22 metros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-vrijstaande-trapentoren-zonder-ankers_resultaat.png",
            description: "Vrijstaande torre la escaleras zonder ankers."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steiger-trappentoren-distributiecentrum-logistiek_resultaat.png",
            description: "Andamio torre la escaleras para distributiecentra en logística faciliteiten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/tijdelijke-trappentoren-zonnepanelen-waalwijk-montage-fase_resultaat.png",
            description: "Torre de escaleras temporal para paneles solares en Waalwijk. Montaje fase con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren_onverankerd_vrijstaand_18meter_01_resultaat.png",
            description: "Montaje independiente torre la escaleras la 18 metros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren-met-steunbeer-en-ballast-vrijstaand_resultaat.png",
            description: "Vrijstaande torre la escaleras con steunbeer en lastre. Optimale stabiliteit para seguras acceso tot todas werkniveaus."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-22m-industriele-steigerbouw_resultaat.png",
            description: "Vrijstaande torre la escaleras la 22 metros para industrial construcción de andamios. Robuuste construcción con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-nieuwbouw-zundert-coldstore_resultaat.png",
            description: "Vrijstaande torre la escaleras para obra nueva en Zundert en un coldstore. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steigerbouw-brabant_resultaat.png",
            description: "Vrijstaande torre la escaleras la 22 metros. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steiger-voor-bereiken-van-het-dak_resultaat.png",
            description: "Vrijstaande torre la escaleras andamio para el alcanzar la el tejado. Robuuste construcción con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/Industriële-trappen-toren-bij-bol.com-waalwijk-steigerbouw-brabant_resultaat.png",
            description: "Torre de escaleras industrial en Bol.com, Waalwijk. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/industrie-waalwijk-trappentoren-fase-montage_resultaat.png",
            description: "Industrie Waalwijk torre la escaleras en la fase la montaje. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappentoren_resultaat.png",
            description: "Montaje de un torre la escaleras. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren_resultaat.png",
            description: "Montaje la independiente torre la escaleras. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter_resultaat.png",
            description: "Montaje la 18 metros alta independiente torre la escaleras. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter-layher_resultaat.png",
            description: "Montaje la 18 metros alta independiente torre la escaleras con Layher systemen. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/monteren-steiger-trappentoren-onverankerd-vrijstaand-18meter_resultaat.png",
            description: "Monteren la onverankerde, independiente torre la escaleras la 18 metros. Construcción especializada en andamios para un progreso de obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappen-toren_resultaat.png",
            description: "Montaje de un torre la escaleras. Construcción especializada en andamios para un progreso de obra eficiente."
        }
    ],
    werkplatform: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/brede-houten-werkvloer-steigerbouw-staalconstructie_resultaat.png",
            description: "Fase montaje: Uitgebreid werkplatform con medidas de seguridad integradas. Profesional oplossing para hoogtewerk."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steigerbouw-werkvloer-boven-trappengat_resultaat.png",
            description: "Plataforma de trabajo boven trappengat. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steiger-veilige-werkvloer-montagewerk-staalbouw_resultaat.png",
            description: "Segura plataforma de trabajo para montagewerk. Especializada construcción de andamios para óptima accesibilidad."
        }
    ],
    overspanning: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-metselsteiger-overspanning-parkeer-garage-ingang_resultaat.png",
            description: "Estructura profesional de cerchas para pasarela de garajes. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spantenconstructie-tralieliggers-14m2_resultaat.png",
            description: "Innovatieve estructura la cerchas con tralieliggers la 14m2. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/montage-spanten-constructie_resultaat.png",
            description: "Montaje de estructura de cerchas para pasarela de garajes. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-garageboxen-aanvoersteiger_resultaat.png",
            description: "Cubierta para garajes con andamio de suministro. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-spanten_constructie-over-garage-boxen_resultaat.png",
            description: "Overspanning estructura la cerchas over garage boxen. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/spantenconstructie-over-garageboxen-tbv-metselsteiger01_resultaat.png",
            description: "Estructura de cerchas sobre garajes para andamio de albañilería. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-schijndel_resultaat.png",
            description: "Construcción de andamios estructura la cerchas schijndel. Especializada construcción de andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steiger-dak-overspanning-metsel-steiger_resultaat.png",
            description: "Construcción de andamios tejado pasaredel andamio de albañilería. Especializada construcción de andamios para óptima accesibilidad."
        }
    ],
    podium: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/podiumbouw/podium-op-de-helling-aan-gracht-met-steiger-voor-de-boot_resultaat.png",
            description: "Podiumsteiger para evenementen en presentaties. Robuuste construcción con seguras acceso en werkplatforms. En aanmeersteiger para un boot langs la gracht."
        }
    ],
    windreductie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-prefab-woningbouw-metsel-steiger-binnenleuning-dubbele-uitschuif-console-windreductie-net_resultaat.png",
            description: "Construcción de andamios prefab vivienda andamio de albañilería barandilla interior doble uitschuif consola reducción la viento net."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-steiger-nieuwbouw-overkapping-windreductie.png",
            description: "Monteren andamio obra nueva con overkapping en reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steiger-demontage-nieuwbouw-afbouw-beekse-bergen-hoofdgebouw-inter-deel_resultaat.png",
            description: "Andamio desmontaje obra nueva acabado Beekse Bergen hoofdgebouw inter deel."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Construcción de andamios obra nueva obra hoofdgebouw doorwerk overkapping kapconstructie windreductiegaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción de andamios obra nueva Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Opgeleverd stucadoor pintor desmontaje doorwerk andamio acabado windreductienetten kapconstructie intern andamio aanzicht."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Renovación construcción de andamios Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción de andamios estructura la cubierta film retráctil reducción la viento weer prevención."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción de andamios Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigergaas-windreducie-steigerbouw-hilvaren-beek_resultaat.png",
            description: "Steigergaas reducción la viento construcción de andamios Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción de andamios kapconstructie film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/tube-lock-steiger-met-windreductie-netten-steiger-gaas-kapconstructie-krimpfolie_resultaat.png",
            description: "Tube lock andamio con reducción la viento netten andamio malla kapconstructie film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/zware-renovatie-steiger-met-steigergaas-en-puinvanger_resultaat.png",
            description: "Pesados renovación andamio con steigergaas en retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/metselsteiger-met-windreductie-net_resultaat.png",
            description: "Andamio de albañilería con reducción la viento net."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-layhe-blitz-steiger-nieuwbouw-overkapping-windreductie_resultaat.png",
            description: "Monteren layhe blitz andamio obra nueva overkapping reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Obra nueva andamio obra hoofdgebouw doorwerk overkapping kapconstructie windreductiegaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-hilvarenbeek_resultaat.png",
            description: "Obra nueva andamio en Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Opgeleverd stucadoor pintor desmontaje doorwerk andamio acabado windreductienetten kapconstructie intern andamio aanzicht."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Renovación construcción de andamios Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción de andamios estructura la cubierta film retráctil reducción la viento weer prevención."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción de andamios Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-hilvarenbeek-krimpfolie-windreductie_resultaat.png",
            description: "Construcción de andamios Hilvarenbeek film retráctil reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción de andamios kapconstructie film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-krimpfolie-steigergaas_resultaat.png",
            description: "Construcción de andamios film retráctil steigergaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-layher-blitz-nieuwbouw_resultaat.png",
            description: "Construcción de andamios layher blitz obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción de andamios obra nueva Hilvarenbeek."
        }
    ],
    // Klasse 4 / Ruwbouw & Systeembouw projecten
ruwbouw_klasse4: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/ruwbouw-steiger-kalkzandsteen-blokken_resultaat.png",
        description: "Pesados clase 4 construcción de andamios para ruwbouw con kalkzandsteenblokken. Maximale stabiliteit para pesado belasting."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/systeembouw-steiger-nieuwbouw-woningen-lift_resultaat.png",
        description: "Systeembouw steigeropstelling para nieuwbouwwoningen, uitgerust con material- en personenlift."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steigerbouw-bovenaanzicht-engels-baksteen-project_resultaat.png",
        description: "Bovenaanzicht de un clase 4 andamio de albañilería en un grootschalig Engels baksteen proyecto."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steiger-loop-pad-bouwplaats-dura-vermeer_resultaat.png",
        description: "Seguro en obstakelvrij andamio-pasarela conform la strengste veiligheidsnormen en la bouwplaats."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/nieuwbouwwijk-steiger-afzetting-bouwhekken_resultaat.png",
        description: "Completo steigerinrichting inclusief nette afzetting en bouwhekken para un seguras nieuwbouwwijk."
    }
],

// Renovación, Dakwerken & Logistiek
renovatie_logistiek: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/daksteiger-schoorsteen-renovatie-project_resultaat.png",
        description: "Personalizada daksteiger para seguras schoorsteenrenovatie en dakwerkzaamheden zonder dakbeschadiging."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/gevelsteiger-renovatie-vrijstaande-woning_resultaat.png",
        description: "Gevelsteiger para la complete renovación en verduurzaming de un independiente vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/mobiele-kraan-van-riel-steiger-montage_resultaat.png",
        description: "Eficientes montaje del andamio en logístico en samenwerking con la mobiele kranen la Van Riel."
    }
],
    betonfabriek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger01_resultaat.png",
            description: "Especializada construcción de andamios para betonfabriek en Oosterhout. Robuuste construcción para pesado industrial toepassingen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger02_resultaat.png",
            description: "Especializada construcción de andamios para betonfabriek en Oosterhout. Robuuste construcción para pesado industrial toepassingen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger03_resultaat.png",
            description: "Especializada construcción de andamios para betonfabriek en Oosterhout. Robuuste construcción para pesado industrial toepassingen."
        },                                
    ],
    infra: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-tijdelijke-loopbrug-tilburg-industrie_resultaat.png",
            description: "Pasarela temporal con puesta a tierra para alta tensión en Tilburg, infraestructura de andamio para público y peatones."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Industriele construcción de andamios para temporal infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Construcción del andamio para windturbineonderhoud en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Segura acceso tot windmolens via torre la escaleras en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Temporal torre la escaleras para windturbine-construcción de andamios en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Publieke torre la escaleras para acceso tot windmolens en infraestructura."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Industriele torre la escaleras para construcción de andamios en windmolens, close-up."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Temporal infraestructura para acceso tot windturbines en Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouwen-steiger-valbeveiliging-efteling-loon-op-zand-achtbaan-baron_resultaat.png",
            description: "Opbouwen andamio para valbeveiliging en Efteling, ubicación Loon en Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouw-steiger-valpreventie-efteling-achtbaan-baron-brabant_resultaat.png",
            description: "Opbouwen andamio para valpreventie en Efteling, ubicación Loon en Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerbouw-efteling-achtbaan-valpreventie_resultaat.png",
            description: "Construcción de andamios para valpreventie en Efteling, ubicación Loon en Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infra-steiger-loopbrug-hoogspanning-tilburg_resultaat.png",
            description: "Barandillas dobles con pica de tierra para puesta a tierra de pasarela en Tilburg, infraestructura temporal para accesibilidad de gasolinera."
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
            description: "Montaje pasarela 100000 Volt, con toma la tierra andamio onder torre la alta tensión para público tránsito peatonal en gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/montage_loopbrug_100000Volt_aanleg_hoogspanning_geaard_steiger_onder_hoogspanningsmast_openbare_ruimte_openbaar_voetganger_verkeer_bereikbaarheid_benzinepomp_resultaat.png",
            description: "Montaje pasarela 100000 Volt, con toma la tierra andamio onder torre la alta tensión para público tránsito peatonal en gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-electrisch-hoogspanningsnet-tilburg-tijdelijke-brug-bereikbaarheid-voetgangers-bp-hazenest_resultaat.png",
            description: "Andamio montaje en Tilburgse industria, pasarela 100000 Volt geaard onder torre la alta tensión para peatones en gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-loopbrug-bereikbaarheid-van-bp-tankstation_resultaat.png",
            description: "Andamio en red eléctrica de alta tensión en Tilburg, puente temporal para accesibilidad peatonal en BP Hazenest."
        }
    ],
    infra1: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Temporal infraestructura en torre la escaleras opgebouwd por Team Andamios Brabant para seguras acceso tot un windturbine."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Detailopname de un seguras industrial torre la escaleras con hoogwaardig barandillas, montado strak langs la mast de un windmolen para inspectiewerkzaamheden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Temporal infraestructura: Segura torre la escaleras para windturbine-mantenimiento"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Personalizada publieke torre la escaleras para acceso tot windmolens"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Industrial construcción de andamios: Segura toegangssystemen para la energiesector"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Personalizada temporal torre la escaleras por Team Andamios Brabant para un seguras en stabiele acceso tot la ingang de un windturbine."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Robuuste en independiente construcción del andamio con integradas trappen en barandillas, specifiek ontworpen para la duurzame energiesector."
        }
    ],
    "trapgat-raalte": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie_aanvraag_trapgat met glas_resultaat.png",
        description: "Situación la solicitud para un construcción del andamio boven el hueco de escalera con glaswanden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-aanvraag-trappengat-binnen_resultaat.png",
        description: "Binnensituatie la el traphuis para behoeve la engineering la pasarela."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-steiger-aanvraag_resultaat.png",
        description: "Resumen de projectsituatie para la solicitud la binnensteiger."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steigerbouw-vrije-doorgang-motage-werkvloer_resultaat.png",
        description: "Construcción de andamios construcción con gegarandeerde libre doorgang onder la montaje-plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-constructie-overspanning-trap-blijft-in-gebruik_resultaat.png",
        description: "Slimme construcción del andamio con un pasarela para que la vaste trap volledig en gebruik blijft."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspannende-werkvloer-ter-montagewerk-boven-vaste-trap_resultaat.png",
        description: "Overspannende plataforma de trabajo para behoeve la montagewerkzaamheden strak boven la vaste trap."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspanning-binnen-met-vrije-doorgang-daaronder_resultaat.png",
        description: "Binnensteiger con un seguras pasarela en un volledig libre doorloop daaronder."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/trap-binnen-kantoor-blijft-in-gebruik_resultaat.png",
        description: "De vaste binnentrap en el kantoor blijft durante de trabajos permanent begaanbaar."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "Segura plataforma de trabajo montado boven el permanent begaanbare en open hueco de escalera."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-trapgat-in-raalte_resultaat.png",
        description: "Personalizada plataforma de trabajo boven el hueco de escalera para un onderhoudsproject en Raalte."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-en-vaste-trap-blijven-in-gebruik_resultaat.png",
        description: "Zowel la superior plataforma de trabajo als la onderliggende vaste trap blijven gelijktijdig en gebruik."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-in-gebruik-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "De gemonteerde plataforma de trabajo de andamio is volop en gebruik boven el seguras doorloop-hueco de escalera."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-montage-werk-overspanning-boven-verdieping_resultaat.png",
        description: "Montagewerkzaamheden vanaf la overspanningswerkvloer en la bovenverdieping."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-op-boven-verdieping-met-permanent-vrije-doorgang-daaronder_resultaat.png",
        description: "Steigeropstelling en la bovenverdieping con un gegarandeerde, permanente libre doorgang daaronder."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-overspanning-boven-trapgat_resultaat.png",
        description: "Solide werkvloeroverspanning om seguro boven un diep hueco de escalera te kunnen trabajar."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-trapgat_resultaat.png",
        description: "Detalle la stabiele plataforma de trabajo la especializada trapgatsteiger."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-traphuis_resultaat.png",
        description: "Segura en arbo-technisch verantwoorde plataforma de trabajo en el traphuis ingebouwd."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-vanaf-onderkant_resultaat.png",
        description: "Aanzicht la overspannende plataforma de trabajo de andamio vanaf la parte inferior gezien."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/overbruggende-werkvloer-over-een-trap-met-vrije-doorgang_resultaat.png",
        description: "Overbruggende plataforma de trabajo over un operationele trap con behoud la volledige doorloop."
    }
],
    "prefabwoningbouw": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/lichte-verspringing-steigervloer_resultaat.png",
        description: "Andamio de albañilería con un lichte desfase en la steigervloer, perfect aangepast a la contouren la prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/metselsteiger-met-extern-ladderhuis-veiligheid-en-werkvloer-efficientie_resultaat.png",
        description: "Profesional andamio de albañilería voorzien de un extern torre la escaleras para óptima seguridad en un eficientes plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/overbrugging-platdak-aanbouw_resultaat.png",
        description: "Personalizada steigeroverbrugging over el planos tejado de un aanbouw para seguras gevelwerkzaamheden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/prefab-woningbouw-metselsteiger_resultaat.png",
        description: "Robuuste andamio de albañilería construcción speciaal ingericht para la snelle montagefases dentro la prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoningbouw_resultaat.png",
        description: "Eficientes construcción de andamios projectuitvoering para behoeve la grootschalige prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoning-metselsteiger_resultaat.png",
        description: "Segura en arbo-technisch verantwoorde andamio de albañilería opgesteld en un moderne prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-kopse-kant_resultaat.png",
        description: "Zijaanzicht la stabiele construcción del andamio a la kopse kant la vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-prefabwoning_resultaat.png",
        description: "Rondom gemonteerde andamio la fachada para la seguras afwerking de un prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/intern-ladderhuis-met-valpreventie-prefab-woningbouw-steiger_resultaat.png",
        description: "Geïntegreerd intern torre la escaleras con gecertificeerde valpreventie en un prefab vivienda andamio."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/klasse-4-steiger-prefab-woning_resultaat.png",
        description: "Pesados clase IV (Klasse 4) steigeropstelling para un prefab vivienda, geschikt para intensieve metselwerkzaamheden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-klasse4-ring54_resultaat.png",
        description: "Layher Allround Klasse IV steigersysteem con ring 54 configuratie para máxima stabiliteit en draagkracht."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-ring54-prefabwoning-metselsteiger_resultaat.png",
        description: "Modular Layher Allround ring 54 andamio de albañilería, flexibel en snel opgebouwd alrededor la prefabwoning."
    }
],
    "transportband": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag-overspanning-vrije-werkvloer-14m3m-hier-werkvloer-zware-klasse-maxbelasting-3kNm2-5,5kNm2_resultaat.png",
        description: "Aanvraag pasarela libre plataforma de trabajo 14m x 3m - Plataforma de trabajo pesado clase con máxima belasting la 3 kN/m² tot 5,5 kN/m²."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/boven-aanzicht-complexe-industie-werkvloer_resultaat.png",
        description: "Bovenaanzicht la compleja industrial plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/hier-stopt-het-reeds geinstalleerde-vaste-constructie-liggers-H-profielen-hier-en-verdieping-gewisseld-compex-steiger-gemaakt_resultaat.png",
        description: "Aansluiting en existentes vaste construcción (H-profielen) en niveauwissel para complex steigerwerk."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/impressie-situatie-voor-het-monteren-steiger-overbrugging_resultaat.png",
        description: "Impressie la situación voorafgaand a la montaje la steigeroverbrugging."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/montage-overspanning-werkvloer_resultaat.png",
        description: "Montaje la pasarela para la plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/realisatie-werkplatform-voor-zware-montage-meerder-etages-en-ruimte_resultaat.png",
        description: "Realisatie la el werkplatform para pesado montaje con meerdere plantas en adicional werkruimte."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_complexe-grote-belasting-steiger-overbrugging-zonder-stemplels-op-de-ondergrond-binnen_resultaat.png",
        description: "Aanvraag compleja, zwaar belaste steigeroverbrugging dentro, zonder stempels en la ondergrond."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_werkvloer_boven_uitsparing-hoge-werkvloer-lange-complex-steiger-binnen_resultaat.png",
        description: "Aanvraag alta plataforma de trabajo boven uitsparing. Lang en complex steigerwerk dentro."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/steiger-montage-interne-deel-werkvloer_resultaat.png",
        description: "Steigermontage la el internos gedeelte la plataforma de trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd5_resultaat.png",
        description: "Oplevering la plataforma de trabajo (Fase 5)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd_resultaat.png",
        description: "Gerealiseerde plataforma de trabajo en succesvolle projectoplevering."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd1_resultaat.png",
        description: "Gerealiseerde plataforma de trabajo en projectoplevering (Detalle 1)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd2_resultaat.png",
        description: "Gerealiseerde plataforma de trabajo en projectoplevering (Detalle 2)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd3_resultaat.png",
        description: "Oplevering la plataforma de trabajo (Fase 3)."
    }
],
"industria-tilburg": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/werk-opgeleverd-na-demontage-van-de-steiger_resultaat.png",
        description: "Het eindresultaat la industrial installatie nadat del andamio vakkundig is gedemonteerd."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag_-nstallatie-machine-industrie-steiger-werkvloer_resultaat.png",
        description: "Inmeting en solicitud para un stabiele plataforma de trabajo de andamio alrededor de un industrial máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag-situatie-steigerbehoefte_resultaat.png",
        description: "Analyse la projectsituatie om la exacte industrial steigerbehoefte te bepalen."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/fase-montage-werkvloer-industrieële-installatie_resultaat.png",
        description: "Fase de montaje la pesado plataforma de trabajo alrededor la industrial installatie."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/ladderhuis-om-de-steigers-op-de-daken-rondom-de-machines-te-betreden_resultaat.png",
        description: "Seguro montado torre la escaleras om de andamios en la tejados alrededor la machines te entrar."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/montage-steiger-ladderhuis-toegang-steiger-werkvloer-installatie-industrieël-luchtkanaal_resultaat.png",
        description: "Montaje la el andamio-torre la escaleras para un seguras acceso tot el industrial luchtkanaal."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/oplossing-steiger-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "De uiteindelijke steigeroplossing: un en maat gemaakt werkplatform alrededor la máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-tilburg-industrie_resultaat.png",
        description: "Ejecución de una compleja solicitud de andamio industrial en una ubicación de Tilburg."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "Gedetailleerd werkplatform para behoeve la montagewerkzaamheden a un industrial máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steigerbehoefte-voor-installatie-montage-machine_resultaat.png",
        description: "Segura steigeropstelling ontworpen para la installatie en montaje la pesado machines."
    }
],

"trapgat-helmond": [
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/steiger-in-trappenhuis-wilting-coare-helmond-industrieterrein-habraken_resultaat.png",
        "description": "Seguro gemonteerde andamio en el trappenhuis para behoeve de trabajos en Wilting / Coare en industrieterreen Habraken."
    },
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/uitbouw-boven-trappenhuis_resultaat.png",
        "description": "Op maat gemaakte extensión en seguras plataforma de trabajo de andamio boven el trappenhuis."
    }
],
    "klasse2": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/klasse-2-frame-steiger-layher-blitz-bungalow_resultaat.png",
        description: "Klasse 2 frame andamio con el Layher Blitz systeem en un obra nueva bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-snelbouwsteiger-project-brabant_resultaat.png",
        description: "Layher Blitz snelbouwsteiger ingezet en un proyecto en Brabant."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-steigerbouw-nieuwbouw-bungalow_resultaat.png",
        description: "Layher Blitz construcción de andamios para behoeve la realisatie de un obra nueva bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/montage-klasse-2-gevelsteiger-cascobouw_resultaat.png",
        description: "Montaje de un clase 2 andamio la fachada para behoeve la cascobouw."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/nieuwbouw_14persoons_bungalow_frame_steiger_demontage_resultaat.png",
        description: "Desmontaje de un frame andamio en un gran obra nueva 14-persoons bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steiger-werkvloer-overzicht-nieuwbouw-bungalows_resultaat.png",
        description: "Resumen de seguras andamio plataformas de trabajo en obra nueva bungalows."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-hoofdgebouw-krimpfolie-kapconstructie_resultaat.png",
        description: "Construcción de andamios en el hoofdgebouw voorzien la film retráctil en un kapconstructie."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-klasse-2-utiliteitsbouw-layher_resultaat.png",
        description: "Profesional clase 2 construcción de andamios con Layher onderdelen para utiliteitsbouw."
    }
],
    installatieTechniek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steiger-werkplatform-industriële-installatie-machine_resultaat.png",
            description: "Especializada andamio para installatietechniek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Technische installatie andamio con meerdere werkniveaus. Profesional oplossing para mantenimiento en montaje."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Geavanceerde construcción de andamios para installatiewerk. Segura acceso tot todas technische componentes."
        }
    ],
    videos: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-udenhout-brabant.mp4",
            description: "Andamio de renovación para mantenimiento inmobiliario y pintura en Udenhout"
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
            description: "Andamio de renovación para la transformación de una villa de lujo moderna en Tilburg"
        }
    ],
    videos3: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-villa-bredaseweg-tilburg-brabant.mp4",
            description: "Andamio de renovación para villa en Bredaseweg, Tilburg, Brabant"
        }
    ],
    videos4: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-tilburg-renovatie-klasse-4-steige.mp4",
            description: "Construcción de andamios Tilburg renovación clase 4 andamio"
        }
    ],
    videos5: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vijstaande_trappen_toren.mp4",
            description: "Vrijstaande torre la escaleras para seguras acceso tot hoogtes. De video toont la construcción en el gebruik la torre la escaleras en un industrial entorno."
        }
    ],
    videos6: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-werkvloer-op-ideale-werkhoogte.mp4",
            description: "Construcción de andamios plataforma de trabajo en ideale werkhoogte"
        }
    ],
    videos7: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-overdekte-kap-constructie-wind-reductie-netten-beekse-bergen.mp4",
            description: "Construcción de andamios overdekte kap construcción wind reductie netten Beekse Bergen" 
        }
    ],
    videos8: [  
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/grote-werkvloer-over-uitsaring-verdiepingsvloer-bol.com.mp4",
            description: "Gran plataforma de trabajo 3 metros breed en 14 metros hoog 32 metros lang over uitsparing forjado de planta en Bol.com"
        }
    ],
    videos9: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-industrie-bol-transportbad-door-twee-ruimtes-en-twee-verdiepingen-boven-uitsparing-verdiepingsvloer.mp4",
            description: "Construcción de andamios industria Bol.com te Waalwijk, cinta transportadora por dos espacios en dos verdiepingen boven uitsparing forjado de planta"
        }
    ],
    videos10: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Pompkamersteiger-scheepswerf-De-Werken-werkendam.mp4",
            description: "Vrijstaand werkplatform para revisiewerkzaamheden en la pompkamer de un schip. Bij Scheepswerf De Werken en Werkendam."
        }
    ],
    videos11: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Bungalows-nieuwbouw-frame-steiger-klasse-2.mp4",
            description: "Bungalows obra nueva frame andamio clase 2"
        }
    ],
    videos12: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-machine-revisie-industrie-beton-fabriek-oosterhout.mp4",
            description: "Construcción de andamios revisión de maquinaria industria beton fabriek Oosterhout"
        }
    ],
    videos13: [
        {  
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", 
            description: "Andamio de renovación con dos pasarelas en un edificio monumental de Waalwijk"
        }
    ],
    videos14: [
        { 
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/industrie-machine-installatietechniek-op-plat-dak.mp4",
            description: "Industrie máquina installatietechniek en plano tejado"
        }
    ]   
};

function createSlideshow(containerId, slides) {
    if (!slides || slides.length === 0) return;
    const container = document.getElementById(containerId);
    if (!container) return;

    // Vorm slides
    slides.forEach((slideData, index) => {
        const slide = document.createElement('div');
        slide.className = 'compact-slide';
        if (index === 0) slide.classList.add('active');

        if (slideData.image) {
            const imageUrl = normalizeMediaUrl(slideData.image);
            const imageAlt = slideData.description || `Slide ${index + 1}`;
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
                    Tu navegador no admite la etiqueta de video.
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
    // Zorg dat interval solo draait als meer dan 1 slide disponible is
    if (slideElements.length > 1) setInterval(nextSlide, 4500);
}

// Eén seguras initializer na DOM ready
document.addEventListener('DOMContentLoaded', function () {
    try {
        const categoryMap = {
            industrie: 'Industrie',
            videos1: 'Video',
            nieuwbouw: 'Nieuwbouw',
            videos2: 'Video',            
            renovatie: 'Renovatie',
            utiliteit: 'Utiliteit',
            videos: 'Video',            
            videos11: 'Video',
            videos12: 'Video',
            videos13: 'Video',
            videos14: 'Video',
            woningbouw: 'Woningbouw',
            videos3: 'Video',
            gevelonderhoud: 'Gevelonderhoud',
            onderhoud: 'Onderhoud',
            videos4: 'Video',
            scheepvaart: 'Scheepvaart',
            videos5: 'Video',
            zwembad: 'Zwembad',
            trappentoren: 'Trappentoren',
            videos6: 'Video',
            overspanning: 'Overspanning',
            videos7: 'Video',
            werkplatform: 'Werkplatform',
            videos8: 'Video',
            windreductie: 'Windreductie',
            videos9: 'Video',
            betonfabriek: 'Betonfabriek',
            videos10: 'Video',
            infra: 'Infra',
        };

        document.querySelectorAll('.compact-slideshow').forEach(section => {
            const key = section.id || '';
            section.dataset.category = key.startsWith('videos') ? 'video' : (categoryMap[key] ? key : section.dataset.category || key);
            section.dataset.label = categoryMap[key] || key;
            section.dataset.searchText = `${section.dataset.label} ${key} ${section.innerText || ''}`.toLowerCase();
        });

        // Initialize slideshows (controleert of containers bestaan)
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

        // Buttons en containers con null-checks
        const meerFotosKnop = document.getElementById('meerFotosKnop');
        const meerVideosKnop = document.getElementById('meerVideosKnop');
        const leesMeerKnop = document.getElementById('leesMeerKnop');
        const slideshowContainer = document.querySelector('.carousel');
        const videoContainer = document.getElementById('extraVideos');
        const carousel = document.getElementById('carousel');

        // meerFotosKnop: voeg adicional fotos toe als knop bestaat
        if (meerFotosKnop && slideshowContainer) {
            meerFotosKnop.addEventListener('click', function () {
                const extraFotos = [
                    "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger_bouw.jpg",
                    "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning.png"
                ];
                extraFotos.forEach(src => {
                    const img = document.createElement('img');
                    img.src = normalizeMediaUrl(src);
                    img.alt = "Extra foto";
                    img.loading = 'lazy';
                    slideshowContainer.appendChild(img);
                });
                meerFotosKnop.style.display = 'none';
            });
        }

        // meerVideosKnop: cargar videos adicionales
        if (meerVideosKnop && (carousel || videoContainer)) {
            meerVideosKnop.addEventListener('click', function () {
                const videoData = [
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie_steigers/Renovatie-steiger-vastgoed-onderhoud-schilderwerk-udenhout.mp4", description: "Andamio de renovación para mantenimiento inmobiliario y pintura en Udenhout" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger.mp4", description: "Andamio de albañilería para apartamentos de obra nueva" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", description: "Andamio de renovación con dos pasarelas en un edificio monumental de Waalwijk" }
                ];
                videoData.forEach(video => {
                    const videoElement = document.createElement('div');
                    const poster = getMediaPosterUrl(video.src);
                    videoElement.innerHTML = `
                        <div class="compact-description">${video.description}</div>
                        <video controls poster="${poster}" style="width:100%;height:auto;" preload="metadata">
                            <source src="${video.src}" type="video/mp4">
                            Tu navegador no admite la etiqueta de video.
                        </video>
                    `;
                    if (carousel) carousel.appendChild(videoElement);
                    else if (videoContainer) videoContainer.appendChild(videoElement);
                });
                if (videoContainer) videoContainer.style.display = 'grid';
                meerVideosKnop.style.display = 'none';
            });
        }

        // leesMeerKnop: mostrar presentaciones adicionales si existen
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

        // Extra: controles para funciones auxiliares existentes (comprobaciones seguras)
        const toggleVideosBtn = document.getElementById('toggleVideosBtn'); // opcional
        if (toggleVideosBtn && videoContainer) {
            toggleVideosBtn.addEventListener('click', function () {
                videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';
            });
        }

        // Dejar extraVideos oculto inicialmente si existe
        if (videoContainer) videoContainer.style.display = 'none';
    } catch (err) {
        // Registrar en silencio evita romper el sitio
        console.error('Error de inicialización del script:', err);
    }
});

// las demás funciones auxiliares pueden quedarse aquí abajo
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

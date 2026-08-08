// script_es.js - versión consolidada y reparada
function normalizeMediaUrl(url) {
    if (!url) return url;

    let cleanUrl = url.trim().replace(/\\/g, '/');

    // Locales rutas a absoluta URL normalizar
    if (/^[a-z]:\//i.test(cleanUrl) && cleanUrl.includes('/beeldmateriaal/')) {
        cleanUrl = `https://www.steigerbouwbrabant.nl/beeldmateriaal/${cleanUrl.split('/beeldmateriaal/').pop()}`;
    }

    // Solo espacios codificar, GEEN extensión forzar
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
            description: "Situación para el colocar la un andamio para máquina mantenimiento in industrial entorno. Construcción especializada la andamios para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-van-de-industie-steiger_resultaat.png",
            description: "Situación para el colocar la la industria andamio. Construcción especializada la andamios para una accesibilidad óptima y seguridad para el realizar la máquina mantenimiento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Construcción la andamios para industria máquina revisión. Construcción especializada la andamios para una accesibilidad óptima y seguridad durante trabajos la mantenimiento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(6)_resultaat.png",
            description: "Industriële construcción la andamios para máquina revisión con integradas medidas la seguridad en óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(7)_resultaat.png",
            description: "Industriële construcción la andamios para máquina revisión con integradas medidas la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(8)_resultaat.png",
            description: "Industriële construcción la andamios para máquina revisión con integradas medidas la seguridad en óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Completo andamio la inspección con integradas veiligheidsplatforms para mantenimiento la depuración la agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(17)_resultaat.png",
            description: "Industriële construcción la andamios para máquina revisión con integradas medidas la seguridad en óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(15)_resultaat.png",
            description: "Industriële construcción la andamios para máquina revisión con integradas medidas la seguridad en óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(10)_resultaat.png",
            description: "andamio para fines la máquina mantenimiento in industrial entorno. Alimentaria industria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(11)_resultaat.png",
            description: "Industriële construcción la andamios para máquina revisión con integradas medidas la seguridad en óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-steiger-installatie-techniek-industie-plat-twee-levels-plat-dak_resultaat.png",
            description: "Situación la steigerinstallatie in industrial entorno con planos tejados."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Situación para el colocar la la industrial andamio in Tilburg. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },       
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Máquina revisión proyecto in Helmond Área Industrial Sur. Construcción especializada la andamios para mantenimiento industrial la maquinaria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (12)_resultaat.png",
            description: "Industriële construcción la andamios con plataforma la trabajo para máquina revisión. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-14-hoogte-vrije-werkvloer_resultaat.png",
            description: "Industriële construcción la andamios con 14 metros altura libre plataforma la trabajo para máquina revisión. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-distributie-centrum_resultaat.png",
            description: "Industriële construcción la andamios en distributiecentrum. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-waalwijk-industrie-werkvloer-14-hoog-_resultaat.png",
            description: "Industriële construcción la andamios in Waalwijk con plataforma la trabajo en 14 metros altura. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },            
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerconstructie-industriele-lopende-band_resultaat.png",
            description: "Personalizada construcción la andamio para industrial transportadora cinta. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (5)_resultaat.png",
            description: "Industriële construcción la andamios con plataforma la trabajo para máquina revisión. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-steigerbouw-werkvloer-met-leuningen_resultaat.png",
            description: "Veilige construcción la andamios con plataforma la trabajo en barandillas para industrial máquina revisión. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },        
        {
            image:  "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerconstructie-binnen-distributiecentrum_resultaat.png",
            description: "Industriële construcción la andamio dentro distributiecentrum. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/32-meter-lang-3-meter-breed-14-hoog-tijdelijke-werkvoer-vrij-platform_resultaat.png",
            description: "32 metros larga, 3 metros ancha en 14 metros alta temporal plataforma la trabajo con libre plataforma para industrial máquina revisión. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/montage-werkvloer-waalwijk-steigerbouw_resultaat.png",
            description: "Montaje la plataforma la trabajo in Waalwijk para industrial construcción la andamios. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriele-steigerbouw-lopende-band-overbrugging_resultaat.png",
            description: "Industriële construcción la andamios con transportadora cinta overbrugging. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-werkvloer-distributiecentrum-transportsysteem_resultaat.png",
            description: "Industriële construcción la andamios con plataforma la trabajo in distributiecentrum para transportsysteem. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilig-steiger-looppad-industriele-hal_resultaat.png",
            description: "Veilige andamio con pasarela in industrial nave. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steiger-interne-transportsystemen-waalwijk_resultaat.png",
            description: "Personalizada andamio para internos sistemas la transporte in Waalwijk. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-industriesteiger-tussen-ruimtes-logistiek_resultaat.png",
            description: "Veilige industriesteiger entre espacios in logístico centro. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/complexe-steigerbouw-logistieke-sector-brabant_resultaat.png",
            description: "Compleja construcción la andamios in la logistieke sector in Brabant. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriesteiger-transportband-bol-com-waalwijk_resultaat.png",
            description: " Industriesteiger para transportband en Bol.com in Waalwijk. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industrie-steiger-steigernontage-transportband-steigerbouw-machinepark_resultaat.png",
            description: "Industrie-andamio para steigernontage la transportband in machinepark. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },    
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-vrijstaande-werkvloer-industrie-aanleg-machinepark-1_resultaat.png",
            description: "Vrijstaande andamio in industrial aanleg. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
            {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Ruimtelijke construcción la andamio con twee etages para transportband. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-montage-distributiecentrum-bol-com_resultaat.png",
            description: "Steigermontage in distributiecentrum Bol.com. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-distributiecentrum-waalwijk-machinepark_resultaat.png",
            description: "Construcción la andamios in distributiecentrum Waalwijk para machinepark. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
          {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Ruimtelijke construcción la andamio con twee etages para transportband. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat_resultaat.png",
            description: "Andamio para entrar la registro in industrial entorno. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat-industrie-opslagtank-zuiveren-brabant-water_resultaat.png",
            description: "Andamio para entrar la registro in industrial entorno. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-besloten-ruimte_resultaat.png",
            description: "Andamio para entrar la cerrado espacio in industrial entorno. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        }
    ],
    utiliteit: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/detail-steiger-werkvloer-kantplanken_resultaat.png",
            description: "Detalle la steigerwerkvloer con rodapiés para adicional seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerbouw-locatie-waterzuivering_resultaat.png",
            description: "Personalizada construcción la andamios en locatie waterzuivering. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/leuningwerk-inspectiesteiger-waterzuivering-industrie_resultaat.png",
            description: "Trabajo la barandillas para andamio la inspección en locatie waterzuivering."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/tube-lock-inspectiesteiger-waterzuivering-basis_resultaat.png",
            description: "Tube-lock para andamio la inspección en locatie waterzuivering."
        },
        { 
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-grote-werk-inspectie-vloer_resultaat.png",
            description: "Gran trabajo inspectie suelo para construcción la andamios."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (39)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (38)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (37)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (36)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (35)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (34)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (33)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (31)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (32)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (30)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (29)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (28)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (26)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (25)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (24)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (23)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (22)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (21)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (20)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (16)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (14)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (13)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (9)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)-1_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)-1_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-inspectiesteiger-overzicht_resultaat.png",
            description: "Resumen la inspectie andamios in la industria."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)_resultaat.png",
            description: "Inspectiesteiger con seguras plataforma la trabajo en locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-hapert-riwz_resultaat.png",
            description: "Hapert RIWZ andamios."
        }
    ],
    nieuwbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio la albañilería afbouwfase woningbouw Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Zware andamios la sistema para nieuwbouwprojecten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje andamio la albañilería en nieuwbouwproject in Gorichem. Construcción especializada la andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio la albañilería afbouwfase woningbouw Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Zware andamios la sistema para nieuwbouwprojecten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Desmontaje andamio la albañilería en nieuwbouwproject in Gorichem. Construcción especializada la andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woningen_resultaat.png",
            description: "Desmontaje andamio en obra nueva viviendas. Eficientes en seguras soluciones la andamios para woningbouwprojecten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woning-waterkant_resultaat.png",
            description: "Desmontaje andamio en obra nueva viviendas a la orilla del agua. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-gilze-rijen_resultaat.png",
            description: "Desmontaje andamio la albañilería en nieuwbouwproject in Gilze-Rijen. Construcción especializada la andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-rijen_resultaat.png",
            description: "Desmontaje andamio la albañilería en nieuwbouwproject in Rijen. Construcción especializada la andamios para vivienda."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/bouwsteiger_hoge_slagen_gelijk_met_verdieping_derde_leuning_voorloopleuning_tijdens_op_en_afbouw_resultaat.png",
            description: "Andamio la obra con alta niveles a nivel con planta, tercera leuning en barandilla avanzada durante en- en acabado. Construcción especializada la andamios para proyectos la obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/complete-gevelsteiger-nieuwbouw-appartementen_resultaat.png",
            description: "Completo andamio la fachada para obra nueva apartamentos. Construcción especializada la andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage_tube_lock_metsel_steiger_resultaat.png",
            description: "Desmontaje andamio la albañilería obra nueva apartamentos, nivel a nivel a altura la planta, tercera leuning en barandilla avanzada."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-apartementen-rijen-brabant-nederland_resultaat.png",
            description: "Desmontaje andamio la albañilería obra nueva apartamentos in Rijen, Brabant, Nederland. Especializada construcción la andamios para eficientes acabado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metsel-steiger-gorichem_resultaat.png",
            description: "Desmontaje andamio la albañilería obra nueva apartamentos in Gorichem. Especializada construcción la andamios para eficientes acabado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-met-goederenlift_resultaat.png",
            description: "Desmontaje andamio la albañilería obra nueva apartamentos con goederenlift. Especializada construcción la andamios para eficientes acabado."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste_slag_metsel_steiger_schimmert_resultaat.png",
            description: "Primer nivel andamio la albañilería obra nueva apartamentos in Schijndel. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste-slag-werkvloer-metselsteiger-windreductie_resultaat.png",
            description: "Primer nivel plataforma la trabajo andamio la albañilería con reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist_resultaat.png",
            description: "Fase demontage material listo para transporte vertical transport operador la grúa."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist-rijen_resultaat.png",
            description: "Fase demontage material listo para transporte vertical transport operador la grúa-rijen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_metselsteiger_voorloopleuning_materiaal_dichtbij_de_steiger_resultaat.png",
            description: "Fase montage andamio la albañilería con barandilla avanzada en material dicht en la andamio. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_resultaat.png",
            description: "Fase montage montar montar andamio la albañilería."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_tube_lock_klasse4_resultaat.png",
            description: "Fase montage montar montar andamio la albañilería tube lock clase 4. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/gevelsteiger-nieuwbouw-appartementencomplex_resultaat.png",
            description: "Fase montage andamio la fachada obra nueva complejo la apartamentos."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/intern_ladderhuis_zware_steiger_klasse4_metsel_steiger_resultaat.png",
            description: "Interno torre la escaleras pesado andamio clase 4 andamio la albañilería. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/layher allround metselsteiger deurne_resultaat.png",
            description: "Layher Allround andamio la albañilería Deurne. Construcción especializada la andamios para un progreso la obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_01_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos. Construcción especializada la andamios para un progreso la obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_02_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos. Construcción especializada la andamios para un progreso la obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos in Schijndel. Construcción especializada la andamios para un progreso la obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_woningen_met_toren_kraan_resultaat.png",
            description: "Andamio la albañilería obra nueva viviendas con torenkraan. Construcción especializada la andamios para un progreso la obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio la albañilería Schijndel Moeskops obra nueva apartamentos. Construcción especializada la andamios para un progreso la obra eficiente."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Andamio la albañilería Schijndel Moeskops obra nueva apartamentos con estructura la cerchas. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_slag_gelijk_met_hoogte_verdieping_derde_leuning_resultaat.png",
            description: "Andamio la albañilería nivel a nivel con altura planta, tercera leuning. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_vrijstaande_woning_resultaat.png",
            description: "Andamio la albañilería independiente vivienda. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_werkvloer_op_etage_hoogte_nieuwbouw_appartementen_resultaat.png",
            description: "Andamio la albañilería plataforma la trabajo en etage altura obra nueva apartamentos. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger (2)_resultaat.png",
            description: "Andamio la albañilería para nieuwbouwproject. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_bevoorraad_stenen_hogeslag_staander_om-en-om_600kgm2_resultaat.png",
            description: "Andamio la albañilería abastecido ladrillos hogeslag staander om-en-om 600kg/m². Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_extern_ladderhuis_resultaat.png",
            description: "Prefabricado andamio con extern torre la escaleras para óptima doorstroom. Eficientes verticale toegang con maximale seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_goederen_lift_inklimpreventie-windreductie-steiger-gaas-tilburg_resultaat.png",
            description: "Andamio la albañilería con goederenlift, inklimpreventie en reducción la viento gaas in Tilburg. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_met_goederen_lift_nieuwbouw_woningen_resultaat.png",
            description: "Andamio la albañilería con goederenlift para obra nueva viviendas. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_materiaal_dichtbij_steiger_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos abastecido con ladrillos, material dicht en andamio. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_verspringing-breda_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos abastecido con ladrillos, verspringing in Breda. Construcción especializada la andamios para un progreso la obra eficiente."
        }
    ],
    woningbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos montage en montar. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001.png_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos montage en montar. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos montage en montar in Breda. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_oppersteiger_aanvoersteiger_nieuwbouw_werkvloer_op_verdiepingshoogte_resultaat.png",
            description: "Andamio la albañilería, oppersteiger en aanvoersteiger para obra nueva con plataforma la trabajo en altura la planta. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock01_resultaat.png",
            description: "Andamio la albañilería Tubelock. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock02_resultaat.png",
            description: "Andamio la albañilería Tubelock. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_uitbouw_naar_breedte_vloer_resultaat.png",
            description: "Andamio la albañilería uitbouw a breedte suelo. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_werkvloer_gereed_voor_metsellaar_resultaat.png",
            description: "Andamio la albañilería plataforma la trabajo gereed para metsellaar. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-nieuwbouwproject_resultaat.png",
            description: "Andamio la albañilería Tubelock. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-appartementen-eindhoven-aanvoersteiger_resultaat.png",
            description: "Andamio la albañilería apartamentos Eindhoven aanvoersteiger. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw  /metsel-steiger-dubbele-heup-leuning-knie-leuning-en-kant-plank-Tube-Lock_resultaat.png",
            description: "Andamio la albañilería con doble heupleuning, knie-leuning en kantplank Tube Lock. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-fase-demontage-hoge-slag-werkvloer-gelijk_aan-verdiepingsvloer_resultaat.png",
            description: "Andamio la albañilería fase demontage alta nivel plataforma la trabajo a nivel a verdiepingsvloer. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-in-gorinchem_resultaat.png",
            description: "Andamio la albañilería in Gorinchem. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-iopbouwen-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio la albañilería montar obra nueva apartamentos. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-met-intern-ladderhuis_resultaat.png",
            description: "Andamio la albañilería con intern torre la escaleras. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-nieuwbouw-woningen-gorichem_resultaat.png",
            description: "Andamio la albañilería obra nueva viviendas in Gorichem. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-op-plat-dak-nieuwbouw-appartementen_resultaat.png",
            description: "Andamio la albañilería en plat dak obra nueva apartamentos. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio la albañilería para twee-onder-un-kap obra nueva. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase la montaje andamio la albañilería obra nueva apartamentos in Brabant. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase la montaje la acero andamio la albañilería obra nueva. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje andamio la albañilería grondslag uitzetten. Construcción especializada la andamios para un progreso la obra eficiente."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio la albañilería para twee-onder-un-kap obra nueva. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase la montaje andamio la albañilería obra nueva apartamentos in Brabant. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase la montaje la acero andamio la albañilería obra nueva. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje andamio la albañilería grondslag uitzetten. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Andamio la albañilería para twee-onder-un-kap obra nueva. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Fase la montaje andamio la albañilería obra nueva apartamentos in Brabant. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Fase la montaje la acero andamio la albañilería obra nueva. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montaje andamio la albañilería grondslag uitzetten. Construcción especializada la andamios para un progreso la obra eficiente."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-veldhoven-metselsteiger_nieuwbouw_appartementen_vierdeplank_verlenger_uitschuifkorteling_resultaat.png",
            description: "Montaje Veldhoven andamio la albañilería obra nueva apartamentos con vierde plank verlenger en uitschuifkorteling. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montag-nieuwbouw-appartementen-metselsteiger-slag-gelijk-verdiepingshoogte-derde-leuning-voorloopleuning_resultaat.png",
            description: "Montaje obra nueva apartamentos andamio la albañilería nivel a nivel altura la planta, tercera leuning en barandilla avanzada. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_bouw-helmond_resultaat.png",
            description: "Nieuwbouw apartamentos andamio la albañilería bouw in Helmond. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning_resultaat.png",
            description: "Nieuwbouw apartamentos andamio la albañilería nivel a nivel altura la planta, tercera leuning en barandilla avanzada. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Nieuwbouw apartamentos pesado la acero andamio con goederenlift netten andamio gaas inklimpreventie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Nieuwbouw proyecto apartamentos pesado andamio clase 4 alta niveles. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Nieuwbouw vivienda tubelock andamio la albañilería bouw andamio. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Nieuwbouw apartamentos andamio la albañilería aanvoersteiger bouw. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Nieuwbouw apartamentos andamio cerchas construcción pasarela garageboxen bouw in Schijndel. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Nieuwbouw pannenlegger dakdekking andamio demontage andamio in Chorichem. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Nieuwbouw viviendas metselsteigers woonwijk a agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Onderkant bovenliggende nivel plataforma la trabajo andamio la albañilería. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/opgeleverd-metselsteiger-gorichem-nieuwbouw-woningen_resultaat.png",
            description: "Oplevering andamio la albañilería Gorichem obra nueva viviendas. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/overzicht-stalen-systeemsteigers-bouwproject_resultaat.png",
            description: "Resumen la acero andamios la sistema bouwproject. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-nieuwbouw-woning-steiger-deurne_resultaat.png",
            description: "Prefabricado obra nueva vivienda andamio in Deurne. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-woningbouw-zware-klasse4-metselsteiger-binnenleunin-console-dubbele-vlonder_resultaat.png",
            description: "Prefabricado woningbouw pesado clase 4 andamio la albañilería con barandilla interior, consola en doble plataforma. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Nieuwbouw apartamentos pesado la acero andamio con goederenlift netten andamio gaas inklimpreventie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Nieuwbouw proyecto apartamentos pesado andamio clase 4 alta niveles. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Nieuwbouw vivienda tubelock andamio la albañilería bouw andamio. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Nieuwbouw apartamentos andamio la albañilería aanvoersteiger bouw. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Nieuwbouw apartamentos andamio cerchas construcción pasarela garageboxen bouw in Schijndel. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Nieuwbouw pannenlegger dakdekking andamio demontage andamio in Chorichem. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Nieuwbouw viviendas metselsteigers woonwijk a agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Onderkant bovenliggende nivel plataforma la trabajo andamio la albañilería. Construcción especializada la andamios para un progreso la obra eficiente."
        },

        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Andamio la albañilería obra nueva apartamentos in Schijndel. Construcción especializada la andamios para un progreso la obra eficiente."
        }
    ],
    renovatie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-werkvloer-trottoir-smalle-straat_resultaat.png",
            description: "Personalizada metselsteigerbouw door Team Andamios Brabant para renovación la un vivienda in un smalle straat. De plataforma la trabajo is geplaatst en el trottoir om óptima accesibilidad te garanderen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/technische-situatieschets-steigerbouw-voorgevel_resultaat.png",
            description: "Technische situatieschets la la construcción la andamios para la fachada frontal la un renovatieproject."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/smalle-gevelsteiger-binnenstad-renovatie_resultaat.png",
            description: "Personalizada smalle andamio la fachada door Team Andamios Brabant para renovación la un vivienda in la centro urbano. De andamio is speciaal ontworpen om in smalle straten te passen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/stalen-gevelsteiger-voetgangerszone-veiligheid_resultaat.png",
            description: "Personalizada la acero andamio la fachada door Team Andamios Brabant para renovación la un vivienda a la Hasseltstraat te Tilburg in la centro urbano. De andamio is ontworpen con seguridad in gedachten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-schuin-dak-schoorsteen-tilburg_resultaat.png",
            description: "Personalizada construcción la andamios door Team Andamios Brabant para dakrenovatie en mantenimiento la chimenea en un villa a la Bredaseweg in Tilburg."
        },   
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/schoorsteensteiger-veilig-leuningwerk-schuin-dak_resultaat.png",
            description: "Andamio la tejado con gecertificeerd leuningwerk. Speciaal montado zonder el dak te belasten, ideaal para frágiles tejados die gerenoveerd se están."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/dakrenovatie-steiger-villa-bredaseweg-tilburg_resultaat.png",
            description: "Profesional dakrenovatie andamio alrededor la un grote villa a la Bredaseweg in Tilburg - Team Andamios Brabant"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/daksteiger-dakkapel-veilig-werken-op-hoogte_resultaat.png",
            description: "Veilige daksteiger para renovación la buhardilla. Team Andamios Brabant garantiza para óptima seguridad laboral."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-woningrenovatie-steigerbouw-brabant_resultaat.png",
            description: "Gevelsteiger para woningrenovatie in Waalwijk Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/kappenkap-steiger-doorwerksysteem-renovatie_resultaat.png",
            description: "Andamio para fines la un dakrenovatie en el verven door la schilder la un casa señorial in Waalwijk." // Añade aquí una descripción relevante
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-dakrenovatie-werkvloer-loon-op-zand_resultaat.png",
            description: "Dakrenovatie andamio in Loon en Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouwer-aanhuis-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Dakrenovatie andamio in Loon en Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-situatieschets-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Esquema la situación la la dakrenovatie andamio in Loon en Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerconstructie-woningbouw-renovatie-brabant_resultaat.png",
            description: "Construcción la andamio para renovación la vivienda in Brabant."
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
            description: "Zware renovatiesteiger con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger_tilburg_resultaat.png",
            description: "Renovatiesteiger para dakrenovatie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Zware renovatiesteiger con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Renovatiesteiger para dakrenovatie in Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Zware renovatiesteiger con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-zware-belastbaar-fase-montage_resultaat.png",
            description: "Zware renovatiesteiger in la fase la montage."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigeroplossing-dakrenovatie_resultaat.png",
            description: "Solución la andamio para dakrenovatie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-gevel-renovatie-steiger-puinvanger_resultaat.png",
            description: "Zware andamio la renovación la fachada con retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Renovatiesteiger para dakrenovatie in Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-layher-allround-steiger-windreductie-binnenleuningen-console-puinvanger_resultaat.png",
            description: "Zware Layher Alround renovatiesteiger con consola, reducción la viento en retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-monteren-eindhoven_resultaat.png",
            description: "Zware renovatiesteiger con reducción la viento in Eindhoven con retenedor la escombros en reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-windreductie-rotterdam_resultaat.png",
            description: "Zware renovatiesteiger con reducción la viento in Rotterdam con retenedor la escombros en reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/aanvoer-steiger-tbv-lift-gemeentehuis-uden_resultaat.png",
            description: "Andamio la suministro para liften in el ayuntamiento te Uden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-dakrenovatie-tilburg_resultaat.png",
            description: "Gevelsteiger para dakrenovatie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steiger-dakrenovatie_resultaat.png",
            description: "Gevelsteiger para dakrenovatie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steigeroplossing-dakrenovatie_resultaat.png",
            description: "Gevelsteigeroplossing para dakrenovatie."
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
            description: "Andamio in la puerto la Antwerpen para construcción naval kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-aan-boord-schip-kraan_resultaat.png",
            description: "Andamio a bordo para construcción naval trabajos."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-schip-revisie_resultaat.png",
            description: "Especializada construcción la andamios para mantenimiento naval. Grúa la carga revisión con adaptadas medidas la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-rederij_resultaat.png",
            description: "Marítima construcción la andamios para mantenimiento la grúa. Compleja construcción con impermeables componentes."
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
            description: "Nuevo andamio para piscina bouw."
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
            description: "Zwembad overkapping alicatador alicatar piscina andamio montage fase 006."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad-overkapping-egelzetter-betegelen-zwembad-steiger-montage-fase_resultaat.png",
            description: "Zwembad overkapping alicatador alicatar piscina andamio montage fase."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Trabajo continuo andamio prevención condiciones meteorológicas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte overkapping construcción construcción la andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte andamio overkapping construcción construcción la andamios."
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
            description: "Cerchas construcción ingepakte overkapping construcción la andamios Brabant."
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
            description: "Ingepakte overkapping construcción construcción la andamios."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte andamio overkapping construcción construcción la andamios."
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
            description: "Cerchas construcción ingepakte overkapping construcción la andamios brabant."
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
            description: "Construcción la andamios brabant kap construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-foto-in-het-zwemad-onder-de-spanten-constructie_resultaat.png",
            description: "Construcción la andamios foto in el piscina onder la cerchas construcción."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-krimpfolie-en-kap_resultaat.png",
            description: "Construcción la andamios film retráctil en kap."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-over-het-zwembad-zodat-er-doorgewerkt-kan-worden_resultaat.png",
            description: "Construcción la andamios over el piscina para que er se pueda seguir trabajando kan se están."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-met-kripfolie_resultaat.png",
            description: "Construcción la andamios piscina overkapping con kripfolie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-ter-water-resistentie_resultaat.png",
            description: "Construcción la andamios piscina overkapping ter agua resistencia."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-constructie-zwembad-overkapping_met-krimfolie_resultaat.png",
            description: "Construcción la andamios construcción piscina overkapping con film retráctil."
        }
    ],
    trappentoren: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/opbouwen-vrijstaande-trappentoren-bouwverlichting_resultaat.png",
            description: "Fase montage: Vrijstaande torre la escaleras con integradas medidas la seguridad. Modular construcción para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/stalen-trappentoren-22-meter-hoogbouw_resultaat.png",
            description: "Vrijstaande torre la escaleras andamio para el alcanzar la el dak."
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
            description: "Andamio torre la escaleras para distributiecentra en logistieke faciliteiten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/tijdelijke-trappentoren-zonnepanelen-waalwijk-montage-fase_resultaat.png",
            description: "Tijdelijke torre la escaleras para zonnepanelen in Waalwijk. Montaje fase con integradas medidas la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren_onverankerd_vrijstaand_18meter_01_resultaat.png",
            description: "Montaje independiente torre la escaleras la 18 metros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren-met-steunbeer-en-ballast-vrijstaand_resultaat.png",
            description: "Vrijstaande torre la escaleras con steunbeer en lastre. Optimale stabiliteit para seguras toegang tot todas werkniveaus."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-22m-industriele-steigerbouw_resultaat.png",
            description: "Vrijstaande torre la escaleras la 22 metros para industrial construcción la andamios. Robuuste construcción con integradas medidas la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-nieuwbouw-zundert-coldstore_resultaat.png",
            description: "Vrijstaande torre la escaleras para obra nueva in Zundert en un coldstore. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steigerbouw-brabant_resultaat.png",
            description: "Vrijstaande torre la escaleras la 22 metros. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steiger-voor-bereiken-van-het-dak_resultaat.png",
            description: "Vrijstaande torre la escaleras andamio para el alcanzar la el dak. Robuuste construcción con integradas medidas la seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/Industriële-trappen-toren-bij-bol.com-waalwijk-steigerbouw-brabant_resultaat.png",
            description: "Industriële torre la escaleras en bol.com in Waalwijk. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/industrie-waalwijk-trappentoren-fase-montage_resultaat.png",
            description: "Industrie Waalwijk torre la escaleras in la fase la montage. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappentoren_resultaat.png",
            description: "Montaje la un torre la escaleras. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren_resultaat.png",
            description: "Montaje la independiente torre la escaleras. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter_resultaat.png",
            description: "Montaje la 18 metros alta independiente torre la escaleras. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter-layher_resultaat.png",
            description: "Montaje la 18 metros alta independiente torre la escaleras con Layher systemen. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/monteren-steiger-trappentoren-onverankerd-vrijstaand-18meter_resultaat.png",
            description: "Monteren la onverankerde, independiente torre la escaleras la 18 metros. Construcción especializada la andamios para un progreso la obra eficiente."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappen-toren_resultaat.png",
            description: "Montaje la un torre la escaleras. Construcción especializada la andamios para un progreso la obra eficiente."
        }
    ],
    werkplatform: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/brede-houten-werkvloer-steigerbouw-staalconstructie_resultaat.png",
            description: "Fase montage: Uitgebreid werkplatform con integradas medidas la seguridad. Profesional oplossing para hoogtewerk."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steigerbouw-werkvloer-boven-trappengat_resultaat.png",
            description: "Werkvloer boven trappengat. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steiger-veilige-werkvloer-montagewerk-staalbouw_resultaat.png",
            description: "Veilige plataforma la trabajo para montagewerk. Speciale construcción la andamios para óptima accesibilidad."
        }
    ],
    overspanning: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-metselsteiger-overspanning-parkeer-garage-ingang_resultaat.png",
            description: "Profesional estructura la cerchas para pasarela la garageboxen. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spantenconstructie-tralieliggers-14m2_resultaat.png",
            description: "Innovatieve estructura la cerchas con tralieliggers la 14m2. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/montage-spanten-constructie_resultaat.png",
            description: "Montaje estructura la cerchas para pasarela la garageboxen. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-garageboxen-aanvoersteiger_resultaat.png",
            description: "Overspanning garageboxen aanvoersteiger. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-spanten_constructie-over-garage-boxen_resultaat.png",
            description: "Overspanning estructura la cerchas over garage boxen. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/spantenconstructie-over-garageboxen-tbv-metselsteiger01_resultaat.png",
            description: "Spantenconstructie over garageboxen tbv andamio la albañilería. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-schijndel_resultaat.png",
            description: "Construcción la andamios estructura la cerchas schijndel. Speciale construcción la andamios para óptima accesibilidad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steiger-dak-overspanning-metsel-steiger_resultaat.png",
            description: "Construcción la andamios dak pasarela andamio la albañilería. Speciale construcción la andamios para óptima accesibilidad."
        }
    ],
    podium: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/podiumbouw/podium-op-de-helling-aan-gracht-met-steiger-voor-de-boot_resultaat.png",
            description: "Podiumsteiger para evenementen en presentaties. Robuuste construcción con seguras toegang en werkplatforms. En aanmeersteiger para un boot langs la gracht."
        }
    ],
    windreductie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-prefab-woningbouw-metsel-steiger-binnenleuning-dubbele-uitschuif-console-windreductie-net_resultaat.png",
            description: "Construcción la andamios prefab woningbouw andamio la albañilería barandilla interior doble uitschuif consola reducción la viento net."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-steiger-nieuwbouw-overkapping-windreductie.png",
            description: "Monteren andamio obra nueva con overkapping en reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steiger-demontage-nieuwbouw-afbouw-beekse-bergen-hoofdgebouw-inter-deel_resultaat.png",
            description: "Andamio demontage obra nueva acabado Beekse Bergen hoofdgebouw inter deel."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Construcción la andamios obra nueva bouw hoofdgebouw doorwerk overkapping kapconstructie windreductiegaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción la andamios obra nueva Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Opgeleverd stucadoor schilder demontage doorwerk andamio acabado windreductienetten kapconstructie intern andamio aanzicht."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Renovatie construcción la andamios Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción la andamios estructura la cubierta film retráctil reducción la viento weer prevención."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción la andamios Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigergaas-windreducie-steigerbouw-hilvaren-beek_resultaat.png",
            description: "Steigergaas reducción la viento construcción la andamios Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción la andamios kapconstructie film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/tube-lock-steiger-met-windreductie-netten-steiger-gaas-kapconstructie-krimpfolie_resultaat.png",
            description: "Tube lock andamio con reducción la viento netten andamio gaas kapconstructie film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/zware-renovatie-steiger-met-steigergaas-en-puinvanger_resultaat.png",
            description: "Zware renovación andamio con steigergaas en retenedor la escombros."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/metselsteiger-met-windreductie-net_resultaat.png",
            description: "Andamio la albañilería con reducción la viento net."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-layhe-blitz-steiger-nieuwbouw-overkapping-windreductie_resultaat.png",
            description: "Monteren layhe blitz andamio obra nueva overkapping reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Nieuwbouw andamio bouw hoofdgebouw doorwerk overkapping kapconstructie windreductiegaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-hilvarenbeek_resultaat.png",
            description: "Nieuwbouw andamio in Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Opgeleverd stucadoor schilder demontage doorwerk andamio acabado windreductienetten kapconstructie intern andamio aanzicht."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Renovatie construcción la andamios Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Construcción la andamios estructura la cubierta film retráctil reducción la viento weer prevención."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Construcción la andamios Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-hilvarenbeek-krimpfolie-windreductie_resultaat.png",
            description: "Construcción la andamios Hilvarenbeek film retráctil reducción la viento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Construcción la andamios kapconstructie film retráctil."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-krimpfolie-steigergaas_resultaat.png",
            description: "Construcción la andamios film retráctil steigergaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-layher-blitz-nieuwbouw_resultaat.png",
            description: "Construcción la andamios layher blitz obra nueva."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Construcción la andamios obra nueva Hilvarenbeek."
        }
    ],
    // Klasse 4 / Ruwbouw & Systeembouw projecten
ruwbouw_klasse4: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/ruwbouw-steiger-kalkzandsteen-blokken_resultaat.png",
        description: "Zware clase 4 construcción la andamios para ruwbouw con kalkzandsteenblokken. Maximale stabiliteit para pesado belasting."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/systeembouw-steiger-nieuwbouw-woningen-lift_resultaat.png",
        description: "Systeembouw steigeropstelling para nieuwbouwwoningen, uitgerust con material- en personenlift."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steigerbouw-bovenaanzicht-engels-baksteen-project_resultaat.png",
        description: "Bovenaanzicht la un clase 4 andamio la albañilería en un grootschalig Engels baksteen proyecto."
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

// Renovatie, Dakwerken & Logistiek
renovatie_logistiek: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/daksteiger-schoorsteen-renovatie-project_resultaat.png",
        description: "Personalizada daksteiger para seguras schoorsteenrenovatie en dakwerkzaamheden zonder dakbeschadiging."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/gevelsteiger-renovatie-vrijstaande-woning_resultaat.png",
        description: "Gevelsteiger para la complete renovación en verduurzaming la un independiente vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/mobiele-kraan-van-riel-steiger-montage_resultaat.png",
        description: "Eficientes montaje la andamio en logístico in samenwerking con la mobiele kranen la Van Riel."
    }
],
    betonfabriek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger01_resultaat.png",
            description: "Especializada construcción la andamios para betonfabriek in Oosterhout. Robuuste construcción para pesado industrial toepassingen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger02_resultaat.png",
            description: "Especializada construcción la andamios para betonfabriek in Oosterhout. Robuuste construcción para pesado industrial toepassingen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger03_resultaat.png",
            description: "Especializada construcción la andamios para betonfabriek in Oosterhout. Robuuste construcción para pesado industrial toepassingen."
        },                                
    ],
    infra: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-tijdelijke-loopbrug-tilburg-industrie_resultaat.png",
            description: "Aarden temporal loopbrug para hoogspanning in Tilburg, infra andamio para publiek en voetgangers."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Industriele construcción la andamios para temporal infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Construcción la andamio para windturbineonderhoud in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Veilige toegang tot windmolens via torre la escaleras in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Tijdelijke torre la escaleras para windturbine-construcción la andamios in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Publieke torre la escaleras para toegang tot windmolens in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Industriele torre la escaleras para construcción la andamios en windmolens, close-up."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Tijdelijke infrastructuur para toegang tot windturbines in Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouwen-steiger-valbeveiliging-efteling-loon-op-zand-achtbaan-baron_resultaat.png",
            description: "Opbouwen andamio para valbeveiliging in Efteling, locatie Loon en Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouw-steiger-valpreventie-efteling-achtbaan-baron-brabant_resultaat.png",
            description: "Opbouwen andamio para valpreventie in Efteling, locatie Loon en Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerbouw-efteling-achtbaan-valpreventie_resultaat.png",
            description: "Construcción la andamios para valpreventie in Efteling, locatie Loon en Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infra-steiger-loopbrug-hoogspanning-tilburg_resultaat.png",
            description: "Dubbele barandillas con aardpen para aarding loopbrug in Tilburg, temporal infra para accesibilidad gasolinera."
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
            description: "Montaje loopbrug 100000 Volt, con toma la tierra andamio onder torre la alta tensión para público tránsito peatonal en gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/montage_loopbrug_100000Volt_aanleg_hoogspanning_geaard_steiger_onder_hoogspanningsmast_openbare_ruimte_openbaar_voetganger_verkeer_bereikbaarheid_benzinepomp_resultaat.png",
            description: "Montaje loopbrug 100000 Volt, con toma la tierra andamio onder torre la alta tensión para público tránsito peatonal en gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-electrisch-hoogspanningsnet-tilburg-tijdelijke-brug-bereikbaarheid-voetgangers-bp-hazenest_resultaat.png",
            description: "Andamio montage in Tilburgse industria, loopbrug 100000 Volt geaard onder torre la alta tensión para voetgangers en gasolinera."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-loopbrug-bereikbaarheid-van-bp-tankstation_resultaat.png",
            description: "Andamio en elektrisch hoogspanningsnet in Tilburg, temporal brug para voetgangersbereikbaarheid en BP Hazenest."
        }
    ],
    infra1: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Tijdelijke infrastructuur en torre la escaleras opgebouwd door Team Andamios Brabant para seguras toegang tot un windturbine."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Detailopname la un seguras industrial torre la escaleras con hoogwaardig leuningwerk, montado strak langs la mast la un windmolen para inspectiewerkzaamheden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Tijdelijke infrastructuur: Veilige torre la escaleras para windturbine-mantenimiento"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Personalizada publieke torre la escaleras para toegang tot windmolens"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Industriële construcción la andamios: Veilige toegangssystemen para la energiesector"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Personalizada temporal torre la escaleras door Team Andamios Brabant para un seguras en stabiele toegang tot la ingang la un windturbine."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Robuuste en independiente construcción la andamio con integradas trappen en leuningwerk, specifiek ontworpen para la duurzame energiesector."
        }
    ],
    "trapgat-raalte": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie_aanvraag_trapgat met glas_resultaat.png",
        description: "Situación la la aanvraag para un construcción la andamio boven el trapgat con glaswanden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-aanvraag-trappengat-binnen_resultaat.png",
        description: "Binnensituatie la el traphuis para behoeve la la engineering la la pasarela."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-steiger-aanvraag_resultaat.png",
        description: "Resumen la la projectsituatie para la aanvraag la la binnensteiger."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steigerbouw-vrije-doorgang-motage-werkvloer_resultaat.png",
        description: "Construcción la andamios construcción con gegarandeerde libre doorgang onder la montage-plataforma la trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-constructie-overspanning-trap-blijft-in-gebruik_resultaat.png",
        description: "Slimme construcción la andamio con un pasarela para que la vaste trap volledig in gebruik blijft."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspannende-werkvloer-ter-montagewerk-boven-vaste-trap_resultaat.png",
        description: "Overspannende plataforma la trabajo para behoeve la montagewerkzaamheden strak boven la vaste trap."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspanning-binnen-met-vrije-doorgang-daaronder_resultaat.png",
        description: "Binnensteiger con un seguras pasarela en un volledig libre doorloop daaronder."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/trap-binnen-kantoor-blijft-in-gebruik_resultaat.png",
        description: "De vaste binnentrap in el kantoor blijft durante la trabajos permanent begaanbaar."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "Veilige plataforma la trabajo montado boven el permanent begaanbare en open trapgat."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-trapgat-in-raalte_resultaat.png",
        description: "Personalizada plataforma la trabajo boven el trapgat para un onderhoudsproject in Raalte."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-en-vaste-trap-blijven-in-gebruik_resultaat.png",
        description: "Zowel la bovenliggende plataforma la trabajo als la onderliggende vaste trap blijven gelijktijdig in gebruik."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-in-gebruik-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "De gemonteerde steigerwerkvloer is volop in gebruik boven el seguras doorloop-trapgat."
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
        description: "Solide werkvloeroverspanning om veilig boven un diep trapgat te kunnen trabajar."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-trapgat_resultaat.png",
        description: "Detalle la la stabiele plataforma la trabajo la la speciale trapgatsteiger."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-traphuis_resultaat.png",
        description: "Veilige en arbo-technisch verantwoorde plataforma la trabajo in el traphuis ingebouwd."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-vanaf-onderkant_resultaat.png",
        description: "Aanzicht la la overspannende steigerwerkvloer vanaf la onderkant gezien."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/overbruggende-werkvloer-over-een-trap-met-vrije-doorgang_resultaat.png",
        description: "Overbruggende plataforma la trabajo over un operationele trap con behoud la la volledige doorloop."
    }
],
    "prefabwoningbouw": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/lichte-verspringing-steigervloer_resultaat.png",
        description: "Andamio la albañilería con un lichte verspringing in la steigervloer, perfect aangepast a la contouren la la prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/metselsteiger-met-extern-ladderhuis-veiligheid-en-werkvloer-efficientie_resultaat.png",
        description: "Profesional andamio la albañilería voorzien la un extern torre la escaleras para óptima seguridad en un eficientes plataforma la trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/overbrugging-platdak-aanbouw_resultaat.png",
        description: "Personalizada steigeroverbrugging over el planos dak la un aanbouw para seguras gevelwerkzaamheden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/prefab-woningbouw-metselsteiger_resultaat.png",
        description: "Robuuste andamio la albañilería construcción speciaal ingericht para la snelle montagefases dentro la prefab woningbouw."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoningbouw_resultaat.png",
        description: "Eficientes construcción la andamios projectuitvoering para behoeve la grootschalige prefab woningbouw."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoning-metselsteiger_resultaat.png",
        description: "Veilige en arbo-technisch verantwoorde andamio la albañilería opgesteld en un moderne prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-kopse-kant_resultaat.png",
        description: "Zijaanzicht la la stabiele construcción la andamio a la kopse kant la la vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-prefabwoning_resultaat.png",
        description: "Rondom gemonteerde andamio la fachada para la seguras afwerking la un prefab vivienda."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/intern-ladderhuis-met-valpreventie-prefab-woningbouw-steiger_resultaat.png",
        description: "Geïntegreerd intern torre la escaleras con gecertificeerde valpreventie en un prefab woningbouw andamio."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/klasse-4-steiger-prefab-woning_resultaat.png",
        description: "Zware clase IV (Klasse 4) steigeropstelling para un prefab vivienda, geschikt para intensieve metselwerkzaamheden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-klasse4-ring54_resultaat.png",
        description: "Layher Allround Klasse IV steigersysteem con ring 54 configuratie para maximale stabiliteit en draagkracht."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-ring54-prefabwoning-metselsteiger_resultaat.png",
        description: "Modular Layher Allround ring 54 andamio la albañilería, flexibel en snel opgebouwd alrededor la la prefabwoning."
    }
],
    "transportband": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag-overspanning-vrije-werkvloer-14m3m-hier-werkvloer-zware-klasse-maxbelasting-3kNm2-5,5kNm2_resultaat.png",
        description: "Aanvraag pasarela libre plataforma la trabajo 14m x 3m - Werkvloer pesado clase con maximale belasting la 3 kN/m² tot 5,5 kN/m²."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/boven-aanzicht-complexe-industie-werkvloer_resultaat.png",
        description: "Bovenaanzicht la la complexe industrial plataforma la trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/hier-stopt-het-reeds geinstalleerde-vaste-constructie-liggers-H-profielen-hier-en-verdieping-gewisseld-compex-steiger-gemaakt_resultaat.png",
        description: "Aansluiting en bestaande vaste construcción (H-profielen) en niveauwissel para complex steigerwerk."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/impressie-situatie-voor-het-monteren-steiger-overbrugging_resultaat.png",
        description: "Impressie la la situación voorafgaand a la montage la la steigeroverbrugging."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/montage-overspanning-werkvloer_resultaat.png",
        description: "Montaje la la pasarela para la plataforma la trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/realisatie-werkplatform-voor-zware-montage-meerder-etages-en-ruimte_resultaat.png",
        description: "Realisatie la el werkplatform para pesado montage con meerdere etages en adicional werkruimte."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_complexe-grote-belasting-steiger-overbrugging-zonder-stemplels-op-de-ondergrond-binnen_resultaat.png",
        description: "Aanvraag complexe, zwaar belaste steigeroverbrugging dentro, zonder stempels en la ondergrond."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_werkvloer_boven_uitsparing-hoge-werkvloer-lange-complex-steiger-binnen_resultaat.png",
        description: "Aanvraag alta plataforma la trabajo boven uitsparing. Lang en complex steigerwerk dentro."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/steiger-montage-interne-deel-werkvloer_resultaat.png",
        description: "Steigermontage la el internos gedeelte la la plataforma la trabajo."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd5_resultaat.png",
        description: "Oplevering la la plataforma la trabajo (Fase 5)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd_resultaat.png",
        description: "Gerealiseerde plataforma la trabajo en succesvolle projectoplevering."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd1_resultaat.png",
        description: "Gerealiseerde plataforma la trabajo en projectoplevering (Detalle 1)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd2_resultaat.png",
        description: "Gerealiseerde plataforma la trabajo en projectoplevering (Detalle 2)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd3_resultaat.png",
        description: "Oplevering la la plataforma la trabajo (Fase 3)."
    }
],
"industria-tilburg": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/werk-opgeleverd-na-demontage-van-de-steiger_resultaat.png",
        description: "Het eindresultaat la la industrial installatie nadat la andamio vakkundig is gedemonteerd."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag_-nstallatie-machine-industrie-steiger-werkvloer_resultaat.png",
        description: "Inmeting en aanvraag para un stabiele steigerwerkvloer alrededor la un industrial máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag-situatie-steigerbehoefte_resultaat.png",
        description: "Analyse la la projectsituatie om la exacte industrial steigerbehoefte te bepalen."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/fase-montage-werkvloer-industrieële-installatie_resultaat.png",
        description: "Fase la la montage la la pesado plataforma la trabajo alrededor la la industrial installatie."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/ladderhuis-om-de-steigers-op-de-daken-rondom-de-machines-te-betreden_resultaat.png",
        description: "Seguro montado torre la escaleras om la andamios en la tejados alrededor la la machines te entrar."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/montage-steiger-ladderhuis-toegang-steiger-werkvloer-installatie-industrieël-luchtkanaal_resultaat.png",
        description: "Montaje la el andamio-torre la escaleras para un seguras toegang tot el industrial luchtkanaal."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/oplossing-steiger-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "De uiteindelijke steigeroplossing: un en maat gemaakt werkplatform alrededor la la máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-tilburg-industrie_resultaat.png",
        description: "Uitvoering la un complexe industrial steigeraanvraag en locatie in Tilburg."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "Gedetailleerd werkplatform para behoeve la montagewerkzaamheden a un industrial máquina."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steigerbehoefte-voor-installatie-montage-machine_resultaat.png",
        description: "Veilige steigeropstelling ontworpen para la installatie en montage la pesado machines."
    }
],

"trapgat-helmond": [
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/steiger-in-trappenhuis-wilting-coare-helmond-industrieterrein-habraken_resultaat.png",
        "description": "Seguro gemonteerde andamio in el trappenhuis para behoeve la trabajos en Wilting / Coare en industrieterrein Habraken."
    },
    {
        "image": "https://www.steigerbouwbrabant.nl/beeldmateriaal/steigerwerkvloer-trapgat-helmond/uitbouw-boven-trappenhuis_resultaat.png",
        "description": "Op maat gemaakte uitbouw en seguras steigerwerkvloer boven el trappenhuis."
    }
],
    "klasse2": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/klasse-2-frame-steiger-layher-blitz-bungalow_resultaat.png",
        description: "Klasse 2 frame andamio con el Layher Blitz systeem en un obra nueva bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-snelbouwsteiger-project-brabant_resultaat.png",
        description: "Layher Blitz snelbouwsteiger ingezet en un proyecto in Brabant."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-steigerbouw-nieuwbouw-bungalow_resultaat.png",
        description: "Layher Blitz construcción la andamios para behoeve la la realisatie la un obra nueva bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/montage-klasse-2-gevelsteiger-cascobouw_resultaat.png",
        description: "Montaje la un clase 2 andamio la fachada para behoeve la cascobouw."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/nieuwbouw_14persoons_bungalow_frame_steiger_demontage_resultaat.png",
        description: "Desmontaje la un frame andamio en un grote obra nueva 14-persoons bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steiger-werkvloer-overzicht-nieuwbouw-bungalows_resultaat.png",
        description: "Resumen la la seguras andamio werkvloeren en obra nueva bungalows."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-hoofdgebouw-krimpfolie-kapconstructie_resultaat.png",
        description: "Construcción la andamios en el hoofdgebouw voorzien la film retráctil en un kapconstructie."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-klasse-2-utiliteitsbouw-layher_resultaat.png",
        description: "Profesional clase 2 construcción la andamios con Layher onderdelen para utiliteitsbouw."
    }
],
    installatieTechniek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steiger-werkplatform-industriële-installatie-machine_resultaat.png",
            description: "Especializada andamio para installatietechniek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Technische installatie andamio con meerdere werkniveaus. Profesional oplossing para mantenimiento en montage."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Geavanceerde construcción la andamios para installatiewerk. Veilige toegang tot todas technische componentes."
        }
    ],
    videos: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-udenhout-brabant.mp4",
            description: "Renovatie andamio vastgoed mantenimiento schilderwerk Udenhout"
        }
    ],
    videos1:[
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/nieuwbouw-appartementen-metselsteiger.mp4",
            description: "Nieuwbouw apartamentos andamio la albañilería"
        }
    ],
    videos2: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-luxe-villa-tilburg.mp4",
            description: "Renovatie andamio transformatie a modern luxe villa Tilburg"
        }
    ],
    videos3: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-villa-bredaseweg-tilburg-brabant.mp4",
            description: "Renovatie andamio villa Bredaseweg Tilburg Brabant"
        }
    ],
    videos4: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-tilburg-renovatie-klasse-4-steige.mp4",
            description: "Construcción la andamios Tilburg renovación clase 4 andamio"
        }
    ],
    videos5: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vijstaande_trappen_toren.mp4",
            description: "Vrijstaande torre la escaleras para seguras toegang tot hoogtes. De video toont la construcción en el gebruik la la torre la escaleras in un industrial entorno."
        }
    ],
    videos6: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-werkvloer-op-ideale-werkhoogte.mp4",
            description: "Construcción la andamios plataforma la trabajo en ideale werkhoogte"
        }
    ],
    videos7: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-overdekte-kap-constructie-wind-reductie-netten-beekse-bergen.mp4",
            description: "Construcción la andamios overdekte kap construcción wind reductie netten Beekse Bergen" 
        }
    ],
    videos8: [  
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/grote-werkvloer-over-uitsaring-verdiepingsvloer-bol.com.mp4",
            description: "Gran plataforma la trabajo 3 metros breed en 14 metros hoog 32 metros lang over uitsparing verdiepingsvloer en bol.com"
        }
    ],
    videos9: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-industrie-bol-transportbad-door-twee-ruimtes-en-twee-verdiepingen-boven-uitsparing-verdiepingsvloer.mp4",
            description: "Construcción la andamios industria bol.com te Waalwijk, transportband door twee espacios en twee verdiepingen boven uitsparing verdiepingsvloer"
        }
    ],
    videos10: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Pompkamersteiger-scheepswerf-De-Werken-werkendam.mp4",
            description: "Vrijstaand werkplatform para revisiewerkzaamheden in la pompkamer la un schip. Bij Scheepswerf De Werken in Werkendam."
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
            description: "Construcción la andamios máquina revisión industria beton fabriek Oosterhout"
        }
    ],
    videos13: [
        {  
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", 
            description: "Renovatie andamio con twee overbruggingen monumentaal pand in Waalwijk"
        }
    ],
    videos14: [
        { 
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/industrie-machine-installatietechniek-op-plat-dak.mp4",
            description: "Industrie máquina installatietechniek en plat dak"
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
    // Zorg dat interval solo draait als meer dan 1 slide aanwezig is
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

        // meerVideosKnop: laad adicional video's
        if (meerVideosKnop && (carousel || videoContainer)) {
            meerVideosKnop.addEventListener('click', function () {
                const videoData = [
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie_steigers/Renovatie-steiger-vastgoed-onderhoud-schilderwerk-udenhout.mp4", description: "Renovatie andamio vastgoed mantenimiento schilderwerk Udenhout" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger.mp4", description: "Nieuwbouw apartamentos andamio la albañilería" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", description: "Renovatie andamio con twee overbruggingen monumentaal pand in Waalwijk" }
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

        // leesMeerKnop: mostrar aanvullende slideshows als aanwezig
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

        // Extra: toggles para bestaande helper functies (seguras checks)
        const toggleVideosBtn = document.getElementById('toggleVideosBtn'); // optioneel
        if (toggleVideosBtn && videoContainer) {
            toggleVideosBtn.addEventListener('click', function () {
                videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';
            });
        }

        // Zet extraVideos initieel verborgen als aanwezig
        if (videoContainer) videoContainer.style.display = 'none';
    } catch (err) {
        // Stilletjes loggen voorkomt breken la site
        console.error('Script inicialización error:', err);
    }
});

// eventuele overige helper-functies kunnen hieronder blijven
function toonMeerSlides() {
    const slides = document.querySelectorAll('.compact-slideshow[style*="display: none"]');
    slides.forEach((slide, index) => {
        if (index < 5) slide.style.display = 'block';
    });
}

function toonMeerFotos() {
    alert('Más foto\'s se están cargando...');
}

function toonMeerVideos() {
    const extraVideos = document.getElementById('extraVideos');
    if (!extraVideos) return;
    extraVideos.style.display = extraVideos.style.display === 'none' ? 'block' : 'none';
}

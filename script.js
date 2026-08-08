// script.js - geconsolideerde en gerepareerde versie
function normalizeMediaUrl(url) {
    if (!url) return url;

    let cleanUrl = url.trim().replace(/\\/g, '/');

    // Lokale paden naar absolute URL normaliseren
    if (/^[a-z]:\//i.test(cleanUrl) && cleanUrl.includes('/beeldmateriaal/')) {
        cleanUrl = `https://www.steigerbouwbrabant.nl/beeldmateriaal/${cleanUrl.split('/beeldmateriaal/').pop()}`;
    }

    // Alleen spaties encoden, GEEN extensie forceren
    return cleanUrl.replace(/ /g, '%20');
}

function getMediaPosterUrl(url) {
    if (!url) return '';
    return normalizeMediaUrl(url);
}

function laadAfbeeldingen() {
    const afbeeldingen = document.querySelectorAll('img'); // Selecteer alle afbeeldingen op de pagina
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
            description: "Situatie voor het plaatsen van een steiger voor machine onderhoud in industriële omgeving. Specialistische steigerbouw voor optimale bereikbaarheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-van-de-industie-steiger_resultaat.png",
            description: "Situatie voor het plaatsen van de industrie steiger. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid voor het uitvoeren van machine onderhoud."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Steigerbouw voor industrie machine revisie. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid tijdens onderhoudswerkzaamheden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(6)_resultaat.png",
            description: "Industriële steigerbouw voor machine revisie met geïntegreerde veiligheidsvoorzieningen en optimale bereikbaarheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(7)_resultaat.png",
            description: "Industriële steigerbouw voor machine revisie met geïntegreerde veiligheidsvoorzieningen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(8)_resultaat.png",
            description: "Industriële steigerbouw voor machine revisie met geïntegreerde veiligheidsvoorzieningen en optimale bereikbaarheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Complete inspectiesteiger met geïntegreerde veiligheidsplatforms voor waterzuiveringsonderhoud."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(17)_resultaat.png",
            description: "Industriële steigerbouw voor machine revisie met geïntegreerde veiligheidsvoorzieningen en optimale bereikbaarheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(15)_resultaat.png",
            description: "Industriële steigerbouw voor machine revisie met geïntegreerde veiligheidsvoorzieningen en optimale bereikbaarheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(10)_resultaat.png",
            description: "steiger ten behoeven van machine onderhoud in industriële omgeving. Voedsel industrie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(11)_resultaat.png",
            description: "Industriële steigerbouw voor machine revisie met geïntegreerde veiligheidsvoorzieningen en optimale bereikbaarheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-steiger-installatie-techniek-industie-plat-twee-levels-plat-dak_resultaat.png",
            description: "Situatie van steigerinstallatie in industriële omgeving met platte daken."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Situatie voor het plaatsen van de industriële steiger in Tilburg. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },       
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Machine revisie project in Helmond Industriegebied Zuid. Specialistische steigerbouw voor industriële machine-onderhoud."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (12)_resultaat.png",
            description: "Industriële steigerbouw met werkvloer voor machine revisie. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-14-hoogte-vrije-werkvloer_resultaat.png",
            description: "Industriële steigerbouw met 14 meter hoogte vrije werkvloer voor machine revisie. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-distributie-centrum_resultaat.png",
            description: "Industriële steigerbouw bij distributiecentrum. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-waalwijk-industrie-werkvloer-14-hoog-_resultaat.png",
            description: "Industriële steigerbouw in Waalwijk met werkvloer op 14 meter hoogte. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },            
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerconstructie-industriele-lopende-band_resultaat.png",
            description: "Maatwerk steigerconstructie voor industriële lopende band. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (5)_resultaat.png",
            description: "Industriële steigerbouw met werkvloer voor machine revisie. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-steigerbouw-werkvloer-met-leuningen_resultaat.png",
            description: "Veilige steigerbouw met werkvloer en leuningen voor industriële machine revisie. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },        
        {
            image:  "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerconstructie-binnen-distributiecentrum_resultaat.png",
            description: "Industriële steigerconstructie binnen distributiecentrum. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/32-meter-lang-3-meter-breed-14-hoog-tijdelijke-werkvoer-vrij-platform_resultaat.png",
            description: "32 meter lange, 3 meter brede en 14 meter hoge tijdelijke werkvloer met vrij platform voor industriële machine revisie. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/montage-werkvloer-waalwijk-steigerbouw_resultaat.png",
            description: "Montage van werkvloer in Waalwijk voor industriële steigerbouw. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriele-steigerbouw-lopende-band-overbrugging_resultaat.png",
            description: "Industriële steigerbouw met lopende band overbrugging. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-werkvloer-distributiecentrum-transportsysteem_resultaat.png",
            description: "Industriële steigerbouw met werkvloer in distributiecentrum voor transportsysteem. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilig-steiger-looppad-industriele-hal_resultaat.png",
            description: "Veilige steiger met looppad in industriële hal. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steiger-interne-transportsystemen-waalwijk_resultaat.png",
            description: "Maatwerk steiger voor interne transportsystemen in Waalwijk. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-industriesteiger-tussen-ruimtes-logistiek_resultaat.png",
            description: "Veilige industriesteiger tussen ruimtes in logistiek centrum. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/complexe-steigerbouw-logistieke-sector-brabant_resultaat.png",
            description: "Complexe steigerbouw in de logistieke sector in Brabant. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriesteiger-transportband-bol-com-waalwijk_resultaat.png",
            description: " Industriesteiger voor transportband bij Bol.com in Waalwijk. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },         
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industrie-steiger-steigernontage-transportband-steigerbouw-machinepark_resultaat.png",
            description: "Industrie-steiger voor steigernontage van transportband in machinepark. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },    
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-vrijstaande-werkvloer-industrie-aanleg-machinepark-1_resultaat.png",
            description: "Vrijstaande steiger in industriële aanleg. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
            {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Ruimtelijke steigerconstructie met twee etages voor transportband. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-montage-distributiecentrum-bol-com_resultaat.png",
            description: "Steigermontage in distributiecentrum Bol.com. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-distributiecentrum-waalwijk-machinepark_resultaat.png",
            description: "Steigerbouw in distributiecentrum Waalwijk voor machinepark. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
          {
                image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
                description: "Ruimtelijke steigerconstructie met twee etages voor transportband. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
            },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat_resultaat.png",
            description: "Steiger voor betreden van mangat in industriële omgeving. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat-industrie-opslagtank-zuiveren-brabant-water_resultaat.png",
            description: "Steiger voor betreden van mangat in industriële omgeving. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-besloten-ruimte_resultaat.png",
            description: "Steiger voor betreden van besloten ruimte in industriële omgeving. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        }
    ],
    utiliteit: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/detail-steiger-werkvloer-kantplanken_resultaat.png",
            description: "Detail van steigerwerkvloer met kantplanken voor extra veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerbouw-locatie-waterzuivering_resultaat.png",
            description: "Maatwerk steigerbouw op locatie waterzuivering. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/leuningwerk-inspectiesteiger-waterzuivering-industrie_resultaat.png",
            description: "Leuningwerk voor inspectiesteiger op locatie waterzuivering."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/tube-lock-inspectiesteiger-waterzuivering-basis_resultaat.png",
            description: "Tube-lock voor inspectiesteiger op locatie waterzuivering."
        },
        { 
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-grote-werk-inspectie-vloer_resultaat.png",
            description: "Grote werk inspectie vloer voor steigerbouw."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (39)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (38)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (37)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (36)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (35)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (34)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (33)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (31)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (32)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (30)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (29)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (28)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (26)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (25)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (24)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (23)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (22)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (21)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (20)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (16)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (14)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (13)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (9)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)-1_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (8)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)-1_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-inspectiesteiger-overzicht_resultaat.png",
            description: "Overzicht van inspectie steigers in de industrie."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-inspectiesteiger-werkvloer-veilige werkvloer- industrie-waterzuivering (1)_resultaat.png",
            description: "Inspectiesteiger met veilige werkvloer op locatie waterzuivering."
        },
        {            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-hapert-riwz_resultaat.png",
            description: "Hapert RIWZ steigers."
        }
    ],
    nieuwbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Metselsteiger afbouwfase woningbouw Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Zware systeemsteigers voor nieuwbouwprojecten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Afbouwen metselsteiger bij nieuwbouwproject in Gorichem. Specialistische steigerbouw voor woningbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Metselsteiger afbouwfase woningbouw Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Zware systeemsteigers voor nieuwbouwprojecten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Afbouwen metselsteiger bij nieuwbouwproject in Gorichem. Specialistische steigerbouw voor woningbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woningen_resultaat.png",
            description: "Afbouwen steiger bij nieuwbouw woningen. Efficiënte en veilige steigeroplossingen voor woningbouwprojecten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-steiger-nieuwbouw-woning-waterkant_resultaat.png",
            description: "Afbouwen steiger bij nieuwbouw woningen aan de waterkant. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-gilze-rijen_resultaat.png",
            description: "Afbouwen metselsteiger bij nieuwbouwproject in Gilze-Rijen. Specialistische steigerbouw voor woningbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouw-metsel-steiger-nieuwbouw-rijen_resultaat.png",
            description: "Afbouwen metselsteiger bij nieuwbouwproject in Rijen. Specialistische steigerbouw voor woningbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/bouwsteiger_hoge_slagen_gelijk_met_verdieping_derde_leuning_voorloopleuning_tijdens_op_en_afbouw_resultaat.png",
            description: "Bouwsteiger met hoge slagen gelijk met verdieping, derde leuning en voorloopleuning tijdens op- en afbouw. Specialistische steigerbouw voor nieuwbouwprojecten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/complete-gevelsteiger-nieuwbouw-appartementen_resultaat.png",
            description: "Complete gevelsteiger voor nieuwbouw appartementen. Specialistische steigerbouw voor optimale bereikbaarheid en veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage_tube_lock_metsel_steiger_resultaat.png",
            description: "Demontage metselsteiger nieuwbouw appartementen, slag gelijk aan verdiepingshoogte, derde leuning en voorloopleuning."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-apartementen-rijen-brabant-nederland_resultaat.png",
            description: "Demontage metselsteiger nieuwbouw appartementen in Rijen, Brabant, Nederland. Specialistische steigerbouw voor efficiënte afbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metsel-steiger-gorichem_resultaat.png",
            description: "Demontage metselsteiger nieuwbouw appartementen in Gorichem. Specialistische steigerbouw voor efficiënte afbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/demontage-metselsteiger-met-goederenlift_resultaat.png",
            description: "Demontage metselsteiger nieuwbouw appartementen met goederenlift. Specialistische steigerbouw voor efficiënte afbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste_slag_metsel_steiger_schimmert_resultaat.png",
            description: "Eerste slag metselsteiger nieuwbouw appartementen in Schijndel. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/eerste-slag-werkvloer-metselsteiger-windreductie_resultaat.png",
            description: "Eerste slag werkvloer metselsteiger met windreductie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist_resultaat.png",
            description: "Fase demontage materiaal transportklaar verticaal transport kraanmachinist."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_demontage_materiaal_transportklaar_verticaal_transport_kraanmachinist-rijen_resultaat.png",
            description: "Fase demontage materiaal transportklaar verticaal transport kraanmachinist-rijen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_metselsteiger_voorloopleuning_materiaal_dichtbij_de_steiger_resultaat.png",
            description: "Fase montage metselsteiger met voorloopleuning en materiaal dicht bij de steiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_resultaat.png",
            description: "Fase montage monteren opbouwen metselsteiger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/fase_montage_monteren_opbouwen_metsel_steiger_tube_lock_klasse4_resultaat.png",
            description: "Fase montage monteren opbouwen metselsteiger tube lock klasse 4. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/gevelsteiger-nieuwbouw-appartementencomplex_resultaat.png",
            description: "Fase montage gevelsteiger nieuwbouw appartementencomplex."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/intern_ladderhuis_zware_steiger_klasse4_metsel_steiger_resultaat.png",
            description: "Intern ladderhuis zware steiger klasse 4 metselsteiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/layher allround metselsteiger deurne_resultaat.png",
            description: "Layher Allround metselsteiger Deurne. Specialistische steigerbouw voor efficiënte bouwvoortgang."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_01_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen. Specialistische steigerbouw voor efficiënte bouwvoortgang."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen_02_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen. Specialistische steigerbouw voor efficiënte bouwvoortgang."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen in Schijndel. Specialistische steigerbouw voor efficiënte bouwvoortgang."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_nieuwbouw_woningen_met_toren_kraan_resultaat.png",
            description: "Metselsteiger nieuwbouw woningen met torenkraan. Specialistische steigerbouw voor efficiënte bouwvoortgang."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Metselsteiger Schijndel Moeskops nieuwbouw appartementen. Specialistische steigerbouw voor efficiënte bouwvoortgang."  
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_schijndel_moeskops_nieuwbouw_appartementen_metselsteiger_resultaat.png",
            description: "Metselsteiger Schijndel Moeskops nieuwbouw appartementen met spantenconstructie. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_slag_gelijk_met_hoogte_verdieping_derde_leuning_resultaat.png",
            description: "Metselsteiger slag gelijk met hoogte verdieping, derde leuning. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_vrijstaande_woning_resultaat.png",
            description: "Metselsteiger vrijstaande woning. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel_steiger_werkvloer_op_etage_hoogte_nieuwbouw_appartementen_resultaat.png",
            description: "Metselsteiger werkvloer op etage hoogte nieuwbouw appartementen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger (2)_resultaat.png",
            description: "Metselsteiger voor nieuwbouwproject. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_bevoorraad_stenen_hogeslag_staander_om-en-om_600kgm2_resultaat.png",
            description: "Metselsteiger bevoorraad stenen hogeslag staander om-en-om 600kg/m². Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_extern_ladderhuis_resultaat.png",
            description: "Prefab steiger met extern ladderhuis voor optimale doorstroom. Efficiënte verticale toegang met maximale veiligheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_goederen_lift_inklimpreventie-windreductie-steiger-gaas-tilburg_resultaat.png",
            description: "Metselsteiger met goederenlift, inklimpreventie en windreductie gaas in Tilburg. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_met_goederen_lift_nieuwbouw_woningen_resultaat.png",
            description: "Metselsteiger met goederenlift voor nieuwbouw woningen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_materiaal_dichtbij_steiger_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen bevoorraad met stenen, materiaal dicht bij steiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/metselsteiger_nieuwbouw_appartementen_bevoorraad_met_stenen_verspringing-breda_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen bevoorraad met stenen, verspringing in Breda. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        }
    ],
    woningbouw: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen montage en opbouwen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001.png_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen montage en opbouwen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen_montage_opbouwen0001_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen montage en opbouwen in Breda. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_oppersteiger_aanvoersteiger_nieuwbouw_werkvloer_op_verdiepingshoogte_resultaat.png",
            description: "Metselsteiger, oppersteiger en aanvoersteiger voor nieuwbouw met werkvloer op verdiepingshoogte. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock01_resultaat.png",
            description: "Metselsteiger Tubelock. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_tubelock02_resultaat.png",
            description: "Metselsteiger Tubelock. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_uitbouw_naar_breedte_vloer_resultaat.png",
            description: "Metselsteiger uitbouw naar breedte vloer. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_werkvloer_gereed_voor_metsellaar_resultaat.png",
            description: "Metselsteiger werkvloer gereed voor metsellaar. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-nieuwbouwproject_resultaat.png",
            description: "Metselsteiger Tubelock. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-appartementen-eindhoven-aanvoersteiger_resultaat.png",
            description: "Metselsteiger appartementen Eindhoven aanvoersteiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw  /metsel-steiger-dubbele-heup-leuning-knie-leuning-en-kant-plank-Tube-Lock_resultaat.png",
            description: "Metselsteiger met dubbele heupleuning, knie-leuning en kantplank Tube Lock. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-fase-demontage-hoge-slag-werkvloer-gelijk_aan-verdiepingsvloer_resultaat.png",
            description: "Metselsteiger fase demontage hoge slag werkvloer gelijk aan verdiepingsvloer. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-in-gorinchem_resultaat.png",
            description: "Metselsteiger in Gorinchem. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-iopbouwen-nieuwbouw-appartementen_resultaat.png",
            description: "Metselsteiger opbouwen nieuwbouw appartementen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-met-intern-ladderhuis_resultaat.png",
            description: "Metselsteiger met intern ladderhuis. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-nieuwbouw-woningen-gorichem_resultaat.png",
            description: "Metselsteiger nieuwbouw woningen in Gorichem. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metsel-steiger-op-plat-dak-nieuwbouw-appartementen_resultaat.png",
            description: "Metselsteiger op plat dak nieuwbouw appartementen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Metselsteiger voor twee-onder-een-kap nieuwbouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Montagefase metselsteiger nieuwbouw appartementen in Brabant. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Montagefase stalen metselsteiger nieuwbouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montage metselsteiger grondslag uitzetten. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Metselsteiger voor twee-onder-een-kap nieuwbouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Montagefase metselsteiger nieuwbouw appartementen in Brabant. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Montagefase stalen metselsteiger nieuwbouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montage metselsteiger grondslag uitzetten. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-twee-onder-een-kap-nieuwbouw_resultaat.png",
            description: "Metselsteiger voor twee-onder-een-kap nieuwbouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-metselsteiger-appartementen-brabant_resultaat.png",
            description: "Montagefase metselsteiger nieuwbouw appartementen in Brabant. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montagefase-stalen-metselsteiger-nieuwbouw_resultaat.png",
            description: "Montagefase stalen metselsteiger nieuwbouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-metsel-steiger-grondslag-uitzetten_resultaat.png",
            description: "Montage metselsteiger grondslag uitzetten. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },        
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montage-veldhoven-metselsteiger_nieuwbouw_appartementen_vierdeplank_verlenger_uitschuifkorteling_resultaat.png",
            description: "Montage Veldhoven metselsteiger nieuwbouw appartementen met vierde plank verlenger en uitschuifkorteling. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/montag-nieuwbouw-appartementen-metselsteiger-slag-gelijk-verdiepingshoogte-derde-leuning-voorloopleuning_resultaat.png",
            description: "Montage nieuwbouw appartementen metselsteiger slag gelijk verdiepingshoogte, derde leuning en voorloopleuning. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_bouw-helmond_resultaat.png",
            description: "Nieuwbouw appartementen metselsteiger bouw in Helmond. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_metselsteiger_slag_gelijk_verdiepingshoogte_derde_leuning_voorloopleuning_resultaat.png",
            description: "Nieuwbouw appartementen metselsteiger slag gelijk verdiepingshoogte, derde leuning en voorloopleuning. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Nieuwbouw appartementen zware stalen steiger met goederenlift netten steiger gaas inklimpreventie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Nieuwbouw project appartementen zware steiger klasse 4 hoge slagen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Nieuwbouw woning tubelock metselsteiger bouw steiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Nieuwbouw appartementen metselsteiger aanvoersteiger bouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Nieuwbouw appartementen steiger spanten constructie overspanning garageboxen bouw in Schijndel. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Nieuwbouw pannenlegger dakdekking steiger demontage steiger in Chorichem. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Nieuwbouw woningen metselsteigers woonwijk aan water."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Onderkant bovenliggende slag werkvloer metselsteiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/opgeleverd-metselsteiger-gorichem-nieuwbouw-woningen_resultaat.png",
            description: "Oplevering metselsteiger Gorichem nieuwbouw woningen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/overzicht-stalen-systeemsteigers-bouwproject_resultaat.png",
            description: "Overzicht stalen systeemsteigers bouwproject. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-nieuwbouw-woning-steiger-deurne_resultaat.png",
            description: "Prefab nieuwbouw woning steiger in Deurne. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/prefab-woningbouw-zware-klasse4-metselsteiger-binnenleunin-console-dubbele-vlonder_resultaat.png",
            description: "Prefab woningbouw zware klasse 4 metselsteiger met binnenleuning, console en dubbele vlonder. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_appartementen_zware_staal_steiger_met_goederen_lift_netten_steiger_gaas_inklimpreventie-tilburg_resultaat.png",
            description: "Nieuwbouw appartementen zware stalen steiger met goederenlift netten steiger gaas inklimpreventie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_project_appartementen_zware_steiger_klasse_4_hoge_slagen_resultaat.png",
            description: "Nieuwbouw project appartementen zware steiger klasse 4 hoge slagen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw_woning_tubelock_metselsteiger_bouw_steiger_resultaat.png",
            description: "Nieuwbouw woning tubelock metselsteiger bouw steiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-metselsteiger-aanvoersteiger-bouw_resultaat.png",
            description: "Nieuwbouw appartementen metselsteiger aanvoersteiger bouw. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-appartementen-steiger-spanten-constructie-overspanning-garageboxen-bouw-schijndel_resultaat.png",
            description: "Nieuwbouw appartementen steiger spanten constructie overspanning garageboxen bouw in Schijndel. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-pannenlegger-dakdekking-steiger-demontage-steiger-chorichem_resultaat.png",
            description: "Nieuwbouw pannenlegger dakdekking steiger demontage steiger in Chorichem. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/nieuwbouw-woningen-metselsteigers-woonwijk-aan-water_resultaat.png",
            description: "Nieuwbouw woningen metselsteigers woonwijk aan water."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/onderkant-bovenliggende-slag-werkvloer-metselsteiger_resultaat.png",
            description: "Onderkant bovenliggende slag werkvloer metselsteiger. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },

        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger_nieuwbouw_appartementen-schijndel_resultaat.png",
            description: "Metselsteiger nieuwbouw appartementen in Schijndel. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        }
    ],
    renovatie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-werkvloer-trottoir-smalle-straat_resultaat.png",
            description: "Maatwerk metselsteigerbouw door Team Steigerbouw Brabant voor renovatie van een woning in een smalle straat. De werkvloer is geplaatst op het trottoir om optimale bereikbaarheid te garanderen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/technische-situatieschets-steigerbouw-voorgevel_resultaat.png",
            description: "Technische situatieschets van de steigerbouw voor de voorgevel van een renovatieproject."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/smalle-gevelsteiger-binnenstad-renovatie_resultaat.png",
            description: "Maatwerk smalle gevelsteiger door Team Steigerbouw Brabant voor renovatie van een woning in de binnenstad. De steiger is speciaal ontworpen om in smalle straten te passen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/stalen-gevelsteiger-voetgangerszone-veiligheid_resultaat.png",
            description: "Maatwerk stalen gevelsteiger door Team Steigerbouw Brabant voor renovatie van een woning aan de Hasseltstraat te Tilburg in de binnenstad. De steiger is ontworpen met veiligheid in gedachten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-schuin-dak-schoorsteen-tilburg_resultaat.png",
            description: "Maatwerk steigerbouw door Team Steigerbouw Brabant voor dakrenovatie en schoorsteenonderhoud bij een villa aan de Bredaseweg in Tilburg."
        },   
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/schoorsteensteiger-veilig-leuningwerk-schuin-dak_resultaat.png",
            description: "Daksteiger met gecertificeerd leuningwerk. Speciaal gemonteerd zonder het dak te belasten, ideaal voor kwetsbare daken die gerenoveerd worden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/dakrenovatie-steiger-villa-bredaseweg-tilburg_resultaat.png",
            description: "Professionele dakrenovatie steiger rondom een grote villa aan de Bredaseweg in Tilburg - Team Steigerbouw Brabant"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/daksteiger-dakkapel-veilig-werken-op-hoogte_resultaat.png",
            description: "Veilige daksteiger voor renovatie van dakkapel. Team Steigerbouw Brabant zorgt voor optimale werkveilig."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-woningrenovatie-steigerbouw-brabant_resultaat.png",
            description: "Gevelsteiger voor woningrenovatie in Waalwijk Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/kappenkap-steiger-doorwerksysteem-renovatie_resultaat.png",
            description: "Steiger ten behoeven van een dakrenovatie en het verven door de schilder van een herenhuis in Waalwijk." // Voeg hier een relevante beschrijving toe
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-dakrenovatie-werkvloer-loon-op-zand_resultaat.png",
            description: "Dakrenovatie steiger in Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouwer-aanhuis-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Dakrenovatie steiger in Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-situatieschets-dakrenovatie-loon-op-zand_resultaat.png",
            description: "Situatieschets van de dakrenovatie steiger in Loon op Zand."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerconstructie-woningbouw-renovatie-brabant_resultaat.png",
            description: "Steigerconstructie voor woningbouwrenovatie in Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/tube-lock-steiger-uitkraging-dakkapel_resultaat.png",
            description: "Tube-lock steiger voor uitkraging dakkapel."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/veilig-werken-op-hoogte-dakmontage_resultaat.png",
            description: "Veilig werken op hoogte bij dakmontage."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/maatwerk-gevelsteiger-particuliere-woning_resultaat.png",
            description: "Maatwerk gevelsteiger voor particuliere woning."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/opbouw-renovatiesteiger-met-puinvanger_resultaat.png",
            description: "Zware renovatiesteiger met puinvanger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger_tilburg_resultaat.png",
            description: "Renovatiesteiger voor dakrenovatie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Zware renovatiesteiger met puinvanger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Renovatiesteiger voor dakrenovatie in Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-puinvanger_resultaat.png",
            description: "Zware renovatiesteiger met puinvanger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-zware-belastbaar-fase-montage_resultaat.png",
            description: "Zware renovatiesteiger in de fase van montage."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigeroplossing-dakrenovatie_resultaat.png",
            description: "Steigeroplossing voor dakrenovatie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-gevel-renovatie-steiger-puinvanger_resultaat.png",
            description: "Zware gevelrenovatiesteiger met puinvanger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/renovatie-steiger-goirle-dakrenovatie-klasse2_resultaat.png",
            description: "Renovatiesteiger voor dakrenovatie in Goirle."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-layher-allround-steiger-windreductie-binnenleuningen-console-puinvanger_resultaat.png",
            description: "Zware Layher Alround renovatiesteiger met console, windreductie en puinvanger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-monteren-eindhoven_resultaat.png",
            description: "Zware renovatiesteiger met windreductie in Eindhoven met puinvanger en windreductie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/zware-renovatie-steiger-windreductie-rotterdam_resultaat.png",
            description: "Zware renovatiesteiger met windreductie in Rotterdam met puinvanger en windreductie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/aanvoer-steiger-tbv-lift-gemeentehuis-uden_resultaat.png",
            description: "Aanvoersteiger voor liften in het gemeentehuis te Uden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevelsteiger-dakrenovatie-tilburg_resultaat.png",
            description: "Gevelsteiger voor dakrenovatie in Tilburg."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steiger-dakrenovatie_resultaat.png",
            description: "Gevelsteiger voor dakrenovatie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/gevel-steigeroplossing-dakrenovatie_resultaat.png",
            description: "Gevelsteigeroplossing voor dakrenovatie."
        }
    ],
    scheepvaart: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Opbouw revisie steiger voor offshore scheepslaadkraan."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouw-revisie-steiger-offshore_resultaat.png",
            description: "Opbouwen steiger voor scheepsbouw kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger_aan_boord_scheepsbouw_resultaat.png",
            description: "Opbouwen steiger voor scheepsbouw kraanrevisie, detail 01."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-aan-boord-schip-kraan-revisie_resultaat.png",
            description: "Steiger aan boord voor scheepsbouw kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-antwerpen-haven-scheepsbouw-kraan-revisie_resultaat.png",
            description: "Steiger in de haven van Antwerpen voor scheepsbouw kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-aan-boord-schip-kraan_resultaat.png",
            description: "Steiger aan boord voor scheepsbouw werkzaamheden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steigerbouw-schip-revisie_resultaat.png",
            description: "Specialistische steigerbouw voor scheepsonderhoud. Laadkraan revisie met aangepaste veiligheidsvoorzieningen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-rederij_resultaat.png",
            description: "Maritieme steigerbouw voor kraanonderhoud. Complexe constructie met waterdichte componenten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-revisie-steiger-scheepvaart_resultaat.png",
            description: "Opbouwen steiger voor scheepvaart revisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/opbouwen-steiger_scheepsbouw-kraan-revisie_resultaat.png",
            description: "Opbouwen steiger voor scheepsbouw kraanrevisie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/scheepsbouw/steiger-vrijstraander-werkvloer-pompkamer-scheepsbouw_resultaat.png",
            description: "Hoogwaardige steiger voor scheepsreparatie. Maatwerk oplossing voor maritieme werkzaamheden."
        }
    ],
    zwembad: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-nieuw-bouw_resultaat.png",
            description: "Nieuwe steiger voor zwembad bouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-over-kapping-met-ballast_resultaat.png",
            description: "Steiger over kapping met ballast."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-overkapping-zwembad-betegelen_resultaat.png",
            description: "Steiger overkapping zwembad betegelen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-spanten-constructie-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Steiger spanten constructie zwembad overkapping krimp folie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_betegelen_steiger_overkapping_krimpfolie_ballast_resultaat.png",
            description: "Zwembad betegelen steiger overkapping krimpfolie ballast."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_spantenconstructie_tralieligger_krimpfolie_ballast_tegelzetter_resultaat.png",
            description: "Zwembad overkapping spantenconstructie tralieligger krimpfolie ballast tegelzetter."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad_overkapping_tegelzetter_betegelen_zwembad_steiger_montage_fase_006_resultaat.png",
            description: "Zwembad overkapping tegelzetter betegelen zwembad steiger montage fase 006."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/zwembad-overkapping-egelzetter-betegelen-zwembad-steiger-montage-fase_resultaat.png",
            description: "Zwembad overkapping tegelzetter betegelen zwembad steiger montage fase."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Doorwerk steiger preventie weersinvloeden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte overkapping constructie steigerbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte steiger overkapping constructie steigerbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Opbouwen krimpfolie inpakken steiger spanten constructie overkapping zwembad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Overkapping spanten constructie ingepakt krimpfolie steiger tralieligger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Overkapping steiger krimpfolie zwembad spanten constructie ingepakt."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Overkapping steiger krimpfolie zwembad tegelzetter spantenconstructie tralieligger ballast."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Overkapte dakconstructie steiger ingepakt krimpfolie spantenconstructie tralieligger ballast."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Spanten constructie ingepakte overkapping steigerbouw Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Spantenconstructie ingepakt krimpfolie overkapping weerspreventie steiger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ballast-overkapping-krimpfolie-ingepakt-steiger-zwembad_resultaat.png",
            description: "Ballast overkapping krimpfolie ingepakt steiger zwembad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/doorwerk-steiger-preventie-weers-invloeden_resultaat.png",
            description: "Doorwerk steiger preventie weers invloeden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte overkapping constructie steigerbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/ingepakte-steiger-overkapping-constructie-steigerbouw_resultaat.png",
            description: "Ingepakte steiger overkapping constructie steigerbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/opbouwen-krinmfolie-inpakken-steiger-spanten-constructie-overkapping-zwembad_resultaat.png",
            description: "Opbouwen krimpfolie inpakken steiger spanten constructie overkapping zwembad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-spanten-constructie-ingepakt-krimpfolie-steiger-tralieligger_resultaat.png",
            description: "Overkapping spanten constructie ingepakt krimpfolie steiger tralieligger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-spanten-constructie-ingepakt_resultaat.png",
            description: "Overkapping steiger krimpfolie zwembad spanten constructie ingepakt."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapping-steiger-krimpfolie-zwembad-tegelzetter-spantenconstructie-tralieligger-ballast_resultaat.png",
            description: "Overkapping steiger krimpfolie zwembad tegelzetter spantenconstructie tralieligger ballast."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/overkapte-dakconstructie-steiger-ingepakt-krimpfoli-spantenconstructie-tralie-ligger-ballast_resultaat.png",
            description: "Overkapte dakconstructie steiger ingepakt krimpfoli spantenconstructie tralie ligger ballast."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-ingepakte-overkapping-steigerbouw-brabant_resultaat.png",
            description: "Spanten constructie ingepakte overkapping steigerbouw brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spantenconstructie-ingepakt-krimpfolie-overkapping-weerspreventie-steiger_resultaat.png",
            description: "Spantenconstructie ingepakt krimpfolie overkapping weerspreventie steiger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/spanten-constructie-tralieligger-zwembad-overkapping-krimp-folie_resultaat.png",
            description: "Spanten constructie tralieligger zwembad overkapping krimp folie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-brabant-kap-constructie_resultaat.png",
            description: "Steigerbouw brabant kap constructie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-foto-in-het-zwemad-onder-de-spanten-constructie_resultaat.png",
            description: "Steigerbouw foto in het zwembad onder de spanten constructie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-krimpfolie-en-kap_resultaat.png",
            description: "Steigerbouw krimpfolie en kap."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-over-het-zwembad-zodat-er-doorgewerkt-kan-worden_resultaat.png",
            description: "Steigerbouw over het zwembad zodat er doorgewerkt kan worden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-met-kripfolie_resultaat.png",
            description: "Steigerbouw zwembad overkapping met kripfolie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steigerbouw-zwembad-overkapping-ter-water-resistentie_resultaat.png",
            description: "Steigerbouw zwembad overkapping ter water resistentie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/zwembad/steiger-constructie-zwembad-overkapping_met-krimfolie_resultaat.png",
            description: "Steigerbouw constructie zwembad overkapping met krimpfolie."
        }
    ],
    trappentoren: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/opbouwen-vrijstaande-trappentoren-bouwverlichting_resultaat.png",
            description: "Fase montage: Vrijstaande trappentoren met geïntegreerde veiligheidsvoorzieningen. Modulaire constructie voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/stalen-trappentoren-22-meter-hoogbouw_resultaat.png",
            description: "Vrijstaande trappentoren steiger voor het bereiken van het dak."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-industrieële-trappentoren_resultaat.png",
            description: "Vrijstaande trappentoren van 22 meter."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steigerbouw-vrijstaande-trapentoren-zonder-ankers_resultaat.png",
            description: "Vrijstaande trappentoren zonder ankers."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/steiger-trappentoren-distributiecentrum-logistiek_resultaat.png",
            description: "Steiger trappentoren voor distributiecentra en logistieke faciliteiten."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/tijdelijke-trappentoren-zonnepanelen-waalwijk-montage-fase_resultaat.png",
            description: "Tijdelijke trappentoren voor zonnepanelen in Waalwijk. Montage fase met geïntegreerde veiligheidsvoorzieningen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren_onverankerd_vrijstaand_18meter_01_resultaat.png",
            description: "Montage vrijstaande trappentoren van 18 meter."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/trappentoren-met-steunbeer-en-ballast-vrijstaand_resultaat.png",
            description: "Vrijstaande trappentoren met steunbeer en ballast. Optimale stabiliteit voor veilige toegang tot alle werkniveaus."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-22m-industriele-steigerbouw_resultaat.png",
            description: "Vrijstaande trappentoren van 22 meter voor industriële steigerbouw. Robuuste constructie met geïntegreerde veiligheidsvoorzieningen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-nieuwbouw-zundert-coldstore_resultaat.png",
            description: "Vrijstaande trappentoren voor nieuwbouw in Zundert bij een coldstore. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steigerbouw-brabant_resultaat.png",
            description: "Vrijstaande trappentoren van 22 meter. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vrijstaande-trappentoren-steiger-voor-bereiken-van-het-dak_resultaat.png",
            description: "Vrijstaande trappentoren steiger voor het bereiken van het dak. Robuuste constructie met geïntegreerde veiligheidsvoorzieningen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/Industriële-trappen-toren-bij-bol.com-waalwijk-steigerbouw-brabant_resultaat.png",
            description: "Industriële trappentoren bij bol.com in Waalwijk. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/industrie-waalwijk-trappentoren-fase-montage_resultaat.png",
            description: "Industrie Waalwijk trappentoren in de fase van montage. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappentoren_resultaat.png",
            description: "Montage van een trappentoren. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren_resultaat.png",
            description: "Montage van vrijstaande trappentoren. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter_resultaat.png",
            description: "Montage van 18 meter hoge vrijstaande trappentoren. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-vrijstaande-trappentoren-18meter-layher_resultaat.png",
            description: "Montage van 18 meter hoge vrijstaande trappentoren met Layher systemen. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/monteren-steiger-trappentoren-onverankerd-vrijstaand-18meter_resultaat.png",
            description: "Monteren van onverankerde, vrijstaande trappentoren van 18 meter. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/montage-trappen-toren_resultaat.png",
            description: "Montage van een trappentoren. Specialistische steigerbouw voor efficiënte bouwvoortgang."
        }
    ],
    werkplatform: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/brede-houten-werkvloer-steigerbouw-staalconstructie_resultaat.png",
            description: "Fase montage: Uitgebreid werkplatform met geïntegreerde veiligheidsvoorzieningen. Professionele oplossing voor hoogtewerk."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steigerbouw-werkvloer-boven-trappengat_resultaat.png",
            description: "Werkvloer boven trappengat. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/werkplatform/steiger-veilige-werkvloer-montagewerk-staalbouw_resultaat.png",
            description: "Veilige werkvloer voor montagewerk. Speciale steigerbouw voor optimale toegankelijkheid."
        }
    ],
    overspanning: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-metselsteiger-overspanning-parkeer-garage-ingang_resultaat.png",
            description: "Professionele spantenconstructie voor overspanning van garageboxen. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spantenconstructie-tralieliggers-14m2_resultaat.png",
            description: "Innovatieve spantenconstructie met tralieliggers van 14m2. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/montage-spanten-constructie_resultaat.png",
            description: "Montage spantenconstructie voor overspanning van garageboxen. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-garageboxen-aanvoersteiger_resultaat.png",
            description: "Overspanning garageboxen aanvoersteiger. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/overspanning-spanten_constructie-over-garage-boxen_resultaat.png",
            description: "Overspanning spantenconstructie over garage boxen. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/spantenconstructie-over-garageboxen-tbv-metselsteiger01_resultaat.png",
            description: "Spantenconstructie over garageboxen tbv metselsteiger. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steigerbouw-spanten-constructie-schijndel_resultaat.png",
            description: "Steigerbouw spantenconstructie schijndel. Speciale steigerbouw voor optimale toegankelijkheid."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/overspanning/steiger-dak-overspanning-metsel-steiger_resultaat.png",
            description: "Steigerbouw dak overspanning metselsteiger. Speciale steigerbouw voor optimale toegankelijkheid."
        }
    ],
    podium: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/podiumbouw/podium-op-de-helling-aan-gracht-met-steiger-voor-de-boot_resultaat.png",
            description: "Podiumsteiger voor evenementen en presentaties. Robuuste constructie met veilige toegang en werkplatforms. En aanmeersteiger voor een boot langs de gracht."
        }
    ],
    windreductie: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-prefab-woningbouw-metsel-steiger-binnenleuning-dubbele-uitschuif-console-windreductie-net_resultaat.png",
            description: "Steigerbouw prefab woningbouw metselsteiger binnenleuning dubbele uitschuif console windreductie net."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-steiger-nieuwbouw-overkapping-windreductie.png",
            description: "Monteren steiger nieuwbouw met overkapping en windreductie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steiger-demontage-nieuwbouw-afbouw-beekse-bergen-hoofdgebouw-inter-deel_resultaat.png",
            description: "Steiger demontage nieuwbouw afbouw Beekse Bergen hoofdgebouw inter deel."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Steigerbouw nieuwbouw bouw hoofdgebouw doorwerk overkapping kapconstructie windreductiegaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Steigerbouw nieuwbouw Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Opgeleverd stucadoor schilder demontage doorwerk steiger afbouw windreductienetten kapconstructie intern steiger aanzicht."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Renovatie steigerbouw Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Steigerbouw dakconstructie krimpfolie windreductie weer preventie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Steigerbouw Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigergaas-windreducie-steigerbouw-hilvaren-beek_resultaat.png",
            description: "Steigergaas windreductie steigerbouw Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Steigerbouw kapconstructie krimpfolie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/tube-lock-steiger-met-windreductie-netten-steiger-gaas-kapconstructie-krimpfolie_resultaat.png",
            description: "Tube lock steiger met windreductie netten steiger gaas kapconstructie krimpfolie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/zware-renovatie-steiger-met-steigergaas-en-puinvanger_resultaat.png",
            description: "Zware renovatie steiger met steigergaas en puinvanger."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/metselsteiger-met-windreductie-net_resultaat.png",
            description: "Metselsteiger met windreductie net."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/monteren-layhe-blitz-steiger-nieuwbouw-overkapping-windreductie_resultaat.png",
            description: "Monteren layhe blitz steiger nieuwbouw overkapping windreductie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-bouw-hoofdgebouw-doorwerk-overkapping-kapconstructie-windreductiegaas_resultaat.png",
            description: "Nieuwbouw steiger bouw hoofdgebouw doorwerk overkapping kapconstructie windreductiegaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/nieuwbouw-steiger-hilvarenbeek_resultaat.png",
            description: "Nieuwbouw steiger in Hilvarenbeek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/opgeleverd-stucadoor-schilder-demontage-doorwerk-steiger-afbouw-windreductienetten-kapconstructie-intern-steiger-aanzicht_resultaat.png",
            description: "Opgeleverd stucadoor schilder demontage doorwerk steiger afbouw windreductienetten kapconstructie intern steiger aanzicht."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/renovatie-steigerbouw-rotterdam_resultaat.png",
            description: "Renovatie steigerbouw Rotterdam."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-dakconstructie-krimpfolie-windreductie-weer-preventie_resultaat.png",
            description: "Steigerbouw dakconstructie krimpfolie windreductie weer preventie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-eindhoven_resultaat.png",
            description: "Steigerbouw Eindhoven."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-hilvarenbeek-krimpfolie-windreductie_resultaat.png",
            description: "Steigerbouw Hilvarenbeek krimpfolie windreductie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-kapconstructie-krimpfolie_resultaat.png",
            description: "Steigerbouw kapconstructie krimpfolie."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-krimpfolie-steigergaas_resultaat.png",
            description: "Steigerbouw krimpfolie steigergaas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-layher-blitz-nieuwbouw_resultaat.png",
            description: "Steigerbouw layher blitz nieuwbouw."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/weer-invloed-preventie/steigerbouw-nieuwbouw-hilvarenbeek_resultaat.png",
            description: "Steigerbouw nieuwbouw Hilvarenbeek."
        }
    ],
    // Klasse 4 / Ruwbouw & Systeembouw projecten
ruwbouw_klasse4: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/ruwbouw-steiger-kalkzandsteen-blokken_resultaat.png",
        description: "Zware klasse 4 steigerbouw voor ruwbouw met kalkzandsteenblokken. Maximale stabiliteit voor zware belasting."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/systeembouw-steiger-nieuwbouw-woningen-lift_resultaat.png",
        description: "Systeembouw steigeropstelling voor nieuwbouwwoningen, uitgerust met materiaal- en personenlift."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steigerbouw-bovenaanzicht-engels-baksteen-project_resultaat.png",
        description: "Bovenaanzicht van een klasse 4 metselsteiger bij een grootschalig Engels baksteen project."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/steiger-loop-pad-bouwplaats-dura-vermeer_resultaat.png",
        description: "Veilig en obstakelvrij steiger-looppad conform de strengste veiligheidsnormen op de bouwplaats."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/nieuwbouwwijk-steiger-afzetting-bouwhekken_resultaat.png",
        description: "Complete steigerinrichting inclusief nette afzetting en bouwhekken voor een veilige nieuwbouwwijk."
    }
],

// Renovatie, Dakwerken & Logistiek
renovatie_logistiek: [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/daksteiger-schoorsteen-renovatie-project_resultaat.png",
        description: "Maatwerk daksteiger voor veilige schoorsteenrenovatie en dakwerkzaamheden zonder dakbeschadiging."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/gevelsteiger-renovatie-vrijstaande-woning_resultaat.png",
        description: "Gevelsteiger voor de complete renovatie en verduurzaming van een vrijstaande woning."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse4/mobiele-kraan-van-riel-steiger-montage_resultaat.png",
        description: "Efficiënte steigermontage en logistiek in samenwerking met de mobiele kranen van Van Riel."
    }
],
    betonfabriek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger01_resultaat.png",
            description: "Specialistische steigerbouw voor betonfabriek in Oosterhout. Robuuste constructie voor zware industriële toepassingen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger02_resultaat.png",
            description: "Specialistische steigerbouw voor betonfabriek in Oosterhout. Robuuste constructie voor zware industriële toepassingen."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/beton-fabriek/beton-fabriek-industrie-steiger03_resultaat.png",
            description: "Specialistische steigerbouw voor betonfabriek in Oosterhout. Robuuste constructie voor zware industriële toepassingen."
        },                                
    ],
    infra: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-tijdelijke-loopbrug-tilburg-industrie_resultaat.png",
            description: "Aarden tijdelijke loopbrug voor hoogspanning in Tilburg, infra steiger voor publiek en voetgangers."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Industriele steigerbouw voor tijdelijke infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Steigerconstructie voor windturbineonderhoud in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Veilige toegang tot windmolens via trappentoren in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Tijdelijke trappentoren voor windturbine-steigerbouw in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Publieke trappentoren voor toegang tot windmolens in infrastructuur."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Industriele trappentoren voor steigerbouw bij windmolens, close-up."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Tijdelijke infrastructuur voor toegang tot windturbines in Brabant."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouwen-steiger-valbeveiliging-efteling-loon-op-zand-achtbaan-baron_resultaat.png",
            description: "Opbouwen steiger voor valbeveiliging in Efteling, locatie Loon op Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/opbouw-steiger-valpreventie-efteling-achtbaan-baron-brabant_resultaat.png",
            description: "Opbouwen steiger voor valpreventie in Efteling, locatie Loon op Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerbouw-efteling-achtbaan-valpreventie_resultaat.png",
            description: "Steigerbouw voor valpreventie in Efteling, locatie Loon op Zand, achtbaan Baron."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infra-steiger-loopbrug-hoogspanning-tilburg_resultaat.png",
            description: "Dubbele leuningen met aardpen voor aarding loopbrug in Tilburg, tijdelijke infra voor bereikbaarheid benzinestation."
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
            description: "Montage loopbrug 100000 Volt, geaarde steiger onder hoogspanningsmast voor openbaar voetgangersverkeer bij benzinestation."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/montage_loopbrug_100000Volt_aanleg_hoogspanning_geaard_steiger_onder_hoogspanningsmast_openbare_ruimte_openbaar_voetganger_verkeer_bereikbaarheid_benzinepomp_resultaat.png",
            description: "Montage loopbrug 100000 Volt, geaarde steiger onder hoogspanningsmast voor openbaar voetgangersverkeer bij benzinestation."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-electrisch-hoogspanningsnet-tilburg-tijdelijke-brug-bereikbaarheid-voetgangers-bp-hazenest_resultaat.png",
            description: "Steiger montage in Tilburgse industrie, loopbrug 100000 Volt geaard onder hoogspanningsmast voor voetgangers bij benzinestation."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steiger-loopbrug-bereikbaarheid-van-bp-tankstation_resultaat.png",
            description: "Steiger bij elektrisch hoogspanningsnet in Tilburg, tijdelijke brug voor voetgangersbereikbaarheid bij BP Hazenest."
        }
    ],
    infra1: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-trappentoren-windturbine-steigerbouw_resultaat.png",
            description: "Tijdelijke infrastructuur en trappentoren opgebouwd door Team Steigerbouw Brabant voor veilige toegang tot een windturbine."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/publieke-trappentoren-toegang-windmolen_resultaat.png",
            description: "Detailopname van een veilige industriële trappentoren met hoogwaardig leuningwerk, gemonteerd strak langs de mast van een windmolen voor inspectiewerkzaamheden."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-trappentoren-steigerbouw-windmolen-close-up_resultaat.png",
            description: "Tijdelijke infrastructuur: Veilige trappentoren voor windturbine-onderhoud"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/tijdelijke-infrastructuur-toegang-windturbine-brabant_resultaat.png",
            description: "Maatwerk publieke trappentoren voor toegang tot windmolens"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/industriele-steigerbouw-tijdelijke-infrastructuur_resultaat.png",
            description: "Industriële steigerbouw: Veilige toegangssystemen voor de energiesector"
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/steigerconstructie-windturbine-onderhoud-infra_resultaat.png",
            description: "Maatwerk tijdelijke trappentoren door Team Steigerbouw Brabant voor een veilige en stabiele toegang tot de ingang van een windturbine."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/infra/veilige-toegang-windmolen-trappentoren_resultaat.png",
            description: "Robuuste en vrijstaande steigerconstructie met geïntegreerde trappen en leuningwerk, specifiek ontworpen voor de duurzame energiesector."
        }
    ],
    "trapgat-raalte": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie_aanvraag_trapgat met glas_resultaat.png",
        description: "Situatie van de aanvraag voor een steigerconstructie boven het trapgat met glaswanden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-aanvraag-trappengat-binnen_resultaat.png",
        description: "Binnensituatie van het traphuis ten behoeve van de engineering van de overspanning."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/situatie-steiger-aanvraag_resultaat.png",
        description: "Overzicht van de projectsituatie voor de aanvraag van de binnensteiger."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steigerbouw-vrije-doorgang-motage-werkvloer_resultaat.png",
        description: "Steigerbouw constructie met gegarandeerde vrije doorgang onder de montage-werkvloer."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-constructie-overspanning-trap-blijft-in-gebruik_resultaat.png",
        description: "Slimme steigerconstructie met een overspanning zodat de vaste trap volledig in gebruik blijft."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspannende-werkvloer-ter-montagewerk-boven-vaste-trap_resultaat.png",
        description: "Overspannende werkvloer ten behoeve van montagewerkzaamheden strak boven de vaste trap."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/steiger-overspanning-binnen-met-vrije-doorgang-daaronder_resultaat.png",
        description: "Binnensteiger met een veilige overspanning en een volledig vrije doorloop daaronder."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/trap-binnen-kantoor-blijft-in-gebruik_resultaat.png",
        description: "De vaste binnentrap in het kantoor blijft tijdens de werkzaamheden permanent begaanbaar."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "Veilige werkvloer gemonteerd boven het permanent begaanbare en open trapgat."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-boven-trapgat-in-raalte_resultaat.png",
        description: "Maatwerk werkvloer boven het trapgat voor een onderhoudsproject in Raalte."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-en-vaste-trap-blijven-in-gebruik_resultaat.png",
        description: "Zowel de bovenliggende werkvloer als de onderliggende vaste trap blijven gelijktijdig in gebruik."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-in-gebruik-boven-permanent-begaanbaar-trapgat_resultaat.png",
        description: "De gemonteerde steigerwerkvloer is volop in gebruik boven het veilige doorloop-trapgat."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-montage-werk-overspanning-boven-verdieping_resultaat.png",
        description: "Montagewerkzaamheden vanaf de overspanningswerkvloer op de bovenverdieping."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-op-boven-verdieping-met-permanent-vrije-doorgang-daaronder_resultaat.png",
        description: "Steigeropstelling op de bovenverdieping met een gegarandeerde, permanente vrije doorgang daaronder."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-overspanning-boven-trapgat_resultaat.png",
        description: "Solide werkvloeroverspanning om veilig boven een diep trapgat te kunnen werken."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-trapgat_resultaat.png",
        description: "Detail van de stabiele werkvloer van de speciale trapgatsteiger."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-traphuis_resultaat.png",
        description: "Veilige en arbo-technisch verantwoorde werkvloer in het traphuis ingebouwd."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/werkvloer-steiger-vanaf-onderkant_resultaat.png",
        description: "Aanzicht van de overspannende steigerwerkvloer vanaf de onderkant gezien."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trapgat-raalte/overbruggende-werkvloer-over-een-trap-met-vrije-doorgang_resultaat.png",
        description: "Overbruggende werkvloer over een operationele trap met behoud van de volledige doorloop."
    }
],
    "prefabwoningbouw": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/lichte-verspringing-steigervloer_resultaat.png",
        description: "Metselsteiger met een lichte verspringing in de steigervloer, perfect aangepast aan de contouren van de prefab woning."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/metselsteiger-met-extern-ladderhuis-veiligheid-en-werkvloer-efficientie_resultaat.png",
        description: "Professionele metselsteiger voorzien van een extern ladderhuis voor optimale veiligheid en een efficiënte werkvloer."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/overbrugging-platdak-aanbouw_resultaat.png",
        description: "Maatwerk steigeroverbrugging over het platte dak van een aanbouw voor veilige gevelwerkzaamheden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/prefab-woningbouw-metselsteiger_resultaat.png",
        description: "Robuuste metselsteiger constructie speciaal ingericht voor de snelle montagefases binnen de prefab woningbouw."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoningbouw_resultaat.png",
        description: "Efficiënte steigerbouw projectuitvoering ten behoeve van grootschalige prefab woningbouw."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steigerbouw-prefabwoning-metselsteiger_resultaat.png",
        description: "Veilige en arbo-technisch verantwoorde metselsteiger opgesteld bij een moderne prefab woning."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-kopse-kant_resultaat.png",
        description: "Zijaanzicht van de stabiele steigerconstructie aan de kopse kant van de woning."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/steiger-prefabwoning_resultaat.png",
        description: "Rondom gemonteerde gevelsteiger voor de veilige afwerking van een prefab woning."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/intern-ladderhuis-met-valpreventie-prefab-woningbouw-steiger_resultaat.png",
        description: "Geïntegreerd intern ladderhuis met gecertificeerde valpreventie op een prefab woningbouw steiger."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/klasse-4-steiger-prefab-woning_resultaat.png",
        description: "Zware klasse IV (Klasse 4) steigeropstelling voor een prefab woning, geschikt voor intensieve metselwerkzaamheden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-klasse4-ring54_resultaat.png",
        description: "Layher Allround Klasse IV steigersysteem met ring 54 configuratie voor maximale stabiliteit en draagkracht."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/prefabwoningbouw/layher-allround-ring54-prefabwoning-metselsteiger_resultaat.png",
        description: "Modulaire Layher Allround ring 54 metselsteiger, flexibel en snel opgebouwd rondom de prefabwoning."
    }
],
    "transportband": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag-overspanning-vrije-werkvloer-14m3m-hier-werkvloer-zware-klasse-maxbelasting-3kNm2-5,5kNm2_resultaat.png",
        description: "Aanvraag overspanning vrije werkvloer 14m x 3m - Werkvloer zware klasse met maximale belasting van 3 kN/m² tot 5,5 kN/m²."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/boven-aanzicht-complexe-industie-werkvloer_resultaat.png",
        description: "Bovenaanzicht van de complexe industriële werkvloer."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/hier-stopt-het-reeds geinstalleerde-vaste-constructie-liggers-H-profielen-hier-en-verdieping-gewisseld-compex-steiger-gemaakt_resultaat.png",
        description: "Aansluiting op bestaande vaste constructie (H-profielen) en niveauwissel voor complex steigerwerk."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/impressie-situatie-voor-het-monteren-steiger-overbrugging_resultaat.png",
        description: "Impressie van de situatie voorafgaand aan de montage van de steigeroverbrugging."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/montage-overspanning-werkvloer_resultaat.png",
        description: "Montage van de overspanning voor de werkvloer."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/realisatie-werkplatform-voor-zware-montage-meerder-etages-en-ruimte_resultaat.png",
        description: "Realisatie van het werkplatform voor zware montage met meerdere etages en extra werkruimte."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_complexe-grote-belasting-steiger-overbrugging-zonder-stemplels-op-de-ondergrond-binnen_resultaat.png",
        description: "Aanvraag complexe, zwaar belaste steigeroverbrugging binnen, zonder stempels op de ondergrond."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/aanvraag_werkvloer_boven_uitsparing-hoge-werkvloer-lange-complex-steiger-binnen_resultaat.png",
        description: "Aanvraag hoge werkvloer boven uitsparing. Lang en complex steigerwerk binnen."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/steiger-montage-interne-deel-werkvloer_resultaat.png",
        description: "Steigermontage van het interne gedeelte van de werkvloer."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd5_resultaat.png",
        description: "Oplevering van de werkvloer (Fase 5)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd_resultaat.png",
        description: "Gerealiseerde werkvloer en succesvolle projectoplevering."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd1_resultaat.png",
        description: "Gerealiseerde werkvloer en projectoplevering (Detail 1)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer-opgeleverd-en-project-opgeleverd2_resultaat.png",
        description: "Gerealiseerde werkvloer en projectoplevering (Detail 2)."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/grote-industriële-overbrugging/werkvloer_opgeleverd3_resultaat.png",
        description: "Oplevering van de werkvloer (Fase 3)."
    }
],
"industrie-tilburg": [
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/werk-opgeleverd-na-demontage-van-de-steiger_resultaat.png",
        description: "Het eindresultaat van de industriële installatie nadat de steiger vakkundig is gedemonteerd."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag_-nstallatie-machine-industrie-steiger-werkvloer_resultaat.png",
        description: "Inmeting en aanvraag voor een stabiele steigerwerkvloer rondom een industriële machine."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/aanvraag-situatie-steigerbehoefte_resultaat.png",
        description: "Analyse van de projectsituatie om de exacte industriële steigerbehoefte te bepalen."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/fase-montage-werkvloer-industrieële-installatie_resultaat.png",
        description: "Fase van de montage van de zware werkvloer rondom de industriële installatie."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/ladderhuis-om-de-steigers-op-de-daken-rondom-de-machines-te-betreden_resultaat.png",
        description: "Veilig gemonteerd ladderhuis om de steigers op de daken rondom de machines te betreden."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/montage-steiger-ladderhuis-toegang-steiger-werkvloer-installatie-industrieël-luchtkanaal_resultaat.png",
        description: "Montage van het steiger-ladderhuis voor een veilige toegang tot het industriële luchtkanaal."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/oplossing-steiger-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "De uiteindelijke steigeroplossing: een op maat gemaakt werkplatform rondom de machine."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-tilburg-industrie_resultaat.png",
        description: "Uitvoering van een complexe industriële steigeraanvraag op locatie in Tilburg."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steiger-aanvraag-werkplatform-industriële-installatie-machine_resultaat.png",
        description: "Gedetailleerd werkplatform ten behoeve van montagewerkzaamheden aan een industriële machine."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/machine-park-tilburg/steigerbehoefte-voor-installatie-montage-machine_resultaat.png",
        description: "Veilige steigeropstelling ontworpen voor de installatie en montage van zware machines."
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
        description: "Klasse 2 frame steiger met het Layher Blitz systeem bij een nieuwbouw bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-snelbouwsteiger-project-brabant_resultaat.png",
        description: "Layher Blitz snelbouwsteiger ingezet op een project in Brabant."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/layher-blitz-steigerbouw-nieuwbouw-bungalow_resultaat.png",
        description: "Layher Blitz steigerbouw ten behoeve van de realisatie van een nieuwbouw bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/montage-klasse-2-gevelsteiger-cascobouw_resultaat.png",
        description: "Montage van een klasse 2 gevelsteiger ten behoeve van cascobouw."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/nieuwbouw_14persoons_bungalow_frame_steiger_demontage_resultaat.png",
        description: "Demontage van een frame steiger bij een grote nieuwbouw 14-persoons bungalow."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steiger-werkvloer-overzicht-nieuwbouw-bungalows_resultaat.png",
        description: "Overzicht van de veilige steiger werkvloeren bij nieuwbouw bungalows."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-hoofdgebouw-krimpfolie-kapconstructie_resultaat.png",
        description: "Steigerbouw bij het hoofdgebouw voorzien van krimpfolie en een kapconstructie."
    },
    {
        image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/klasse2/steigerbouw-klasse-2-utiliteitsbouw-layher_resultaat.png",
        description: "Professionele klasse 2 steigerbouw met Layher onderdelen voor utiliteitsbouw."
    }
],
    installatieTechniek: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steiger-werkplatform-industriële-installatie-machine_resultaat.png",
            description: "Specialistische steiger voor installatietechniek."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Technische installatie steiger met meerdere werkniveaus. Professionele oplossing voor onderhoud en montage."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/Industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Geavanceerde steigerbouw voor installatiewerk. Veilige toegang tot alle technische componenten."
        }
    ],
    videos: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-udenhout-brabant.mp4",
            description: "Renovatie steiger vastgoed onderhoud schilderwerk Udenhout"
        }
    ],
    videos1:[
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/nieuwbouw-appartementen-metselsteiger.mp4",
            description: "Nieuwbouw appartementen metselsteiger"
        }
    ],
    videos2: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-luxe-villa-tilburg.mp4",
            description: "Renovatie steiger transformatie naar modern luxe villa Tilburg"
        }
    ],
    videos3: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-villa-bredaseweg-tilburg-brabant.mp4",
            description: "Renovatie steiger villa Bredaseweg Tilburg Brabant"
        }
    ],
    videos4: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-tilburg-renovatie-klasse-4-steige.mp4",
            description: "Steigerbouw Tilburg renovatie klasse 4 steiger"
        }
    ],
    videos5: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/trappentoren/vijstaande_trappen_toren.mp4",
            description: "Vrijstaande trappentoren voor veilige toegang tot hoogtes. De video toont de constructie en het gebruik van de trappentoren in een industriële omgeving."
        }
    ],
    videos6: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-werkvloer-op-ideale-werkhoogte.mp4",
            description: "Steigerbouw werkvloer op ideale werkhoogte"
        }
    ],
    videos7: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-overdekte-kap-constructie-wind-reductie-netten-beekse-bergen.mp4",
            description: "Steigerbouw overdekte kap constructie wind reductie netten Beekse Bergen" 
        }
    ],
    videos8: [  
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/grote-werkvloer-over-uitsaring-verdiepingsvloer-bol.com.mp4",
            description: "Grote werkvloer 3 meter breed op 14 meter hoog 32 meter lang over uitsparing verdiepingsvloer bij bol.com"
        }
    ],
    videos9: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-industrie-bol-transportbad-door-twee-ruimtes-en-twee-verdiepingen-boven-uitsparing-verdiepingsvloer.mp4",
            description: "Steigerbouw industrie bol.com te Waalwijk, transportband door twee ruimtes en twee verdiepingen boven uitsparing verdiepingsvloer"
        }
    ],
    videos10: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Pompkamersteiger-scheepswerf-De-Werken-werkendam.mp4",
            description: "Vrijstaand werkplatform voor revisiewerkzaamheden in de pompkamer van een schip. Bij Scheepswerf De Werken in Werkendam."
        }
    ],
    videos11: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/Bungalows-nieuwbouw-frame-steiger-klasse-2.mp4",
            description: "Bungalows nieuwbouw frame steiger klasse 2"
        }
    ],
    videos12: [
        {
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/steigerbouw-machine-revisie-industrie-beton-fabriek-oosterhout.mp4",
            description: "Steigerbouw machine revisie industrie beton fabriek Oosterhout"
        }
    ],
    videos13: [
        {  
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", 
            description: "Renovatie steiger met twee overbruggingen monumentaal pand in Waalwijk"
        }
    ],
    videos14: [
        { 
            video: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/industrie-machine-installatietechniek-op-plat-dak.mp4",
            description: "Industrie machine installatietechniek op plat dak"
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
    // Zorg dat interval alleen draait als meer dan 1 slide aanwezig is
    if (slideElements.length > 1) setInterval(nextSlide, 4500);
}

// Eén veilige initializer na DOM ready
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

        // Buttons en containers met null-checks
        const meerFotosKnop = document.getElementById('meerFotosKnop');
        const meerVideosKnop = document.getElementById('meerVideosKnop');
        const leesMeerKnop = document.getElementById('leesMeerKnop');
        const slideshowContainer = document.querySelector('.carousel');
        const videoContainer = document.getElementById('extraVideos');
        const carousel = document.getElementById('carousel');

        // meerFotosKnop: voeg extra foto's toe als knop bestaat
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

        // meerVideosKnop: laad extra video's
        if (meerVideosKnop && (carousel || videoContainer)) {
            meerVideosKnop.addEventListener('click', function () {
                const videoData = [
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie_steigers/Renovatie-steiger-vastgoed-onderhoud-schilderwerk-udenhout.mp4", description: "Renovatie steiger vastgoed onderhoud schilderwerk Udenhout" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/appartementen/nieuwbouw_appartementen_metselsteiger.mp4", description: "Nieuwbouw appartementen metselsteiger" },
                    { src: "https://www.steigerbouwbrabant.nl/beeldmateriaal/video/renovatie-steiger-monumentaal-waalwijk.mp4", description: "Renovatie steiger met twee overbruggingen monumentaal pand in Waalwijk" }
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

        // leesMeerKnop: toon aanvullende slideshows als aanwezig
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

        // Extra: toggles voor bestaande helper functies (veilige checks)
        const toggleVideosBtn = document.getElementById('toggleVideosBtn'); // optioneel
        if (toggleVideosBtn && videoContainer) {
            toggleVideosBtn.addEventListener('click', function () {
                videoContainer.style.display = videoContainer.style.display === 'none' ? 'block' : 'none';
            });
        }

        // Zet extraVideos initieel verborgen als aanwezig
        if (videoContainer) videoContainer.style.display = 'none';
    } catch (err) {
        // Stilletjes loggen voorkomt breken van site
        console.error('Script initialisatie fout:', err);
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
    alert('Meer foto\'s worden geladen...');
}

function toonMeerVideos() {
    const extraVideos = document.getElementById('extraVideos');
    if (!extraVideos) return;
    extraVideos.style.display = extraVideos.style.display === 'none' ? 'block' : 'none';
}

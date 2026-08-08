// script_es.js - versión consolidada y reparada en español
function normalizarUrlMedias(url) {
    if (!url) return url;

    let urlLimpia = url.trim().replace(/\\/g, '/');

    // Normalizar rutas locales a URL absoluta
    if (/^[a-z]:\//i.test(urlLimpia) && urlLimpia.includes('/beeldmateriaal/')) {
        urlLimpia = `https://www.steigerbouwbrabant.nl/beeldmateriaal/${urlLimpia.split('/beeldmateriaal/').pop()}`;
    }

    // Solo codificar espacios, NO forzar extensión
    return urlLimpia.replace(/ /g, '%20');
}

function obtenerUrlCartelMedias(url) {
    if (!url) return '';
    return normalizarUrlMedias(url);
}

function obtenerDescripcionMostrada(descripcion) {
    if (!descripcion) return '';

    const idioma = (document.documentElement.lang || document.body?.dataset?.lang || '').toLowerCase();
    const esEspanol = idioma === 'es' || window.location.pathname.toLowerCase().includes('_es') || window.location.href.toLowerCase().includes('/es/');

    if (!esEspanol) return descripcion;

    // Ya está en español, retornar tal cual
    return descripcion;
}

function cargarImagenes() {
    const imagenes = document.querySelectorAll('img'); // Seleccionar todas las imágenes en la página
    imagenes.forEach(imagen => {
        let src = imagen.getAttribute('src');
        if (src && src.includes(' ')) {
            const srcCodificado = src.replace(/ /g, '%20');
            imagen.setAttribute('src', srcCodificado);
        }

        const srcNormalizado = normalizarUrlMedias(imagen.getAttribute('src'));
        if (srcNormalizado && srcNormalizado !== imagen.getAttribute('src')) {
            imagen.setAttribute('src', srcNormalizado);
        }

        if (!imagen.getAttribute('alt') && imagen.getAttribute('src')) {
            imagen.setAttribute('alt', imagen.getAttribute('src').split('/').pop());
        }
    });
}

window.addEventListener('load', cargarImagenes);

const datosProyeccion = {
    industria: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-steiger-machine-onderhoud_resultaat.png",
            description: "Situación para colocar un andamio para mantenimiento de máquinas en ambiente industrial. Construcción especializada de andamios para una accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-plaatsen-van-de-industie-steiger_resultaat.png",
            description: "Situación para colocar el andamio industrial. Construcción especializada de andamios para una accesibilidad óptima y seguridad durante trabajos de mantenimiento de máquinas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Construcción de andamios para revisión de máquinas industriales. Construcción especializada de andamios para una accesibilidad óptima y seguridad durante trabajos de mantenimiento."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(6)_resultaat.png",
            description: "Construcción industrial de andamios para revisión de máquinas con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(7)_resultaat.png",
            description: "Construcción industrial de andamios para revisión de máquinas con medidas de seguridad integradas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(8)_resultaat.png",
            description: "Construcción industrial de andamios para revisión de máquinas con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(5)_resultaat.png",
            description: "Andamio de inspección completo con plataformas de seguridad integradas para mantenimiento de depuración de agua."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(17)_resultaat.png",
            description: "Construcción industrial de andamios para revisión de máquinas con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(15)_resultaat.png",
            description: "Construcción industrial de andamios para revisión de máquinas con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(10)_resultaat.png",
            description: "Andamio para mantenimiento de máquinas en ambiente industrial. Industria alimentaria."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-machine-revisie(11)_resultaat.png",
            description: "Construcción industrial de andamios para revisión de máquinas con medidas de seguridad integradas y accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-steiger-installatie-techniek-industie-plat-twee-levels-plat-dak_resultaat.png",
            description: "Situación de instalación de andamios en ambiente industrial con techos planos."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/situatie-voor-het-plaatsen-van-de-industriële-steiger-tilburg_resultaat.png",
            description: "Situación para colocar el andamio industrial en Tilburgo. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-industrie-installatie-machine-tilburg_resultaat.png",
            description: "Proyecto de revisión de máquinas en Área Industrial Sur de Helmond. Construcción especializada de andamios para mantenimiento industrial."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (12)_resultaat.png",
            description: "Construcción industrial de andamios con plataforma de trabajo para revisión de máquinas. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-14-hoogte-vrije-werkvloer_resultaat.png",
            description: "Construcción industrial de andamios con plataforma de trabajo de 14 metros de altura libre para revisión de máquinas. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-distributie-centrum_resultaat.png",
            description: "Construcción industrial de andamios en centro de distribución. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-waalwijk-industrie-werkvloer-14-hoog-_resultaat.png",
            description: "Construcción industrial de andamios en Waalwijk con plataforma de trabajo a 14 metros de altura. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerconstructie-industriele-lopende-band_resultaat.png",
            description: "Construcción de andamios personalizada para banda transportadora industrial. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-steiger-werkvloer-industrie (5)_resultaat.png",
            description: "Construcción industrial de andamios con plataforma de trabajo para revisión de máquinas. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-steigerbouw-werkvloer-met-leuningen_resultaat.png",
            description: "Construcción segura de andamios con plataforma de trabajo y barandillas para revisión de máquinas industriales. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerconstructie-binnen-distributiecentrum_resultaat.png",
            description: "Construcción de andamios industrial dentro de centro de distribución. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/32-meter-lang-3-meter-breed-14-hoog-tijdelijke-werkvoer-vrij-platform_resultaat.png",
            description: "Plataforma de trabajo temporal de 32 metros de largo, 3 metros de ancho y 14 metros de alto con plataforma libre para revisión de máquinas industriales. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/montage-werkvloer-waalwijk-steigerbouw_resultaat.png",
            description: "Montaje de plataforma de trabajo en Waalwijk para construcción industrial de andamios. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriele-steigerbouw-lopende-band-overbrugging_resultaat.png",
            description: "Construcción industrial de andamios con banda transportadora sobrecargada. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-werkvloer-distributiecentrum-transportsysteem_resultaat.png",
            description: "Construcción industrial de andamios con plataforma de trabajo en centro de distribución para sistema de transporte. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilig-steiger-looppad-industriele-hal_resultaat.png",
            description: "Andamio seguro con pasillo en nave industrial. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steiger-interne-transportsystemen-waalwijk_resultaat.png",
            description: "Andamio personalizado para sistemas de transporte internos en Waalwijk. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/veilige-industriesteiger-tussen-ruimtes-logistiek_resultaat.png",
            description: "Andamio industrial seguro entre espacios en centro logístico. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/complexe-steigerbouw-logistieke-sector-brabant_resultaat.png",
            description: "Construcción compleja de andamios en el sector logístico en Brabante. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industriesteiger-transportband-bol-com-waalwijk_resultaat.png",
            description: "Andamio industrial para banda transportadora en Bol.com en Waalwijk. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/industrie-steiger-steigernontage-transportband-steigerbouw-machinepark_resultaat.png",
            description: "Andamio industrial para montaje de banda transportadora en parque de máquinas. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-vrijstaande-werkvloer-industrie-aanleg-machinepark-1_resultaat.png",
            description: "Andamio independiente en instalación industrial. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/ruimtelijke-steigerconstructie-twee-etages-transportband_resultaat.png",
            description: "Construcción de andamios espacial con dos plantas para banda transportadora. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-montage-distributiecentrum-bol-com_resultaat.png",
            description: "Montaje de andamios en centro de distribución Bol.com. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steigerbouw-distributiecentrum-waalwijk-machinepark_resultaat.png",
            description: "Construcción de andamios en centro de distribución Waalwijk para parque de máquinas. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat_resultaat.png",
            description: "Andamio para entrar en pozo en ambiente industrial. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-mangat-industrie-opslagtank-zuiveren-brabant-water_resultaat.png",
            description: "Andamio para entrar en pozo en ambiente industrial. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/steiger-betreden-besloten-ruimte_resultaat.png",
            description: "Andamio para entrar en espacio cerrado en ambiente industrial. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        }
    ],
    utilidad: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/detail-steiger-werkvloer-kantplanken_resultaat.png",
            description: "Detalle de plataforma de trabajo de andamios con tablones de borde para seguridad adicional."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/maatwerk-steigerbouw-locatie-waterzuivering_resultaat.png",
            description: "Construcción personalizada de andamios en ubicación de depuración de agua. Construcción especializada de andamios para una accesibilidad óptima y seguridad."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/industrie/leuningwerk-inspectiesteiger-waterzuivering-industrie_resultaat.png",
            description: "Trabajo de barandilla para andamio de inspección en ubicación de depuración de agua."
        }
    ],
    obraNueva: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/metselsteiger-afbouwfase-woningbouw-brabant_resultaat.png",
            description: "Andamio de albañilería fase de acabado construcción viviendas Brabante."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/zware-systeemsteigers-woningbouwproject_resultaat.png",
            description: "Andamios de sistemas pesados para proyectos de construcción de viviendas."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/nieuwbouw/afbouwen-metselsteiger-gorichem-nieuwbouw-woningbouw-project_resultaat.png",
            description: "Acabado andamio de albañilería en proyecto de construcción de viviendas en Gorichem. Construcción especializada de andamios para construcción de viviendas."
        }
    ],
    renovacion: [
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/steigerbouw-werkvloer-trottoir-smalle-straat_resultaat.png",
            description: "Construcción personalizada de andamios de albañilería para renovación de vivienda en calle estrecha. La plataforma de trabajo se coloca en la acera para garantizar accesibilidad óptima."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/technische-situatieschets-steigerbouw-voorgevel_resultaat.png",
            description: "Esquema técnico de situación de la construcción de andamios para la fachada frontal de un proyecto de renovación."
        },
        {
            image: "https://www.steigerbouwbrabant.nl/beeldmateriaal/renovatie/smalle-gevelsteiger-binnenstad-renovatie_resultaat.png",
            description: "Andamio de fachada estrecho personalizado para renovación de vivienda en el centro de la ciudad. El andamio está especialmente diseñado para caber en calles estrechas."
        }
    ]
};

function crearProyeccion(idContenedor, diapositivas) {
    if (!diapositivas || diapositivas.length === 0) return;
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    // Formar diapositivas
    diapositivas.forEach((datosDiapo, indice) => {
        const diapo = document.createElement('div');
        diapo.className = 'compact-slide';
        if (indice === 0) diapo.classList.add('active');

        if (datosDiapo.image) {
            const urlImagen = normalizarUrlMedias(datosDiapo.image);
            const altImagen = obtenerDescripcionMostrada(datosDiapo.description || `Diapositiva ${indice + 1}`);
            diapo.innerHTML = `
                <img src="${urlImagen}" alt="${altImagen}">
                ${altImagen}
            `;
        } else if (datosDiapo.video) {
            const cartelVideo = obtenerUrlCartelMedias(datosDiapo.video);
            const descripcionVideo = obtenerDescripcionMostrada(datosDiapo.description || '');
            diapo.innerHTML = `
                ${descripcionVideo}
                <video controls poster="${cartelVideo}" style="width: 100%; max-width: 600px;">
                    <source src="${datosDiapo.video}" type="video/mp4">
                    Su navegador no admite la etiqueta de vídeo.
                </video>
            `;
        }
        contenedor.appendChild(diapo);
    });

    const elementosDiapo = contenedor.querySelectorAll('.compact-slide');
    if (!elementosDiapo.length) return;

    let diapoActual = 0;
    function siguienteDiapo() {
        elementosDiapo[diapoActual].classList.remove('active');
        diapoActual = (diapoActual + 1) % elementosDiapo.length;
        elementosDiapo[diapoActual].classList.add('active');
    }
    // Asegurar que el intervalo solo se ejecuta si hay más de 1 diapositiva
    if (elementosDiapo.length > 1) setInterval(siguienteDiapo, 4500);
}

// Inicializador seguro único después de DOM listo
document.addEventListener('DOMContentLoaded', function () {
    try {
        const mapaCategoria = {
            industria: 'Industria',
            obraNueva: 'Obra Nueva',
            renovacion: 'Renovación',
            utilidad: 'Utilidad'
        };

        document.querySelectorAll('.compact-slideshow').forEach(seccion => {
            const clave = seccion.id || '';
            seccion.dataset.category = clave.startsWith('videos') ? 'video' : (mapaCategoria[clave] ? clave : seccion.dataset.category || clave);
            seccion.dataset.label = mapaCategoria[clave] || clave;
            seccion.dataset.searchText = `${seccion.dataset.label} ${clave} ${seccion.innerText || ''}`.toLowerCase();
        });

        // Inicializar proyecciones (verifica si los contenedores existen)
        Object.entries(datosProyeccion).forEach(([id, diapositivas]) => {
            crearProyeccion(id, diapositivas);
            const seccion = document.getElementById(id);
            if (seccion) {
                seccion.dataset.searchText = `${seccion.dataset.label || ''} ${id} ${diapositivas.map(diapo => `${diapo.description || ''} ${diapo.image || ''} ${diapo.video || ''}`).join(' ')}`.toLowerCase();
            }
        });

        const campoBusqueda = document.getElementById('gallerySearch');
        const botonesCategoria = document.querySelectorAll('.gallery-filter-btn');
        const seccionesGaleria = document.querySelectorAll('.compact-slideshow');
        let categoriaActiva = 'all';

        function normalizarTextoBusqueda(texto) {
            return (texto || '').toLowerCase().replace(/\s+/g, ' ').trim();
        }

        function aplicarFiltroGaleria() {
            if (!campoBusqueda) return;
            const terminoBusqueda = normalizarTextoBusqueda(campoBusqueda.value);
            seccionesGaleria.forEach(seccion => {
                const textoSeccion = normalizarTextoBusqueda(seccion.dataset.searchText || '');
                const coincidenCategoria = categoriaActiva === 'all' || seccion.dataset.category === categoriaActiva;
                const coincideBusqueda = !terminoBusqueda || textoSeccion.includes(terminoBusqueda);
                const debesMostrar = coincidenCategoria && coincideBusqueda;
                const pantallaPrincipal = seccion.dataset.initialDisplay || '';
                const valorPantalla = pantallaPrincipal === 'none' ? 'block' : pantallaPrincipal;
                seccion.style.display = debesMostrar ? valorPantalla : 'none';
            });
        }

        seccionesGaleria.forEach(seccion => {
            seccion.dataset.initialDisplay = seccion.style.display || '';
        });

        botonesCategoria.forEach(boton => {
            boton.addEventListener('click', function () {
                categoriaActiva = boton.dataset.category || 'all';
                botonesCategoria.forEach(btn => btn.classList.remove('active'));
                boton.classList.add('active');
                aplicarFiltroGaleria();
            });
        });

        if (campoBusqueda) {
            campoBusqueda.addEventListener('input', aplicarFiltroGaleria);
            aplicarFiltroGaleria();
        }

        const contenedorVídeoExtra = document.getElementById('extraVideos');
        if (contenedorVídeoExtra) contenedorVídeoExtra.style.display = 'none';
    } catch (err) {
        // Registro silencioso previene rotura de sitio
        console.error('Error de inicialización de script:', err);
    }
});

// Funciones auxiliares
function mostrarMásDiapositivas() {
    const diapositivas = document.querySelectorAll('.compact-slideshow[style*="display: none"]');
    diapositivas.forEach((diapo, indice) => {
        if (indice < 5) diapo.style.display = 'block';
    });
}

function mostrarMásFotos() {
    alert('Se están cargando más fotos...');
}

function mostrarMásVídeos() {
    const extraVídeos = document.getElementById('extraVideos');
    if (!extraVídeos) return;
    extraVídeos.style.display = extraVídeos.style.display === 'none' ? 'block' : 'none';
}

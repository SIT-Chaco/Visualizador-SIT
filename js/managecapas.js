// Inicializar el mapa
const map = L.map('map').setView([-26.427, -60.452], 8);

// Añadir capa base (MAPA)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19
}).addTo(map);

// Definir la dirección de GeoServer
const ipgeoserver = 'http://localhost'; 


// TRAE CAPAS DE GEOSERVER AL MAPA - ACÁ SE AGREGAN MAS CAPAS :)

// Traer capa WMS Parcelario
const parcelarioLayer = L.tileLayer.wms(ipgeoserver + ':8080/geoserver/wms', {
    layers: 'VisualizadorSIT:PARCELARIO_URBANO_2021', 
    format: 'image/png',
    transparent: true,
    opacity: 0.8,
    maxZoom: 19
});

// Traer capa WFS Parcelario
const redVialLayer = L.tileLayer.wms(ipgeoserver + ':8080/geoserver/wms', {
    layers: 'VisualizadorSIT:RED_VIAL', 
    format: 'image/png',
    transparent: true,
    opacity: 0.8,
    maxZoom: 19
});



// PRENDIDO/APAGADO CON ICONO DE OJO

// Variables para controlar el estado de las capas 
let isParcelarioVisible = false;
let isRedVialVisible = false;

// Función para agregar o quitar la capa del mapa 
function toggleLayer(layer, isVisible) {
    if (isVisible) {
        layer.addTo(map);
    } else {
        map.removeLayer(layer);
    }
}

// Manejo de clics en el panel de capas (general y para transparencia)
document.getElementById('capa1').addEventListener('click', function(event) {
    if (event.target.tagName !== 'INPUT') { // Ignorar el clic si se hace en el control deslizante
        isParcelarioVisible = !isParcelarioVisible; // Cambiar el estado de visibilidad
        toggleLayer(parcelarioLayer, isParcelarioVisible);

        // Cambiar el ícono según la visibilidad
        const icono = document.querySelector('#capa1 .icono-ojo');
        icono.src = isParcelarioVisible ? './assets/iconos/icon_eyeopen.png' : './assets/iconos/icon_eyeclose.png';

        console.log(`Parcelario visible: ${isParcelarioVisible}`); // Log para depuración
    }
});

// Manejo de clics en el panel de capas para la Red Vial
document.getElementById('capa2').addEventListener('click', function(event) {
    if (event.target.tagName !== 'INPUT') { // Ignorar el clic si se hace en el control deslizante
        isRedVialVisible = !isRedVialVisible; // Cambiar el estado de visibilidad
        toggleLayer(redVialLayer, isRedVialVisible);

        // Cambiar el ícono según la visibilidad
        const icono = document.querySelector('#capa2 .icono-ojo');
        icono.src = isRedVialVisible ? './assets/iconos/icon_eyeopen.png' : './assets/iconos/icon_eyeclose.png';

        console.log(`Red vial visible: ${isRedVialVisible}`); // Log para depuración
    }
});



// BARRA DE TRANSPARENCIA

// Función para actualizar la transparencia de las capas
function updateTransparency(layer, value) {
    layer.setOpacity(value / 100); 
}

// Manejo del control deslizante de transparencia para Parcelario
document.getElementById('transparency1').addEventListener('input', function(event) {
    updateTransparency(parcelarioLayer, this.value);
    console.log(`Transparencia Parcelario: ${this.value}%`); // Log para depuración
});

// Manejo del control deslizante de transparencia para Red Vial
document.getElementById('transparency2').addEventListener('input', function(event) {
    updateTransparency(redVialLayer, this.value);
    console.log(`Transparencia Red Vial: ${this.value}%`); // Log para depuración
});



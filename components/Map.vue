<template>
  <div class="map-wrapper">
    <div id="map" />
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import L from 'leaflet'
import 'leaflet-routing-machine'

// lifeCicle
onMounted(() => {
  navigator.geolocation.getCurrentPosition(successGeolocation, errorGeolocation)
})

onBeforeMount(() => {
  if (map) map.remove()
})

// props
const props = defineProps({ 
  markers: {
    type: Array,
    required: false,
    default: () => []
  }
})

// datas
let map = null
const monteMillzaoCoords = reactive([-23.375957160878425, -46.30859374020185])
let userCoords = reactive({})

// methods
const successGeolocation = async ({ coords }) => {
  userCoords = await coords
  createMapLayer(userCoords.latitude, userCoords.longitude)
}

const errorGeolocation = async (value) => {
  console.log('error', value)
}

const createMapLayer = (lat, long) => {
  map = L.map('map').setView([lat, long], 16)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
      
  const routingControl = L.Routing.control({
    show: false,
    language: 'pt-BR',
    draggableWaypoints: false,
    routeWhileDragging: false,
    addWaypoints: false,
		waypoints: [
			L.latLng(lat, long),
      L.latLng(monteMillzaoCoords)
		],
    lineOptions: {
      styles: [
        {
          color: 'red',
          opacity: 1,
          weight: 5
        }
      ]
    },
    routeLineThickness: 5
  }).addTo(map)

  L.marker([lat, long]).addTo(map).bindPopup('Você está aqui')
  L.marker(monteMillzaoCoords).addTo(map).bindPopup('Onde o casório acontece')

  map.flyTo(monteMillzaoCoords, 13, {
    duration: 2, // duração em segundos
    easeLinearity: 0.25,
    noMoveStart: true
  })

  //events do mapa
  map.on('click', ({ target, latlng }) => {
    
  })

  routingControl.on('linetouched', (e) => {
    console.log('Waypoints changed', e);
  })


  const CustomControl = L.Control.extend({
  onAdd: function() {
    // cria um elemento de div para a control
    const controlDiv = L.DomUtil.create('div', 'custom-control');
    // cria um botão com o texto 'Clique aqui!'
    const button = L.DomUtil.create('button', 'custom-button', controlDiv);
    button.innerHTML = 'Clique aqui!';
    // adiciona um evento de clique ao botão
    L.DomEvent.on(button, 'click', () =>   map.flyTo(monteMillzaoCoords, 18, {
    duration: 2, // duração em segundos
    noMoveStart: true
  }));
    // retorna a div control criada
    return controlDiv;
  },
});
const zoomControl = L.control({ position: 'bottomright' });

zoomControl.onAdd = function(map) {
  const div = L.DomUtil.create('div', 'zoom-control');
  div.innerHTML = `Zoom: ${map.getZoom()}`;
  return div;
};

zoomControl.addTo(map);

// adiciona a nova classe de controle ao mapa
const customControl = new CustomControl({ position: 'topright' });
map.addControl(customControl);
        
}
</script>

<style scoped>
.map-wrapper {
  position: relative;
  width: 400px;
  height: 300px;
}

#map {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

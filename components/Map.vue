<template>
  <div class="map-wrapper">
    <div id="map" />

    <div v-if="showOptions" id="menu" class="z-40" style="top: 3em;">
      <div class="mapboxgl-ctrl mapboxgl-ctrl-group mb-5">
        <button @click="flysToChurch" title="Go to church" :disabled="!canFlyTo">
          <NuxtImg format="webp" class="mx-auto" src="https://cdn-icons-png.flaticon.com/512/345/345811.png" width="24" alt="" />
        </button>
      </div>

      <div class="mapboxgl-ctrl mapboxgl-ctrl-group">
        <button @click="toggleMapDirections" title="Show directions">
          <NuxtImg format="webp" class="mx-auto" src="https://cdn-icons-png.flaticon.com/512/879/879677.png" width="24" alt="" />
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapPopup from './MapPopup.vue'
import { createApp } from 'vue'

// lifeCicle
onMounted(() => {
  navigator.geolocation.getCurrentPosition(successGeolocation, errorGeolocation, {
    enableHighAccuracy: true,
    timeout:27000
  })
})

onBeforeMount(() => {
  if (map) map.remove()
})

onBeforeUnmount(() => {
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
const monteMillzaoCoords = reactive([-46.30859374020185, -23.375957160878425])
const config = useRuntimeConfig()
let menuDirection = ref(true)
let canFlyTo = ref(true)
let showOptions = ref(false)


// methods
const successGeolocation = async ({ coords }) => {
  if (map !== null)  map.remove()

  createMapLayer(coords.longitude, coords.latitude)
}

const errorGeolocation = async (value) => {
  console.log('error', value)
}

const createMarker = async (title, description) => {
  const popupComponent = createApp(MapPopup, { title, description })

  const popupContainer  = document.createElement('div')
  popupComponent.mount(popupContainer)

  const popupHtml = popupContainer.outerHTML

  return popupHtml
}

const createMapLayer = (long, lat) => {
  let userMarker = null
  
  // Inicializa o Mapa
  map = new mapboxgl.Map({
    accessToken: config.mapboxKey,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [long, lat],
    zoom: 15,
    minZoom: 10,
    maxZoom: 16
  })

  const directions = new MapboxDirections({
    accessToken: config.mapboxKey,
    interactive: false,
    controls: {
      inputs: false,
      instructions: true,
      profileSwitcher: false
    },
    unit: 'metric',
    // geocoder: false,
    profile: 'mapbox/driving',
    language: 'pt-BR'
  })

  map.addControl(directions, 'top-right')
  map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
  
  // ---- EVENTOS ----
  
  // Evento ao carregar
  map.on('load', async () => {
    // Quando o mapa carregar, add os dois pontos.

    directions.setOrigin([long, lat])
    directions.setDestination(monteMillzaoCoords)

    if (userMarker !== null) userMarker.remove()

    userMarker = new mapboxgl.Marker()
      .setLngLat([long, lat])
      .addTo(map)
      .setPopup(new mapboxgl.Popup({ offset: [0, -20] }).setText('Voce está aqui'))

    map.flyTo({ center: [long, lat], essential: true })
  
    map.loadImage('https://cdn-icons-png.flaticon.com/512/1806/1806468.png', function(error, image) {
      if (error) throw error
      map.addImage('custom-marker', image)
      map.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: monteMillzaoCoords,
              },
            },
          ],
        },
      })
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'points',
        layout: {
          'icon-image': 'custom-marker',
          'icon-size': 0.09,
          'icon-allow-overlap': true,
          'icon-ignore-placement': true
        },
      })
    })

    showOptions.value = true
  })

  // evento ao clicar no ponto
  map.on('click', 'points', async function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice()
    const ele = await createMarker('Monte Millazzo', 'O local onde a nossa união será abençoada para sempre diante dos olhos de Deus. E para nós, é uma honra ter pessoas tão queridas vivenciando esse momento ao nosso lado.')
    
    // Crie o popup
    new mapboxgl.Popup({ offset: [0, -20] })
      .setLngLat(coordinates)
      .setHTML(ele)
      .addTo(map)
  })

  map.on('moveend', () => {
    canFlyTo.value = true
  })
}

const toggleMapDirections = () => {
  menuDirection.value = !menuDirection.value
  const menu = document.getElementsByClassName('mapboxgl-ctrl-directions')[0]

  if (menuDirection.value) menu.style.display = 'block'
  else menu.style.display = 'none'
}

const flysToChurch = () => {
  // Arredonda as coordenadas para 6 casas decimais
  const roundedCoords = monteMillzaoCoords.map(coord => Number(coord.toFixed(6)))
  // Verifica se a posição atual do mapa é diferente da posição para onde você quer voar
  if (map.getCenter().lng.toFixed(6) !== roundedCoords[0].toFixed(6) || map.getCenter().lat.toFixed(6) !== roundedCoords[1].toFixed(6)) {

    canFlyTo.value = false
    // Move o mapa para as novas coordenadas
    map.flyTo({
      center: roundedCoords,
      essential: true
    })
  }
}
</script >

<style>
.map-wrapper {
  position: relative;
  height: 100%;
  padding: 0px 1rem 1rem 1rem;
  padding: 0px 1vmin 1vmin 1vmin;
  z-index: 20 !important;
}

#map {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 20 !important;
  position: absolute; 
  top: 0; 
  bottom: 0; 
  width: 100%;
  height: 100%;
}

#menu {
  position: absolute;
  padding: 10px;
  font-family: 'Open Sans', sans-serif;
}

#menu button {
  background-color: white;
  border: 0;
  cursor: pointer;
  height: 29px;
  outline: none;
  overflow: hidden;
  padding: 0;
  width: 29px;
  box-shadow: 0 0 0 2px rgba(0,0,0,.1);
  border-radius: 4px;
}

#menu button:hover { background-color: rgb(0 0 0/5%); }

.mapboxgl-popup-content {
  padding: 10px 26px 15px !important;
}

.mapboxgl-popup-close-button {
  width: 22px;
  font-size: 23px;
}
</style>

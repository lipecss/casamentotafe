<template>
  <div class="map-wrapper">
    <div id="map" />
  </div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import teste from './teste.vue'
import { createApp } from 'vue';

// lifeCicle
onMounted(() => {
  navigator.geolocation.getCurrentPosition(successGeolocation, errorGeolocation, {
    enableHighAccuracy: true,
    maximumAge:30000,
    timeout:27000
  })
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
const monteMillzaoCoords = reactive([-46.30859374020185, -23.375957160878425])
let userCoords = reactive({})
const config = useRuntimeConfig()

console.log('teste', teste)


// methods
const successGeolocation = async ({ coords }) => {
  console.log('coords', coords.longitude, coords.latitude)
  console.log('apiBaseUrl', config.apiBaseUrl)
  userCoords = await coords
  createMapLayer(coords.longitude, coords.latitude)
}

const errorGeolocation = async (value) => {
  console.log('error', value)
}

const createMapLayer = (long, lat) => {
  // Inicializa o Mapa
  const map = new mapboxgl.Map({
    accessToken: config.mapboxKey,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: monteMillzaoCoords,
    zoom: 10,
    // minZoom: 10,
    // maxZoom: 16
  })

  const popupComponent = createApp(teste);

  const popupContainer  = document.createElement('div')
  popupComponent.mount(popupContainer);

  const popupHtml = popupContainer.outerHTML;

  map.on('load', async () => {
    /* Quando o mapa carregar, add os dois pontos.
     Aqui mockei os dois valores: Origem e Destino
    */
    // directions.setOrigin(startPoint)
    // directions.setDestination(endPoint)

    // directions.setOrigin([-40.429616073599, -23.52881527141651]);
    // directions.setDestination(monteMillzaoCoords);

    let currentPosition = new mapboxgl.Marker()
      .setLngLat([lat, long])
      .setPopup(new mapboxgl.Popup().setHTML(popupHtml))
      .addTo(map)
  
    map.loadImage('https://cdn-icons-png.flaticon.com/512/5385/5385449.png', function(error, image) {
      if (error) throw error;
      map.addImage('custom-marker', image);
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
      });
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'points',
        layout: {
          'icon-image': 'custom-marker',
          'icon-size': 0.09,
        },
      });
    }); 

    // var el = document.createElement('div');
    //     el.className = 'marker';
    //     el.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/5385/5385449.png)';
    //     el.style.width = '54px';
    //     el.style.height = '54px';
    //     el.style.backgroundRepeat = 'no-repeat'
         
    // new mapboxgl.Marker()
    // .setLngLat(monteMillzaoCoords)
    // .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
    // .addTo(map)
  })

  map.on('click', 'points', function(e) {
    console.log('aaaa', e)
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = 'Descrição do popup';
    // Crie o popup
    var popup = new mapboxgl.Popup({ offset: [0, -20] })
      .setLngLat(coordinates)
      .setHTML(popupHtml)
      .addTo(map)
  });
}
</script>

<style scoped>
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
  outline: 1px solid black;
  z-index: 20 !important;
}
</style>

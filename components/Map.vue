<template>
  <div class="map-wrapper">
    <div id="map" />
  </div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapPopup from './MapPopup.vue'
import { createApp } from 'vue'

// lifeCicle
onMounted(() => {
  createMapLayer()
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
const locations = reactive([
  {
    name: 'Hotel Bela Vista Arujá',
    coordinates: [-46.3190202984969, -23.394156886674338],
    address: 'R. João Nepomuceno, 51 - Barbosas, Arujá - SP, 07402-070',
    urlLocation: 'https://www.google.com/maps?q=Hotel+Bela+Vista+Aruj%C3%A1&um=1&ie=UTF-8&sa=X&ved=2ahUKEwii66Li_oH-AhU2rJUCHegTAd0Q_AUoAXoECAEQAw',
    icon: 'custom-marker-2'
  },
  {
    name: 'Hotel Viverdi',
    coordinates: [-46.32144795668698, -23.396830571361555],
    address: 'Av. dos Expedicionários, 645 - Jardim Rincao, Arujá - SP, 07400-460',
    urlLocation: 'https://www.google.com/maps/place/Viverdi+Hotel/@-23.398042,-46.3237258,17z/data=!3m1!4b1!4m9!3m8!1s0x94ce877ee0caa94b:0x9bea4cf420ffe05d!5m2!4m1!1i2!8m2!3d-23.3980469!4d-46.3215371!16s%2Fg%2F11cm_h5nrm',
    icon: 'custom-marker-2'
  },
  {
    name: 'Hotel ibis Arujá',
    coordinates: [-46.325574975610124, -23.401286592544643],
    address: 'R. São José, 888 - Jardim Rincao, Arujá - SP, 07400-405',
    urlLocation: 'https://www.google.com/maps/place/ibis+Aruj%C3%A1/@-23.4022469,-46.3276018,17z/data=!3m1!4b1!4m9!3m8!1s0x94ce51bade72a58d:0x7c255c24793697df!5m2!4m1!1i2!8m2!3d-23.4022518!4d-46.3254131!16s%2Fg%2F11scjvrkms',
    icon: 'custom-marker-2'
  },
  {
    name: 'Hotel Arujá',
    coordinates: [-46.3190202984969, -23.4009523961578],
    address: 'R. Bogotá, 100 - 105 - Jardim Fazenda Rincao, Arujá - SP, 07400-420',
    urlLocation: 'https://www.google.com/maps/place/Hotel+Aruj%C3%A1/@-23.4006538,-46.3236492,17z/data=!4m13!1m2!2m1!1sHotel+Aruj%C3%A1!3m9!1s0x94ce7d8739ced23f:0x1cc7d259ecab1ac6!5m2!4m1!1i2!8m2!3d-23.401971!4d-46.3187095!15sCgxIb3RlbCBBcnVqw6GSAQVob3RlbOABAA!16s%2Fg%2F1tf66m51',
    icon: 'custom-marker-2'
  },
  {
    name: 'Sitio Green field',
    coordinates: [-46.30541483864314, -23.36126855255659],
    address: 'Estr. dos Correas, 3330, Arujá - SP, 07424-000',
    urlLocation: 'https://www.google.com/maps/place/Green+field+eventos/@-23.3619925,-46.3077752,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce8757b3350317:0x83a2a47b0ad676c9!8m2!3d-23.3619974!4d-46.3055865!16s%2Fg%2F11qh8rjsr7',
    icon: 'custom-marker-2'
  }
])

// methods
const createMarker = async (title, urlLocation, address, description) => {
  const popupComponent = createApp(MapPopup, { title, urlLocation, address, description })

  const popupContainer = document.createElement('div')
  popupComponent.mount(popupContainer)

  const popupHtml = popupContainer.outerHTML

  return popupHtml
}

const createMapLayer = () => {
  // Inicializa o Mapa
  map = new mapboxgl.Map({
    accessToken: config.mapboxKey,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-46.315027, -23.378157],
    zoom: 12.8,
    minZoom: 11,
    maxZoom: 16
  })

  // ---- EVENTOS ----

  // Evento ao carregar
  map.on('load', async () => {
    // Quando o mapa carregar, add os pontos.

    map.loadImage('https://cdn-icons-png.flaticon.com/512/1806/1806468.png', function (error, image) {
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

    map.loadImage('https://cdn-icons-png.flaticon.com/512/4524/4524932.png', function (error, image) {
      if (error) throw error
      map.addImage('custom-marker-2', image)
    })

    for (let i = 0; i < locations.length; i++) {
      const location = locations[i]

      map.loadImage('https://cdn-icons-png.flaticon.com/512/4524/4524932.png', function (error, image) {
        if (error) throw error
        map.addImage(`custom-marker-2-${i}`, image)

        map.addSource(`points2-${i}`, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: location.coordinates,
                },
              },
            ],
          },
        })

        map.addLayer({
          id: `points2-${i}`,
          type: 'symbol',
          source: `points2-${i}`,
          layout: {
            'icon-image': location.icon,
            'icon-size': 0.09,
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
          },
        })

        map.on('click', `points2-${i}`, async (e) => {
          var coordinates = e.features[0].geometry.coordinates.slice()
          const ele = await createMarker(location.name, location.urlLocation, location.address, 'Opção de local para voce se acomodar, nas proximidades do evento')

          // Crie o popup
          new mapboxgl.Popup({ offset: [0, -20] })
            .setLngLat(coordinates)
            .setHTML(ele)
            .addTo(map)
        })
      })
    }
  })

  // evento ao clicar no ponto
  map.on('click', 'points', async (e) => {
    var coordinates = e.features[0].geometry.coordinates.slice()
    const ele = await createMarker(
      'Monte Millazzo',
      'https://www.google.com/maps/place/Monte+Millazzo/@-23.3755959,-46.308824,18z/data=!4m6!3m5!1s0x94ce874fda6a0f9b:0x8fc9c9bfdc4e6eaa!8m2!3d-23.3760606!4d-46.3085915!16s%2Fg%2F11js2nxqbx',
      'Rua Paulo Antônio, R. Paulo A Barbosa, 290 - Jardim Aruja, Arujá - SP, 07407-375',
      'O local onde a nossa união será abençoada para sempre diante dos olhos de Deus. E para nós, é uma honra ter pessoas tão queridas vivenciando esse momento ao nosso lado.'
    )

    // Crie o popup
    new mapboxgl.Popup({ offset: [0, -20] })
      .setLngLat(coordinates)
      .setHTML(ele)
      .addTo(map)
  })
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
  box-shadow: 0 0 0 2px rgba(0, 0, 0, .1);
  border-radius: 4px;
}

#menu button:hover {
  background-color: rgb(0 0 0/5%);
}

.mapboxgl-popup-content {
  padding: 10px 26px 15px !important;
}

.mapboxgl-popup-close-button {
  width: 22px;
  font-size: 23px;
}
</style>

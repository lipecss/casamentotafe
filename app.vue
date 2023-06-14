<template>
  <ClientOnly fallback-tag="span">
    <CookieAlert />
  </ClientOnly>

  <ClientOnly v-if="showParticles">
    <Particles class="relative" id="teste" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
      :options="options" />
  </ClientOnly>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { loadFull } from 'tsparticles'

const { isBeforeWedding } = statusStore()

// computed
const showParticles = computed(() => {
  return !isBeforeWedding && useRoute().meta.middleware[0] === 'general'
})

const particlesInit = async engine => {
  await loadFull(engine);
}

const options = ref({
  "fullScreen": {
    "zIndex": 1
  },
  "particles": {
    "number": {
      "value": 0
    },
    "color": {
      "value": [
        "#00FFFC",
        "#FC00FF",
        "#fffc00"
      ]
    },
    "shape": {
      "type": [
        "circle",
        "character"
      ],
      "options": {
        "character": {
          "fill": true,
          "font": "Verdana",
          "style": "",
          "weight": 400,
          "particles": {
            "size": {
              "value": 12
            }
          },
          "value": [
            "❤️",
            "💗",
            "🍀",
            "💕",
            "💙",
            "⭐️"
          ]
        }
      }
    },
    "opacity": {
      "value": 1,
      "animation": {
        "enable": true,
        "minimumValue": 0,
        "speed": 2,
        "startValue": "max",
        "destroy": "min"
      }
    },
    "size": {
      "value": 5,
      "random": {
        "enable": true,
        "minimumValue": 2
      }
    },
    "life": {
      "duration": {
        "sync": true,
        "value": 6
      },
      "count": 2
    },
    "move": {
      "enable": true,
      "gravity": {
        "enable": true,
        "acceleration": 2
      },
      "speed": {
        "min": 10,
        "max": 60
      },
      "decay": 0.1,
      "direction": "none",
      "straight": false,
      "outModes": {
        "default": "destroy",
        "top": "none"
      }
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "move": true,
      "animation": {
        "enable": true,
        "speed": 120
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "move": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 25
      },
      "enable": true,
      "speed": {
        "min": 15,
        "max": 25
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "move": true,
      "speed": {
        "min": -15,
        "max": 15
      }
    }
  },
  "emitters": {
    "life": {
      "count": 0,
      "duration": 0.1,
      "delay": 0.4
    },
    "rate": {
      "delay": 0.1,
      "quantity": 150
    },
    "size": {
      "width": 0,
      "height": 0
    }
  }
})

const particlesLoaded = async container => {
  console.log("Particles container loaded")
}
</script>

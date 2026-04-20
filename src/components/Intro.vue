<template>
  <div class="v-intro">
    <!-- Full-screen background image -->
    <div class="v-intro__bg"></div>

    <!-- Centered intro card -->
    <div
        class="v-intro__card"
        @click="openMainContent"
        ref="introCard"
    >
      <div class="v-intro__card__content">
        <div class="v-intro__card__content__title m-remove-child-margin">
          <h1>
            Martin+Angela Ott
            <br>Montmirail 2
            <br>CH-2075 Thielle
          </h1>
        </div>
        <div class="v-intro__card__content__text m-remove-child-margin">
          <p class="font-strong font-small">
            PRODUITS BIO DE LA FERME DE MONTMIRAIL
            <br>FRUITS DE SAISON, VIANDE, MIEL ET +
            <br>VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue"
import { useGlobalState } from "@/stores/globalState"
import { mobilMinWidth } from "@/main"

const globalState = useGlobalState()
const introCard = ref<HTMLElement | null>(null)

/**
 * Handles the transition from intro screen to main content.
 */
const openMainContent = () => {
  globalState.isOpen = true
  // Reset scroll and navigation state
  globalState.galleryScrollPosition = 0
  globalState.viewIDActive = "presentation"
  // Clean URL without adding history entry if needed, 
  // though pushState is used here to match original behavior.
  window.history.pushState({}, '', '/')
}

/**
 * Adjusts the intro card scale on small screens to ensure it fits.
 * The card is designed with fixed pixel dimensions (435x275) and 
 * is scaled down when the screen width is below mobilMinWidth.
 */
const resizeCard = () => {
  if (!introCard.value) return
  
  const width = window.innerWidth
  
  if (width < mobilMinWidth) {
    // The divisor (mobilMinWidth - 400 = 580) is likely a 
    // tuned value to make the card fit nicely.
    const scale = width / (mobilMinWidth - 400)
    introCard.value.style.transform = `scale(${scale}) translate(-50%, -50%)`
    introCard.value.style.transformOrigin = 'top left'
  } else {
    // Reset to default CSS transform (translate(-50%, -50%))
    introCard.value.style.transform = ""
    introCard.value.style.transformOrigin = ""
  }
}

onMounted(() => {
  nextTick(() => {
    resizeCard()
    window.addEventListener('resize', resizeCard)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCard)
})
</script>

<style lang="scss">
@import "@/assets/parameters";

.v-intro {
  position: relative;
  width: 100%;
  height: 100%;

  .v-intro__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/09.jpg');
    background-size: cover;
    background-position: center;
  }

  .v-intro__card {
    background-image: url("/web_frame.jpeg");
    background-size: auto 100%;
    background-position: center;
    position: absolute;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: bottom right;
    user-select: none;
    cursor: pointer;
    height: 275px;
    width: 435px;
    box-sizing: border-box;
  }

  .v-intro__card__content {
    padding: 20px 50px;
    text-align: center;
    background: var(--m-color-light);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .v-intro__card__content__text {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;

    p {
      white-space: nowrap;
      font-size: 15px;
      line-height: 16px;
    }
  }

  .v-intro__card__content__title {
    white-space: nowrap;
    position: absolute;
    top: 23px;
    left: 0;
    width: 100%;

    h1 {
      line-height: 40px;
      font-size: 38px;
    }
  }

  &.transition-intro-enter-active,
  &.transition-intro-leave-active {
    transition: opacity .5s .5s ease-in-out;

    .v-intro__card {
      transition: width .5s ease-in-out, height .5s ease-in-out;
    }

    .v-intro__card__content__text,
    .v-intro__card__content__title {
      transition: transform .25s ease-in-out, opacity .25s ease-in-out;
    }
  }

  &.transition-intro-enter-from,
  &.transition-intro-leave-to {
    opacity: 0;
    transform: none;

    .v-intro__card {
      width: 100%;
      height: 100%;
    }

    .v-intro__card__content__text {
      opacity: 0;
      transform: translate3d(0, -25px, 0);
    }

    .v-intro__card__content__title {
      opacity: 0;
      transform: translate3d(0, 25px, 0);
    }
  }
}
</style>

<template>
  <div class="v-view-home">

    <!-- Top Tagline: Visible when content is open -->
    <transition name="transition-intro">
      <div
          class="v-view-home__tagline-top font-strong"
          v-if="globalState.isOpen"
          @click="goToIntro"
      >PRODUITS DE LA FERME DE MONTMIRAIL</div>
    </transition>

    <!-- Navigation: Visible when content is open -->
    <transition name="transition-intro">
      <NavTop v-if="globalState.isOpen"></NavTop>
    </transition>

    <!-- Main Content: Visible when open -->
    <transition name="transition-intro">
      <Content v-if="globalState.isOpen"></Content>
    </transition>

    <!-- Intro Screen: Visible when NOT open -->
    <transition name="transition-intro">
      <Intro v-if="!globalState.isOpen"></Intro>
    </transition>

    <!-- Bottom Tagline with Bio Suisse logo: Visible when content is open -->
    <transition name="transition-intro">
      <div
          class="v-view-home__tagline-bottom font-small font-strong"
          v-if="globalState.isOpen"
          @click="goToIntro"
      >
        <img src="./../assets/logo_bio_suisse.svg" class="v-view-home__tagline-bottom__logo" alt="logo">
        <div>VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18</div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useGlobalState } from "@/stores/globalState"
import Intro from "@/components/Intro.vue"
import Content from "@/components/Content.vue"
import NavTop from "@/components/NavTop.vue"

const globalState = useGlobalState()

/**
 * Closes the main content and returns to the intro screen.
 */
const goToIntro = () => {
  globalState.isOpen = false
  // Clean URL without adding history entry
  window.history.pushState({}, '', '/')
}
</script>

<style lang="scss">
@import "@/assets/parameters";

.v-view-home {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/09.jpg');
  background-size: cover;
  background-position: center;

  .v-view-home__tagline-top,
  .v-view-home__tagline-bottom {
    position: fixed;
    margin: 0;
    white-space: nowrap;
    left: calc( (((100% -  var(--m-gutter) * 2) / 12 * 8) + var(--m-gutter)) / 2);
    z-index: 1000;
    cursor: pointer;
    transform: translate(-50%, 0);

    font-size: 1.4rem;
    line-height: 1.5rem;

    @media (max-width: $mobile-breakpoint) {
      left: 50%;
      //width: calc(100% - var(--m-gutter) * 2);
      white-space: normal;
    }
  }

  .v-view-home__tagline-top {
    top: calc( var(--m-gutter) * 2);
    transform-origin: center center;

    @media (max-width: $mobile-breakpoint) {
      //top: var(--m-gutter);
      text-align: center;
    }
  }

  .v-view-home__tagline-bottom {
    bottom: var(--m-gutter);
    width: calc((100% - var(--m-gutter) * 4) / 12 * 8);
    background: var(--m-color-light);
    text-align: center;
    padding-top: var(--m-gutter);
    padding-bottom: var(--m-gutter);

    .v-view-home__tagline-bottom__logo {
      display: block;
      height: 5rem;
      width: auto;
      position: absolute;
      right: 0;
      bottom: var(--m-gutter);

      @media (max-width: $mobile-breakpoint) {
        position: static;
        margin: 1rem auto 0;
      }
    }

    @media (max-width: $mobile-breakpoint) {
      bottom: var(--m-gutter);
      //width: 100%;
      width: calc(100% - var(--m-gutter) * 2);
    }
  }

  .v-nav-top {
    position: fixed;
    z-index: 100;
    top: var(--m-gutter);
    left: var(--m-gutter);
    width: calc( (100% - var(--m-gutter) * 2) / 12 * 8);

    @media (max-width: $mobile-breakpoint) {
      //top: 6rem;
      //left: 0;
      width: calc(100% - var(--m-gutter) * 2);
    }
  }
}

.transition-intro-enter-active {
  transition: opacity .75s .25s ease-in-out, transform .75s .25s ease-in-out;

  &.v-view-home__tagline-top,
  &.v-view-home__tagline-bottom {
    transition: opacity .5s .75s ease-in-out, transform .5s .75s ease-in-out;
  }

  &.v-nav-top {
    background: transparent !important;
    transition: opacity .75s .25s ease-in-out, transform .75s .25s ease-in-out, background .75s .25s ease-in-out;
  }
}

.transition-intro-leave-active {
  transition: opacity .75s 0s ease-in-out, transform .75s 0s ease-in-out;

  &.v-view-home__tagline-top,
  &.v-view-home__tagline-bottom {
    transition: opacity .5s 0s ease-in-out, transform .5s 0s ease-in-out;
  }

  &.v-nav-top {
    background: transparent !important;
    transition: opacity .75s 0s ease-in-out, transform .75s 0s ease-in-out, background .75s 0s ease-in-out;
  }
}

.transition-intro-enter-from,
.transition-intro-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0);

  &.v-view-home__tagline-top {
    transform: translate3d(-50%, 20px, 0);
  }

  &.v-view-home__tagline-bottom {
    transform: translate3d(-50%, -20px, 0);
  }
}
</style>

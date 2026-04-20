<template>
  <nav class="v-nav-top font-small">
    <div class="v-nav-top__list">
      <!-- Dynamically render navigation links -->
      <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ 'is-active': globalState.viewIDActive === item.id }"
      >
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useGlobalState } from "@/stores/globalState"

/**
 * Navigation items to display in the top bar.
 * id matches the section's ID in Content.vue for auto-highlighting.
 */
const navItems = [
  { id: 'presentation', label: 'Présentation' },
  { id: 'fruit',        label: 'Fruits du verger' },
  { id: 'produit',      label: 'Produits fruitiers' },
  { id: 'natura',       label: 'Natura-Beef' },
  { id: 'miel',         label: 'Miel' },
]

/**
 * Access the global store to track the active view ID.
 */
const globalState = useGlobalState()
</script>

<style lang="scss">
@import "@/assets/parameters";

.v-nav-top {
  box-sizing: border-box;
  padding: var(--m-gutter-xl) var(--m-gutter-xl) 2rem;
  background: var(--m-color-light);
  a {
    color: inherit;
    text-decoration: none;
  }

  .v-nav-top__list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    @media (max-width: $mobile-breakpoint) {
      //flex-wrap: wrap;
      //justify-content: center;
      gap: 1rem;
    }

    a {
      &.is-active {
        color: var(--m-color-secondary);
      }
    }
  }

  @media (max-width: $mobile-breakpoint) {
    //padding: 1rem;
  }
}
</style>

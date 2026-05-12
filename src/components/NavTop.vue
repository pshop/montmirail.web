<template>
  <nav class="v-nav-top font-small">
    <div class="v-nav-top__list">
      <!-- Dynamically render navigation links -->
      <template v-if="main_content">
        <a
            v-for="item in main_content.data"
            :key="item.html_id"
            :href="`#${item.html_id}`"
            :class="{ 'is-active': globalState.viewIDActive === item.html_id }"
        >
          {{item.titre}}
        </a>
      </template>
      <template v-else>
        <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            :class="{ 'is-active': globalState.viewIDActive === item.id }"
        >
        {{ item.label }}
      </a>
        </template>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useGlobalState } from "@/stores/globalState"
import {onMounted} from "vue"
import { storeToRefs } from "pinia"

const globalState = useGlobalState()
const { main_content} = storeToRefs(globalState)

let navItems = [
  { id: 'presentation', label: 'Hard coded' },
  { id: 'fruit',        label: 'Fruits du verger' },
  { id: 'produit',      label: 'Produits fruitiers' },
  { id: 'natura',       label: 'Natura-Beef' },
  { id: 'miel',         label: 'Miel' },
]

onMounted(async () => {
    await globalState.initData()
})

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
      flex-direction: column;
      gap: 1rem;
      line-height: 0.8rem;
    }

    a {
      &.is-active {
        color: var(--m-color-secondary);
      }
    }
  }

  @media (max-width: $mobile-breakpoint) {
    padding: var(--m-gutter);
  }
}
</style>

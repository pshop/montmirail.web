import {defineStore} from "pinia"
import { getMiel, getFruit, getNatura, getProduit, getPresentation, getListePrix } from "@/services/api";

/**
 * Global application state managed by Pinia.
 * Holds state shared across multiple components (navigation, view state, gallery position).
 */
export const useGlobalState = defineStore('globalState', {
  state: () => ({
    /**
     * Controls whether the intro card is open (showing the main content) or not.
     */
    isOpen: false,

    /**
     * Vertical scroll position (in pixels) for the image gallery in Content.vue.
     */
    galleryScrollPosition: 0,

    /**
     * Indicates if the application is currently fetching initial data from the API.
     */
    isLoading: false,

    /**
     * ID of the currently active/visible section in the Content view.
     * Used by NavTop to highlight the current navigation item.
     */
    viewIDActive: "presentation",

    // API Data
    presentation: null as any,
    fruit: null as any,
    produit: null as any,
    natura: null as any,
    miel: null as any,
    liste_prix: null as any,
    dataLoaded: false
  }),

  actions: {
    async initData() {
      if (this.dataLoaded || this.isLoading) return;

      this.isLoading = true;
      try {
        const results = await Promise.allSettled([
          getProduit(),
          getNatura(),
          getMiel(),
          getPresentation(),
          getFruit(),
          getListePrix()
        ])

        const getData = (result: PromiseSettledResult<any>) =>
            (result.status === 'fulfilled' && result.value.data) ? result.value.data.data : null

        if (results[0].status === 'fulfilled') this.produit = getData(results[0])
        if (results[1].status === 'fulfilled') this.natura = getData(results[1])
        if (results[2].status === 'fulfilled') this.miel = getData(results[2])
        if (results[3].status === 'fulfilled') this.presentation = getData(results[3])
        if (results[4].status === 'fulfilled') this.fruit = getData(results[4])

        const resListePrix = results[5].status === 'fulfilled' ? results[5].value.data : null
        if (resListePrix && resListePrix.length > 0) {
          this.liste_prix = resListePrix[0].url
        }

        this.dataLoaded = true;
      } catch (error) {
        console.error("Failed to fetch content in store:", error)
      } finally {
        this.isLoading = false
      }
    }
  }
})

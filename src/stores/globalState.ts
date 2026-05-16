import {defineStore} from "pinia"
import {getListePrixLink, getMainContent, getMainContentImages} from "@/services/api";

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
    main_content: null as any,
    main_content_images: null as any,
    liste_prix: null as any,
    dataLoaded: false
  }),

  actions: {
    async initData() {
      if (this.dataLoaded || this.isLoading) return;

      this.isLoading = true;
      try {
        const results = await Promise.allSettled([
          getMainContent(),
          getListePrixLink(),
          getMainContentImages(),
        ])

        const getData = (result: PromiseSettledResult<any>) =>
            (result.status === 'fulfilled' && result.value.data) ? result.value.data : null

        if (results[0].status === 'fulfilled'){
          this.main_content = getData(results[0])
        }
        if (results[1].status === 'fulfilled') {
          this.liste_prix = getData(results[1])
        }
        if (results[2].status === 'fulfilled') {
          this.main_content_images = getData(results[2])
          console.log(this.main_content_images)
        }

        this.dataLoaded = true
      } catch (error) {
        console.error("Failed to fetch content in store:", error)
      } finally {
        this.isLoading = false
      }
    }
  }
})

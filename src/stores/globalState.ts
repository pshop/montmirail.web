import {defineStore} from "pinia"


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
     * ID of the currently active/visible section in the Content view.
     * Used by NavTop to highlight the current navigation item.
     */
    viewIDActive: "presentation",
  }),
})

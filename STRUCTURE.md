# Project Structure Overview: Montmirail Web

This project is a Vue 3 single-page application (SPA) built with Vite, TypeScript, and Pinia for state management. It serves as a showcase and direct sales platform for the "Ferme de Montmirail".

## 📁 Directory Structure

- `src/`: Root of the source code.
  - `assets/`: Static assets and global SCSS files.
    - `_parameters.scss`: Centralized SCSS variables (colors, gutters, breakpoints).
    - `_main.scss`: Global styles and base configuration.
    - `typo.scss` & `grid.scss`: Modular style definitions.
  - `components/`: Reusable Vue components.
    - `Intro.vue`: The entry landing card component.
    - `NavTop.vue`: Top navigation bar for the content view.
    - `Content.vue`: Main scrollable content sections with an image gallery.
  - `views/`: Page-level components.
    - `ViewHome.vue`: Main layout that manages transitions between Intro and Content states.
  - `stores/`: Pinia state management.
    - `globalState.ts`: Manages application-wide states like `isOpen`, `viewIDActive`, and `galleryScrollPosition`.
  - `router/`: Vue Router configuration.
  - `App.vue`: Root component.
  - `main.ts`: Application entry point.

## 🛠 Refactoring & Improvements

1.  **Standardized Component Naming**: Renamed `content.vue` to `Content.vue` for consistency with Vue best practices.
2.  **Centralized Breakpoints**: Moved hardcoded media query values (e.g., `980px`) to `$mobile-breakpoint` in `_parameters.scss`.
3.  **Cleaned Up Transitions**: Consolidated and simplified transition classes in `ViewHome.vue` and removed redundant code in components.
4.  **Pinia Store Optimization**: Updated components to use the Composition API's `setup()` for cleaner store access and removed direct `$state` references where possible.
5.  **Code Cleanup**:
    - Removed unused imports and commented-out code.
    - Improved `autoAdjustFontSize` logic in `Content.vue` for better readability and performance.
    - Added proper cleanup for global event listeners (e.g., `resize` in `Intro.vue`).

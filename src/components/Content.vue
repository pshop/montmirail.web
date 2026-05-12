<template>
  <main class="v-content" :class="{'is-loading': globalState.isLoading}">
    <div class="v-content__content">
      <div class="m-g-container">
        <!-- Main text content column (8/12 grid) -->
        <div class="m-g-8-12 m-remove-child-margin">
          <div class="v-content__content__text-container" ref="textContainerEl" @scroll="onScroll">

            <template v-if="main_content">
              <section v-for="item in main_content.data"
                       v-bind:id="item.html_id"
                       class="v-content__content__text-container__section">
                <div v-html="item.contenu" class="v-content__content__text-container__section__content"/>
                <div v-if="liste_prix  && item.html_id == 'natura'" style="margin-top: 1rem">
                  <a  href="https://directus.nonetype.space/assets/034db8d7-fa3a-4d32-8835-1bbc8199ddbe" class="m-link-with-img">
                    <span>La liste des prix est par ici </span>
                    <img src="../assets/fleche.svg" alt="fleche">
                  </a>
                </div>
              </section>
            </template>

            <template v-else>
              <section id="presentation" class="v-content__content__text-container__section">
              <div class="v-content__content__text-container__section__content">
                HARD_CODED
                  <p>
                    Installés à Montmirail près de Neuchâtel depuis 2011, nous tenons une exploitation spécialisée dans
                    les grandes cultures (maïs, soja, tournesol, blé d’automne). Attentifs à la qualité des produits ainsi
                    qu’à l’environnement, notre production est labellisée Bourgeon de Bio Suisse. Pour entretenir la
                    biodiversité de la région, nous avons aussi des vergers, des ruches et un élevage bovin Natura-Beef.
                    Pour ces produits, nous privilégions la vente directe et les circuits courts, vous pourrez donc
                    trouver chez nous des <em>fruits de saison</em>, du <em>miel</em> ainsi que de la <em>viande</em>.
                    Cette année, nous proposons également des <em>noix</em>.
                  </p>
                  <p>
                    Pour plus d’informations ou pour passer commande directement, vous pouvez nous joindre au 079 692 15
                    18 ou nous écrire à <i>farm@doncamillo.ch</i>. Nous serons ravis de vous renseigner plus en
                    détail et de vous accueillir à la ferme.
                  </p>
              </div>
            </section>

              <section id="fruit" class="v-content__content__text-container__section">
              <div class="v-content__content__text-container__section__content">
                  <p>
                    Nos vergers produisent une grande variété de fruits : les pommes Rubinette, Idared, Boskoop et Gala
                    ainsi que les poires Beurré Bosc et Conférence. Pour prendre le relais de l’ancien verger, nous en
                    avons crée depuis quelques années un nouveau avec les variétés de pommes qui ont fait leurs preuves,
                    complété par la variété Topaz.
                  </p>
                  <p>
                    En plus du verger classique, nous avons sur notre domaine un verger haute-tige composé
                    essentiellement de variétés anciennes et robustes qui enrichissent le paysage et complètent la
                    diversité végétale de la ferme. Outre les pommiers et les poiriers, on y trouve des pruniers et des
                    mirabelliers, par exemple.
                  </p>
              </div>
            </section>

              <section id="produit" class="v-content__content__text-container__section">
              <div class="v-content__content__text-container__section__content">
                  <p>En plus des fruits frais, nous proposons également du <em>jus de pomme</em> qui permet de déguster
                    tout au long de l’année notre production estivale et automnale.
                     Afin d’utiliser les fruits mûrs invendus, nous nous sommes aussi mis à produire de l’<em>eau-de-vie</em>
                    en petite quantité, disponible actuellement en deux sortes différentes : Pomme Rubinette et Poire.</p>
              </div>
            </section>

              <section id="natura" class="v-content__content__text-container__section">
              <div class="v-content__content__text-container__section__content">
                  <p>
                    Parce que nous aimons la viande et qu'il est important pour nous d’en connaître la provenance ainsi
                    que de prodiguer un élevage respectueux des animaux, nos vaches sont élevées d'après les normes du
                    label Natura-Beef (voir <a href="https://www.mutterkuh.ch/fr/natura-beef" target="_blank">mutterkuh.ch</a>).
                    La viande provient de jeunes bêtes qui grandissent dans des élevages de vaches mères. Les veaux sont
                    allaités et restent près de leurs mères jusqu’à l’âge de 10 mois. Leur nutrition se compose essentiellement
                    de lait maternel et de fourrages grossiers. Le troupeau pâture sur nos propres prés et passe l'hiver en stabulation libre.
                    Les vaches et les veaux sont en compagnie de leur taureau.
                  </p>
                <div style="margin-top: 1rem">
                  <a v-if="liste_prix" :href="liste_prix" target="_blank" class="m-link-with-img">
                    <span>La liste des prix est par ici </span>
                    <img src="../assets/fleche.svg" alt="fleche">
                  </a>
                </div>
              </div>
            </section>

              <section id="miel" class="v-content__content__text-container__section">
              <div class="v-content__content__text-container__section__content">
                  <p>
                    Depuis 2018, Angela s’occupe également de quelques colonies d’abeilles qui contribuent à la
                    pollinisation des arbres fruitiers et d’autres cultures en fleurs aux alentours de notre ferme.
                    Nous récoltons le miel de printemps de fin mai à début juin et le miel d’été vers la mi-juillet.
                    À travers ses saveurs, le miel reflète l’offre florale du moment (et la météo) dans toute sa diversité.
                  </p>
              </div>
            </section>
            </template>
          </div>
        </div>

        <!-- Image gallery column (4/12 grid) -->
        <div class="m-g-4-12">
          <div class="v-content__content__img-container">
            <div ref="imgGalleryEl"
                :style="{transform: `translate3D(0, ${globalState.galleryScrollPosition}px, 0)`,}"
            >
              <div v-if="main_content_images">
                <div v-for="image in main_content_images.data">
                  <img :src="apiUrl+'/assets/'+image.directus_files_id" alt="image">
                </div>
              </div>
              <div v-else id="hard_coded_gallery">
                <img src="/1_1.jpg" alt="image">
                <img src="/1_2.jpg" alt="image">
                <img src="/1_3.jpg" alt="image">
                <img src="/02.jpg" alt="image">
                <img src="/01.jpg" alt="image">
                <img src="/00.jpg" alt="image">
                <img src="/05.jpg" alt="image">
                <img src="/04.jpg" alt="image">
                <img src="/03.jpg" alt="image">
                <img src="/08.jpg" alt="image">
                <img src="/07.jpg" alt="image">
                <img src="/06.jpg" alt="image">
                <img src="/09.jpg" alt="image">
                <img src="/10.jpg" alt="image">
                <img src="/11.jpg" alt="image">
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue"
import { useGlobalState } from "@/stores/globalState"
import { storeToRefs } from "pinia"

const globalState = useGlobalState()
const { main_content, main_content_images, liste_prix } = storeToRefs(globalState)
const apiUrl = import.meta.env.VITE_BASE_API_URL

// Template refs
const textContainerEl = ref<HTMLElement | null>(null)
const imgGalleryEl = ref<HTMLElement | null>(null)

/**
 * Updates the gallery scroll position based on the text scroll progress.
 * The gallery moves at a different speed to cover its entire height.
 */
const updateGalleryPosition = (target: HTMLElement) => {
  if (!imgGalleryEl.value) return

  const heightTotal = target.scrollHeight - target.getBoundingClientRect().height
  if (heightTotal <= 0) return
  const scrollTop = target.scrollTop
  const scrollPercent = (scrollTop / heightTotal) * 100

  // Total height available to scroll in the gallery
  const galleryHeight = imgGalleryEl.value.getBoundingClientRect().height
  const totalScrollHeight = galleryHeight - window.innerHeight + 40
  if (totalScrollHeight <= 0) return

  globalState.galleryScrollPosition = (totalScrollHeight / 100) * scrollPercent
}

/**
 * IntersectionObserver to detect which section is currently centered in view.
 * This is more efficient and reliable than manual scroll calculations.
 */
let sectionObserver: IntersectionObserver | null = null

const setupSectionObserver = () => {
  if (sectionObserver) sectionObserver.disconnect()

  const options = {
    root: textContainerEl.value,
    rootMargin: '-20% 0px -20% 0px', // Trigger when section is roughly in the middle 60% of view
    threshold: 0.1
  }

  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        globalState.viewIDActive = entry.target.id
      }
    })
  }, options)

  const sections = textContainerEl.value?.querySelectorAll('.v-content__content__text-container__section')
  sections?.forEach(section => sectionObserver?.observe(section))
}

const onScroll = (e: Event) => {
  if (e.target instanceof HTMLElement) {
    updateGalleryPosition(e.target)
  }
}

onMounted(async () => {
  // Initial setup
  setupSectionObserver()

  // Ensure data is loaded
  await globalState.initData()

  // Re-adjust UI after data has been loaded
  await nextTick()
  setupSectionObserver()
})

onUnmounted(() => {
  sectionObserver?.disconnect()
})

</script>

<style lang="scss">
@import "@/assets/parameters";

.v-content {
  &.is-loading {
    // Semi-transparent instead of hidden to avoid "broken" look if API is slow
    opacity: 0.7;
  }
  transition: opacity .75s ease-in-out;
  background-image: url("/web_frame.jpeg");
  background-size: auto 100%;
  background-position: center;
  position: fixed;
  padding: var(--m-gutter);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;

  .v-content__content {
    width: 100%;
    height: 100%;
    background: var(--m-color-light);
    strong {
      font-weight: normal;
      font-style: italic;
    }

    > * {
      width: 100%;
      height: 100%;

      > * {
        height: 100%;
      }
    }
  }

  .v-content__content__img-container {
    overflow: hidden;
    height: 100%;
    position: relative;

    @media (max-width: $mobile-breakpoint) {
      display: none;
    }

    > div {
      padding-bottom: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
    }

    img {
      display: block;
      width: 100%;
      height: calc( (100vh - var(--m-gutter) * 2) / 3);
      object-fit: cover;
    }
  }

  .v-content__content__text-container {
    height: 100%;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    overflow: auto;
    -webkit-overflow-scrolling: touch;

    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  .v-content__content__text-container__section {
    box-sizing: border-box;
    min-height: calc( 100vh - var(--m-gutter) * 2 );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left:   var(--m-gutter-xl);
    padding-right:  var(--m-gutter-xl);

    @media (max-width: $mobile-breakpoint) {
      padding-left: var(--m-gutter);
      padding-right: var(--m-gutter);
      padding-top: 14rem;
    }

    scroll-snap-align: start;
    padding-top: 10rem;
    padding-bottom: 6rem;

    &.is-active {
      border-bottom: solid 2px ;
    }
  }

  .v-content__content__text-container__section__content {
    p {
      margin: 0;
    }

    p + p {
      text-indent: 4rem;
    }
  }
}
</style>

<template>
  <main class="v-content">
    <div class="v-content__content">
      <div class="m-g-container">
        <!-- Main text content column (8/12 grid) -->
        <div class="m-g-8-12 m-remove-child-margin">
          <div
              class="v-content__content__text-container"
              ref="textContainerEl"
              @scroll="onScroll"
          >
            <!-- Sections are identified for navigation and auto-font-size adjustment -->
            <section
                id="presentation"
                class="v-content__content__text-container__section"
            >
              <div class="v-content__content__text-container__section__content">
                <template v-if="presentation">
                  <p v-for="(block, index) in presentation.text_content" :key="index">
                    <template v-for="(child, childIndex) in block.children" :key="childIndex">
                      <a v-if="child.type === 'link'" :href="child.url" target="_blank">
                        <template v-for="(linkChild, linkChildIndex) in child.children" :key="linkChildIndex">
                          <em v-if="linkChild.bold">{{ linkChild.text }}</em>
                          <i v-else-if="linkChild.underline">{{ linkChild.text }}</i>
                          <template v-else>{{ linkChild.text }}</template>
                        </template>
                      </a>
                      <template v-else>
                        <em v-if="child.bold">{{ child.text }}</em>
                        <i v-else-if="child.underline">{{ child.text }}</i>
                        <template v-else>{{ child.text }}</template>
                      </template>
                    </template>
                  </p>
                </template>
                <div v-else>
                  <p>
                    Installés à Montmirail près de Neuchâtel depuis 2011, nous tenons une exploitation spécialisée dans
                    les grandes cultures (maïs, soja, tournesol, blé d’automne). Attentifs à la qualité des produits ainsi
                    qu’à l’environnement, notre production est labellisée Bourgeon de Bio Suisse. Pour entretenir la
                    biodiversité de la région, nous avons aussi des vergers, des ruches et un élevage bovin Natura-Beef.
                    Pour ces produits, nous privilégions la vente directe et les circuits courts, vous pourrez donc
                    trouver chez nous des <em>fruits de saison</em>, du <em>miel</em> ainsi que de la <em>viande</em>.
                    Cette année, nous proposons en plus différentes
                    variétés de <em>courges</em> ainsi que des <em>noix</em>.
                  </p>
                  <p>
                    Pour plus d’informations ou pour passer commande directement, vous pouvez nous joindre au 079 692 15
                    18 ou nous écrire à <i>farm@doncamillo.ch</i>. Nous serons ravis de vous renseigner plus en
                    détail et de vous accueillir à la ferme.
                  </p>
                </div>
              </div>
            </section>

            <section
                id="fruit"
                class="v-content__content__text-container__section"
            >
              <div class="v-content__content__text-container__section__content">
                <template v-if="fruit">
                  <p v-for="(block, index) in fruit.text_content" :key="index">
                    <template v-for="(child, childIndex) in block.children" :key="childIndex">
                      <a v-if="child.type === 'link'" :href="child.url" target="_blank">
                        <template v-for="(linkChild, linkChildIndex) in child.children" :key="linkChildIndex">
                          <em v-if="linkChild.bold">{{ linkChild.text }}</em>
                          <i v-else-if="linkChild.underline">{{ linkChild.text }}</i>
                          <template v-else>{{ linkChild.text }}</template>
                        </template>
                      </a>
                      <template v-else>
                        <em v-if="child.bold">{{ child.text }}</em>
                        <i v-else-if="child.underline">{{ child.text }}</i>
                        <template v-else>{{ child.text }}</template>
                      </template>
                    </template>
                  </p>
                </template>
                <template v-else>
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
                </template>
              </div>
            </section>

            <section
                id="produit"
                class="v-content__content__text-container__section"
            >
              <div class="v-content__content__text-container__section__content">
                <template v-if="produit">
                  <p v-for="(block, index) in produit.text_content" :key="index">
                    <template v-for="(child, childIndex) in block.children" :key="childIndex">
                      <a v-if="child.type === 'link'" :href="child.url" target="_blank">
                        <template v-for="(linkChild, linkChildIndex) in child.children" :key="linkChildIndex">
                          <em v-if="linkChild.bold">{{ linkChild.text }}</em>
                          <i v-else-if="linkChild.underline">{{ linkChild.text }}</i>
                          <template v-else>{{ linkChild.text }}</template>
                        </template>
                      </a>
                      <template v-else>
                        <em v-if="child.bold">{{ child.text }}</em>
                        <i v-else-if="child.underline">{{ child.text }}</i>
                        <template v-else>{{ child.text }}</template>
                      </template>
                    </template>
                  </p>
                </template>
                <template v-else>
                  <p>
                    En plus des fruits frais, nous proposons du <em>jus de pomme</em> et <em>des fruits séchés</em> qui
                    permettent de déguster tout au long de l’année notre production estivale et automnale. Afin d’utiliser les fruits
                    mûrs invendus, nous nous sommes aussi mis à produire de <em>l’eau-de-vie</em> en petite quantité,
                    disponible actuellement en trois sortes différentes : Pomme Rubinette, Pruneau Fellenberg et Poire.
                  </p>
                </template>
              </div>
            </section>

            <section
                id="natura"
                class="v-content__content__text-container__section"
            >
              <div class="v-content__content__text-container__section__content">
                <template v-if="natura">
                  <p v-for="(block, index) in natura.text_content" :key="index">
                    <template v-for="(child, childIndex) in block.children" :key="childIndex">
                      <a v-if="child.type === 'link'" :href="child.url" target="_blank">
                        <template v-for="(linkChild, linkChildIndex) in child.children" :key="linkChildIndex">
                          <em v-if="linkChild.bold">{{ linkChild.text }}</em>
                          <i v-else-if="linkChild.underline">{{ linkChild.text }}</i>
                          <template v-else>{{ linkChild.text }}</template>
                        </template>
                      </a>
                      <template v-else>
                        <em v-if="child.bold">{{ child.text }}</em>
                        <i v-else-if="child.underline">{{ child.text }}</i>
                        <template v-else>{{ child.text }}</template>
                      </template>
                    </template>
                  </p>
                </template>
                <template v-else>
                  <p>
                    Parce que nous aimons la viande et qu’il est important pour nous d’en connaître la provenance ainsi
                    que de prodiguer un élevage respectueux des animaux, nos vaches sont élevées d’après les normes du
                    label Natura-Beef (voir <a href="https://www.mutterkuh.ch/fr/natura-beef" target="_blank">mutterkuh.ch</a>).
                    La viande provient de jeunes bêtes qui grandissent dans des élevages de vaches mères. Les veaux sont
                    allaités et restent près de leurs mères jusqu’à l’âge de 10 mois. Leur nutrition se compose essentiellement
                    de lait maternel et de fourrages grossiers. Le&nbsp;troupeau pâture sur nos propres prés et passe l’hiver en stabulation libre.
                    Les vaches et les veaux sont en compagnie de leur taureau.
                  </p>
                </template>
                <div style="margin-top: 1rem">
                  <a href="/ferme_montmirail_naturabeef_2025.pdf" target="_blank" class="m-link-with-img">
                    <span>La liste des prix est par ici </span>
                    <img src="../assets/fleche.svg" alt="fleche">
                  </a>
                </div>
              </div>
            </section>

            <section
                id="miel"
                class="v-content__content__text-container__section"
            >
              <div class="v-content__content__text-container__section__content">
                <template v-if="miel">
                  <p v-for="(block, index) in miel.text_content" :key="index">
                    <template v-for="(child, childIndex) in block.children" :key="childIndex">
                      <a v-if="child.type === 'link'" :href="child.url" target="_blank">
                        <template v-for="(linkChild, linkChildIndex) in child.children" :key="linkChildIndex">
                          <em v-if="linkChild.bold">{{ linkChild.text }}</em>
                          <i v-else-if="linkChild.underline">{{ linkChild.text }}</i>
                          <template v-else>{{ linkChild.text }}</template>
                        </template>
                      </a>
                      <template v-else>
                        <em v-if="child.bold">{{ child.text }}</em>
                        <i v-else-if="child.underline">{{ child.text }}</i>
                        <template v-else>{{ child.text }}</template>
                      </template>
                    </template>
                  </p>
                </template>
                <template v-else>
                  <p>
                    Depuis 2018, Angela s’occupe également de quelques colonies d’abeilles qui contribuent à la pollinisation des arbres fruitiers et d’autres cultures en fleurs aux alentours de notre ferme. Nous récoltons le miel de printemps de fin mai à début juin et le miel d’été vers la mi-juillet. À travers ses saveurs, le miel reflète l’offre florale du moment (et la météo) dans toute sa diversité.
                  </p>
                </template>
              </div>
            </section>
          </div>
        </div>

        <!-- Image gallery column (4/12 grid) -->
        <div class="m-g-4-12">
          <div class="v-content__content__img-container">
            <div
                ref="imgGalleryEl"
                :style="{
                  transform: `translate3D(0, ${globalState.galleryScrollPosition}px, 0)`,
                }"
            >
              <!-- Gallery of 15 images scrolling in sync with text content -->
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
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue"
import { useGlobalState } from "@/stores/globalState"
import { getMiel, getFruit, getNatura, getProduit, getPresentation } from "@/services/api";

const globalState = useGlobalState()

// Reactive data for API content
const presentation = ref<any>(null)
const fruit = ref<any>(null)
const produit = ref<any>(null)
const natura = ref<any>(null)
const miel = ref<any>(null)

// Template refs
const textContainerEl = ref<HTMLElement | null>(null)
const imgGalleryEl = ref<HTMLElement | null>(null)

/**
 * Automatically adjusts font-size if the text content overflows its viewport.
 * This ensures all text is visible on different screen sizes and aspect ratios.
 */
const autoAdjustFontSize = () => {
  if (!textContainerEl.value) return

  const textViewHeight = textContainerEl.value.getBoundingClientRect().height
  const sections = textContainerEl.value.querySelectorAll('.v-content__content__text-container__section')

  let needsAdjustment = false
  for (const section of sections) {
    if (section.scrollHeight > textViewHeight) {
      needsAdjustment = true
      break
    }
  }

  if (needsAdjustment) {
    const contentElements = textContainerEl.value.querySelectorAll('.v-content__content__text-container__section__content *')
    let canStillShrink = false
    contentElements.forEach((el: any) => {
      if (el instanceof HTMLElement) {
        const currentSize = parseFloat(window.getComputedStyle(el).fontSize)
        if (currentSize > 12) { // Minimum font size 12px
          el.style.lineHeight = '1.3em'
          el.style.fontSize = (currentSize - 0.2) + 'px'
          canStillShrink = true
        }
      }
    })
    
    if (canStillShrink) {
      requestAnimationFrame(autoAdjustFontSize)
    }
  }
}

/**
 * Updates the gallery scroll position based on the text scroll progress.
 * The gallery moves at a different speed to cover its entire height.
 */
const updateGalleryPosition = (target: HTMLElement) => {
  if (!imgGalleryEl.value) return

  const heightTotal = target.scrollHeight - target.getBoundingClientRect().height
  const scrollTop = target.scrollTop
  const scrollPercent = (scrollTop / heightTotal) * 100

  // Total height available to scroll in the gallery
  const galleryHeight = imgGalleryEl.value.getBoundingClientRect().height
  const totalScrollHeight = galleryHeight - window.innerHeight + 40
  
  globalState.galleryScrollPosition = (totalScrollHeight / 100) * scrollPercent
}

/**
 * IntersectionObserver to detect which section is currently centered in view.
 * This is more efficient and reliable than manual scroll calculations.
 */
let sectionObserver: IntersectionObserver | null = null

const setupSectionObserver = () => {
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
  try {
    const [
      { data: resProduit },
      { data: resNatura },
      { data: resMiel },
      { data: resPresentation },
      { data: resFruit }
    ] = await Promise.all([
      getProduit(),
      getNatura(),
      getMiel(),
      getPresentation(),
      getFruit()
    ])
    produit.value = resProduit.data
    natura.value = resNatura.data
    miel.value = resMiel.data
    presentation.value = resPresentation.data
    fruit.value = resFruit.data
  } catch (error) {
    console.error("Failed to fetch content:", error)
  }

  nextTick(() => {
    autoAdjustFontSize()
    setupSectionObserver()
  })
})

onUnmounted(() => {
  sectionObserver?.disconnect()
})
</script>

<style lang="scss">
@import "@/assets/parameters";

.v-content {
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

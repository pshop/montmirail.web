import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/_main.scss'
import {useGlobalState} from "@/stores/globalState"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

export const mobilMinWidth = 980;

// function setIsOpen() {if (window.innerWidth < mobilMinWidth) useGlobalState().isOpen = false}
// setIsOpen()

// window.addEventListener('resize', () => {
//   setIsOpen()
// })


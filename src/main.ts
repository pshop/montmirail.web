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

// Start fetching data as soon as the app is mounted to optimize performance
const globalState = useGlobalState()
globalState.initData()

export const mobilMinWidth = 980;

// function setIsOpen() {if (window.innerWidth < mobilMinWidth) useGlobalState().isOpen = false}
// setIsOpen()

// window.addEventListener('resize', () => {
//   setIsOpen()
// })


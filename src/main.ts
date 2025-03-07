import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const head = createHead()
app.use(head)

app.use(router)

app.mount('#app')

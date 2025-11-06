import { createApp } from 'vue'
import './style.css'
import 'normalize.css'
import 'aos/dist/aos.css'
import App from './App.vue'

import AOS from 'aos'

const app = createApp(App)
app.mount('#app')

AOS.init({ duration: 800, once: true })

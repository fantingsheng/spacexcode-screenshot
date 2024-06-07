import './assets/main.css'

import { createApp } from 'vue'
import {
  create,
  NButton
} from 'naive-ui'

import App from './App.vue'

const naive = create({
  components: [NButton]
})

createApp(App).use(naive).mount('#app')

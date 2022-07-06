import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

import '../src/assets/style/style.css'

createApp(App).use(router).mount('#app')

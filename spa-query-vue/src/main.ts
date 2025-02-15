import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada //, PiniaColadaQueryHooksPlugin
} from '@pinia/colada'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.use(PiniaColada
    /*, {
  plugins: [
    PiniaColadaQueryHooksPlugin({
      // ...
    }),
  ],
}*/
)

app.use(VueQueryPlugin)

app.use(router)

app.mount('#app')

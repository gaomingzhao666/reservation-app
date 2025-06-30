import '@/styles/global.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createI18n } from 'petite-vue-i18n'
import en from './i18n/ui/en.json'
import ja from './i18n/ui/ja.json'

const i18n = createI18n({
  // enable composition api
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: en,
    ja: ja,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

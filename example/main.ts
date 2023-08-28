import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 代码展示
import '@/assets/index.scss'

// ant-design-vue
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

import '@futurefab/xdashboard-core/dist/style.css'
import '@futurefab/xdashboard-grid-layout/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')

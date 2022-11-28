import FontAwesomeIcon from '@/plugin/font-awesome'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import Container from '@/components/Container.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Container', Container)
app.use(router)
app.mount('#app')

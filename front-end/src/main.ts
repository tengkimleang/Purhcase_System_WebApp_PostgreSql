/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import {createSSRApp} from 'vue'

const app = createSSRApp(App)

registerPlugins(app)

app.mount('#app')

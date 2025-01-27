import {createSSRApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createVuetify} from "vuetify";
import '@mdi/font/css/materialdesignicons.css';
import router from "./router.ts";

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#a1d0f6',
                    success: '#4CAF50',
                    warning: '#FFC107',

                },
            },
        },
    },
})



const app = createSSRApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');

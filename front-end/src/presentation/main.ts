import { createApp } from 'vue';
import App from './App.vue'; // Updated to new location
import { registerPlugins } from './plugins';
import {PurchaseService} from "../application/purchase-order/Purchase_Service";
import {PurchaseServiceKey} from "../application/injection-keys"; // Corrected path
// import './config/axios.config'

const app = createApp(App);

registerPlugins(app);

app.provide(PurchaseServiceKey, new PurchaseService())


app.mount('#app');

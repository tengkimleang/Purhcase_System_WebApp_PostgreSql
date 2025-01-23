import { createRouter, createWebHistory } from 'vue-router';
import HomePages from "./components/HomePages.vue";
import PurchaseOrder from "./components/PurchaseOrder.vue";

const routes = [
    {
        path: '/', // URL path for HomePage
        name: 'Home',
        component: HomePages,
    },
    {
        path: '/purchase-order', // URL path for Purchase Order
        name: 'PurchaseOrder',
        component: PurchaseOrder,
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(), // Uses browser history mode
    routes, // Routes configuration
});

export default router;

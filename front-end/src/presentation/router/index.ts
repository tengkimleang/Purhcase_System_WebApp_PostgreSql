import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const DEFAULT_LAYOUT = 'default';

function createRoute(path: string, componentPath: string, layout: string = DEFAULT_LAYOUT) {
  return {
    path,
    component: () => import(`../pages/${componentPath}.vue`),
    meta: { layout },
  };
}

const appRoutes = [
  createRoute('/', 'index'),
  createRoute('/purchase-order', 'purchase-order'),
  createRoute('/view-purchase', 'view-purchase'),
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(appRoutes),
})

export default router

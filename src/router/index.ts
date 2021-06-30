import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Shop from '../views/Shop.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/products/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '@/views/Details.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import Favourites from '../views/FavouritesView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favourites', name: 'Favourites', component: Favourites }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

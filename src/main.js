import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'currency-flags/dist/currency-flags.min.css';
import './style.css';

library.add(fasHeart, farHeart, faSortAlphaDown);
const app = createApp(App);

app
    .use(createPinia())
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');


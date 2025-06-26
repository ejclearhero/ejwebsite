import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/SCSS/main.scss'; // 自定義樣式

createApp(App).use(router).mount('#app');

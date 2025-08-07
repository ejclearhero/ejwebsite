import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.afterEach((to) => {
  if (window.gtag) {
    window.gtag('config', 'G-H6FJWT5HT5', {
      page_path: to.path,
      page_title: to.meta?.title || document.title,
      page_location: window.location.href,
    });
  }
});

export default router;

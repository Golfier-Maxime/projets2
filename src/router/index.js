import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import test from '../views/test.vue'
import conf2 from '../views/conf2.vue'
import apropos from '../views/apropos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/test', name: 'test', component: test },
    { path: '/conf2', name: 'conf2', component: conf2 },
    { path: '/apropos', name: 'apropos', component: apropos },
    // ici les autre routes
  ]
})

export default router

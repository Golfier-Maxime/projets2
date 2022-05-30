import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import artiste from '../views/artiste.vue'
import prog from '../views/prog.vue'
import apropos from '../views/apropos.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artiste', name: 'artiste', component: artiste },
    { path: '/prog', name: 'prog', component: prog },
    { path: '/apropos', name: 'apropos', component: apropos },

    // ici les autre routes
  ]
})

export default router

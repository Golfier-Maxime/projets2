import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import artiste from '../views/artiste.vue'
import prog from '../views/prog.vue'
import apropos from '../views/apropos.vue'
import contact from '../views/contact.vue'
import mentions from '../views/mentions.vue'
import artistepage from '../views/artistepage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artiste', name: 'artiste', component: artiste },
    { path: '/prog', name: 'prog', component: prog },
    { path: '/apropos', name: 'apropos', component: apropos },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/mentions', name: 'mentions', component: mentions },
    { path: '/artistepage', name: 'artistepage', component: artistepage },


    // ici les autre routes
  ]
})

export default router

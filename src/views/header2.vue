<template>
  <nav class="header">
    <!-- Menu bureau -->
    <div class="black_gray">
      <div class="">
        <div class="flex justify-between">
          <!-- Menu -->
          <div class="flex space-x-4">
            <!-- Logo -->
            <div class="flex items-center py-5 px-2">
              <RouterLink to="/"><img src="/Logo.svg" /></RouterLink>
            </div>
            <!-- Menu -->
            <div class="hidden items-center space-x-1 ipad_pro:flex">
              <RouterLink class="hover:text-Gris py-5 px-2 font-prompt font-semibold text-white" to="/">Accueil</RouterLink>
              <RouterLink class="hover:text-Gris py-5 px-2 font-prompt font-semibold text-white" to="/prog">Programme</RouterLink>
              <RouterLink class="hover:text-Gris py-5 px-2 font-prompt font-semibold text-white" to="/artiste">Artiste</RouterLink>
              <RouterLink class="hover:text-Gris py-5 px-2 font-prompt font-semibold text-white" to="/concert">Concert</RouterLink>
              <RouterLink class="hover:text-Gris py-5 px-2 font-prompt font-semibold text-white" to="/mentions"
                >Mentions Légales</RouterLink
              >
            </div>
          </div>
          <div class="hidden items-center space-x-1 ipad_pro:flex">
            <RouterLink class="hover:text-Gris py-5 px-2 font-prompt font-semibold text-white" to="/contact">Contact</RouterLink>
            <RouterLink class="hover:text-Gris py-5 px-2 font-prompt font-semibold text-white" to="/apropos">A propos</RouterLink>
            <RouterLink class="hover:text-Gris black_gray block py-2 px-4 text-red-400" to="/ListeArtiste"
              ><span class="font-bold text-red-400">ICI</span> Liste Artiste FireBase</RouterLink
            >
            <RouterLink class="hover:text-Gris black_gray block py-2 px-4 text-red-400" to="/Create"
              ><span class="font-bold text-red-400">ICI</span> Créer Artiste FireBase</RouterLink
            >
          </div>

          <!-- Bouton menu -->
          <div class="flex items-center ipad_pro:hidden">
            <button @click="menuVisible = !menuVisible" class="py-5 px-2">
              <img src="/icon/menu.svg" alt="menu" class="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Menu mobile -->

    <div class="black_gray text-white ipad_pro:hidden" :class="{ hidden: menuVisible }">
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/">Accueil</RouterLink>
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/prog">Programme</RouterLink>
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/artiste">Artistes</RouterLink>
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/concert">Concerts</RouterLink>
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/contact">Contact</RouterLink>
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/mentions">Mentions Légales</RouterLink>
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/apropos">A propos</RouterLink>
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/ListeArtiste"
        ><span class="font-bold text-red-400">ICI</span> Liste Artiste FireBase</RouterLink
      >
      <RouterLink class="hover:text-Gris black_gray block py-2 px-4" to="/Create"
        ><span class="font-bold text-red-400">ICI</span> Créer Artiste FireBase</RouterLink
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(true);
</script>
<style >
.header {
  position: fixed;
  width: 100%;
  top: 0;
}
.black_gray {
  background-color: #1d1d1b;
}
</style>
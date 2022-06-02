<template>
  <nav class="header">
      <!-- Menu bureau -->
      <div class="black_gray ">
        <div class="">
            <div class="flex justify-between">
                <!-- Menu -->
                <div class="flex space-x-4">
                    <!-- Logo -->
                    <div class="flex items-center py-5 px-2">
                        <RouterLink to="/"><img src="/Logo.svg"></RouterLink>
                    </div>
                    <!-- Menu -->
                    <div class="hidden  ipad_pro:flex items-center space-x-1">
                        <RouterLink class="py-5 px-2 hover:text-Gris text-white font-prompt font-semibold" to="/">Accueil</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris text-white font-prompt font-semibold" to="/prog">Programme</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris text-white font-prompt font-semibold" to="/artiste">Artiste</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris text-white font-prompt font-semibold" to="/concert">Concert</RouterLink>
                        <RouterLink class="py-5 px-2 hover:text-Gris text-white font-prompt font-semibold" to="/mentions">Mentions Légales</RouterLink>  
                    </div>
                </div>
                <div class="hidden  ipad_pro:flex items-center space-x-1">
                    <RouterLink class="py-5 px-2 hover:text-Gris text-white font-prompt font-semibold" to="/contact">Contact</RouterLink> 
                    <RouterLink class="py-5 px-2 hover:text-Gris text-white font-prompt font-semibold" to="/apropos">A propos</RouterLink>
                </div>

                <!-- Bouton menu -->
                <div class="ipad_pro:hidden flex items-center">
                    <button @click="menuVisible = !menuVisible" class=" py-5 px-2 "> 
                        <img src="/icon/menu.svg" alt="menu" class="" />
                    </button>
                </div>
                
            </div>
        </div>
      </div>
      <!-- Menu mobile -->
      <transition >
      <div class="text-white black_gray ipad_pro:hidden animate-fadeInRight" :class="{hidden: menuVisible}">
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/">Accueil</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/prog">Programme</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/artiste">Artistes</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/concert">Concerts</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/contact">Contact</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/mentions">Mentions Légales</RouterLink> 
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/apropos">A propos</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris black_gray " to="/ListeArtiste"><span class="font-bold text-red-400">ICI</span> Liste Artiste FireBase</RouterLink>
      </div>
      </transition>
  </nav>

</template>

<script setup>
import {ref} from 'vue';

const menuVisible = ref(true);


</script>
<style >
.header {
  position: fixed;
  width: 100%;
  top: 0;
}
.black_gray {
  background-color: #1D1D1B;
}
</style>
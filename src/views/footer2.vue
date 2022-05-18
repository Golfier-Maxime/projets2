<template>
  <div class="footer">
    <div class="flex justify-between">
      <div class="carre_vert">
        <div class="carre_blanc"></div>
      </div>
      <div class="carre_vert2">
        <div class="carre_blanc2"></div>
      </div>
    </div>
    <div class="bg-green-cyan">
      <div class="flex justify-evenly pt-2 pb-2">
        <div class="flex flex-col items-center">
          <RouterLink to="/">
            <img src="public\icon\quete.png" alt="quete" class="h-8 w-8 mx-auto" />
            <p class="font-prompt text-[12px] text-white">Quêtes</p>
          </RouterLink>
        </div>
        <div class="flex flex-col items-center">
          <img src="public\icon\mode.png" alt="quete" class="h-8 w-8" />
          <p class="font-prompt text-[12px] text-white">Mode</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="public\icon\boutique.png" alt="quete" class="h-8 w-8" />
          <p class="font-prompt text-[12px] text-white">Boutique</p>
        </div>
        <div class="flex flex-col items-center">
          <RouterLink to="/apropos" class="">
            <img src="public\icon\apropos.svg" alt="quete" class="h-8 w-8 mx-auto" />
            <p class="font-prompt text-[12px] text-white">À propos</p>
          </RouterLink>
        </div>
        <div class="flex flex-col items-center">
          <RouterLink to="/conf2" class="">
            <img src="public\icon\politique.png" alt="quete" class="h-8 w-8 mx-auto" />
            <p class="font-prompt text-[12px] text-white">Conf.</p>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.carre_vert {
  width: 25px;
  height: 25px;
  background: #46d9a4;
}
.carre_blanc {
  width: 25px;
  height: 25px;
  background: #ffffff;
  border-bottom-left-radius: 1rem;
}
.carre_vert2 {
  width: 25px;
  height: 25px;
  background: #46d9a4;
}
.carre_blanc2 {
  width: 25px;
  height: 25px;
  background: #ffffff;
  border-bottom-right-radius: 1rem;
}
</style>
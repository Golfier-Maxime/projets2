<template>
  <!-- start -->
  <div class="mt-16 ml-3 mr-3">
    <img src="/Logo_full.svg" alt="logo parazit" class="mx-auto" />
    <h2 class="shadow_text mt-2 text-center font-prompt text-[16px] font-semibold text-white">Le nouveau festival de Futur Funk !</h2>
  </div>
  <div class="flex flex-wrap justify-center">
    <!-- article / artiste-->
    <div class="mt-5">
      <div>
        <h2 class="shadow_text text-center font-prompt text-[18px] font-bold text-white">ARTISTE</h2>
        <div class="line mx-auto"></div>
      </div>
      <!-- artiste -->
      <div class="mt-2 ml-3 mr-3 flex justify-between gap-4">
        <img src="/icon\arrow-left.svg" alt="" class="" />
        <div class="shadow-box flex flex-col">
          <div>
            <img src="/vantage.jpg" alt="" />
          </div>
          <div class="carre_artiste mt-[-15px]">
            <h3 class="color-text-black shadow_text mt-1 text-center font-prompt font-semibold">Vantage</h3>
          </div>
        </div>
        <img src="/icon\arrow-right.svg" alt="" class="" />
      </div>
      <RouterLink to="artiste" class="">
        <div class="mr-5 flex justify-end">
          <p class="shadow_text font-prompt font-bold text-white">En savoir plus</p>
        </div>
        <div class="mr-3 flex justify-end">
          <div class="line2"></div>
        </div>
      </RouterLink>
    </div>
    <!-- article / programmation -->
    <div class="mt-5">
      <div>
        <h2 class="shadow_text text-center font-prompt text-[18px] font-bold text-white">PROGRAMMATION</h2>
        <div class="line mx-auto"></div>
      </div>
      <!-- artiste -->
      <div class="mt-2 ml-3 mr-3 flex justify-between gap-4">
        <img src="/icon\arrow-left.svg" alt="" />
        <div class="shadow-box flex flex-col">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <div class="carre_artiste mt-[-15px]">
            <h3 class="color-text-black shadow_text mt-1 text-center font-prompt font-semibold">18H - Ouverture</h3>
          </div>
        </div>
        <img src="/icon\arrow-right.svg" alt="" class="" />
      </div>
      <RouterLink to="prog" class="">
        <div class="mr-5 flex justify-end">
          <p class="shadow_text font-prompt font-bold text-white">En savoir plus</p>
        </div>
      </RouterLink>
      <div class="mr-3 flex justify-end">
        <div class="line2"></div>
      </div>
    </div>
    <!-- article / apropos -->
    <div class="mt-5">
      <div>
        <h2 class="shadow_text text-center font-prompt text-[18px] font-bold text-white">A PROPOS</h2>
        <div class="line mx-auto"></div>
      </div>
      <!-- artiste -->
      <div class="mt-2 ml-3 mr-3 flex justify-between gap-4">
        <img src="/icon\arrow-left.svg" alt="" />
        <div class="shadow-box flex flex-col">
          <div>
            <img src="/apropos.png" alt="" />
          </div>
          <div class="carre_artiste mt-[-15px]">
            <h3 class="color-text-black shadow_text mt-1 text-center font-prompt font-semibold">Le Festival</h3>
          </div>
        </div>
        <img src="/icon\arrow-right.svg" alt="" class="" />
      </div>
      <RouterLink to="apropos" class="">
        <div class="mr-5 flex justify-end">
          <p class="shadow_text font-prompt font-bold text-white">En savoir plus</p>
        </div>
        <div class="mr-3 flex justify-end">
          <div class="line2"></div>
        </div>
      </RouterLink>
    </div>
    <!-- article / contact -->
    <div class="mt-5 pb-32">
      <div>
        <h2 class="shadow_text text-center font-prompt text-[18px] font-bold text-white">CONTACT</h2>
        <div class="line mx-auto"></div>
      </div>
      <!-- artiste -->
      <div class="mt-2 ml-3 mr-3 flex justify-between gap-4">
        <img src="/icon\arrow-left.svg" alt="" />
        <div class="shadow-box flex flex-col">
          <div>
            <img src="/contact.png" alt="" />
          </div>
          <div class="carre_artiste mt-[-15px]">
            <h3 class="color-text-black shadow_text mt-1 text-center font-prompt font-semibold">Nous contacter</h3>
          </div>
        </div>
        <img src="/icon\arrow-right.svg" alt="" class="" />
      </div>
      <RouterLink to="contact" class="">
        <div class="mr-5 flex justify-end">
          <p class="shadow_text font-prompt font-bold text-white">En savoir plus</p>
        </div>
        <div class="mr-3 flex justify-end">
          <div class="line2"></div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
</script>
<style>
.shadow_text {
  text-shadow: 1px 1px 0px #00000025;
}
.shadow-box {
  box-shadow: 2px 2px 2px #00000025;
  border-radius: 10px;
}
.color-text-black {
  color: #1d1d1b;
}
.line {
  width: 240px;
  height: 3px;
  box-shadow: 2px 2px 2px #00000025;
  background: white;
}

.line2 {
  width: 125px;
  height: 2px;
  box-shadow: 2px 2px 2px #00000025;
  background: white;
}
.carre_artiste {
  width: 175px;
  height: 30px;
  border-radius: 10px;
  background: white;
}
</style>
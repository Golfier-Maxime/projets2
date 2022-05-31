<template>
<!-- start -->
  <div class="mt-16 ml-3 mr-3">
    <img src="public\Logo_full.svg" alt="logo parazit" class="mx-auto">
    <h2 class="font-prompt font-semibold text-[16px] text-white text-center mt-2 shadow_text">Le nouveau festival de Futur Funk !</h2>
  </div>
  <!-- article / artiste-->
  <div class="mt-5">
    <div>
      <h2 class="font-prompt font-bold text-[18px] text-center text-white shadow_text">ARTISTE</h2>
      <div class="line mx-auto"></div>
    </div>
    <!-- artiste -->
    <div class="flex mt-2 justify-between ml-3 mr-3">
      <img src="public\icon\arrow-left.svg" alt="">
      <div class="flex flex-col  shadow-box">
        <div>
          <img src="public\vantage.png" alt="">
        </div>
        <div class="carre_artiste mt-[-15px]">
          <h3 class="text-center font-prompt font-semibold color-text-black mt-1 shadow_text">Vantage</h3>
        </div>
      </div>
      <img src="public\icon\arrow-right.svg" alt="" class="">
    </div>
    <RouterLink to="artiste" class="">
      <div class="flex justify-end mr-5">
        <p class="font-prompt font-bold text-white shadow_text">En savoir plus</p>
      </div>
      <div class="flex justify-end mr-3">
        <div class="line2 "></div>
      </div>
    </RouterLink> 
  </div>
  <!-- article / programmation -->
  <div class="mt-5">
    <div>
      <h2 class="font-prompt font-bold text-[18px] text-center text-white shadow_text">PROGRAMMATION</h2>
      <div class="line mx-auto"></div>
    </div>
    <!-- artiste -->
    <div class="flex mt-2 justify-between ml-3 mr-3">
      <img src="public\icon\arrow-left.svg" alt="">
      <div class="flex flex-col  shadow-box">
        <div>
          <img src="public\logo.png" alt="">
        </div>
        <div class="carre_artiste mt-[-15px]">
          <h3 class="text-center font-prompt font-semibold color-text-black mt-1 shadow_text">18H - Ouverture</h3>
        </div>
      </div>
      <img src="public\icon\arrow-right.svg" alt="" class="">
    </div>
    <RouterLink to="prog" class="">
      <div class="flex justify-end mr-5">
        <p class="font-prompt font-bold text-white shadow_text">En savoir plus</p>
      </div>
    </RouterLink>
    <div class="flex justify-end mr-3">
      <div class="line2 "></div>
    </div> 
  </div>
  <!-- article / apropos -->
  <div class="mt-5">
    <div>
      <h2 class="font-prompt font-bold text-[18px] text-center text-white shadow_text">A PROPOS</h2>
      <div class="line mx-auto"></div>
    </div>
    <!-- artiste -->
    <div class="flex mt-2 justify-between ml-3 mr-3">
      <img src="public\icon\arrow-left.svg" alt="">
      <div class="flex flex-col  shadow-box">
        <div>
          <img src="public\apropos.png" alt="">
        </div>
        <div class="carre_artiste mt-[-15px]">
          <h3 class="text-center font-prompt font-semibold color-text-black mt-1 shadow_text">Le Festival</h3>
        </div>
      </div>
      <img src="public\icon\arrow-right.svg" alt="" class="">
    </div>
    <RouterLink to="apropos" class="">
      <div class="flex justify-end mr-5">
        <p class="font-prompt font-bold text-white shadow_text">En savoir plus</p>
      </div>
      <div class="flex justify-end mr-3">
        <div class="line2 "></div>
      </div>
    </RouterLink> 
  </div>
  <!-- article / contact -->
  <div class="mt-5 pb-32">
    <div>
      <h2 class="font-prompt font-bold text-[18px] text-center text-white shadow_text">CONTACT</h2>
      <div class="line mx-auto"></div>
    </div>
    <!-- artiste -->
    <div class="flex mt-2 justify-between ml-3 mr-3">
      <img src="public\icon\arrow-left.svg" alt="">
      <div class="flex flex-col  shadow-box">
        <div>
          <img src="public\contact.png" alt="">
        </div>
        <div class="carre_artiste mt-[-15px]">
          <h3 class="text-center font-prompt font-semibold color-text-black mt-1 shadow_text">Nous contacter</h3>
        </div>
      </div>
      <img src="public\icon\arrow-right.svg" alt="" class="">
    </div>
    <RouterLink to="contact" class="">
      <div class="flex justify-end mr-5">
        <p class="font-prompt font-bold text-white shadow_text">En savoir plus</p>
      </div>
      <div class="flex justify-end mr-3">
        <div class="line2 "></div>
      </div> 
    </RouterLink>
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
  color: #1D1D1B;
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
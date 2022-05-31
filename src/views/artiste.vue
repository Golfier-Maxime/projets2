<template>
  <div class=" pb-32">
    <div class="mt-16 ">
      <h2 class="font-prompt font-semibold text-white shadow_text text-[30px] text-center">Artiste</h2>  
      <div class="line mx-auto"></div>
    </div>
    <!-- 1 -->
    <div class="flex flex-wrap mx-3 justify-center gap-4">
      <!-- artiste / vantage -->
      <div class="flex flex-col ">
        <h3 class="font-mulish font-bold text-white text-[22px] shadow_text text-center">Vantage</h3>
        <img src="/artiste\vantage.png" alt="vantage" class="box-shadow">
        <RouterLink to="artistepage" class="">
          <div class="flex justify-center">
            <img src="/icon\plus.svg" alt="plus" class="w-10 mt-[-20px] box-shadow2">
          </div>
        </RouterLink>
      </div>
      <!-- artiste / engelwood -->
      <div class="flex flex-col ">
        <h3 class="font-mulish font-bold text-white text-[22px] shadow_text text-center">EngelWood</h3>
        <img src="/artiste\engelwood.png" alt="vantage" class="box-shadow">
        <div class="flex justify-center">
          <img src="/icon\plus.svg" alt="plus" class="w-10 mt-[-20px] box-shadow2">
        </div>
      </div>

      <!-- artiste / vantage -->
      <div class="flex flex-col ">
        <h3 class="font-mulish font-bold text-white text-[22px] shadow_text text-center">NightTempo</h3>
        <img src="/artiste\nighttempo.png" alt="vantage" class="box-shadow">
        <div class="flex justify-center">
          <img src="/icon\plus.svg" alt="plus" class="w-10 mt-[-20px] box-shadow2">
        </div>
      </div>
      <!-- artiste / engelwood -->
      <div class="flex flex-col ">
        <h3 class="font-mulish font-bold text-white text-[22px] shadow_text text-center">MACROSS</h3>
        <img src="/artiste\macross.png" alt="vantage" class="box-shadow">
        <div class="flex justify-center">
          <img src="/icon\plus.svg" alt="plus" class="w-10 mt-[-20px] box-shadow2">
        </div>
      </div>
    
      <!-- artiste / YungBae -->
      <div class="flex flex-col ">
        <h3 class="font-mulish font-bold text-white text-[22px] shadow_text text-center">YungBae</h3>
        <img src="/artiste\yungbae.png" alt="vantage" class="box-shadow">
        <div class="flex justify-center">
          <img src="/icon\plus.svg" alt="plus" class="w-10 mt-[-20px] box-shadow2">
        </div>
      </div>
      <!-- artiste / meoshop -->
      <div class="flex flex-col ">
        <h3 class="font-mulish font-bold text-white text-[22px] shadow_text text-center">Moe Shop</h3>
        <img src="/artiste\moeshop.png" alt="vantage" class="box-shadow">
        <div class="flex justify-center">
          <img src="/icon\plus.svg" alt="plus" class="w-10 mt-[-20px] box-shadow2">
        </div>
      </div>
    
      <!-- artiste / desired -->
      <div class="flex flex-col ">
        <h3 class="font-mulish font-bold text-white text-[22px] shadow_text text-center">Desired</h3>
        <img src="/artiste\desired.png" alt="vantage" class="box-shadow">
        <div class="flex justify-center">
          <img src="/icon\plus.svg" alt="plus" class="w-10 mt-[-20px] box-shadow2">
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.box-shadow {
  box-shadow: 2px 2px 2px #00000025;
  border-radius: 10px;
}
.box-shadow2 {
  box-shadow: 2px 2px 2px #00000025;
  border-radius: 100%;
}
</style>
<script>
</script>

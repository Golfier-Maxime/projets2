<template>
    <div class="mb-3 pt-[45px] text-center text-3xl text-white">
      <h2 class="font-prompt">Boutique</h2>
    </div>
    <div class="bg-white rounded-2xl">
    <div class=" ml-6 mr-6">
        <h3 class="mb-2 font-medium text-2xl text-center ml-6 mr-6 font-prompt">Découvrez nos derniers articles</h3>
    </div>
    <article class="mt-6 ml-6 mr-6 flex flex-col ">
        <h4 class="font-prompt font-medium text-2xl ml-14">Mug</h4>
        <div class="carre_boutique mx-auto">
            <img src="public\Mug_Axolott.png" alt="">
        </div>
        <div class="flex justify-around  ml-6 mr-6 mt-2">
            <h4 class="font-prompt font-medium text-2xl">4,99 €</h4>
            <button class="bg-Simple-cyan text-white font-mulish pt-1 pb-1 pr-2 pl-2 rounded-md">Acheter</button>
        </div>
    </article>
    <article class="mt-6 ml-6 mr-6 flex flex-col ">
        <h4 class="font-prompt font-medium text-2xl ml-14">Magnets</h4>
        <div class="carre_boutique mx-auto">
            <img src="public\stickers.svg" alt="" class="mx-auto mt-6">
        </div>
        <div class="flex justify-around  ml-6 mr-6 mt-2">
            <h4 class="font-prompt font-medium text-2xl">1,49 €</h4>
            <button class="bg-Simple-cyan text-white font-mulish pt-1 pb-1 pr-2 pl-2 rounded-md">Acheter</button>
        </div>
    </article>
    <article class="mt-6 ml-6 mr-6 flex flex-col mb-20">
        <h4 class="font-prompt font-medium text-2xl ml-14">Sweat</h4>
        <div class="carre_boutique mx-auto">
            <img src="public\Sweat_Axolott.png" alt="" class="mx-auto mt-1">
        </div>
        <div class="flex justify-around  ml-6 mr-6 mt-2 ">
            <h4 class="font-prompt font-medium text-2xl">24,99 €</h4>
            <button class="bg-Simple-cyan text-white font-mulish pt-1 pb-1 pr-2 pl-2 rounded-md">Acheter</button>
        </div>
    </article>
  </div>
</template>

<style>
.carre_boutique {
    width: 220px;
    height: 220px;
    border-radius: 5%;
    background: #46D9A4;  
}
</style>
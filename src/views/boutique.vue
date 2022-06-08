<template>
  <div class="mb-3 pt-[45px] text-center text-3xl text-white">
    <h2 class="font-prompt">Boutique</h2>
  </div>
  <div class="rounded-2xl bg-white">
    <div class="ml-6 mr-6">
      <h3 class="mb-2 ml-6 mr-6 text-center font-prompt text-2xl font-medium">Découvrez nos derniers articles</h3>
    </div>
    <article class="mt-6 ml-6 mr-6 flex flex-col">
      <h4 class="ml-14 font-prompt text-2xl font-medium">Mug</h4>
      <div class="carre_boutique mx-auto">
        <img src="public\Mug_Axolott.png" alt="" />
      </div>
      <div class="ml-6 mr-6 mt-2 flex justify-around">
        <h4 class="font-prompt text-2xl font-medium">4,99 €</h4>
        <button class="rounded-md bg-Simple-cyan pt-1 pb-1 pr-2 pl-2 font-mulish text-white">Acheter</button>
      </div>
    </article>
    <article class="mt-6 ml-6 mr-6 flex flex-col">
      <h4 class="ml-14 font-prompt text-2xl font-medium">Magnets</h4>
      <div class="carre_boutique mx-auto">
        <img src="public\stickers.svg" alt="" class="mx-auto mt-6" />
      </div>
      <div class="ml-6 mr-6 mt-2 flex justify-around">
        <h4 class="font-prompt text-2xl font-medium">1,49 €</h4>
        <button class="rounded-md bg-Simple-cyan pt-1 pb-1 pr-2 pl-2 font-mulish text-white">Acheter</button>
      </div>
    </article>
    <article class="mt-6 ml-6 mr-6 mb-20 flex flex-col">
      <h4 class="ml-14 font-prompt text-2xl font-medium">Sweat</h4>
      <div class="carre_boutique mx-auto">
        <img src="public\Sweat_Axolott.png" alt="" class="mx-auto mt-1" />
      </div>
      <div class="ml-6 mr-6 mt-2 flex justify-around">
        <h4 class="font-prompt text-2xl font-medium">24,99 €</h4>
        <button class="rounded-md bg-Simple-cyan pt-1 pb-1 pr-2 pl-2 font-mulish text-white">Acheter</button>
      </div>
    </article>
  </div>
</template>

<style>
.carre_boutique {
  width: 220px;
  height: 220px;
  border-radius: 5%;
  background: #46d9a4;
}
</style>
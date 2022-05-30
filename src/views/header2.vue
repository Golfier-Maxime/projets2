<template>
  <header class="black_gray header flex justify-between ">
    <RouterLink to="/" class="">
      <div class="mt-3 mb-3 ml-3">
        <img src="public/Logo.svg" alt="logo parazit" />
      </div>
    </RouterLink>
    <div class="mt-4 mb-3 mr-3">
      <img src="public/icon/menu.svg" alt="menu" class="" />
    </div>
  </header>
</template>
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
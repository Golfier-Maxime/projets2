<template>
  <div class="pb-28">
    <div class="mt-16">
      <h2 class="shadow_text text-center font-prompt text-[30px] font-semibold text-white">Nous Contactez</h2>
      <div class="line mx-auto"></div>
    </div>
    <form action="" method="post" class="mt-4 flex flex-col">
      <div class="flex justify-center">
        <input type="text" id="name" name="user_name" placeholder="Nom" class="form_fond mt-2" />
      </div>
      <div class="flex justify-center">
        <input type="text" id="name" name="user_name" placeholder="Prénom" class="form_fond mt-2" />
      </div>
      <div class="flex justify-center">
        <input type="email" id="mail" name="user_mail" placeholder="E-mail" class="form_fond mt-2" />
      </div>
      <div class="flex justify-center">
        <textarea id="msg" name="user_message" placeholder="Message" class="textarea mt-2"></textarea>
      </div>
      <div class="mt-2 flex justify-center">
        <button type="submit" class="bouton">Envoyer</button>
      </div>
    </form>
  </div>
</template>
<style>
.form_fond {
  background-color: #1d1d1b;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 100px;
  border-radius: 5px;
  color: white;
}
.textarea {
  color: white;
  background-color: #1d1d1b;
  border: none;
  padding-top: 10px;
  padding-bottom: 100px;
  padding-left: 20px;
  padding-right: 125px;
  border-radius: 5px;
  resize: none;
}
.bouton {
  background-color: red;
  border: none;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 125px;
  padding-right: 125px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px black;
  margin-bottom: 15px;
}
</style>
<script>
</script>

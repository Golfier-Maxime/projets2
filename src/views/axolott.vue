<template>
  <div class="mt-20">
    <form @submit.prevent="onCnx()" class="flex flex-col justify-center">
      <div class="">
        <div class="">
          <button class="">Email :</button>
        </div>
        <input class="" type="text" v-model="user.email" required />
      </div>
      <div class="">
        <div class="">
          <button class="">Mot de passe :</button>
        </div>
        <input class="" type="password" v-model="user.password" required />
      </div>
      <div class="alert alert-warning mb-3 text-center" v-if="message != null">
        {{ message }}
      </div>
      <div>
        <button class="" @click="onDcnx()">Deconnexion</button>
        <button class="" type="submit">Connexion</button>
      </div>
    </form>
  </div>
  <div class="mb-3 pt-5 text-center text-3xl text-white">
    <h2 class="font-prompt">Pseudo</h2>
  </div>
  <div class="flex justify-center">
    <div class="cercle_bleu">
      <img src="/axolott/axo_main.svg" alt="axolotl de base" class="img_axo" />
    </div>
  </div>
</template>

<script>
// Bibliothèques Firebase  : import des fonctions
//  signInWithEmailAndPassword : Authentification avec email et mot de passe
//  getAuth : Fonction générale d'authentification
//  signOut : Se deconnecter
//  onAuthStateChanged : connaitre le statut de l'utilisateur (connecté ou non)
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  data() {
    // Données de la vue
    return {
      user: {
        // user se connectant
        email: null,
        password: null,
      },
      message: null, // Message de connexion
    };
  },

  mounted() {
    // Montage de la vue
    // Rechercher si un user est déjà connecté
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }
  },

  methods: {
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK
          console.log("user connecté", response.user);
          this.user = response.user;
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          // Erreur de connexion
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },
    onDcnx() {
      // Se déconnecter
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("user deconnecté ", this.user);
          this.message = "user non connecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },
  },
};
</script>
    

<style>
.cercle_bleu {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: var(--cyan);
}
:root {
  --cyan: #08a2f1;
}
.img_axo {
  margin-top: 50px;
}
</style>
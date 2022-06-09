<template>
  <div class="mx-auto mt-20 w-fit">
    <form @submit.prevent="onCnx()" class="flex flex-col justify-center" v-if="!Connected">
      <div class="">
        <div class="">
          <button class="text-white">Email</button>
        </div>
        <input class="text-white" type="text" v-model="user.email" required />
      </div>
      <div class="">
        <div class="">
          <button class="text-white">Mot de passe</button>
        </div>
        <input class="text-white" type="password" v-model="user.password" required />
      </div>
      <!-- <div class="alert alert-warning mb-3 text-center text-white" v-if="message != null">
        {{ message }}
      </div> -->
      <div class="flex justify-center">
        <button class="bouton_deco mt-4" type="submit">Se connecter</button>
      </div>
    </form>
    <button class="bouton_deco" @click="onDcnx()" v-if="Connected">Se deconnecter</button>
  </div>
  <div class="mb-3 pt-5 text-center font-prompt text-3xl text-white">
    <!-- <h2 class="font-prompt">Pseudo</h2> -->
    <h2>{{ user.pseudo }}</h2>
  </div>
  <div class="flex justify-center" v-if="Connected">
    <div class="cercle_bleu">
      <div>
        <img :src="user.axolott" alt="" class="mt-12" />
      </div>
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
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { emitter } from "../main";

export default {
  data() {
    // Données de la vue
    return {
      imageAxolott: [],
      user: {
        // user se connectant
        email: null,
        password: null,
        pseudo: null,
        axolott: null,
      },
      message: null, // Message de connexion
      Connected: false,
    };
  },

  mounted() {
    // this.getImageAxolott();
    this.getUserConnect();
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
    // async getImageAxolott() {
    //   const firestore = getFirestore();
    //   const dbImageAxolott = collection(firestore, "user");
    //   await onSnapshot(dbImageAxolott, (snapshot) => {
    //     this.imageAxolott = snapshot.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data(),
    //     }));
    //     console.log(this.imageAxolott);
    //     this.imageAxolott.forEach(function (user) {
    //       const storage = getStorage();
    //       const spaceRef = ref(storage, "axolott/" + user.axolott);
    //       getDownloadURL(spaceRef)
    //         .then((url) => {
    //           user.axolott = url;
    //         })
    //         .catch((error) => {
    //           console.log("erreur download url", error);
    //         });
    //     });
    //   });
    // },
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            this.getUserInfo(this.user);
            this.Connected = true;
          }
        }.bind(this)
      );
    },
    async getUserInfo() {
      const q = query(collection(getFirestore(), "user"), where("uid", "==", getAuth().currentUser.uid));
      await onSnapshot(q, (snapshot) => {
        let user = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log(user);
        this.user.pseudo = user[0].pseudo;
        this.user.axolott = user[0].axolott;
      });
    },
    onCnx() {
      // Se connecter avec user et mot de passe
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          // Connexion OK
          console.log("user connecté", response.user);
          emitter.emit("connectUser", { user: this.user });
          this.user = response.user;
          this.message = "User connecté : " + this.user.email;
          this.getUserInfo();
          this.Connected = true;
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
          emitter.emit("deConnectUser", { user: this.user });
          console.log("user deconnecté ", this.user);
          this.message = "user non connecté";
          this.Connected = false;
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
.bouton_deco {
  background-color: var(--cyan);
  border: none;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px black;
}
</style>
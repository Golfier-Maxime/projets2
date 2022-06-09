<template>
  <div>
    <header2 :point="user.point"></header2>
    <body class="bg-Deep-purple">
      <br />
      <RouterLink to="/"></RouterLink>
      <main>
        <RouterView />
      </main>

      <!-- <RouterLink to="/test" class="text-blue-600 underline">test</RouterLink> -->
    </body>
    <footer2></footer2>
  </div>
</template>

<script>
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
import header2 from "./views/header2.vue";
import axolott from "./views/axolott.vue";
import quete from "./views/quete.vue";
import footer2 from "./views/footer2.vue";
import { emitter } from "./main.js";
export default {
  components: { header2, axolott, quete, footer2 },
  data() {
    return {
      user: {
        point: 0,
      },
    };
  },

  methods: {
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            this.user = user;
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
    },
    async getUserInfo(user) {
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "user");
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        let user = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.user.point = user[0].point;
      });
    },
  },
  mounted() {
    this.getUserConnect();
    emitter.on("connectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user connecté", this.user);
      this.getUserInfo(this.user);
    });
    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      console.log("App => Reception user deconnecté", this.user);
      this.userInfo = null;
    });
  },
};
</script>
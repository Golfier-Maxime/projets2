<template>
  <div class="rounded-2xl bg-white pb-20">
    <!-- TITRE : MES QUETES -->
    <div class="flex justify-center gap-4 pt-2 pb-2 text-Dark-purple">
      <h1 class="font-prompt text-2xl">Mes Quêtes</h1>
      <img src="/icon/trophee.png" alt="logo de trophée" />
    </div>
    <!-- QUETE -->
    <!-- <div class="mb-2 grid grid-cols-[15%_85%]">
      <div class="ml-8 mt-2 flex gap-1">
        <img src="/icon/fleche.svg" alt="fleche de temps" class="h-6 w-6" />
        <p class="font-prompt text-Dark-purple">23h</p>
      </div>
      <div class="ml-8 mr-8 drop-shadow-md">
        <div class="flex justify-between rounded-t-xl bg-green-cyan pt-2 pb-2">
          <div class="">
            <p class="ml-4 font-mulish text-white">...</p>
          </div>
          <div class="carre_check mr-4 bg-white"></div>
        </div>
        <div class="flex justify-between rounded-b-xl bg-white pt-2 pb-2">
          <div>
            <p class="text-gris ml-2 font-mulish text-[11px]">Définissez votre quête</p>
          </div>
          <div class="mr-2 flex">
            <p class="font-prompt">10</p>
            <img src="/monnais.png" alt="piece de monnais" class="h-6 w-6" />
          </div>
        </div>
      </div>
    </div> -->
    <div class="mx-auto w-fit">
      <tr v-for="quetes in listeQuetesSynchro" :key="quetes.libelle">
        <td>
          <form>
            <div class="ml-8 mr-8 mb-4 drop-shadow-md">
              <div class="flex justify-between rounded-t-xl bg-cyanAxolott pt-2 pb-2">
                <div class="">
                  <input type="text" class="ml-4 font-mulish text-white" v-model="quetes.libelle" required />
                </div>
                <div class="carre_check mr-4 bg-white" @click="addPoint"></div>
              </div>
              <div class="flex justify-between rounded-b-xl bg-white pt-2 pb-2">
                <div>
                  <textarea
                    class="text-gris ml-2 font-mulish text-[11px]"
                    name=""
                    id=""
                    cols="30"
                    rows="1"
                    v-model="quetes.desc"
                  ></textarea>
                </div>
                <div class="mr-2 flex">
                  <p class="font-prompt">10</p>
                  <img src="/monnais.png" alt="piece de monnais" class="h-6 w-6" />
                </div>
              </div>
            </div>
          </form>
        </td>
      </tr>
    </div>
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
export default {
  name: "ListeQuetes",
  data() {
    return {
      listeQuetesSynchro: [],
    };
  },
  mounted() {
    this.getQuetesSynchro();
  },
  methods: {
    async addPoint() {
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "user");
      const q = query(dbUsers, where("uid", "==", getAuth().currentUser.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.updatePoint(doc);
      });
    },
    async updatePoint(document) {
      const firestore = getFirestore();
      console.log(document.id, " ", document.data());
      var newPoint = "10";
      console.log(document.point);
      var x = newPoint + document.point;
      console.log(x);
      await updateDoc(doc(firestore, "user", document.id), {
        point: (newPoint += document.point),
      });
    },
    async getQuetesSynchro() {
      const firestore = getFirestore();
      const dbQuetes = collection(firestore, "quetes");
      const query = await onSnapshot(dbQuetes, (snapshot) => {
        this.listeQuetesSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    async createQuetes() {
      const firestore = getFirestore();
      const dbQuetes = collection(firestore, "quetes");
      const docRef = await addDoc(dbQuetes, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
    async updateQuetes(quetes) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quetes", quetes.id);
      await updateDoc(docRef, {
        nom: quetes.nom,
      });
    },
    async deleteQuetes(quetes) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "quetes", quetes.id);
      await deleteDoc(docRef);
    },
  },
  //   computed: {
  //     searchByName() {
  //       let q = this.q;
  //       return this.listeArtisteSynchro.filter(function (artiste) {
  //         return artiste.nom.includes(q);
  //       });
  //     },
  //   },
  computed: {
    // Tri des pays par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des pays 2 à 2
      return this.listeQuetesSynchro.sort(function (a, b) {
        // Si le nom du pays est avant on retourne -1
        if (a.nom < b.nom) return -1;
        // Si le nom du pays est après on retourne 1
        if (a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
  },
};
</script>

<style>
.carre_check {
  width: 20px;
  height: 20px;
  border-radius: 40%;
  border: solid;
  border-color: black;
}
.text-gris {
  color: #8e8e8e;
}
textarea {
  border: none;
  resize: none;
}
input {
  background-color: #08a2f1;
}
</style>
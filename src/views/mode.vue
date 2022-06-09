<template>
  <div class="mr-6 flex justify-end">
    <button class="mt-16 rounded-2xl bg-green-cyan pt-1 pb-1 pr-4 pl-4 font-prompt font-semibold text-white shadow-lg">Save</button>
  </div>

  <div class="flex justify-center">
    <div class="cercle_bleu">
      <img src="/axolott/axo_main.svg" alt="axolotl de base" class="img_axo" />
    </div>
  </div>

  <div class="mt-2 flex justify-evenly bg-white pt-2 pb-2">
    <img src="\icon\arrow_left.svg" alt="" />
    <img src="\icon\corps_axo_bleu.svg" alt="" />
    <img src="\icon\tee-shirt.svg" alt="" />
    <img src="\icon\eye.svg" alt="" />
    <img src="\icon\bouche.svg" alt="" />
    <img src="\icon\arrow_right.svg" alt="" />
  </div>
  <!-- <div class="fond-gris flex flex-wrap justify-evenly pb-20">
    <div class="selection">
      <img src="\axolott\axo_rouge.svg" alt="" />
    </div>
    <img src="\axolott\Axo_jaune.svg" alt="" />
    <img src="\axolott\axo_majenta.svg" alt="" />
    <img src="\axolott\axo_black.svg" alt="" />
    <img src="\axolott\axo_bleu_clair.svg" alt="" />
    <img src="\axolott\axo_bleu_fonce.svg" alt="" />
    <img src="\axolott\axo_rose.svg" alt="" />
    <img src="\axolott\axo_orange.svg" alt="" />
    <img src="\axolott\axo_bordeaux.svg" alt="" />
    <img src="\axolott\axolott_vert_clair.svg" alt="" />
    <img src="\axolott\axo_vert_fonce.svg" alt="" />
  </div> -->
  <div class="mt-2">
    <img :src="axolott.corps" alt="" class="h-10 w-10" />
  </div>
  <tr v-for="axolott in filterByName" :key="axolott.id">
    <td>
      <form>
        <div class="">
          <div class="">
            <img :src="axolott.corps" alt="" />
          </div>
        </div>
      </form>
    </td>
  </tr>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
export default {
  name: "ImgAxo",
  data() {
    return {
      listeQuetesSynchro: [],
      filter: "",
      nom: null,
      libelle: null,
      desc: null,
      axolott: {
        corps: null,
      },
    };
  },
  mounted() {
    this.getQuetesSynchro();
  },
  methods: {
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
    // Filtrage de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (quetes) {
          // On ne renvoie que les pays dont le nom contient
          // la chaine de caractère du filtre
          return quetes.nom.toLowerCase().includes(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },
};
</script>

<style>
.fond-gris {
  background: #f4f4f4;
}
.selection {
  background: #46d9a4;
  opacity: 50%;
  border-radius: 10px;
}
</style>
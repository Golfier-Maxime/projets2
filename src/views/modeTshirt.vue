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
    <RouterLink to="/mode" class=""> <img src="\icon\arrow_left.svg" alt="" /></RouterLink>
    <img src="\icon\corps_axo.svg" alt="" />
    <img src="\icon\tshirt_bleu.svg" alt="" />
    <img src="\icon\eye.svg" alt="" />
    <img src="\icon\bouche.svg" alt="" />
    <RouterLink to="/modeEye" class=""> <img src="\icon\arrow_right.svg" alt="" /></RouterLink>
  </div>

  <div class="flex flex-wrap justify-center gap-2 bg-white pt-4 pb-20">
    <div v-for="axolott in ListeAxolott" :key="axolott">
      <img :src="axolott.tshirt" alt="" class="w-[100px]" />
    </div>
  </div>
  <!-- <table>
    <tr v-for="axolott in ListeAxolott" :key="axolott">
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
  </table> -->
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
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  deleteObject,
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";
export default {
  name: "ImgAxo",
  data() {
    return {
      ListeAxolott: [],
    };
  },
  mounted() {
    this.getAxolott();
  },
  methods: {
    async getAxolott() {
      const firestore = getFirestore();
      const dbAxolott = collection(firestore, "axolott");
      await onSnapshot(dbAxolott, (snapshot) => {
        this.ListeAxolott = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(this.ListeAxolott);
        this.ListeAxolott.forEach(function (axolott) {
          const storage = getStorage();
          const spaceRef = ref(storage, "tshirt/" + axolott.tshirt);
          getDownloadURL(spaceRef)
            .then((url) => {
              axolott.tshirt = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
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
  computed: {},
};
</script>
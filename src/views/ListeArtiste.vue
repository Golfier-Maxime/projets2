<template>
<!-- <div class="mt-32">
    <div v-for="artiste in listeArtisteSynchro" :key="artiste.ID">
        <p>{{artiste.nom}}</p>
    </div>
</div> -->
<div class="pb-32 ">
    <div class="mt-16 ">
      <h2 class="font-prompt font-semibold text-white shadow_text text-[30px] text-center">Artiste</h2>  
      <div class="line mx-auto"></div>
    </div>
     <form>
      <div class="flex flex-col justify-center">
        <div class="">
          <p class="font-prompt font-semibold text-white shadow_text text-[25px] text-center">Ajouter un artiste</p>
        </div>
        
      </div>
    </form>
      <table class="w-max mx-auto">
        <thead class="">
          <tr>
            <th >
              <div class="">Liste des Artistes actuels</div>
              <span class="">
                <div class="">
                  <div class="">
                    <span class="">Filtrage</span>
                  </div>
                  <div>
                    <input type="text" class="" v-model="filter" />
                    <button class="bouton_liste" type="submit" title="Création">
                        Filtrer
                    </button>
                  </div>
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artiste in filterByName" :key="artiste.id">
            <td>
              <form>
                <div class="">
                  <div class="">
                    <span class="">Nom de l'artiste</span>
                  </div>
                  <input
                    type="text"
                    class=""
                    v-model="artiste.nom"
                    required
                  />
                  <img :src="artiste.image" alt="">
                  <button
                    class="bouton_liste"
                    type="submit"
                    title="Création"
                    @click.prevent="updateArtiste(artiste)"
                  >
                    Modif
                  </button>
                  <button
                    class="bouton_liste"
                    type="submit"
                    title="Suppression"
                    @click.prevent="deleteArtiste(artiste)"
                  >
                  DELETE
                  </button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
</template>

<style>
.bouton_liste {
    background-color:  cyan;
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
  name: "ListeArtiste",
  data() {
    return {
      listeArtisteSynchro: [],
      filter: "",
      artiste:{
        image: null,
      },
      nom: null,
    };
  },
  mounted() {
    this.getArtisteSynchro();
  },
  methods: {
    async getArtisteSynchro() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        this.listeArtisteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    async createArtiste() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const docRef = await addDoc(dbArtiste, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
    async updateArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
      await updateDoc(docRef, {
        nom: artiste.nom,
      });
    },
    async deleteArtiste(artiste) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", artiste.id);
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
 computed:{
    // Tri des pays par nom en ordre croissant
    orderByName:function(){
      // Parcours et tri des pays 2 à 2
      return this.listeArtisteSynchro.sort(function(a,b){
        // Si le nom du pays est avant on retourne -1
        if(a.nom < b.nom) return -1;
        // Si le nom du pays est après on retourne 1
        if(a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName:function(){
      // On effectue le fitrage seulement si le filtre est rnseigné
      if(this.filter.length > 0){
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function(artiste){
          // On ne renvoie que les pays dont le nom contient 
          // la chaine de caractère du filtre
          return artiste.nom.toLowerCase().includes(filter);
        })
      }else{
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    }
  },
};
</script>

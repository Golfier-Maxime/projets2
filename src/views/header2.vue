<template>
  <header class="header flex justify-between rounded-b-2xl bg-Deep-purple">
    <div class="mt-3 mb-3 ml-3">
      <img src="/icon/Logo_Axolott.svg" alt="logo axolott" />
    </div>
    <div class="mt-5 mr-3 flex gap-1">
      <p class="text-sm text-white">{{ point }}</p>
      <img src="/monnais.png" alt="piece de monnais" class="h-6 w-6" />
    </div>
  </header>
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
  props: { point: { type: Number, default: 0 } },
};
</script>


<style >
.header {
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
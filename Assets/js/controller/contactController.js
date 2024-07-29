import { contact } from "../models/contact.js";

let listContacts = [];

// Ajouter un contact
function ajouterContact(nom, prenom, telephone) {
  const newContact = new contact(nom, prenom, telephone);
  listContacts.push(newContact);
}
console.log = listContacts;

//Afficher contact

function afficherContacts() {
  for (let i = 0; i < listContacts.length; i++) {
    console.log("Vos contacts sont les suivants " + listContacts[i]);
  }
}

// Rechercher un contact

function rechercherContact(nom) {
  for (let i = 0; i < listContacts.length; i++) {
    if (listContacts[i].nom == nom || listContacts[i].prenom === nom)
      console.log(listContacts[i]);
  }
}

//supprimer un contact

function supprimerContact() {}

// Vérification du formulaire de nouveau service
// On vérifie que l'ensemble des champs sont remplis
// Si c'est le cas, on supprime l'attribut disabled du bouton de validation
// Sinon, on le laisse désactivé


// On récupère les éléments du formulaire

var service = document.getElementById('service');
var niveau = document.getElementById('inputNiveau');
var nom = document.getElementById('inputNom');
var description = document.getElementById('inputDescription');
var prix = document.getElementById('inputPrix');
var lieu = document.getElementById('inputLieu');
var lieu = document.getElementById('inputLieu');
var heure = document.getElementById('inputHeure');
var lieuDepart = document.getElementById('inputLieuDepart');
var lieuArrivee = document.getElementById('inputLieuArrivee');
var bouton = document.getElementById('submitButton');

// On ajoute un écouteur d'événement sur chaque champ
niveau.addEventListener('input', verificationFormulaire);
nom.addEventListener('input', verificationFormulaire);
description.addEventListener('input', verificationFormulaire);
prix.addEventListener('input', verificationFormulaire);
heure.addEventListener('input', verificationFormulaire);
if (lieu != null) {
    lieu.addEventListener('input', verificationFormulaire);
} else {
    lieuDepart.addEventListener('input', verificationFormulaire);
    lieuArrivee.addEventListener('input', verificationFormulaire);
}

function verifLieu() {
    if (lieu != null && lieu.value != '') {
        return true;
    } else {
        if (lieuDepart.value != null && lieuDepart.value != '' && lieuArrivee.value != null && lieuArrivee.value != '') {
            return true;
        } else {
            return false;
        }
    }

}

// Fonction de vérification du formulaire
function verificationFormulaire() {
    if (service.value == "Échange de compétence") {
        // On vérifie que chaque champ est rempli
        if (nom.value != '' && description.value != '' && prix.value != '' && verifLieu()) {
            // Si c'est le cas, on supprime l'attribut disabled du bouton de validation
            bouton.removeAttribute('disabled');
        } else {
            // Sinon, on le laisse désactivé
        }
    }
    else {
        // On vérifie que chaque champ est rempli
        if (nom.value != '' && niveau.value !='' && description.value != '' && prix.value != '' && heure.value != '' && verifLieu()) {
            // Si c'est le cas, on supprime l'attribut disabled du bouton de validation
            bouton.removeAttribute('disabled');
        } else {
            // Sinon, on le laisse désactivé
        }
    }
}
// Demander à l'utilisateur de choisir
function choisirPhrasesOuMots() {
  let choix = prompt("Sélectionnez votre liste : 'mots' ou 'phrases'")
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Sélectionnez votre liste : 'mots' ou 'phrases'")
  }
  return choix
}

// Afficher le résultat
function afficherResultat(score, nbMotsProposes) {
  console.log("Bravo ! Votre score est de " + score + "sur " + nbMotsProposes)
}

// Lancer la boucle de jeu
function lancerBoucleDeJeu(listePropositions) {
    for (let compteur = 0; compteur < (listePropositions.length); compteur ++){
      motUtilisateur = prompt("Entrez le mot : " + listePropositions[compteur])
      if (motUtilisateur === listePropositions[compteur]) {
        score ++
      }
    }
    return score
}

// Lancer le jeu en appelant les fonctions adequates
function lancerJeu() {
  let choix = choisirPhrasesOuMots()
  let score = 0
  let nbMotsProposes = 0

  if (choix === 'mots'){
    score = lancerBoucleDeJeu(listeMots)
    nbMotsProposes = listeMots.length
  } else {
    score = lancerBoucleDeJeu(listePhrases)
    nbMotsProposes = listePhrases.length
  }
  afficherResultat(score, nbMotsProposes)
}

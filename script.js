let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0
let choix = ""

function choisirPhrasesOuMots() {
  choix = prompt("Sélectionnez votre liste : 'mots' ou 'phrases'")
}

function afficherResultat(score, nbMotsProposes) {
  console.log("Bravo ! Votre score est de " + score + "sur " + nbMotsProposes)
}

function lancerBoucleDeJeu(choix) {
  if (choix === "mots") {
    for (let compteur = 0; compteur < (listeMots.length); compteur ++){
      motUtilisateur = prompt("Entrez le mot : " + listeMots[compteur])
      if (motUtilisateur === listeMots[compteur]) {
        score ++
      }
    } afficherResultat(score, listeMots.length)
  } else {
    for (let compteur = 0; compteur < (listePhrases.length); compteur ++){
      motUtilisateur = prompt("Entrez le mot : " + listePhrases[compteur])
      if (motUtilisateur === listePhrases[compteur]) {
        score ++
      }
    }
  } afficherResultat(score, listePhrases.length)
}

function lancerJeu() {
  let choix = prompt("Sélectionnez votre liste : 'mots' ou 'phrases'")
  while (choix !== "mots" && choix !== "phrases") {
  choisirPhrasesOuMots()
  }
  lancerBoucleDeJeu(choix)
}

lancerJeu()

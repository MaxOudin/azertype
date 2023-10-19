let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0

let answer = prompt("Sélectionnez votre liste : 'mots' ou 'phrases'")
while (answer !== "mots" && answer !== "phrases") {
  answer = prompt("Sélectionnez votre liste : 'mots' ou 'phrases'")
}

if (answer === "mots") {
  for (let compteur = 0; compteur < (listeMots.length); compteur ++){
    motUtilisateur = prompt("Entrez le mot : " + listeMots[compteur])
    if (motUtilisateur === listeMots[compteur]) {
      score ++
    }
  }
  console.log("Bravo ! Votre score est de " + score)
} else {
  for (let compteur = 0; compteur < (listePhrases.length); compteur ++){
    motUtilisateur = prompt("Entrez le mot : " + listePhrases[compteur])
    if (motUtilisateur === listePhrases[compteur]) {
      score ++
    }
  }
  console.log("Bravo ! Votre score est de " + score)
}

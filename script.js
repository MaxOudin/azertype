let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

for (let compteur = 0; compteur < (listeMots.length); compteur ++){
  motUtilisateur = prompt("Entrez le mot : " + listeMots[compteur])
  if (motUtilisateur === listeMots[compteur]) {
    score ++
    console.log("Bravo ! Votre score est de " + score)
  }
}

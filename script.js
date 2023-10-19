let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])

if (motUtilisateur === listeMots[0]) {
    console.log("Bravo !")
    score += 1
    console.log("Votre score est de " + score);
} else {
    console.log("Vous avez fait une erreur de frappe.")
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[1])

if (motUtilisateur === listeMots[1]) {
  console.log("Bravo !")
  score += 1
  console.log("Votre score est de " + score);
} else {
  console.log("Vous avez fait une erreur de frappe.")
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[2])

if (motUtilisateur === listeMots[2]) {
  console.log("Bravo !")
  score += 1
  console.log("Votre score est de " + score);
} else {
  console.log("Vous avez fait une erreur de frappe.")
}

console.log("Votre score est de " + score);

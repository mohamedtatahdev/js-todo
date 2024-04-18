const form = document.querySelector("form");// Sélectionne le formulaire dans le DOM et le stocke dans la variable 'form'


function storeList() {// Définit une fonction 'storeList' pour sauvegarder la liste dans le stockage local
  window.localStorage.todoList = list.innerHTML;// Sauvegarde le contenu HTML de l'élément 'list' dans le stockage local sous la clé 'todoList'
}

function getTodos() {// Définit une fonction 'getTodos' pour charger les tâches sauvegardées
  if (window.localStorage.todoList) {// Vérifie si 'todoList' existe dans le stockage local
    list.innerHTML = window.localStorage.todoList;// Si oui, charge les tâches sauvegardées dans l'élément 'list'
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;//Sinon, affiche un message par défaut
  }
}

window.addEventListener("load", getTodos);// Ajoute un écouteur d'événement pour charger les tâches sauvegardées au chargement de la page

// Add element
form.addEventListener("submit", (e) => { // Ajoute un écouteur d'événement pour la soumission du formulaire
  e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

  list.innerHTML += `<li>${item.value}</li>`;// Ajoute la nouvelle tâche à la liste
  item.value = "";// Réinitialise le champ de saisie
  storeList();// Sauvegarde la liste mise à jour dans le stockage local
});

// Remove element
list.addEventListener("click", (e) => {// Ajoute un écouteur d'événement pour un clic sur la liste
  if (e.target.classList.contains("checked")) {// Vérifie si l'élément cliqué a la classe 'checked'
    e.target.remove();// Si oui, supprime cet élément de la liste
  } else {
    e.target.classList.add("checked");// Sinon, ajoute la classe 'checked' pour marquer la tâche comme complétée
  }
  storeList();// Sauvegarde la liste mise à jour dans le stockage local
});

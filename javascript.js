//exercice liste
var tab = ["Bob", "Julien", "Roger"];

	
//fonction pour afficher la liste du tableau
function afficherListe(){
	// variable créer pour accéder à l'ID "liste" dans fichier HTML (element) 
	var listElementFirstNames = document.getElementById('liste') 
	// vide la variable 
	listElementFirstNames.innerHTML ="";
	/* pour instruire ma boucle, je nomme variable "i" qui débute à "0", 
	tant que mon "i" est inférieur à la longueur de mon tableau,
	 je l'incréménte de +1 avec "++" */
	for (var i = 0; i < tab.length; i++) {
	// je crée une variable nouvelElement, qui me permettra d'ajouter dans ma balise <li> un nouvel elément
		var nouvelElement = "<li>" +tab[i] +"</li>"
		listElementFirstNames.innerHTML += nouvelElement;		
	}
	console.log(listElementFirstNames);
}
//ci-dessous importer la liste du fichier HTML
afficherListe(); // appel de la fonction créer ci-dessus


// ajouter les noms à la liste
function ajouterListe (){
	// variable créee qui fait référence au fichier html par l'id "texte"
	var inputPrenom = document.getElementById('texte').value; // ajoute 
	tab.push(inputPrenom) ; /* envoi des nouveaux éléments dans le tableau par 
	l'intermediaire de ma variable inputPrenom*/
	afficherListe();

	}
	

function supprimerPrenom (){
	/* supprime le dernier element de mon  tableau */
	tab.pop() ; // pop supprime le dernier élément dans le tableau
	afficherListe();

	}
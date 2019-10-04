//exercice liste
var tab = ["Bob", "Julien", "Roger"];
	


function afficherListe(){
	for (var i = 0; i < tab.length; i++) {
		console.log("bonjour");
		document.getElementById('liste').innerHTML += "<li>" +tab[i] +"</li>";
  	}
}

afficherListe();

function ajouteListe() {
	document.getElementById('ajouter');
	console.log(ajouterListe);
	 
	}
ajouteListe();

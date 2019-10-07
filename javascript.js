//exercice liste
var tab = ["Bob", "Julien", "Roger"];
	


function afficherListe(){
	for (var i = 0; i < tab.length; i++) {
	
		document.getElementById('liste').innerHTML += "<li>" +tab[i] +"</li>";
  	}
}

afficherListe();

var ajoutPrenom = document.createElement('texte');

function ajouterListe (){
	tab.push('texte').value;
	
}


function onclick() {
	 tab.push;
	
	 
	}
ajouterListe();
console.log("ajouterListe");
console.log("ajoutPrenom");
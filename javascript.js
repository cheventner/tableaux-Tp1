//exercice liste
var tab = ["Bob", "Julien", "Roger"];
	


function afficherListe(){
	for (var i = 0; i < tab.length; i++) {
	
		document.getElementById('liste').innerHTML += "<li>" +tab[i] +"</li>";
  	}
}

afficherListe();



function ajouterListe (){
	var ajoutPrenom = document.getElementById('texte').value;
	tab.push(ajoutPrenom) ;
	afficherListe();

	}
	


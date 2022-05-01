"use strict";

function darkModeActivation() { // For darkMode
  let decider = document.getElementById('switch');
  let input = document.getElementsByTagName("input");
  if(decider.checked){
    document.body.style.backgroundImage = 'linear-gradient(to right top, #000, #000)';
    //for(var i = 0; i < input.length; i++){
    //  input[i].style.backgroundColor = '#000';
    //}
  } else {
    document.body.style.backgroundImage = 'linear-gradient(to right top, #f3d7b2, #f3d7b2)';
  }
}

function imageOpen(){
  let div = document.getElementById("img_div");
    if (div.style.display === "block") {
      div.style.display = "none";
    }
    else {
      div.style.display = "block";
    }
}

function errorGenerator(taxon, sexe, field){
  if(sexe == "M")
    sexe = "Mâle";
  else if(sexe == "F")
    sexe = 'Femelle';
  let erreur = taxon + " " + sexe + " -> " + field;
  window.alert("Erreur potentielle : " + erreur + ".");
  if(confirm("Voulez-vous corriger la valeur " + field + "? \n-> Oui = retour aux entrées pour modification. \n-> Non = forçage de la valeur et téléchargement du fichier.")){
    console.log("Modification de valeur suite à la détection")
  }
  else{
    console.log("Téléchargement du fichier")
    saveFile();
  }
}

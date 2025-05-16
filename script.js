//je récupère les boutons number
const number = document.querySelector(".number");

//les oppérateurs
const opperateurButton = document.querySelector(".opperateur");

//bouton reset
const resetButton = document.querySelector(".reset");

//espace d'affichage et d'ecriture
const resultID = document.querySelector("#result");

//ecrire une opération
function write(value){
resultID.value += value
};

//resultat de l'operation
function equal(){

};

//reset
function clear(){
resultID.value = " ";
};
//ecrire une opération
function writeInResult(value){
document.getElementById('result').value += value;
};

//resultat de l'operation
function equal(){
  try {
    document.getElementById('result').value = eval(document.getElementById('result').value);
  } catch (e) {
    document.getElementById('result').value = "Erreur";
  }
};

//reset
function clearResult(){
document.querySelector('#result').value = " ";
};
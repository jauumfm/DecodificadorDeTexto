var Decodificar = document.querySelector('#textoDecodificar');
Decodificar.addEventListener("input", function(e){
  e.target.value = e.target.value.toLowerCase()
  ;
});//transforma tudo em minusculo//



function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //remove acento//
  }


var Decodificado = document.querySelector("#textoDecodificado");

function Criptografando(){
    
    if(Decodificar.value.trim() !==("")){

    var semAcento = Decodificar.value;
    var letra = removeAccents(semAcento);
    //var letraDecodificada = letra.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat"); fazendo dessa maneira gera bug teste com ai
    var letraDecodificada = letra.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    document.getElementById('textoDecodificado').innerHTML = '<textarea readonly id="textoConfigurado">' + letraDecodificada + '</textarea>' + '<button class= "copiar" id="botaoCopia" onclick="copiando()">Copiar</button>'}
    
    else{
      alert("Texto vazio");
    }
}


function Desriptografando(){

    if(Decodificar.value.trim() !==("")){
    
      var semAcento = Decodificar.value;
    var letra = removeAccents(semAcento);

    var letraDescodificada = letra.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('textoDecodificado').innerHTML = '<textarea readonly id="textoConfigurado">' + letraDescodificada + '</textarea>' + '<button class= "copiar" id="botaoCopia" onclick="copiando()"> Copiar </button>'}

    else{
      alert("Texto vazio");
    }
}

function copiando(){
    var textoCopiado = document.getElementById('textoConfigurado').innerHTML;

    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado");
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoAmigos = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value;

  if (!nombreAmigo) {
    alert("Debes ingresar un nombre");
    return;
  }

  listadoAmigos.push(nombreAmigo);
  console.log(listadoAmigos);
  inputAmigo.value = "";
  inputAmigo.focus();
  listarAmigos();
}

function listarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < listadoAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = listadoAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(listadoAmigos.length <=  1){
        alert("Debes ingresar dos o mas amigos");
        return;

    }

        let ganador = listadoAmigos[Math.floor(Math.random() * listadoAmigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `el amigo secreto es: ${ganador}`; 
        
        let limpiarLista = document.getElementById("listaAmigos")
        limpiarLista.innerHTML = "";
    }



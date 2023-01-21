//Activando botones//
var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar")
var temporales = document.querySelector(".contenedor-munheco")
var resultado = document.querySelector(".resultado");

//Funcionalidades de los botones//
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

//funciones de los botones//
function encriptar(){
    ocultarTemporales();
    var area = obtenerTexto();
    resultado.textContent = encriptarTexto(area); 
    limpiarArea();
}

function desencriptar(){
    ocultarTemporales();
    var area = obtenerTexto();
    resultado.textContent = desencriptarTexto(area);
}

//boton Copiar//
function copiar(){
    var copyText = document.querySelector(".resultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    alert("Texto Copiado");
}


function obtenerTexto(){
    var area = document.querySelector(".area-txt");
    return area.value
}

function ocultarTemporales(){
    temporales.classList.add("ocultar")
}

function limpiarArea(){
    var limpiar = document.querySelector(".area-txt").value = "";

}


//boton encriptar//
function encriptarTexto(mensaje){
    var textoAencriptar = mensaje;
    var mensajeResultado = "";
    
    for (i = 0; i < textoAencriptar.length; i++){
        
        if(textoAencriptar[i] == "a"){
            mensajeResultado = mensajeResultado + "ai"
        }
        else if(textoAencriptar[i] == "e"){
            mensajeResultado = mensajeResultado + "enter"
        }
        else if(textoAencriptar[i] == "i"){
            mensajeResultado = mensajeResultado + "imes"
        }
        else if(textoAencriptar[i] == "o"){
            mensajeResultado = mensajeResultado + "ober"
        }
        else if(textoAencriptar[i] == "u"){
            mensajeResultado = mensajeResultado + "ufat"
        }
        else{
            mensajeResultado = mensajeResultado + textoAencriptar[i];
        }
    }

    return mensajeResultado;
}

//boton desencriptar//
function desencriptarTexto(mensaje){
    var textoAencriptar = mensaje;
    var mensajeResultado = "";

    for (i = 0; i < textoAencriptar.length; i++){

        if(textoAencriptar[i] == "a"){
            mensajeResultado = mensajeResultado + "a"
            i = i+1;
        }
        else if(textoAencriptar[i] == "e"){
            mensajeResultado = mensajeResultado + "e"
            i = i+4;
        }
        else if(textoAencriptar[i] == "i"){
            mensajeResultado = mensajeResultado + "i"
            i = i+3; 
        }
        else if(textoAencriptar[i] == "o"){
            mensajeResultado = mensajeResultado + "o"
            i = i+3;
        }
        else if(textoAencriptar[i] == "u"){
            mensajeResultado = mensajeResultado + "u"
            i = i+3;
        }
        else{
            mensajeResultado = mensajeResultado + textoAencriptar[i];
        }
    }

    return mensajeResultado;
}





/*VARIABLES DE MI ENCRIPTADOR */
const textoEncriptar = document.getElementById("textoEncriptar");
const textFinal = document.getElementById("textFinal");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const imgOcultar = document.getElementById("imgOcultar");
const infoOcultar = document.getElementById("infoOcultar");
const botonCopiar = document.getElementById("botonCopiar");
const der = document.getElementById("der");

/*La letra "e" - enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

//usar un objeto es mas simple 
const reemplazos = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};
//objeto para desencriptar mi mensaje
const regexReemplazos = /enter|imes|ai|ober|ufat/g;
    const reemplazosInversos = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    }

//llamo a mi const boton encriptar y hjago que preste atencion al click para ver mi texto de encriptar
botonEncriptar.addEventListener("click", () => {
	const texto = textoEncriptar.value.toLowerCase()
    function encriptar(nuevoTexto){
        //usar una expresion regular donde yo definoo las que deben coincidir con [] como las vocales y le pido que las cambie segun el objeto 
        return nuevoTexto.replace(/[eioua]/g, letra => reemplazos[letra]);
        
    }
    const textoEncriptado = encriptar(texto)
    textFinal.innerHTML = textoEncriptado
    imgOcultar.style.display = "none";
    infoOcultar.style.display = "none";
    botonCopiar.style.display = "block";
    der.classList.add("ajuste");
    textFinal.classList.add("ajuste");
})

/*METODO PARA DESENCRIPTAR TEXTO */ 
botonDesencriptar.addEventListener("click", () => {
    const texto = textoEncriptar.value.toLowerCase();
    // Función para desencriptar el texto encriptado
    function desencriptar(textoEncriptado) {
        return textoEncriptado.replace(regexReemplazos, palabra => reemplazosInversos[palabra]);
    }
    const textoDesencriptado = desencriptar(texto);
    textFinal.innerHTML = textoDesencriptado;
});

/*METODO PARA COPIAR EL TEXTO FINAL */
botonCopiar.addEventListener("click", () => {
    const texto = textFinal.value;
     // Selecciona y copia el texto del área de texto temporal
    navigator.clipboard.writeText(texto);
        swal("¡Texto copiado!");
})
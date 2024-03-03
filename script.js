
const btnCriptografar = document.querySelector(".btn-criptografar");
const btnDescriptografar = document.querySelector(".btn-descriptografar");
const menino = document.querySelector(".menino");
const paragrafo = document.querySelector(".paragrafo");
const resultado = document.querySelector(".texto-resultado");
const caixaTexto = document.querySelector(".texto");

btnCriptografar.onclick = () => processarTexto(criptografarTexto);
btnDescriptografar.onclick = () => processarTexto(descriptografarTexto);

function processarTexto(callback) {
    ocultarElementos();
    resultado.textContent = callback(caixaTexto.value);
}

function ocultarElementos() {
    menino.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function criptografarTexto(mensagem) {
    return mensagem.replace(/e/g, "enter")
                   .replace(/i/g, "imes")
                   .replace(/a/g, "ai")
                   .replace(/o/g, "ober")
                   .replace(/u/g, "ufat");
}

function descriptografarTexto(mensagem) {
    return mensagem.replace(/enter/g, "e")
                   .replace(/imes/g, "i")
                   .replace(/ai/g, "a")
                   .replace(/ober/g, "o")
                   .replace(/ufat/g, "u");
}

let botaoCopiar = document.querySelector(".btn_copiar"); 
botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(resultado.textContent);
});

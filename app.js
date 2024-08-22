let botaoCriptografar = document.querySelector(".botao__criptografar");
let botaoDescriptografar = document.querySelector(".botao__descriptografar");
let botaoCopiar = document.querySelector (".botao__copiar")
let imagemDetetive = document.querySelector(".pc__detetive");
let tituloH3 = document.querySelector(".paragrafo__h3");
let paragrafo = document.querySelector(".paragrafo__p");
let resultado = document.querySelector(".caixa__texto__resultado")


botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;
botaoCopiar.onclick= copiar;

function criptografar(){
    ocultarItens();
    resultado.textContent = criptografarTexto(recuperarTexto ());
}

function descriptografar(){
    ocultarItens();
    resultado.textContent = descriptografarTexto(recuperarTexto ());
}

function recuperarTexto(){
    let inputTexto = document.querySelector(".caixa__texto");
    return inputTexto.value;
}

function ocultarItens(){
    imagemDetetive.classList.add("ocultar");
    tituloH3.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function criptografarTexto(mensagem){
    let texto = mensagem;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto [i]== "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto [i]== "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto [i]== "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto [i]== "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto [i]== "u"){
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto [i];
        }
    }

    return textoFinal;
}

function descriptografarTexto(mensagem) {
    let texto = mensagem;
    let textoFinal = "";
    let i = 0;
    
    while (i < texto.length) {
        // Verifica as substituições específicas
        if (texto.startsWith("ai", i)) {
            textoFinal += "a";
            i += 2; // Pular o "ai"
        } else if (texto.startsWith("enter", i)) {
            textoFinal += "e";
            i += 5; // Pular o "enter"
        } else if (texto.startsWith("imes", i)) {
            textoFinal += "i";
            i += 4; // Pular o "imes"
        } else if (texto.startsWith("ober", i)) {
            textoFinal += "o";
            i += 4; // Pular o "ober"
        } else if (texto.startsWith("ufat", i)) {
            textoFinal += "u";
            i += 4; // Pular o "ufat"
        } else {
            textoFinal += texto[i]; // Adiciona o caractere atual
            i++;
        }
    }
    
    return textoFinal;
}

async function copiar() {
    try{
        await navigator.clipboard.writeText(resultado.textContent);
        alert("texto copiado com sucesso!");
    }
    catch (err) {
        alert("falha ao copiar o texto.")
    }

}
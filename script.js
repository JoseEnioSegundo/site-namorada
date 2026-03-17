let atual = 1;

// DIGITAÇÃO
const texto = "Eu fiz isso pra você...";
let i = 0;

function escrever() {
    if (i < texto.length) {
        document.getElementById("texto").innerHTML += texto[i];
        i++;
        setTimeout(escrever, 60);
    }
}

// INICIAR
function iniciar() {
    tocarMusica();
    trocar(2);
}

// TROCAR TELA
function trocar(n) {
    document.getElementById("tela" + atual)?.classList.remove("ativa");
    document.getElementById("carta")?.classList.remove("ativa");

    document.getElementById("tela" + n)?.classList.add("ativa");
    atual = n;
}

// CARTA
function abrirCarta() {
    document.getElementById("tela4").classList.remove("ativa");
    document.getElementById("carta").classList.add("ativa");
}

function abrirEnvelope() {
    document.querySelector(".conteudo-carta").classList.remove("hidden");
}

// CONTADOR
const inicio = new Date("2026-01-18");

function atualizar() {
    const dias = Math.floor((new Date() - inicio) / (1000*60*60*24));
    document.getElementById("dias").innerText = dias + " dias";
}
setInterval(atualizar, 1000);

// MÚSICA COM FADE
const musica = document.getElementById("musica");

function tocarMusica() {
    musica.volume = 0;
    musica.play();

    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            musica.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

function toggleMusica() {
    if (musica.paused) musica.play();
    else musica.pause();
}

// START
window.onload = () => {
    escrever();
    atualizar();
};
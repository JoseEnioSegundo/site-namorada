let telaAtual = 1;
let musica;

// INICIAR TUDO
window.onload = function () {
    musica = document.getElementById("musica");
    escrever();
    atualizarDias();
};

// TEXTO DIGITANDO
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

// TROCAR TELAS
function trocar(num) {
    document.getElementById("tela" + telaAtual).classList.remove("ativa");
    document.getElementById("tela" + num).classList.add("ativa");
    telaAtual = num;
}

// CARTA
function mostrarCarta() {
    trocar(5);
}

function abrirEnvelope() {
    document.getElementById("cartaTexto").classList.remove("hidden");
}

// CONTADOR
const inicio = new Date("2026-01-18");

function atualizarDias() {
    const dias = Math.floor((new Date() - inicio) / (1000 * 60 * 60 * 24));
    document.getElementById("dias").innerText = dias + " dias";
}

setInterval(atualizarDias, 1000);

// MÚSICA
function tocarMusica() {
    musica.volume = 0;
    musica.play().catch(() => {});

    let vol = 0;
    let fade = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            musica.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

function toggleMusica() {
    if (!musica) return;

    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}
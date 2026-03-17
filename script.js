let telaAtual = 1;
let musica;

// INICIAR TUDO (UMA VEZ SÓ)
window.onload = function () {
    musica = document.getElementById("musica");
    escrever();
    escreverNome();
    atualizarDias();
};

// TEXTO DIGITANDO
const texto = "Eu fiz isso pra você...";
let i = 0;

function escrever() {
    const el = document.getElementById("texto");
    if (!el) return;

    if (i < texto.length) {
        el.innerHTML += texto[i];
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
    const atualEl = document.getElementById("tela" + telaAtual);
    const proxEl = document.getElementById("tela" + num);

    if (atualEl) atualEl.classList.remove("ativa");
    if (proxEl) proxEl.classList.add("ativa");

    telaAtual = num;
}

// CARTA
function mostrarCarta() {
    trocar(5);
}

function abrirEnvelope() {
    const carta = document.getElementById("cartaTexto");
    if (carta) carta.classList.remove("hidden");
}

// CONTADOR
const inicio = new Date("2026-01-18");

function atualizarDias() {
    const el = document.getElementById("dias");
    if (!el) return;

    const dias = Math.floor((new Date() - inicio) / (1000 * 60 * 60 * 24));
    el.innerText = dias + " dias";
}

setInterval(atualizarDias, 1000);

// MÚSICA
function tocarMusica() {
    if (!musica) return;

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

// NOME LETRA POR LETRA
const nomeTexto = "Thifany Mackowiak 💜";
let ni = 0;

function escreverNome() {
    const el = document.getElementById("nome");
    if (!el) return;

    if (ni < nomeTexto.length) {
        el.innerHTML += nomeTexto[ni];
        ni++;
        setTimeout(escreverNome, 80);
    }
}

// CORAÇÕES SUBINDO
function criarCoracao() {
    const container = document.getElementById("coracoes");
    if (!container) return;

    const coracao = document.createElement("div");
    coracao.innerHTML = "💜";
    coracao.classList.add("coracao");

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = (Math.random() * 3 + 2) + "s";

    container.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 300);

// SURPRESA FINAL
function surpresa() {
    alert("Eu te escolheria mil vezes. 💜");
}
function respostaSim() {
    alert("Agora você não tem mais escolha 😏💜 Te amo!");
}

function fugir() {
    const btn = event.target;

    btn.style.position = "absolute";
    btn.style.top = Math.random() * 80 + "%";
    btn.style.left = Math.random() * 80 + "%";
}
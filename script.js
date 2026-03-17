// ========================================
// EFEITO DE DIGITAÇÃO
// ========================================
const textoComplete = "Querida Thifany, você é meu amor eterno... 💜";
let indexTexto = 0;

function efetoDigitacao() {
    const elementoTexto = document.getElementById("texto");
    if (indexTexto < textoComplete.length) {
        elementoTexto.textContent += textoComplete.charAt(indexTexto);
        indexTexto++;
        setTimeout(efetoDigitacao, 60);
    }
}

// ========================================
// SISTEMA DE NAVEGAÇÃO ENTRE TELAS
// ========================================
let telaAtual = 1;

function irParaTela(numeroDaTela) {
    // Remove a classe ativa da tela atual
    document.getElementById(`tela${telaAtual}`).classList.remove("ativa");
    
    // Adiciona a classe ativa à nova tela
    document.getElementById(`tela${numeroDaTela}`).classList.add("ativa");
    
    // Atualiza a tela atual
    telaAtual = numeroDaTela;
}

function voltarAoInicio() {
    // Limpa o texto para poder digitá-lo novamente
    document.getElementById("texto").textContent = "";
    indexTexto = 0;
    
    // Volta para a primeira tela
    document.getElementById(`tela${telaAtual}`).classList.remove("ativa");
    document.getElementById("tela1").classList.add("ativa");
    telaAtual = 1;
    
    // Reinicia a animação de digitação
    setTimeout(efetoDigitacao, 500);
}

// ========================================
// CONTADOR DE DIAS
// ========================================
const dataInicio = new Date("2026-01-18T00:00:00"); // 18 de janeiro de 2026

function atualizarContador() {
    const hoje = new Date();
    const diferenca = hoje - dataInicio;
    
    // Calcula os dias
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    
    // Atualiza o elemento
    const elementoDias = document.getElementById("dias");
    if (elementoDias) {
        elementoDias.textContent = dias;
    }
}

// Atualiza o contador quando entra na tela 3
document.addEventListener("DOMContentLoaded", function() {
    atualizarContador();
    
    // Atualiza a cada segundo para mostrar mudanças em tempo real
    setInterval(atualizarContador, 1000);
});

// ========================================
// CORAÇÕES FLUTUANTES (Efeito visual)
// ========================================
const caracteresCoracoes = ["❤️", "💕", "💗", "💖", "💝"];

function criarCoracaoFlutuante() {
    const container = document.getElementById("coracao-container");
    const coracao = document.createElement("div");
    
    coracao.textContent = caracteresCoracoes[Math.floor(Math.random() * caracteresCoracoes.length)];
    coracao.className = "coracao-flutuante";
    
    // Posição aleatória horizontal
    const posicaoX = Math.random() * window.innerWidth;
    coracao.style.left = posicaoX + "px";
    coracao.style.top = "100vh";
    
    container.appendChild(coracao);
    
    // Remove o elemento após a animação terminar
    setTimeout(() => {
        coracao.remove();
    }, 3000);
}

// Cria corações a cada 800ms
const intervaloCoracoes = setInterval(criarCoracaoFlutuante, 800);

// ========================================
// INTERATIVIDADE - Som ao clicar
// ========================================
document.querySelectorAll(".botao").forEach(botao => {
    botao.addEventListener("click", function() {
        // Pequena vibração (se o navegador suportar)
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });
});

// ========================================
// INICIALIZAÇÃO
// ========================================
window.addEventListener("load", function() {
    // Inicia a animação de digitação na primeira tela
    setTimeout(efetoDigitacao, 500);
    
    // Garante que a música tenta tocar (alguns navegadores bloqueiam autoplay)
    const musica = document.getElementById("musica");
    if (musica) {
        musica.play().catch(err => {
            console.log("Autoplay bloqueado pelo navegador");
        });
    }
});

// ========================================
// CONTROLE DE TECLADO
// ========================================
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        // Seta para direita = próxima tela
        if (telaAtual < 5) irParaTela(telaAtual + 1);
    } else if (event.key === "ArrowLeft") {
        // Seta para esquerda = tela anterior
        if (telaAtual > 1) irParaTela(telaAtual - 1);
    }
});

// ========================================
// EFEITO DE CONFETE NA TELA FINAL
// ========================================
function criarConfete() {
    const container = document.getElementById("coracao-container");
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confete = document.createElement("div");
            confete.textContent = ["✨", "💕", "🌹", "⭐", "💖"][Math.floor(Math.random() * 5)];
            confete.className = "coracao-flutuante";
            confete.style.left = Math.random() * window.innerWidth + "px";
            confete.style.top = "100vh";
            confete.style.fontSize = Math.random() * 2 + 1 + "rem";
            
            container.appendChild(confete);
            
            setTimeout(() => confete.remove(), 3000);
        }, i * 50);
    }
}

// Dispara confete quando entra na última tela
const observador = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (telaAtual === 5) {
            criarConfete();
            // Remove o observador para evitar múltiplas disparadas
            observador.disconnect();
        }
    });
});
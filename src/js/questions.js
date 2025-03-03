import { score, messages } from "./data.js";

const getCurrentPage = () => window.location.pathname.split("/").pop().replace(".html", "");

let choiceMade = false;

const chooseOption = (choice, btn) => {
    if (choiceMade) return;
    choiceMade = true;

    const currentPage = getCurrentPage();
    if (score[choice] !== undefined) score[choice] += 10;

    localStorage.setItem("score", JSON.stringify(score));

    document.getElementById("result-text").innerText = messages[currentPage][choice] || "Escolha inválida!";
    
    const progress = JSON.parse(localStorage.getItem("progress")) || { currentQuestion: 1 };
    const totalQuestions = 7;

    if (progress.currentQuestion === totalQuestions) {
        document.getElementById("next-button").style.display = "none";
        document.getElementById("finish-button").style.display = "block"; 
        displayFinalResult();
    } else {
        document.getElementById("next-button").style.display = "block";
        document.getElementById("finish-button").style.display = "none";
    }

    document.querySelectorAll(".choice").forEach(b => {
        if (b !== btn) b.style.display = "none";
    });
};

const resetResult = () => document.getElementById("result-text").innerText = "";

document.addEventListener("DOMContentLoaded", () => {
    resetResult();

    document.querySelectorAll(".choice").forEach(button => {
        button.addEventListener("click", function () {
            const choice = this.getAttribute("data-choice");
            chooseOption(choice, this);
        });
    });

    document.getElementById("next-button")?.addEventListener("click", () => {
        const progress = JSON.parse(localStorage.getItem("progress")) || { currentQuestion: 1 };
        progress.currentQuestion += 1;
        localStorage.setItem("progress", JSON.stringify(progress));

        window.location.href = "game.html";
    });

    document.getElementById("finish-button")?.addEventListener("click", () => {
        window.location.href = "final.html";
    });
});


//--------------------------------------------------
// Obtém elementos
//--------------------------------------------------
// Obtém elementos
//--------------------------------------------------
// Obtém elementos
//--------------------------------------------------
// Obtém elementos
//--------------------------------------------------
// Obtém elemento

//--------------------------------------------------
// Obtém elementos
//--------------------------------------------------
// Obtém elementos
const video = document.getElementById('bg-video');
const questionContainer = document.querySelector('.question-container');
const writingSound = document.getElementById('writing-sound');

// Garante que o áudio está carregado
writingSound.play().then(() => {
    console.log("Áudio carregado com sucesso.");
}).catch(err => {
    console.warn("Áudio bloqueado pelo navegador, aguardando interação...");
});

// Detecta qualquer clique e desmuta o áudio
document.addEventListener('click', () => {
    writingSound.muted = false; // Agora o áudio pode tocar normalmente
    console.log("Interação detectada! Áudio desmutado.");
}, { once: true }); // Executa apenas na primeira interação

// Quando o vídeo terminar...
video.addEventListener('ended', () => {
    // Exibe a pergunta
    questionContainer.classList.add('show-question');

    // Garante que o áudio está no início e toca
    writingSound.currentTime = 0;
    writingSound.play().catch(err => console.warn("Erro ao tocar áudio:", err));

    // Para o som após 9 segundos
    setTimeout(() => {
        writingSound.pause();
        writingSound.currentTime = 0;
    }, 9000);
});

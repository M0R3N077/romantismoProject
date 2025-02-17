// import { score, messages } from "./data.js";

const score = JSON.parse(localStorage.getItem("score")) || {
    indianista: 0,
    urbanista: 0,
    regionalista: 0,
    historico: 0
};

const messages = {
    question1: {
        indianista: "Você sente a conexão com a natureza e as raízes de um povo livre...",
        urbanista: "O brilho dos salões e o encanto da vida social moldaram sua visão...",
        regionalista: "Você valoriza a cultura e a simplicidade de seu povo trabalhador...",
        historico: "Seu olhar está voltado para os feitos grandiosos do passado..."
    },
    question2: {
        indianista: "A poesia da selva te inspira, trazendo a bravura dos antigos guerreiros...",
        urbanista: "O romantismo urbano te atrai, com seus dramas e paixões avassaladoras...",
        regionalista: "A força do sertão pulsa em você, revelando a dureza e beleza do interior...",
        historico: "Você se vê em meio a grandes eventos, entre heróis e batalhas lendárias..."
    }
};

const getCurrentPage = () => window.location.pathname.split("/").pop().replace(".html", "");

let choiceMade = false;

const chooseOption = (choice, btn) => {
    if (choiceMade) return;
    choiceMade = true;

    const currentPage = getCurrentPage();
    if (score[choice] !== undefined) score[choice] += 10;

    localStorage.setItem("score", JSON.stringify(score));

    document.getElementById("result-text").innerText = messages[currentPage][choice] || "Escolha inválida!";
    document.getElementById("next-button").style.display = "block";

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
});

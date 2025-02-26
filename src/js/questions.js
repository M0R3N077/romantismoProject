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

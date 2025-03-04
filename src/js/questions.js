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

    document.getElementById("modal-title").innerText = `Você escolheu a opção "${choice}"`;

    const backgroundImages = {
        question1: {
            indianista: "url('../../../assets/imgsModal/indianista/indianista1.jpg')",
            urbanista: "url('../../../assets/imgsModal/urbanista/urbanista1.jpg')",
            regionalista: "url('../../../assets/imgsModal/regionalista/regionalista1.jpg')",
            historico: "url('../../../assets/imgsModal/historico/historico1.jpg')"
        },
        question2: {
            indianista: "url('../../../assets/imgsModal/indianista/indianista2.jpg')",
            urbanista: "url('../../../assets/imgsModal/urbanista/urbanista2.jpg')",
            regionalista: "url('../../../assets/imgsModal/regionalista/regionalista2.jpg')",
            historico: "url('../../../assets/imgsModal/historico/historico2.jpg')"
        },
        question3: {
            indianista: "url('../../../assets/imgsModal/indianista/indianista3.jpg')",
            urbanista: "url('../../../assets/imgsModal/urbanista/urbanista3.jpg')",
            regionalista: "url('../../../assets/imgsModal/regionalista/regionalista3.jpg')",
            historico: "url('../../../assets/imgsModal/historico/historico3.jpg')"
        },
        question4: {
            indianista: "url('../../../assets/imgsModal/indianista/indianista4.jpg')",
            urbanista: "url('../../../assets/imgsModal/urbanista/urbanista4.jpg')",
            regionalista: "url('../../../assets/imgsModal/regionalista/regionalista4.jpg')",
            historico: "url('../../../assets/imgsModal/historico/historico4.jpg')"
        },
        question5: {
            indianista: "url('../../../assets/imgsModal/indianista/indianista5.jpg')",
            urbanista: "url('../../../assets/imgsModal/urbanista/urbanista5.jpg')",
            regionalista: "url('../../../assets/imgsModal/regionalista/regionalista5.jpg')",
            historico: "url('../../../assets/imgsModal/historico/historico5.jpg')"
        },
        question6: {
            indianista: "url('../../../assets/imgsModal/indianista/indianista6.jpg')",
            urbanista: "url('../../../assets/imgsModal/urbanista/urbanista6.jpg')",
            regionalista: "url('../../../assets/imgsModal/regionalista/regionalista6.jpg')",
            historico: "url('../../../assets/imgsModal/historico/historico6.jpg')"
        },
        question7: {
            indianista: "url('../../../assets/imgsModal/indianista/indianista7.jpg')",
            urbanista: "url('../../../assets/imgsModal/urbanista/urbanista7.jpg')",
            regionalista: "url('../../../assets/imgsModal/regionalista/regionalista7.jpg')",
            historico: "url('../../../assets/imgsModal/historico/historico7.jpg')"
        }
    };

    document.getElementById("next-button-modal").style.backgroundImage = backgroundImages[currentPage][choice] || "none";

    const progress = JSON.parse(localStorage.getItem("progress")) || { currentQuestion: 1 };
    const totalQuestions = 7;

    if (progress.currentQuestion === totalQuestions) {
        document.getElementById("next-button-modal").style.display = "flex";
        document.getElementById("finish-button").style.display = "block"; 
        displayFinalResult();
    } else {
        document.getElementById("next-button-modal").style.display = "flex";
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
const video = document.getElementById('bg-video');
const questionContainer = document.querySelector('.question-container');



video.addEventListener('play', () => {
    setTimeout(() => {
        questionContainer.classList.add('show-question');
    }, 10000); // Aguarda 10 segundos
});

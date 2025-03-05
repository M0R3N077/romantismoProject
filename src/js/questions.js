import { score, messages } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const btnStartVideo = document.getElementById("btnStartVideo");
  const questionContainer = document.querySelector(".question-container");

  if (btnStartVideo) {
    btnStartVideo.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        btnStartVideo.style.display = "none";
      }
    });
  }

  video?.addEventListener("play", () => {
    setTimeout(() => questionContainer?.classList.add("show-question"), 10000);
  });

  resetResult();

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () =>
      chooseOption(button.dataset.choice, button)
    );
  });

  document.getElementById("next-button")?.addEventListener("click", () => {
    updateProgress();
    window.location.href = "game.html";
  });

  document.getElementById("finish-button")?.addEventListener("click", () => {
    window.location.href = "final.html";
  });
});

const getCurrentPage = () =>
  window.location.pathname.split("/").pop().replace(".html", "");
let choiceMade = false;

const chooseOption = (choice, btn) => {
  if (choiceMade) return;
  choiceMade = true;

  const currentPage = getCurrentPage();
  if (score[choice] !== undefined) score[choice] += 10;
  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById("result-text").innerText =
    messages[currentPage][choice] || "Escolha inválida!";
  document.getElementById(
    "modal-title"
  ).innerText = `Você escolheu a opção "${choice}"`;

  document.getElementById("next-button-modal").style.backgroundImage =
    getBackgroundImage(currentPage, choice);
  updateUI();
  hideOtherChoices(btn);
};

const getBackgroundImage = (page, choice) => {
  const backgrounds = [1, 2, 3, 4, 5, 6, 7].reduce((acc, number) => {
    acc[`question${number}`] = {
      indianista: `url('../../../assets/imgsModal/indianista/indianista${number}.jpg')`,
      urbanista: `url('../../../assets/imgsModal/urbanista/urbanista${number}.jpg')`,
      regionalista: `url('../../../assets/imgsModal/regionalista/regionalista${number}.jpg')`,
      historico: `url('../../../assets/imgsModal/historico/historico${number}.jpg')`,
    };
    return acc;
  }, {});

  return backgrounds[page]?.[choice] || "none";
};

const updateUI = () => {
  const progress = JSON.parse(localStorage.getItem("progress")) || {
    currentQuestion: 1,
  };
  const isLastQuestion = progress.currentQuestion === 7;

  const nextButtonModal = document.getElementById("next-button-modal");
  const finishButton = document.getElementById("finish-button");

  if (nextButtonModal) nextButtonModal.style.display = "flex";
  if (finishButton)
    finishButton.style.display = isLastQuestion ? "block" : "none";

  if (isLastQuestion) displayFinalResult();
};

const hideOtherChoices = (selectedBtn) => {
  document.querySelectorAll(".choice").forEach((b) => {
    if (b !== selectedBtn) b.style.display = "none";
  });
};

const resetResult = () =>
  (document.getElementById("result-text").innerText = "");

const updateProgress = () => {
  const progress = JSON.parse(localStorage.getItem("progress")) || {
    currentQuestion: 1,
  };
  progress.currentQuestion += 1;
  localStorage.setItem("progress", JSON.stringify(progress));
};

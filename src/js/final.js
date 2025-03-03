const getHighestScore = (score) => {
    let highestScore = -1;
    let resultThemes = [];
    for (let theme in score) {
      if (score[theme] > highestScore) {
        highestScore = score[theme];
        resultThemes = [theme];
      } else if (score[theme] === highestScore) {
        resultThemes.push(theme);
      }
    }
    return { resultThemes, highestScore };
  };
  
  const score = JSON.parse(localStorage.getItem("score")) || {
    indianista: 0,
    urbanista: 0,
    regionalista: 0,
    historico: 0,
  };
  
  const { resultThemes, highestScore } = getHighestScore(score);
  
  const resultText =
    resultThemes.length > 1
      ? `Você teve a maior pontuação em: <strong>${resultThemes.join(
          ", "
        )}</strong> com <strong>${highestScore}</strong> pontos!`
      : `Você teve a maior pontuação no tema: <strong>${resultThemes[0]}</strong> com <strong>${highestScore}</strong> pontos!`;
  
  document.getElementById("result-text").innerHTML = resultText;
  
  const restartButton = document.getElementById("restart-button");
  const menuButton = document.getElementById("menu-button");
  
  restartButton.addEventListener("click", () => {
    localStorage.setItem("progress", JSON.stringify({ currentQuestion: 1 }));
    localStorage.setItem(
      "score",
      JSON.stringify({
        indianista: 0,
        urbanista: 0,
        regionalista: 0,
        historico: 0,
      })
    );
    window.location.href = "game.html";
  });
  
  menuButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  
  const finalBody = document.getElementById("final-body");
  
  const themeBackgrounds = {
    indianista: "url('../../assets/finalImg/indianista.png')",
    urbanista: "url('../../assets/finalImg/urbanista.png')",
    regionalista: "url('../../assets/finalImg/regionalista.png')",
    historico: "url('../../assets/finalImg/historico.png')",
  };
  
  if (resultThemes.length >= 1) {
    const randomTheme =
      resultThemes[Math.floor(Math.random() * resultThemes.length)];
    finalBody.style.backgroundImage = themeBackgrounds[randomTheme];
  } else {
    finalBody.style.backgroundImage = "url('default.jpg')";
  }
  
// SWIPER JS
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 5,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

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

const periodCards = {
  indianista: [
    {
      image:
        "https://m.media-amazon.com/images/I/91-16juFmnL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81dQ4061MaL._AC_UF350,350_QL50_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71vnoOyoz0L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/91T7p2VV5MS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/91bcC5kcAPL._AC_UF1000,1000_QL80_.jpg",
    },
    { image: "https://m.media-amazon.com/images/I/71UHD7DqLNL.jpg" },
    {
      image:
        "https://m.media-amazon.com/images/I/71GCN3T0BTL._AC_UF1000,1000_QL80_.jpg",
    },
  ],
  urbanista: [
    {
      image:
        "https://m.media-amazon.com/images/I/61rqadtSs3S._AC_UF1000,1000_QL80_.jpg",
    },
    { image: "https://m.media-amazon.com/images/I/71iI+JrX6SL.jpg" },
    {
      image:
        "https://m.media-amazon.com/images/I/71m+rJT1e1L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61ggTTE+deL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/714y2hfhljL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqJ0SRO8XltnaIhOiiF_Ei1hkXjlVpRShfw&s",
    },
  ],
  regionalista: [
    {
      image:
        "https://m.media-amazon.com/images/I/91yl-UZm+wS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/815fFEIezPS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/9135crSSTaS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81j8ocnADUL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81w7bTurZGS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81Ehk8ESqXS._AC_UF1000,1000_QL80_.jpg",
    },
  ],
  historico: [
    {
      image:
        "https://m.media-amazon.com/images/I/619xwAPWNkL._UF894,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71Hkl1xogyL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71PiSYoxNWL._UF894,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/717+VJGDMhL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81j8ocnADUL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71jZeuC3uWL._AC_UF1000,1000_QL80_.jpg",
    },
  ],
};

const updateCards = (period) => {
  const cardItems = document.querySelectorAll(".final-card-item");
  const cards = periodCards[period];

  cardItems.forEach((card, index) => {
    const cardData = cards[index];
    if (cardData) {
      const img = card.querySelector("img");
      img.src = cardData.image;
    }
  });
};

const highestPeriod = resultThemes[0];
updateCards(highestPeriod);

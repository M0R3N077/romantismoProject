const progress = JSON.parse(localStorage.getItem("progress")) || {
  currentQuestion: 1,
};

const gameTitle = document.getElementById("game-title");
gameTitle.innerText = `Siga para a porta de número ${progress.currentQuestion}`;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 574;

const character = { x: 235, y: 480, width: 80, height: 80, speed: 0.4 };
const book = { x: 400, y: 80, width: 50, height: 80 };

const imgCharacter = new Image();
imgCharacter.src = "../../../assets/characters/personagemPrincipal.png";

const imgBook = new Image();
imgBook.src = "../../../assets/books/moreninha_book.jpg";

const walls = [
  { x: 0, y: 190, width: 125, height: 80 }, //taCerto
  { x: 425, y: 180, width: 125, height: 30 },
  { x: 0, y: 435, width: 230, height: 20 },
  { x: 320, y: 435, width: 230, height: 20 },
  { x: 327, y: 435, width: 20, height: 80 }, 
  { x: 203, y: 435, width: 20, height: 80 }, 
  { x: 125, y: 380, width: 1, height: 50 },
  { x: 242, y: 315, width: 70, height: 25 },
  { x: 425, y: 380, width: 1, height: 50 },
  { x: 420, y: 220, width: 1, height: 50 },
  { x: 0, y: 0, width: 550, height: 65 },
  { x: 60, y: 70, width: 30, height: 20 },
  { x: 465, y: 70, width: 30, height: 20 },
  { x: 0, y: 370, width: 30, height: 20 },

  
];

const keys = {};
let dustParticles = [];

let animationOffset = 0;
let animationDirection = 1;

const isCollision = (newX, newY) =>
  walls.some(
    (wall) =>
      newX < wall.x + wall.width &&
      newX + character.width > wall.x &&
      newY < wall.y + wall.height &&
      newY + character.height > wall.y
  );

const createDust = () =>
  dustParticles.push({
    x: character.x + character.width / 2 + (Math.random() * 10 - 5),
    y: character.y + character.height - 5,
    alpha: 0.5,
    size: Math.random() * 8 + 4,
  });

  const updateMovement = () => {
    let dx = 0, dy = 0;
    if (keys["ArrowRight"] && character.x + character.width < canvas.width) dx += character.speed;
    if (keys["ArrowLeft"] && character.x > 0) dx -= character.speed;
    if (keys["ArrowUp"] && character.y > 0) dy -= character.speed;
    if (keys["ArrowDown"] && character.y + character.height < canvas.height) dy += character.speed;

    const isMoving = dx !== 0 || dy !== 0;

    // 🔊 Som dos passos ao mover
    if (isMoving && stepsOn) {
        if (stepSound.paused) {
            stepSound.currentTime = 0;
            stepSound.play();
        }
    } else {
        stepSound.pause();
    }

    if (!isCollision(character.x + dx, character.y)) character.x += dx;
    if (!isCollision(character.x, character.y + dy)) character.y += dy;
    if (isMoving && Math.random() > 0.7) createDust();
};

const isAtBook = () =>
  character.x + character.width > book.x &&
  character.x < book.x + book.width &&
  character.y + character.height > book.y &&
  character.y < book.y + book.height;

const updateDustParticles = () => {
  dustParticles.forEach((p) => {
    p.y -= 0.1;
    p.alpha -= 0.015;
  });
  dustParticles = dustParticles.filter((p) => p.alpha > 0);
};

const drawDustParticles = () => {
  dustParticles.forEach(p => {
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
};


const drawCharacter = () =>
  ctx.drawImage(
    imgCharacter,
    character.x,
    character.y + animationOffset,
    character.width,
    character.height
  );
const drawBook = () =>
  ctx.drawImage(imgBook, book.x, book.y, book.width, book.height);
const drawWalls = () => {
  ctx.fillStyle = "transparent";
  walls.forEach((w) => ctx.fillRect(w.x, w.y, w.width, w.height));
};
const drawShadow = () => {
  // ctx.fillStyle = "rgba(0,0,0,0.3)";
  ctx.beginPath();
  ctx.ellipse(
    character.x + character.width / 2,
    character.y + character.height - 2,
    22,
    10,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
};

const drawGame = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDustParticles();
  ctx.globalAlpha = 1;
  drawCharacter();
  drawBook();
  drawWalls();
  drawShadow();
  updateDustParticles();
};

const update = () => {
  updateMovement();
  animationOffset += animationDirection * 0.07;
  if (animationOffset > 2 || animationOffset < -2) animationDirection *= -1;
  if (isAtBook())
    window.location.href = `question${progress.currentQuestion}.html`;
  drawGame();
  requestAnimationFrame(update);
};

document.addEventListener("keydown", (event) => (keys[event.key] = true));
document.addEventListener("keyup", (event) => (keys[event.key] = false));
imgCharacter.onload = () => requestAnimationFrame(update);
window.onload = () => {
  if (imgCharacter.complete) requestAnimationFrame(update);
};



// 🎵 Adiciona música de fundo
const backgroundMusic = new Audio("../../../assets/sounds/background.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;
let musicOn = true;

// 👣 Som de passos
const stepSound = new Audio("../../../assets/sounds/steps.mp3");
stepSound.volume = 1;
let stepsOn = true;

// 🎛️ Controle de música
document.getElementById("toggle-music").addEventListener("click", () => {
    musicOn = !musicOn;
    if (musicOn) {
        backgroundMusic.play();
        document.getElementById("toggle-music").innerText = "🎵 Música: ON";
    } else {
        backgroundMusic.pause();
        document.getElementById("toggle-music").innerText = "🎵 Música: OFF";
    }
});

// 🎛️ Controle de som dos passos
document.getElementById("toggle-steps").addEventListener("click", () => {
    stepsOn = !stepsOn;
    document.getElementById("toggle-steps").innerText = stepsOn ? "👣 Passos: ON" : "👣 Passos: OFF";
});

// ✅ Toca música ao iniciar o jogo
window.onload = () => {
    if (imgCharacter.complete) requestAnimationFrame(update);
    if (musicOn) backgroundMusic.play();
};

// 🔊 Toca o som de passos apenas ao andar
const playStepSound = () => {
    if (stepsOn && !stepSound.paused) {
        stepSound.currentTime = 0; // Reinicia o som se já estiver tocando
    } else if (stepsOn) {
        stepSound.play();
    }
};


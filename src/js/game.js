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
const door = { x: 400, y: 290, width: 35, height: 80 };

const imgCharacter = new Image();
imgCharacter.src = "../../../assets/characters/personagemPrincipal.png";

const imgDoor = new Image();
imgDoor.src = "../../../assets/items/porta.png";

const walls = [
  { x: 0, y: 180, width: 140, height: 40 }, //taCerto
  { x: 410, y: 180, width: 150, height: 20 },
  { x: 0, y: 430, width: 230, height: 20 },
  { x: 320, y: 430, width: 230, height: 20 },
  { x: 320, y: 430, width: 20, height: 80 }, //paredeDireitaCorredor
  { x: 210, y: 430, width: 20, height: 80 }, //paredeEsqueradCorredor
  { x: 120, y: 380, width: 20, height: 50 },
  { x: 120, y: 220, width: 20, height: 50 },
  { x: 242, y: 315, width: 70, height: 25 },
  { x: 410, y: 220, width: 20, height: 50 },
  { x: 410, y: 380, width: 20, height: 50 },
 

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
  let dx = 0,
    dy = 0;
  if (keys["ArrowRight"] && character.x + character.width < canvas.width)
    dx += character.speed;
  if (keys["ArrowLeft"] && character.x > 0) dx -= character.speed;
  if (keys["ArrowUp"] && character.y > 0) dy -= character.speed;
  if (keys["ArrowDown"] && character.y + character.height < canvas.height)
    dy += character.speed;
  const isMoving = dx !== 0 || dy !== 0;
  if (!isCollision(character.x + dx, character.y)) character.x += dx;
  if (!isCollision(character.x, character.y + dy)) character.y += dy;
  if (isMoving && Math.random() > 0.7) createDust();
};

const isAtDoor = () =>
  character.x + character.width > door.x &&
  character.x < door.x + door.width &&
  character.y + character.height > door.y &&
  character.y < door.y + door.height;

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
const drawDoor = () =>
  ctx.drawImage(imgDoor, door.x, door.y, door.width, door.height);
const drawWalls = () => {
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  walls.forEach((w) => ctx.fillRect(w.x, w.y, w.width, w.height));
};
const drawShadow = () => {
  ctx.fillStyle = "rgba(0,0,0,0.3)";
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
  drawDoor();
  drawWalls();
  drawShadow();
  updateDustParticles();
};

const update = () => {
  updateMovement();
  animationOffset += animationDirection * 0.07;
  if (animationOffset > 2 || animationOffset < -2) animationDirection *= -1;
  if (isAtDoor())
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

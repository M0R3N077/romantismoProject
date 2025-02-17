const progress = JSON.parse(localStorage.getItem("progress")) || { currentQuestion: 1 };

// const gameTitle = document.getElementById("game-title");
// gameTitle.innerText = `Siga para a porta de número ${progress.currentQuestion}`;

const character = { x: 50, y: 200, width: 60, height: 80 };

const door = { x: 500, y: 200, width: 70, height: 100 };

const moveCharacter = (event) => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 400;

    let imgCharacter = new Image();
    imgCharacter.src = "../../assets/characters/personagemPrincipal.png";

    let imgDoor = new Image();
    imgDoor.src = "../../assets/items/porta.png";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgCharacter, character.x, character.y, character.width, character.height);
    ctx.drawImage(imgDoor, door.x, door.y, door.width, door.height);

    if (event.key === "ArrowRight") character.x += 10;
    if (event.key === "ArrowLeft") character.x -= 10;
    if (event.key === "ArrowUp") character.y -= 10;
    if (event.key === "ArrowDown") character.y += 10;

    if (
        character.x + character.width > door.x &&
        character.x < door.x + door.width &&
        character.y + character.height > door.y &&
        character.y < door.y + door.height
    ) {
        window.location.href = `question${progress.currentQuestion}.html`;
    }
};

document.addEventListener("keydown", moveCharacter);

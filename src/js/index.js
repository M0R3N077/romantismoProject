const newGameBtn = document.getElementById("newGameBtn");
const continueBtn = document.getElementById("continueBtn");

window.onload = function() {
    document.getElementById("preloader").style.display = "none";
    
    let intro = document.getElementById("intro");
    intro.style.opacity = "1";

    document.querySelector(".btn-class-name").addEventListener("click", () => {
        intro.style.opacity = "0";
        setTimeout(() => {
            intro.style.display = "none";
            document.getElementById("content").style.display = "block";
        }, 1000);
    });
};

    document.querySelector(".btn-class-name").addEventListener("click", () => {
        let intro = document.getElementById("intro");
        intro.classList.add("fade-out");
        setTimeout(() => {
            intro.style.display = "none";
            document.getElementById("content").style.display = "block";
    }, 1000);
});

newGameBtn.addEventListener("click", () => {
    window.location.href = '../../game.html';
})


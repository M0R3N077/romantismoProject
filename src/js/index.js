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

    if (window.innerWidth >= 1024) {
        localStorage.removeItem("progress");
        localStorage.removeItem("score");
        localStorage.removeItem("drawnIndices");
        localStorage.removeItem("animationPlayed");
        window.location.href = '../../game.html';
    } else {
        alert("Infelizmente, nosso jogo não é adequado ao tamanho de tela do seu dispositivo, procure um dispositivo com uma tela maior e tente jogar novamente!");
    }

})

continueBtn.addEventListener("click", () => {
    window.location.href = '../../game.html';
})

const text = `"O destino é moldado por escolhas. Descubra quem você realmente é no romantismo."`;
const element = document.getElementById("slogan");
let index = 0;

function digitar() {
    if (index < text.length) {
        element.innerHTML = text.slice(0, index + 1);
        index++;
        setTimeout(digitar, 50);
    } else {
        element.style.borderRight = "none";
    }
}

digitar();

// INFO

let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");

const modalButtons = document.querySelectorAll("button[data-id]");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeModal = modal.querySelector(".close");

const checkAnswersBtn = document.getElementById("check-answers");

// CONFIG
let countItem = items.length;
let itemActive = 0;
// NEXT CLICK
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}
// PREV CLICK
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}
// AUTO RUN SLIDER
let refreshInterval = setInterval(() => {
    next.click();
}, 8000)
function showSlider() {
    // REMOVE ITEM ACTIVE OLD
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");

    // ACTIVE NEW ITEM
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");
    setPositionThumbnail();

    // CLEAR AUTO TIME RUN SLIDER
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// Responsividade para o slider (muda tempo do auto-play dependendo do tamanho da tela)
function ajustarTempoSlider() {
    let intervalo = window.innerWidth <= 768 ? 6000 : 8000;
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, intervalo);
}

function setPositionThumbnail() {
    let thumbnailActive = document.querySelector(".thumbnail .item.active");
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
}

// CLICK THUMBNAIL
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
    })
})

// Atualiza ao redimensionar a tela
window.addEventListener("resize", ajustarTempoSlider);
ajustarTempoSlider();

// SWIPER JS
const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {  // Celulares pequenos
            slidesPerView: 1
        },
        480: { // Celulares médios
            slidesPerView: 1,
            spaceBetween: 15
        },
        600: { // Celulares grandes
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: { // Tablets
            slidesPerView: 2,
            spaceBetween: 25
        },
        1024: { // Desktop
            slidesPerView: 3,
        },
        1280: { // Telas maiores
            slidesPerView: 4
        }
    }
});


// MODAL
const cardsData = {
    1: {
        title: "Joaquim Manoel de Macedo:",
        description: "Escritor, professor e médico brasileiro, Joaquim Manuel de Macedo foi um dos principais nomes do romantismo no Brasil. Seu maior sucesso foi A Moreninha (1844), obra que marcou a literatura nacional como um dos primeiros romances de grande popularidade. Além de escritor, Macedo atuou como jornalista e político, sendo um dos precursores da ficção urbana no país, com narrativas voltadas para os costumes da sociedade carioca do século XIX.",
        image: "https://nordestinadosaler.com.br/wp-content/uploads/2022/06/image-6.png"
    },
    2: {
        title: "José de Alencar:",
        description: "Um dos maiores escritores do romantismo brasileiro, José de Alencar destacou-se por sua extensa produção literária, que abrange romances indianistas, urbanos e regionalistas. Entre suas obras mais famosas estão O Guarani (1857), Iracema (1865) e Senhora (1875). Além da literatura, Alencar foi político e advogado, defendendo a valorização da cultura nacional e contribuindo para a construção de uma identidade brasileira na literatura..",
        image: "https://static.portugues.com.br/conteudo/images/jose-alencar-autor-iracema-5a9ffd16cea43.jpg"
    },
    3: {
        title: "Gonçalves Dias:",
        description: "Poeta, professor e teatrólogo, Antônio Gonçalves Dias é um dos expoentes do romantismo no Brasil. Seu poema Canção do Exílio (1843) tornou-se um dos textos mais conhecidos da literatura nacional. Suas obras exaltam o nacionalismo e a cultura indígena, como em I-Juca Pirama (1851). Além da poesia, ele teve papel importante na pesquisa sobre a língua e os costumes indígenas, sendo um dos principais nomes da primeira geração do romantismo brasileiro.",
        image: "https://novabrasilfm.com.br/app/uploads/2024/11/goncalves_dias.webp"
    },
    4: {
        title: "Álvares de Azevedo:",
        description: "Figura marcante do ultrarromantismo brasileiro, Álvares de Azevedo produziu obras repletas de melancolia, idealização da mulher e obsessão pela morte. Seu livro Lira dos Vinte Anos (1853), publicado postumamente, reflete a dualidade entre o sonho e a realidade, o humor e a tristeza. Influenciado pelo romantismo europeu, especialmente por Lord Byron e Musset, sua poesia destaca-se pela introspecção e pelo pessimismo característico dos jovens românticos.",
        image: "https://www.oserrano.com.br/uploads/images/202409/image_870x_66e4ae3061c45.jpg"
    },
    5: {
        title: "Casimiro de Abreu:",
        description: "Poeta brasileiro do romantismo, Casimiro de Abreu é conhecido por seus versos simples e emotivos, que expressam saudade da infância e da terra natal. Sua obra mais famosa, Meus Oito Anos, exemplifica essa nostalgia e seu apego às lembranças da juventude. Com uma produção literária breve devido à sua morte precoce aos 21 anos, sua poesia permanece marcante pela leveza e sentimentalismo característicos do período romântico.",
        image: "https://files.cursoenemgratuito.com.br/uploads/2020/07/Casimiro-de-Abreu.jpg"
    },
    6: {
        title: "Castro Alves:",
        description: "Considerado o “poeta dos escravos”, Castro Alves foi um dos grandes nomes do condoreirismo, vertente do romantismo marcada pelo engajamento social e político. Sua obra Navio Negreiro (1869) é um dos mais fortes protestos contra a escravidão na literatura brasileira. Além da luta abolicionista, sua poesia também abordou temas como liberdade e justiça social. Seu livro Espumas Flutuantes (1870) consolidou sua importância na literatura nacional, com versos repletos de lirismo e grandiosidade.",
        image: "https://i0.wp.com/aliteraria26.com/wp-content/uploads/2023/12/castro-alves.jpg?resize=1024%2C1024&ssl=1"
    }
};

const openModal = (id) => {
    const info = cardsData[id];
    modalTitle.textContent = info.title;
    modalDescription.textContent = info.description;
    modalImage.src = info.image;
    modal.style.display = "flex";
}

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        openModal(id);
    });
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

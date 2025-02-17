export const score = JSON.parse(localStorage.getItem("score")) || {
    indianista: 0,
    urbanista: 0,
    regionalista: 0,
    historico: 0
};

export const messages = {
    question1: {
        indianista: "Você sente a conexão com a natureza e as raízes de um povo livre...",
        urbanista: "O brilho dos salões e o encanto da vida social moldaram sua visão...",
        regionalista: "Você valoriza a cultura e a simplicidade de seu povo trabalhador...",
        historico: "Seu olhar está voltado para os feitos grandiosos do passado..."
    },
    question2: {
        indianista: "A poesia da selva te inspira, trazendo a bravura dos antigos guerreiros...",
        urbanista: "O romantismo urbano te atrai, com seus dramas e paixões avassaladoras...",
        regionalista: "A força do sertão pulsa em você, revelando a dureza e beleza do interior...",
        historico: "Você se vê em meio a grandes eventos, entre heróis e batalhas lendárias..."
    }
};
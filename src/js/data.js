export const score = JSON.parse(localStorage.getItem("score")) || {
    indianista: 0,
    urbanista: 0,
    regionalista: 0,
    historico: 0    
};

export const messages = {
    question1: {
        indianista: "O Romantismo Indianista buscou criar um herói nacional idealizado, inspirado nas culturas indígenas. Essa escolha representa um personagem que vive em harmonia com a natureza, simbolizando a pureza e a liberdade do indígena pré-colonização. O personagem pode ter uma forte conexão espiritual com a terra e uma visão de mundo baseada no respeito à natureza e aos ciclos da vida.",
        urbanista: "A prosa urbanista retrata a vida nas cidades, explorando o contraste entre riqueza e miséria, os conflitos de classe e o impacto da modernização. Seu personagem pode ser um jovem intelectual, político ou comerciante que navega entre o luxo e os desafios sociais, enfrentando dilemas morais entre seus privilégios e as injustiças da sociedade.",
        regionalista: "O Romantismo Regionalista deu voz ao trabalhador do campo, representando a luta diária pela sobrevivência em terras áridas e isoladas. Seu personagem pode ser um lavrador, tropeiro ou vaqueiro que carrega os valores da honestidade, do esforço e da solidariedade com os companheiros de jornada.",
        historico: "A prosa histórica apresenta personagens ligados à formação do Brasil, retratando figuras que ajudaram a consolidar o domínio português. Esse caminho reflete a visão de um estrangeiro que vê a terra como um território a ser conquistado, movido por interesses estratégicos e políticos."
    },
    question2: {
        indianista: "A valorização da cultura indígena no Romantismo foi uma tentativa de criar uma identidade nacional. Seu personagem pode se tornar um defensor das tradições nativas, lutando contra a exploração da terra e dos povos originários.",
        urbanista: "A vida urbana no século XIX trouxe mudanças profundas. Seu personagem pode se tornar um intelectual influente, envolvido com o crescimento econômico e político, mas também confrontado com a desigualdade social.",
        regionalista: "A literatura regionalista exaltou as paisagens rurais e as figuras do sertanejo e do tropeiro. Seu personagem pode se tornar um defensor das tradições do interior, batalhando pela justiça social e pela sobrevivência no sertão.",
        historico: "A visão colonizadora enfatizava o papel dos governantes e administradores portugueses. Seu personagem pode se tornar um comandante militar, um explorador ou um aristocrata, buscando manter o controle do território."
    },
    question3: {
        indianista: "Essa escolha reflete o heroísmo indígena presente na prosa indianista, com personagens que agem instintivamente para proteger os mais frágeis, muitas vezes sem medir consequências. Representa um espírito de honra, coragem e conexão com a natureza, como os personagens Peri (O Guarani) e Iracema.",
        urbanista: "Uma resposta típica de personagens urbanos do Romantismo, que vivem em um ambiente onde cada ação pode trazer ganhos ou perdas. A cautela e o pragmatismo refletem a elite burguesa, que valoriza a razão e a posição social antes de agir impulsivamente.",
        regionalista: "Aqui, o personagem se identifica com a luta diária do povo trabalhador e vê a solidariedade como um valor essencial. A prosa regionalista enaltece o sertanejo como alguém forte, resiliente e sempre pronto a ajudar aqueles que compartilham de sua realidade.",
        historico: "Representa o pensamento estratégico dos colonizadores e administradores do período colonial. Muitas vezes, as decisões eram tomadas com base no cálculo político e na manutenção do poder, priorizando interesses maiores ao invés de impulsos momentâneos.",
    },
    question4: {
        indianista: "Representa a valorização da cultura indígena e de seus conhecimentos tradicionais, que não dependem do progresso material, mas sim da harmonia com a terra e da preservação das tradições.",
        urbanista: "Reflete o pensamento da elite intelectual do século XIX, que via a modernização e o avanço das cidades como fundamentais para o desenvolvimento do país. O conhecimento era associado à ascensão social e ao poder.",
        regionalista: "Destaca a visão de que a verdadeira força do Brasil vem do povo trabalhador, especialmente dos camponeses e sertanejos, cuja dedicação à terra constrói a identidade nacional.",
        historico: "Representa o pensamento colonizador, em que o conhecimento é uma ferramenta para manter o controle e a autoridade. O progresso, para esse grupo, está ligado à centralização do poder e à obediência às hierarquias estabelecidas.",
    },
    question5: {
        indianista: "A prosa indianista idealiza o amor como um sentimento puro e intenso, livre das amarras sociais impostas pelos colonizadores. Histórias como Iracema, de José de Alencar, retratam paixões impossíveis entre indígenas e europeus, marcadas pelo conflito entre tradição e destino.",
        urbanista: "No universo urbano, o amor é muitas vezes tratado como uma questão de status e conveniência. Casamentos estratégicos garantiam prestígio e estabilidade, e personagens da elite precisavam equilibrar sentimentos e interesses políticos, como ocorre em Senhora, também de José de Alencar.",
        regionalista: "A visão regionalista valoriza a perseverança e a simplicidade. O amor é um sentimento genuíno, muitas vezes ligado ao sofrimento e à luta para superar as dificuldades impostas pela sociedade ou pelo ambiente rural, como em O Tronco do Ipê.",
        historico: "Aqui, o amor é visto sob a ótica da política e da conquista. Líderes e colonizadores não podiam se dar ao luxo de deixar sentimentos pessoais interferirem em seus objetivos. Casamentos eram feitos por interesses dinásticos, e o amor, quando existia, era um luxo perigoso.",
    },
    question6: {
        indianista: "O indígena na prosa romântica é um símbolo de resistência. Suas terras e cultura são constantemente ameaçadas, e sua luta é por sobrevivência e liberdade. Essa escolha representa o espírito guerreiro de personagens como Peri e os índios de Iracema.",
        urbanista: "No ambiente urbano, as mudanças sociais são vistas como oportunidades de cescimento para a burguesia. Os intelectuais e comerciantes buscam garantir que qualquer transformação mantenha seus interesses protegidos, como ocorre nos debates políticos de Memórias de um Sargento de Milícias.",
        regionalista: "Os trabalhadores do campo sofrem com desigualdades e injustiças, e a revolução surge como uma forma de resistir à opressão. Essa alternativa reflete o espírito de luta do sertanejo e do camponês, que, mesmo sofrendo, não perde sua dignidade.",
        historico: "Muitos colonizadores e aristocratas viam revoluções como ameaças à ordem estabelecida. Essa escolha representa a visão daqueles que defendiam o poder monárquico e a necessidade de manter a disciplina para evitar o caos.",
    },
    question7: {
        indianista: "O legado do indígena na literatura romântica é sua conexão eterna com a terra e sua cultura. Mesmo diante da destruição, sua memória permanece como símbolo de resistência e harmonia com a natureza.",
        urbanista: "A burguesia valorizava a ascensão social e a imortalidade por meio do reconhecimento intelectual. Os personagens urbanos muitas vezes buscavam ser lembrados por sua influência política ou cultural, garantindo sua posição na história.",
        regionalista: "O regionalismo enfatiza a simplicidade e a luta cotidiana. Para um trabalhador rural ou sertanejo, o verdadeiro legado está na honestidade e no respeito conquistado entre aqueles que compartilham sua vida dura, mas digna.",
        historico: "O pensamento colonizador vê a eternidade no poder e na continuidade de sua linhagem. A história é escrita pelos vencedores, e a maior ambição de um líder é ser lembrado como aquele que consolidou um império.",
    },
};
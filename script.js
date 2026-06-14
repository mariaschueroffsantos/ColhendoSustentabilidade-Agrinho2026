let pontos = 50;
let acertos = 0;

function preservar() {
    pontos += 10;

    document.getElementById("pontuacao").innerHTML = pontos;

    document.getElementById("nivel").style.width = pontos + "%";

    document.getElementById("resultado").innerHTML =
        "🌳 Você preservou a mata e aumentou a biodiversidade.";
}

function produzir() {
    pontos -= 10;

    document.getElementById("pontuacao").innerHTML = pontos;

    document.getElementById("nivel").style.width = pontos + "%";

    document.getElementById("resultado").innerHTML =
        "⚠️ A produção aumentou, mas houve impacto ambiental.";
}

function acertou() {

    acertos++;

    document.getElementById("placar").innerHTML = acertos;

    document.getElementById("quizResultado").innerHTML =
        "✅ Resposta correta!";
}

function errou() {

    document.getElementById("quizResultado").innerHTML =
        "❌ Resposta incorreta.";
}

const perguntas = [
    {
        pergunta: "Qual tecnologia permite aplicar insumos apenas onde são necessários, reduzindo desperdícios?",
        respostas: [
            "Agricultura de precisão",
            "Queimadas controladas",
            "Aragem tradicional"
        ],
        correta: 0
    },

    {
        pergunta: "Uma fazenda instala painéis solares para alimentar seus sistemas de irrigação. Qual é o principal benefício dessa medida?",
        respostas: [
            "Aumentar o consumo de energia",
            "Reduzir a dependência de fontes não renováveis",
            "Substituir a captação de água"
        ],
        correta: 1
    },

    {
        pergunta: "O uso de drones na agricultura contribui principalmente para:",
        respostas: [
            "Substituir completamente os trabalhadores",
            "Aumentar a área da fazenda",
            "Monitorar lavouras com maior eficiência"
        ],
        correta: 2
    },

    {
        pergunta: "Qual prática ajuda a manter a fertilidade do solo ao longo do tempo?",
        respostas: [
            "Rotação de culturas",
            "Uso excessivo de fertilizantes",
            "Desmatamento de áreas vizinhas"
        ],
        correta: 0
    },

    {
        pergunta: "A captação da água da chuva é importante porque:",
        respostas: [
            "Evita a necessidade de irrigação",
            "Permite o reaproveitamento de recursos hídricos",
            "Aumenta o consumo de água potável"
        ],
        correta: 1
    },

    {
        pergunta: "Qual das alternativas representa uma ação sustentável em uma propriedade rural?",
        respostas: [
            "Descartar resíduos em rios",
            "Remover toda a vegetação nativa",
            "Preservar áreas de mata e nascentes"
        ],
        correta: 2
    },

    {
        pergunta: "A Inteligência Artificial pode auxiliar o agricultor ao:",
        respostas: [
            "Analisar dados para prever problemas na produção",
            "Substituir a energia elétrica da fazenda",
            "Produzir sementes automaticamente"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é a principal função das matas ciliares próximas aos rios?",
        respostas: [
            "Aumentar a velocidade da correnteza",
            "Proteger o solo e os recursos hídricos",
            "Expandir áreas de cultivo"
        ],
        correta: 1
    },

    {
        pergunta: "Uma fazenda que utiliza sensores para controlar a irrigação consegue:",
        respostas: [
            "Eliminar a necessidade de chuva",
            "Aumentar o desperdício de água",
            "Utilizar água de forma mais eficiente"
        ],
        correta: 2
    },

    {
        pergunta: "O conceito de sustentabilidade na agricultura busca:",
        respostas: [
            "Equilibrar produção e preservação ambiental",
            "Priorizar apenas a produtividade",
            "Reduzir o uso de tecnologia"
        ],
        correta: 0
    }
];

let perguntaAtual = 0;

function carregarPergunta() {

    document.getElementById("progressoQuiz").innerHTML =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    document.getElementById("pergunta").innerHTML =
        perguntas[perguntaAtual].pergunta;

    let html = "";

    perguntas[perguntaAtual].respostas.forEach(
        (resposta, indice) => {

            html +=
                `<button onclick="responder(${indice})">
            ${resposta}
        </button><br><br>`;
        });

    document.getElementById("respostas").innerHTML = html;
}

function responder(indice) {

    const botoes = document.querySelectorAll("#respostas button");

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    if (indice === perguntas[perguntaAtual].correta) {

        acertos++;

        document.getElementById("placar").innerHTML =
            acertos;

        document.getElementById("quizResultado").innerHTML =
            "✅ Correto! Você ganhou 1 ponto.";
    }

    else {

        document.getElementById("quizResultado").innerHTML =
            "❌ Incorreto! Tente a próxima pergunta.";
    }
}

function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();
        document.getElementById("quizResultado").innerHTML = "";
    }

    else {

        document.getElementById("pergunta").innerHTML =
            "Quiz Finalizado!";

        document.getElementById("quizResultado").innerHTML = "";

        if (acertos === perguntas.length) {

            document.getElementById("respostas").innerHTML =
                `<h3>🏆 Excelente! Você acertou todas as perguntas!</h3>`;

        }
        else if (acertos >= 2) {

            document.getElementById("respostas").innerHTML =
                `<h3>🌱 Muito bem! Você acertou ${acertos} perguntas.</h3>`;

        }
        else {

            document.getElementById("respostas").innerHTML =
                `<h3>📚 Continue aprendendo sobre sustentabilidade.</h3>`;

        }

        document.querySelector("#quiz button").style.display = "none";
    }
}

carregarPergunta();

function avaliar() {

    document.getElementById("resultado").innerHTML = "";

    if (pontos >= 80) {

        document.getElementById("final").innerHTML =
            "🏆 Excelente! Sua fazenda utiliza energia limpa, economiza água, preserva a biodiversidade e serve de exemplo de sustentabilidade.";

    } else if (pontos >= 50) {

        document.getElementById("final").innerHTML =
            "🌱 Sua fazenda está no caminho certo, mas ainda pode adotar mais práticas sustentáveis.";

    } else {

        document.getElementById("final").innerHTML =
            "⚠️ Sua fazenda precisa investir mais em preservação ambiental e uso consciente dos recursos naturais.";

    }
}

function ganhar10(texto, grupo) {

    document.querySelectorAll(`#${grupo} button`)
        .forEach(botao => botao.disabled = true);

    pontos += 10;

    if (pontos > 100) {
        pontos = 100;
    }

    document.getElementById("pontuacao").innerHTML = pontos;
    document.getElementById("nivel").style.width = pontos + "%";
    atualizarBarra();
    document.getElementById("resultado").innerHTML = texto;
    desativarBotoes(grupo);
    marcarRespondido(grupo);
}

function perder10(texto, grupo) {

    document.querySelectorAll(`#${grupo} button`)
        .forEach(botao => botao.disabled = true);

    pontos -= 10;

    if (pontos < 0) {
        pontos = 0;
    }

    document.getElementById("pontuacao").innerHTML = pontos;
    document.getElementById("nivel").style.width = pontos + "%";
    atualizarBarra();
    document.getElementById("resultado").innerHTML = texto;
    desativarBotoes(grupo);
    marcarRespondido(grupo);
}

function desativarBotoes(grupo) {

    let botoes = document.querySelectorAll(`#${grupo} button`);

    botoes.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
        btn.style.cursor = "not-allowed";
    });
}

function marcarRespondido(grupo) {

    document.getElementById(grupo).style.opacity = "0.8";
}

function tecnologia(tipo) {

    let texto = "";

    if (tipo === "drone") {
        texto = "🚁 Drones ajudam a identificar pragas e melhorar a produção.";
    }

    if (tipo === "solar") {
        texto = "☀️ Energia solar reduz custos e protege o meio ambiente.";
    }

    if (tipo === "ia") {
        texto = "🤖 A IA ajuda a prever clima e melhorar a colheita.";
    }

    document.getElementById("infoTecnologia").innerHTML = texto;
}

function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

const secoes = document.querySelectorAll("section");
const linksMenu = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {

        const topo = secao.offsetTop;
        const altura = secao.offsetHeight;

        if (
            window.scrollY >= topo - 200 &&
            window.scrollY < topo + altura - 200
        ) {
            secaoAtual = secao.id;
        }

    });

    linksMenu.forEach(link => {

        link.classList.remove("ativo");

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.classList.add("ativo");
        }

    });

});

function mostrarInfo(card) {

    card.classList.toggle("ativo");

}

function atualizarBarra() {

    let barra = document.getElementById("nivel");

    if (pontos >= 80) {
        barra.style.background = "#2d6a4f";
    }
    else if (pontos >= 50) {
        barra.style.background = "#f4a261";
    }
    else {
        barra.style.background = "#e63946";
    }
}
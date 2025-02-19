const respostas = {
    1: "méxico",
    2: "tijuana",
    3: "san diego",
    4: "frança",
    5: "paris",
};

const title = {
    1: "Com3ço",
    2: "Guerra?",
    3: "O outro lado",
    4: "Voamos",
    5: "F1m?0",
};

const pergunta = {
    1: "Wxgr frphçd qr Péalfr",
    2: "- .--- .. ..- .- -. .-",
    3: "lr2vY 30T7",
    4: "AFAZSS",
    5: "01010000 01100001 01110010 01101001 01110011 ",
};


let perguntaAtual = 1;


function atualizarPergunta() {
    document.getElementById("titulo").innerText = title[perguntaAtual];
    document.getElementById("pergunta").innerText = pergunta[perguntaAtual];
    document.getElementById("hidden").innerText = gerarDica(perguntaAtual);
}


function gerarDica(numero) {
    const dicas = {
        1: "Conquistador de Gália",
        2: "Utilizado na Segunda Guerra Mundial para comunicações secretas",
        3: "Trocar / Pronuncia",
        4: "Dica oculta na palavra-chave acima... 1465",
        5: "0 e 1",
    };
    return dicas[numero] || "Sem dica disponível.";
}


function verificarResposta() {
    let respostaUsuario = document.getElementById("resposta").value.toLowerCase();
    
    if (respostaUsuario === respostas[perguntaAtual]) {
        perguntaAtual++;
        
        if (perguntaAtual > Object.keys(respostas).length) {
            window.location.href = "parabens.html"; 
        } else {
            atualizarPergunta(); 
            document.getElementById("resposta").value = ""; 
            document.getElementById("resultado").innerText = ""; 
        }
    } else {
        document.getElementById("resultado").innerText = "Resposta incorreta. Tente novamente.";
    }
}


function Dica() {
    let elemento = document.getElementById("hidden");
    elemento.style.display = (elemento.style.display === "none" || elemento.style.display === "") ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", atualizarPergunta);

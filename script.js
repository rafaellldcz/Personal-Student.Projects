const respostas = {
    1: "México",
    2: "Tijuana",
    3: "San Diego",
    4: "França",
    5: "Paris",

};

function verificarResposta(numero) {
    let respostaUsuario = document.getElementById("resposta").value.toLowerCase();
    let mensagem = document.getElementById("mensagem");

    if (respostaUsuario === respostas[numero]) {
        mensagem.style.color = "lime";

        setTimeout(() => {
            if (numero < 10) {
                window.location.href = `enigma${numero + 1}.html`;
            } else {
                window.location.href = "parabens.html";
            }
        }, 2000);
    } else {
        mensagem.innerHTML = "❌ Errado! Tente novamente.";
        mensagem.style.color = "red";
    }
}

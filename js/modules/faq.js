export default function faq() {
    // Seleciona todos os elementos com classe 'js-faq' que representam perguntas, respostas e os ícones de seta para cima/baixo.
    const perguntaFaq = document.querySelectorAll('.js-faq h3');
    const respostaFaq = document.querySelectorAll('.js-faq p');
    const span = document.querySelectorAll('.js-faq span');

    // Função para ativar ou desativar a resposta ao clicar na pergunta.
    function ativarFaq(indice) {
        respostaFaq[indice].classList.toggle('active'); // Alterna a classe 'active' na resposta para mostrar ou ocultar.
        if (respostaFaq[indice].classList.contains('active') == true) {
            span[indice].innerText = "▲"; // Altera o texto do ícone para 'seta para cima' quando a resposta está ativa.
        } else {
            span[indice].innerText = "▼"; // Altera o texto do ícone para 'seta para baixo' quando a resposta está oculta.
        }
    }

    // Adiciona um evento de clique a cada pergunta para ativar a função ativarFaq correspondente.
    perguntaFaq.forEach((item, indice) => {
        item.addEventListener('click', () => {
            ativarFaq(indice);
        });
    });
}



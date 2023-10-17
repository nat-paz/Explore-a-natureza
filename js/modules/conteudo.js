export default function conteudo() {
    // Seleciona todas as imagens e textos relacionados.
    const imagens = document.querySelectorAll(".js-scroll li");
    const textos = document.querySelectorAll(".js-conteudo section");

    // Função para ativar o conteúdo correspondente quando uma imagem é clicada.
    function ativarConteudo(indice) {
        // Remove a classe 'active' de todos os textos.
        textos.forEach((item) => {
            item.classList.remove('active');
        });
        // Adiciona a classe 'active' ao texto correspondente ao índice da imagem clicada.
        textos[indice].classList.add('active');
    }

    // Adiciona um evento de clique a cada imagem para ativar o conteúdo relacionado.
    imagens.forEach((item, indice) => {
        item.addEventListener('click', () => {
            ativarConteudo(indice);
        });
    });
}

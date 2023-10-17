export default function modal() {
    const jsmodal = document.querySelector(".js-modal"); // Seleciona o modal
    const dados = {}; // Objeto para armazenar os dados do formulário
    const tela = document.querySelector(".tela"); // Seleciona a tela
    const msgSucesso = document.querySelector(".msg-sucesso"); // Seleciona a mensagem de sucesso

    // Verifica se o email está armazenado no localStorage
    if (localStorage.getItem("email") === null) {
        jsmodal.classList.add("active"); // Exibe o modal
        tela.classList.add("active"); // Exibe a tela de fundo
    } else {
        jsmodal.classList.remove("active"); // Oculta o modal
        tela.classList.remove("active"); // Oculta a tela de fundo
    }

    // Função para coletar valores do formulário quando os campos são alterados
    function pegarValorForm(event) {
        dados[event.target.name] = event.target.value;
        console.log(dados);
    }

    jsmodal.addEventListener('change', pegarValorForm); // Adiciona evento de mudança nos campos do modal

    // Evento de envio do formulário
    document.querySelector(".modal-forms").addEventListener("submit", (event) => {
        event.preventDefault();
        localStorage.setItem("email", JSON.stringify(dados.email)); // Armazena o email no localStorage
        msgSucesso.classList.add("active"); // Exibe a mensagem de sucesso
        setTimeout(() => {
            msgSucesso.classList.remove("active"); // Oculta a mensagem de sucesso após 3 segundos
        }, 3000);
        jsmodal.classList.remove("active"); // Oculta o modal
        tela.classList.remove("active"); // Oculta a tela de fundo
    });

    // Evento de clique no botão de fechar o modal
    document.querySelector(".modal-close").addEventListener("click", () => {
        jsmodal.classList.remove("active"); // Oculta o modal
        tela.classList.remove("active"); // Oculta a tela de fundo
    });

    // Verifica se o email não está armazenado no localStorage e exibe o modal após 3 segundos
    if (localStorage.getItem("email") === null) {
        setTimeout(() => {
            jsmodal.classList.add("active");
            tela.classList.add("active");
        }, 3000);
    }
}

export default function modal(){
    const jsmodal = document.querySelector(".js-modal");
    const dados = {}
    const tela = document.querySelector(".tela");
    const msgSucesso = document.querySelector(".msg-sucesso");
    
    

    if (localStorage.getItem("email") === null) {
        jsmodal.classList.add("active");
        tela.classList.add("active");
    }
    else {
        jsmodal.classList.remove("active");
        tela.classList.remove("active");
    }

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
    }

    
    jsmodal.addEventListener('change', pegarValorForm)
    document.querySelector(".modal-forms").addEventListener("submit", (event) => {
        event.preventDefault();
        localStorage.setItem("email", JSON.stringify(dados.email))
        msgSucesso.classList.add("active");
        setTimeout(() => {
            msgSucesso.classList.remove("active");
        }, 3000);
        jsmodal.classList.remove("active");
        tela.classList.remove("active");
    });

    document.querySelector(".modal-close").addEventListener("click", () => {
        jsmodal.classList.remove("active");
        tela.classList.remove("active");
    })
    if (localStorage.getItem("email") === null) {
            setTimeout(() => {
                jsmodal.classList.add("active");
                tela.classList.add("active");
            }, 3000);
    }
}
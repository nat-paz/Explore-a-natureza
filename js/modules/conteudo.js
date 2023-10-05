export default function conteudo(){
    const imagens= document.querySelectorAll(".js-scroll")
    const textos = document.querySelectorAll(".js-conteudo")
    
    function ativarConteudo(indice){
        textos.forEach((item) => {
            item.classList.remove('active');
        })
        textos[indice].classList.add('active');
    }

    imagens.forEach((item, indice) => {
        item.addEventListener('click',() => {
            ativarConteudo(indice);
        })
    })

}
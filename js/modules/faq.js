export default function faq(){
    const perguntaFaq = document.querySelectorAll('.js-faq h3')
    const respostaFaq = document.querySelectorAll('.js-faq p')
    const span = document.querySelectorAll('.js-faq span')


    function ativarFaq(indice){
        respostaFaq[indice].classList.toggle('active');
        if (respostaFaq[indice].classList.contains('active')== true){
            span[indice].innerText = "▲"
        }else{
            span[indice].innerText = "▼"
        }
    }

    perguntaFaq.forEach((item,indice) => {
        item.addEventListener('click',() => {
            ativarFaq(indice);
        })
    })
}


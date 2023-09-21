const imagens = document.querySelectorAll('.js-scroll li');
const textos = document.querySelectorAll('.js-conteudo section');
const perguntaFaq = document.querySelectorAll('.js-faq h3')
const respostaFaq = document.querySelectorAll('.js-faq p')



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

function ativarFaq(indice){
    respostaFaq[indice].classList.toggle('active');
}

perguntaFaq.forEach((item,indice) => {
    item.addEventListener('click',() => {
        ativarFaq(indice);
    })
})

const seta =  document.querySelectorAll('.js-faq span')

let rotação = 0;

seta.addEventListener('click', () => {
    rotação += 180;
    seta.style.transform = `rotate(${rotação}deg)`
})
export default function menuMobileInit() {
    const toggle = document.querySelector('.toggle'); // Seleciona o elemento de alternância (botão/menu)
    const menuList = document.querySelector('.js-menu'); // Seleciona a lista de menu

    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active'); // Alterna a classe 'active' na lista de menu para mostrar/ocultar o menu
            const toggleIcon = toggle.querySelector('span'); // Seleciona o ícone dentro do botão/menu
            toggleIcon.classList.toggle('active'); // Alterna a classe 'active' no ícone para alterar sua aparência
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu'; // Altera o texto do ícone entre 'menu' e 'close'
        }

        toggle.addEventListener('click', toggleMenu); // Adiciona um evento de clique ao botão/menu para ativar a função toggleMenu
    }
}


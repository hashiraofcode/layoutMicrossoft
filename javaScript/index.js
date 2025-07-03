// função que altera xbox section: remover o atual e insere um card responsivo;
const xboxSectionResponsive = () => {
    const section = document.querySelector(".xbox-container");
    const itemRemoved = document.querySelector(".xbox-content");
    section.removeChild(itemRemoved);
    section.innerHTML = `<div class="card">
                    <img src="./assets/games.png" class="card-img-top" alt="xbox games">
                    <div class="card-body">
                        <h5 class="card-title">Xbox</h5>
                        <p class="card-text">Jogue novos títulos desde o primeiro dia. Aproveite centenas de jogos de alta qualidade para jogar com amigos no console, no PC ou na nuvem.</p>
                        <a href="#" class="btn btn-primary">Participar agora</a>
                    </div>
                </div>`;

}

//função que abre o menu 
const openMenu = () => {
    document.querySelector(".responsive-menu").classList.add("active");
};
// função que fecha o menu;
const closeMenu = () => {
    document.querySelector(".responsive-menu").classList.remove("active");
}
// função que retornar o header como tava para as telas maiores;
const restoreHeader = () => {
    const header = document.querySelector("header");
    const oldHeader = ` <ul class="option-menu">
                <li class="container-logo"><img src="./assets/0_logo.png" alt="logo microssoft" class="logo"
                        id="inicio"></li>
                <li>Microssoft</li>
                <li>teams</li>
                <li>copilot</li>
                <li>windows</li>
                <li>xbox</li>
                <li>suporte</li>
            </ul>
            <div class="elements-header-container">
                <!-- menu Drop down -->
                <div class="dropdown">
                    <button
                        class="btn btn-secondary dropdown-toggle bg-transparent text-black border border-0 text-capitalize fs-5"
                        type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        toda <span class="text-lowercase">a</span> microssoft
                    </button>
                    <ul class="dropdown-menu w-100">
                        <li><a class="dropdown-item" href="#">Exemple Option 1</a></li>
                        <li><a class="dropdown-item" href="#">Exemple Option 2</a></li>
                        <li><a class="dropdown-item" href="#">Exemple Option 3</a></li>
                    </ul>
                </div>
                <!-- icones e funcionalidadew -->
                <ul class="icons">
                    <li><img src="./assets/search.svg" alt="search" class="svg-ico"></li>
                    <li><img src="./assets/cart.svg" alt="cart" class="svg-ico"></li>
                    <li><img src="./assets/person.svg" alt="person" class="svg-ico"></li>
                </ul>
            </div>`;
        header.innerHTML = oldHeader; 
};


// função que reajusta os elementos do meu header e remove o dropdouwn;
const modifyHeader = () => {
    const dropDouwn = document.querySelector(".elements-header-container");
    // clona esse elemento para eu utilizar maistarde;
    const backupDropDouwn = dropDouwn.cloneNode(true);
    const menu = document.querySelector(".option-menu");
    const containerLogo = document.querySelector(".container-logo");
    const logo = document.querySelector("#inicio");
    const header = document.querySelector("header");
    const butonMenuOpen = document.createElement("button");
    const buttonMenuClose = document.createElement("button");
    const icons = document.querySelector(".icons");
    const buttonContent = document.createElement("span");
    buttonContent.id = "menu-hamburguer";
    const buttonContent2 = document.createElement("span");
    const wrapperResponsiveMenu = document.createElement("div");
    //Criando botões que abre e fecha o menu;
    butonMenuOpen.appendChild(buttonContent);
    butonMenuOpen.id = "open";
    buttonMenuClose.appendChild(buttonContent2);
    buttonMenuClose.id = "close";
    butonMenuOpen.onclick = () => {
        openMenu();
    }
    buttonMenuClose.onclick = () => {
        closeMenu();
    }
    // remove a logo da ul e coloca no header
    // remove o icons da mesma div que o dropdouwn e coloca no header;
    // adiciona o botão do menu no tela;
    menu.removeChild(containerLogo);
    //criando o menu responsivo;
    menu.classList.remove("option-menu");
    menu.classList.add("list-options");
    wrapperResponsiveMenu.appendChild(buttonMenuClose);
    wrapperResponsiveMenu.appendChild(menu);
    wrapperResponsiveMenu.classList.add("responsive-menu");
    // --------------------------
    header.classList.add("responsive");
    header.removeChild(dropDouwn);
    header.appendChild(logo);
    header.appendChild(icons);
    header.appendChild(butonMenuOpen);
    header.appendChild(wrapperResponsiveMenu);
    // adiciona uma class para eu ajustar o menu para trasformalho em um mobile;
    return backupDropDouwn
};
// algorítimo que adiciona dinamisidade ao ajuste do layout;
const mediaQuery = window.matchMedia("(max-width: 768px)");

const widthIsCorrect = (mediaQuery) => {
    if (mediaQuery.matches) {
        modifyHeader();
        xboxSectionResponsive();
    } else restoreHeader();
};
mediaQuery.addEventListener("change", widthIsCorrect);
// código que verifica se a janela terminou de carregar para executar o código;
window.onload = () => {
    widthIsCorrect(mediaQuery);
}
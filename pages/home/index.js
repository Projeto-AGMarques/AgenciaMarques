//#region Código para Menu
const hamburger = document.getElementById("menuBtn");
const menuItens = document.getElementById("header_mobile_itens");
const btn_acessibilidade = document.getElementById("btn_acessibilidade");
const contraste = document.getElementById("contraste");
const aumentarFonte = document.getElementById("aumentar-fonte");
const diminuirFonte = document.getElementById("diminuir-fonte");

if (!hamburger || !menuItens) {
    console.error("Elementos não encontrados!");
} else {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");

        if (hamburger.classList.contains("active")) {
            menuItens.style.display = "flex";
            menuItens.classList.add("active");
            btn_acessibilidade.classList.add("active");
        } else {
            menuItens.style.display = "none";
            menuItens.classList.remove("active");
            btn_acessibilidade.classList.remove("active");
        }
    });

    // acessibilidade do projeto
}
if (btn_acessibilidade) {
    btn_acessibilidade.addEventListener("click", () => {
        btn_acessibilidade.classList.toggle("active");

        if (btn_acessibilidade.classList.contains("active")) {
            const submenu = btn_acessibilidade.querySelector("ul");
            submenu.style.display = "flex";
        } else {
            const submenu = btn_acessibilidade.querySelector("ul");
            submenu.style.display = "none";
        }
    });
}

if (contraste) {
    contraste.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            contraste.textContent = "Modo Escuro";
            document.body.style.background = "var(--background-white)";
        } else {
            contraste.textContent = "Modo Claro";
            document.body.style.background = "var(--background)";
        }
    });
}

if (aumentarFonte) {
    aumentarFonte.addEventListener("click", () => {
        document.body.style.fontSize =
            parseFloat(getComputedStyle(document.body).fontSize) + 0.5 + "px";
        btn_acessibilidade.classList.toggle("active");
    });
}

if (diminuirFonte) {
    diminuirFonte.addEventListener("click", () => {
        document.body.style.fontSize =
            parseFloat(getComputedStyle(document.body).fontSize) - 0.5 + "px";
        btn_acessibilidade.classList.toggle("active");
    });
}
//#endregion

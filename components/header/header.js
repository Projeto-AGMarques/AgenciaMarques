//#region ==================== MENU HAMBÚRGUER + ACESSIBILIDADE ====================

document.addEventListener("DOMContentLoaded", () => {
  // ==================== Seletores ====================
  const hamburger = document.getElementById("menuBtn");
  const menuItens = document.getElementById("header_mobile_itens");
  const btnAcessibilidade = document.getElementById("btn_acessibilidade"); // mobile
  const submenuAcess = document.getElementById("options_acessibilidade");
  const Acess = document.getElementById("acess"); // Acessibilidade desktop
  const submenuAcessDesktop = document.getElementById("acess_web");

  // Desktop
  const acessLinkDesktop = document.getElementById("acess");

  // Acessibilidade mobile
  const contrasteBtn = document.getElementById("contraste");
  const aumentarFonteBtn = document.getElementById("aumentar-fonte");
  const diminuirFonteBtn = document.getElementById("diminuir-fonte");

  // Acessibilidade desktop
  const contrasteBtnWeb = document.getElementById("contraste_web");
  const aumentarFonteBtnWeb = document.getElementById("aumentar-fonte_web");
  const diminuirFonteBtnWeb = document.getElementById("diminuir-fonte_web");
  // ==================== Menu Hambúrguer ====================
  if (hamburger && menuItens) {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("active");

      if (isActive) {
        menuItens.style.display = "block";
        // Força reflow para animação
        menuItens.offsetHeight;
        menuItens.classList.add("active");
      } else {
        menuItens.classList.remove("active");
        // Aguarda animação terminar
        setTimeout(() => {
          menuItens.style.display = "none";
        }, 300);
      }
    });
  }

  // ==================== Submenu Acessibilidade (Mobile) ====================
  if (btnAcessibilidade && submenuAcess) {
    btnAcessibilidade.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita fechar o menu principal
      const isOpen = btnAcessibilidade.classList.toggle("active");

      // Fecha outros submenus se necessário
      if (isOpen) {
        submenuAcess.style.display = "block";
      } else {
        submenuAcess.style.display = "none";
      }
    });
  }

  if (Acess && submenuAcessDesktop) {
    Acess.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita fechar o menu principal
      const isOpen = Acess.classList.toggle("active");

      // Fecha outros submenus se necessário
      if (isOpen) {
        submenuAcessDesktop.style.display = "block";
      } else {
        submenuAcessDesktop.style.display = "none";
      }
    });
  }

  // ==================== Acessibilidade - Modo Escuro/Claro ====================
  function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle("dark-mode");

    // Salva preferência
    localStorage.setItem("darkMode", isDark);

    const text = isDark ? "Modo Claro" : "Modo Escuro";

    // Atualiza todos os botões de contraste
    document.querySelectorAll("#contraste, #contraste_web").forEach((btn) => {
      if (btn) btn.textContent = text;
      if (text === "Modo Claro") {
        document.body.style.background = "var(--cor-white-yellow)";
      } else {
        document.body.style.background = "var(--cor-blue)";
      }
    });
  }

  if (contrasteBtn && contrasteBtnWeb) {
    contrasteBtn.addEventListener("click", toggleDarkMode);
    contrasteBtnWeb.addEventListener("click", toggleDarkMode);
  }

  // ==================== Controle de Fonte ====================
  let fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );

  function changeFontSize(delta) {
    fontSize = Math.max(12, Math.min(24, fontSize + delta)); // limite 12px ~ 24px
    document.documentElement.style.fontSize = `${fontSize}px`;

    // Salva preferência
    localStorage.setItem("fontSize", fontSize);
  }

  if (aumentarFonteBtn && aumentarFonteBtnWeb) {
    aumentarFonteBtn.addEventListener("click", () => changeFontSize(1));
    aumentarFonteBtnWeb.addEventListener("click", () => changeFontSize(1));
  }
  if (diminuirFonteBtn && diminuirFonteBtnWeb) {
    diminuirFonteBtn.addEventListener("click", () => changeFontSize(-1));
    diminuirFonteBtnWeb.addEventListener("click", () => changeFontSize(-1));
  }

  // ==================== Inicialização ====================
  function initAccessibility() {
    // Recupera preferências salvas
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.querySelectorAll("#contraste, #contraste_web").forEach((btn) => {
        if (btn) btn.textContent = "Modo Claro";
      });
    }

    const savedFontSize = localStorage.getItem("fontSize");
    if (savedFontSize) {
      fontSize = parseFloat(savedFontSize);
      document.documentElement.style.fontSize = `${fontSize}px`;
    }
  }

  initAccessibility();

  // ==================== Fechar menu ao clicar fora ====================
  document.addEventListener("click", (e) => {
    if (
      menuItens &&
      !menuItens.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      menuItens.classList.remove("active");
      setTimeout(() => (menuItens.style.display = "none"), 300);
    }
  });

  // Suporte a tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hamburger?.classList.remove("active");
      menuItens?.classList.remove("active");
      setTimeout(() => menuItens && (menuItens.style.display = "none"), 300);
    }
  });
});

//#endregion


export function accordionFAQ(){
    const accordions = document.querySelectorAll(".accordionComponent_faq");
    
    
    
    // Basicamente para cada class selecionada através do document.querySelectorAll, ele irá fazer essa função específica, ou seja, para cada accordion de informações ele irá fazer essas funções em específico sem precisar criar ids para cada accordion.
    accordions.forEach((accordion) => {
        const btn = accordion.querySelector(".headerAccordion_faq");
        const info = accordion.querySelector(".infoAccordion_faq");
    
        btn.addEventListener("click", () => {
            info.classList.toggle("infoAccordionDisable_faq");
    
            btn.classList.toggle("headerAccordionActive_faq");
            btn.classList.toggle("headerAccordionDisable_faq");
        });
    });
}
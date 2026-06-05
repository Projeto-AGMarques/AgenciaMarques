import {Screen_AboutLocal} from "../pages/about_local/index.js"
import {Screen_FAQ} from "../pages/faq/index.js"
import {accordionFAQ} from "../pages/faq/accordionAction.js"
import {Screen_AboutCompany} from "../pages/about_company/index.js"   /* <-- DANDO ERRO SÓ DE IMPORTAR. */


//#region Variáveis do Index.html
let home = document.getElementById("home");
let productsScreen = document.getElementById("products_screen");
let aboutCompany = document.getElementById("about_company");
let aboutLocal = document.getElementById("about_local");
let FAQ = document.getElementById("faq");
//#endregion

home.innerHTML = Screen_AboutLocal;
aboutCompany.innerHTML = Screen_AboutCompany;
FAQ.innerHTML = Screen_FAQ;

accordionFAQ();



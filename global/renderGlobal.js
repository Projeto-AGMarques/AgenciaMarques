/* #region Telas */
import {Screen_AboutLocal} from "../pages/about_local/index.js"
import {Screen_FAQ} from "../pages/faq/index.js"
import {Screen_AboutCompany} from "../pages/about_company/index.js"
import { Screen_Produtos, initGlider } from "../pages/products_screen/index.js"; /* <--- Import */ 
import { Screen_Home } from "../pages/home/index.js";
/* #endregion */

/* #region Componentes */
import {Component_Footer} from "../components/footer/footer.js";
import {accordionFAQ} from "../pages/faq/accordionAction.js";
import { header, itensSlideHeader, initAccessibilityMenu } from "../components/header/header.js";
/* #endregion */

//#region Variáveis do Index.html
let body = document.querySelector('body');
let home = document.getElementById("home");
let productsScreen = document.getElementById("products_screen");
let aboutCompany = document.getElementById("about_company");
let aboutLocal = document.getElementById("about_local");
let FAQ = document.getElementById("faq");
//#endregion

home.insertAdjacentHTML("beforebegin", header);
home.insertAdjacentHTML("beforebegin", itensSlideHeader);
home.innerHTML = Screen_Home;
aboutLocal.innerHTML = Screen_AboutLocal;
aboutCompany.innerHTML = Screen_AboutCompany;
productsScreen.innerHTML = Screen_Produtos; /* <--- Import */
FAQ.innerHTML = Screen_FAQ;
body.insertAdjacentHTML("afterend", Component_Footer);
// FAQ.insertAdjacentHTML("afterend", Component_Footer);

accordionFAQ();
initGlider();
initAccessibilityMenu();


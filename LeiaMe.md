# Agencia Marques -- Landing Page

Nesse arquivo terá uma mini explicação de como as coisas irão funcionar nesse código.
Lembrando, o intuito dessa infraestrutura é todos os integrantes poderem codificar sua parte, **sem interferir o código de ninguém.**

## Mas como isso vai funcionar se nossa Landing Page é apenas uma única página de HTML?

Iremos criar telas em HTML normal como se nosso projeto tivesse várias páginas diferentes, porém ao final de todas as telas prontas, o HTML de cada integrante será colocado dentro de arquivos JavaScript e será chamado na página principal, no "index.html" na raiz da **pasta pages**.

## Estrutura de Existente de Cada Tela:
```
pages/
├── about_company/
│   ├── about_company.html
│   ├── exemplo.css
│   └── index.js
├── about_local/
│   ├── about_local.html
│   ├── exemplo.css
│   └── index.js
├── faq/
│   ├── exemplo.css
│   ├── faq.html
│   └── index.js
├── home/
│   ├── exemplo.css
│   ├── home.html
│   └── index.js
└── products_screen/
    ├── exemplo.css
    ├── index.js
    └── products_screen.html
```

    
## Informações sobre Index.html: 
Dentro desse index.html faremos a serapação por ``<section></section>`` via HTML padrão e dentro dele será chamado o arquivo **renderGlobal.js**.

## Informações sobre RenderGlobal.js:

Dentro do RenderGlobal será importado todos os **index.js**




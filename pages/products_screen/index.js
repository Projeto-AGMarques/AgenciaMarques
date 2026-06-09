new Glider(document.querySelector('.glider'), {
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});


export const Screen_Produtos = `
<section style="overflow: hidden">
    <!--Título-->

<div class= intro-container>

<div>
    <h1 class="produtos-titulo" style="letter-spacing: 1px;">Explore nossa seleção de produtos de novos.</h1>
    <blockquote> A Marques Magazini busca a transparência em suas vendas, desde a apresentação dos produtos até o pós vendas. A confiança e a honestidade são os pilares da nossa relação com os clientes. </blockquote>
</div>

<div class="intro-image">
    <img src="" alt="Imagem de introdução" class="intro-img" width="400" height="300">
</div>


</div>

<hr>

<div class="titulo">
    <h2 class="produtos-titulo">Nosso diferencial</h2>

    <div class="cards">
<div class="card">Qualidade</div>
<div class="card">Variedade</div>
<div class="card">Descontos exclusivos</div>
<div class="card">Garantia de Satisfação</div>
</div>

</div>

 <div class="titulo">
        <h2 class="produtos-titulo">Produtos mais Procurados</h2> 
        <h4 class="subtitulo">Confira os produtos mais buscados pelos nossos clientes</h4>

    </div>

  <div class="grid-produtos">
    
    <!-- Card do Produto 1 -->
    <article class="card-produto">
      <div class="container-imagem">
        <!-- Tag chamativa com o Crimson -->
        <span class="tag-desconto">35% OFF</span>
        <img src="https://tse3.mm.bing.net/th/id/OIP.5_bNVsx8EqE08FhxaKf_zwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" class="foto-produto">
      </div>
      
      <div class="conteudo-produto">
        <h3 class="nome-produto">Ferro</h3>
        <p class="descricao-produto">Garantia total de funcionamento pela nossa equipe.</p>
        
        <div class="preco-container">
          <span class="preco-antigo">R$ 2.999</span>
          <span class="preco-atual">R$ 1.949</span>
        </div>
        
        <a href="#" class="btn-contato">Tenho Interesse</a>
      </div>
    </article>

    <!-- Card do Produto 2 -->
    <article class="card-produto">
      <div class="container-imagem">
        <!-- Tag chamativa com o Crimson -->
        <span class="tag-desconto">35% OFF</span>
        <img src="https://tse3.mm.bing.net/th/id/OIP.5_bNVsx8EqE08FhxaKf_zwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" class="foto-produto">
      </div>
      
      <div class="conteudo-produto">
        <h3 class="nome-produto">Ferro</h3>
        <p class="descricao-produto">Garantia total de funcionamento pela nossa equipe.</p>
        
        <div class="preco-container">
          <span class="preco-antigo">R$ 2.999</span>
          <span class="preco-atual">R$ 1.949</span>
        </div>
        
        <a href="#" class="btn-contato">Tenho Interesse</a>
      </div>
    </article>


    <!-- Card do Produto 3 -->
    <article class="card-produto">
      <div class="container-imagem">
        <!-- Tag chamativa com o Crimson -->
        <span class="tag-desconto">35% OFF</span>
        <img src="https://tse3.mm.bing.net/th/id/OIP.5_bNVsx8EqE08FhxaKf_zwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" class="foto-produto">
      </div>
      
      <div class="conteudo-produto">
        <h3 class="nome-produto">Ferro</h3>
        <p class="descricao-produto">Garantia total de funcionamento pela nossa equipe.</p>
        
        <div class="preco-container">
          <span class="preco-antigo">R$ 2.999</span>
          <span class="preco-atual">R$ 1.949</span>
        </div>
        
        <a href="#" class="btn-contato">Tenho Interesse</a>
      </div>
    </article>
  </div>

    <!--Titulo 2--->

 <div class="titulo-two">
        <h3 class="produtos-titulo">Avaliações de Produtos</h3>
    </div>

    <!-- Glider.js Container -->
    <div class="glider-contain">
        <div class="glider">

            <!-- Card 1 -->
            <div class="produto-box">
                <div class="avaliações">
                    <div class="titular">
                        <img src="https://images.pexels.com/photos/32273714/pexels-photo-32273714.jpeg"
                             alt="Foto do usuário" class="img_perfil">
                        <h2>Usuário ZXY</h2>
                    </div>
                    <small>Data: 10/05/2026</small>

                    <!-- Estrelas de avaliação -->
                    <ul class="stars">
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                    </ul>
                    <div class="img_box">
                        <a href="#">
                            <img src="https://images.pexels.com/photos/32168944/pexels-photo-32168944.jpeg" alt="Produto">
                        </a>
                    </div>
                    <div class="titulo_descricao">
                        <span>Microondas</span>
                        <p>SAMSUNG</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusamus quam neque perferendis pariatur magnam ut dolore enim.</p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="produto-box">
                <div class="avaliações">
                    <div class="titular">
                        <img src="https://images.pexels.com/photos/32273714/pexels-photo-32273714.jpeg"
                             alt="Foto do usuário" class="img_perfil">
                        <h2>Usuário ABC</h2>
                    </div>
                    <small>Data: 08/05/2026</small>
                    <ul class="stars">
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                    </ul>
                    <div class="img_box">
                        <a href="#">
                            <img src="https://www.dekotool.com.br/imagens/large/dkrh24b70-02-63ef7cf8c0944.jpeg" alt="Produto">
                        </a>
                    </div>
                    <div class="titulo_descricao">
                        <span>Martelete Combinado</span>
                        <p>Deko Brasil</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusamus quam neque perferendis pariatur magnam ut dolore enim.</p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="produto-box">
                <div class="avaliações">
                    <div class="titular">
                        <img src="https://images.pexels.com/photos/32273714/pexels-photo-32273714.jpeg"
                             alt="Foto do usuário" class="img_perfil">
                        <h2>Usuário DEF</h2>
                    </div>
                    <small>Data: 05/05/2026</small>
                    <ul class="stars">
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                    </ul>
                    <div class="img_box">
                        <a href="#">
                            <img src="https://m.media-amazon.com/images/I/71Yh9YZYVJL._AC_SX679_.jpg" alt="Produto">
                        </a>
                    </div>
                    <div class="titulo_descricao">
                        <span>Ventilador</span>
                        <p>VentiSOl</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusamus quam neque perferendis pariatur magnam ut dolore enim.</p>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="produto-box">
                <div class="avaliações">
                    <div class="titular">
                        <img src="https://images.pexels.com/photos/32273714/pexels-photo-32273714.jpeg"
                             alt="Foto do usuário" class="img_perfil">
                        <h2>Usuário GHI</h2>
                    </div>
                    <small>Data: 02/05/2026</small>
                    <ul class="stars">
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                    </ul>
                    <div class="img_box">
                        <a href="#">
                            <img src="https://img.lojadomecanico.com.br/IMAGENS/21/224/127613/1566851253750.JPG" alt="Produto">
                        </a>
                    </div>
                    <div class="titulo_descricao">
                        <span>Serra mármore</span>
                        <p>LITH</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusamus quam neque perferendis pariatur magnam ut dolore enim.</p>
                </div>
            </div>

            <!-- Card 5 -->
            <div class="produto-box">
                <div class="avaliações">
                    <div class="titular">
                        <img src="https://images.pexels.com/photos/32273714/pexels-photo-32273714.jpeg"
                             alt="Foto do usuário" class="img_perfil">
                        <h2>Usuário JKL</h2>
                    </div>
                    <small>Data: 28/04/2026</small>
                    <ul class="stars">
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                        <li class="star"></li>
                    </ul>

                    <div class="img_box">
                        <a href="#">
                            <img src="https://images.pexels.com/photos/32168944/pexels-photo-32168944.jpeg" alt="Produto">
                        </a>
                    </div>
                    <div class="titulo_descricao">
                        <span>Microondas</span>
                        <p>SAMSUNG</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem accusamus quam neque perferendis pariatur magnam ut dolore enim.</p>
                </div>
            </div>

        </div><!-- /.glider e botões -->

        <button aria-label="Anterior" class="glider-prev">&#171;</button>
        <button aria-label="Próximo" class="glider-next">&#187;</button>
        <!--Abas que controlam os slides-->
        <div role="tablist" class="dots"></div>

    </div><!-- /.glider-contain -->


    <!--Entre em contato com o vendedor-->

    <a href="" id = "contato-vendedor" target="_blank">Entrar em Contato</a>
</section>

<script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>

<script>
    //Function do Glider.js, ela configura o carrossel, definindo quantos slides mostrar, quantos rolar, se é arrastável, os botões de navegação e a responsividade
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        //O slidesToShow é o número de slides a mostrar, o slidesToScroll é o número de slides a rolar quando clicar nos botões ou arrastar, o draggable permite arrastar os slides, os dots são as abas de navegação e os arrows são os botões de navegação.
        //O breakpoint é a largura da tela, e o settings é o que muda quando a tela atinge esse breakpoint, é semelhante a min-width em CSS, mas aqui é definido o número de slides a mostrar e a rolar para cada breakpoint
        responsive: [
            { breakpoint: 600,  settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 900,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } }
        ]
    });
    
</script>`


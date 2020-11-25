<template>
  <div>
    <footer>
      <div class="container-fluid tp-bar">
        <div class="row d-flex align-items-center py-3">
          <div class="col-md-2">
            <img src="~@/static/images/logo-brq.png" class="logo" alt="" />
          </div>
          <div class="col-12 col-md-8">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="#">Quem somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/como-transformamos">Como Transformamos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/conteudos/blog">Conteúdos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Venha ser fera</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/fale-conosco">Fale com a gente</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 text-right"></div>
        </div>
      </div>
      <div class="bk-bar py-5">
        <div class="container-fluid">
          <div class="row d-flex align-items-center">
            <div class="col-12 col-md-2 text-center seals">
              <img src="~@/static/images/seals-gptw.png" alt="" />
            </div>
            <div class="col-md-7 mt-3 mt-md-0">
              <ul class="nav justify-content-center socials">
                <li class="nav-item">
                  <a class="nav-link" href="https://www.facebook.com/brqdigital/" target="_blank">
                    <img src="~@/static/images/facebook.svg" alt="" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://twitter.com/brqdigital" target="_blank"
                    ><img src="~@/static/images/twitter.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.youtube.com/user/brqitservices" target="_blank"
                    ><img src="~@/static/images/youtube.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.linkedin.com/company/brq/?originalSubdomain=br" target="_blank"
                    ><img src="~@/static/images/linkedin.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.instagram.com/brqdigital/" target="_blank"
                    ><img src="~@/static/images/instagram.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://www.glassdoor.com.br/Visão-geral/Trabalhar-na-BRQ-EI_IE224434.13,16.htm">
                  <img src='https://www.glassdoor.com.br/pc-app/static/img/partnerCenter/badges/eng_BASIC_250x90.png'>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 text-center mt-3 mt-md-0 tags">
              <img src="~@/static/images/bovespa.png" alt="" />
              <img src="~@/static/images/bndes.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="dk-bar">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-5 mx-auto py-2">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <span class="nav-link">© 2020 BRQ</span>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> brq@brq.com </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"> Política de Privacidade </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
footer {
  .tp-bar {
    border: solid var(--dark);
    border-width: 2px 0 2px 0;
    .nav {
      font-family: "Bebas Neue";
      font-weight: normal !important;
      font-size: 1.1rem;
      text-transform: uppercase;
      a {
        color: var(--gray);
      }
    }
  }

  .bk-bar {
    .seals {
      img {
        width: 80%;
      }
    }

    .socials img {
      max-height: 30px;
    }

    .tags {
      img {
        height: 50px;
      }
    }
  }

  .dk-bar {
    background: var(--brq-dark);
    color: var(--white);

    a {
      color: var(--white);
    }
  }
}

@media (max-width: 575.98px) {
  footer {
    .tp-bar {
      .nav {
        display: block;
        text-align: center;
        font-size: 1.5rem;
      }
    }
    .bk-bar {
      .seals {
        img {
          width: 40%;
        }
      }
    }
  }
}
</style>

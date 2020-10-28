<template>
  <div>
    <footer>
      <div class="container-fluid tp-bar">
        <div class="row d-flex align-items-center py-3">
          <div class="col-md-2">
            <img src="/images/logo-brq.png" class="logo" alt="" />
          </div>
          <div class="col-12 col-md-8">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="#">Quem somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Como Transformamos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Conteúdos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">RI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Venha ser fera</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Fale com a gente</a>
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
              <img src="/images/seals-gptw.png" alt="" />
            </div>
            <div class="col-md-7 mt-3 mt-md-0">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <img src="/images/facebook.svg" alt="" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><img src="/images/twitter.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><img src="/images/youtube.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><img src="/images/linkedin.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><img src="/images/instagram.svg" alt=""
                  /></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"
                    ><img src="/images/glassdoor.svg" alt=""
                  /></a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 text-center mt-3 mt-md-0 tags">
              <img src="/images/bovespa.png" alt="" />
              <img src="/images/bndes.png" alt="" />
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
    border-top: 2px solid var(--dark);
    .seals {
      img {
        width: 80%;
      }
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

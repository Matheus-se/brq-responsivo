<template>
  <div>
    <div class="db-1 dark-bg"></div>
    <!--background-->
    <section class="title">
      <div class="container">
        <div class="row">
          <div class="col my-md-5 my-3">
            <h1>Sua parceira em todos os desafios da transformação digital</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-10">
            <p>
              A BRQ atua no ciclo completo de desenvolvimento, desde a concepção
              até a materialização dos produtos digitais.
            </p>
            <img src="/images/arrow-dobra.svg" class="mt-3 d-none d-md-block" />
            <h2 class="method mt-5 d-none d-md-block">
              Conheça a<br />
              nossa metodologia
            </h2>
          </div>
          <div class="col-12 col-md-8">
            <b-img
              src="https://picsum.photos/300/150/?image=41"
              fluid-grow
              alt="Fluid-grow image"
            ></b-img>
            <h2 class="method mt-5 col-8 mx-auto d-block d-sm-none ml-auto">
              Conheça a<br />
              nossa metodologia
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="main-content mt-5">
      <div class="content-box dark-bg cover-1">
        <div
          class="box-image"
          style="
            background-image: url(https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg);
          "
        >
          &nbsp;
        </div>
        <div class="content container">
          <h2>Soluções Inovadoras</h2>
          <p>
            Conectar clientes com soluçoes proprietárias disruptivas que
            acelerem a transformação digital ou criar novos modelos de negócios.
          </p>
          <div class="cover">&nbsp;</div>
        </div>
      </div>

      <div class="content-box dark-bg cover-2">
        <div
          class="box-image"
          style="
            background-image: url(https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg);
          "
        >
          &nbsp;
        </div>
        <div class="content container">
          <h2>Transformação digital</h2>
          <p>
            Transformar negócios com tecnologia evoluindoe acelerando como as
            empresas operame entregam valor para seus clientes.Digitalização e
            aprendizado contínuopara melhoria dos negócios dos clientes.
          </p>
          <div class="cover">&nbsp;</div>
        </div>
      </div>

      <div class="content-box dark-bg cover-3">
        <div
          class="box-image"
          style="
            background-image: url(https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg);
          "
        >
          &nbsp;
        </div>
        <div class="content container">
          <h2>Squads Gerenciados</h2>
          <p>
            Times cross-funcionais, ágeis e auto gerenciáveis, com alta
            performance e estratégia orientada à entrega de Valor.
          </p>
          <div class="cover">&nbsp;</div>
        </div>
      </div>
      <!--end of box-3-->
    </section>

    <section class="about-team">
      <div class="be-brq">
        <div class="container h-100">
          <div class="row h-100">
            <div
              class="col-12 col-md-8 title d-flex align-items-start flex-column h-100"
            >
              <h1>Paixão por transformar negócios com tecnologia</h1>
              <img src="/images/seals-gptw.png" class="mt-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="container context">
        <div class="row">
          <div class="col-md-7 offset-md-5">
            <p>
              São nossos feras que traduzem a nossa essência para o mercado e
              trabalham engajados para entregar a melhor experiência para nossos
              clientes todos os dias.
            </p>
            <p class="mt-4">
              Aqui, <strong>respeito e diversidade</strong> importam, porque
              cada um, do seu jeito, nos ajuda a evoluir para alcançar nosso
              Norte Verdadeiro em uma <strong>Cultura Lean e Ágil</strong>.
            </p>
            <a href="#" class="btn btn-primary btn-lg mt-4">
              Venha ser um #FERABRQ
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!--end of section-->

    <section class="blog dark-bg py-5">
      <div class="container mt-md-4">
        <div class="row title">
          <div class="col-auto">
            <h2>Blog BRQ</h2>
          </div>
          <div class="col-md-5 pt-2">
            <p>Tudo sobre transformação digital e tendências de tecnologia.</p>
          </div>
        </div>
        <div class="row blog-contents">
          <div class="col-12">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              img-width="1024"
              class="d-none d-md-block"
            >
              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide img-blank>
                <div class="blog-item">
                  <div class="item d-flex first">
                    <div
                      class="img col-6"
                      style="
                        background-image: url(https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg);
                      "
                    >
                      &nbsp;
                    </div>
                    <div class="content d-flex align-content-center flex-wrap">
                      <h2>Podcast</h2>
                      <p>
                        Protegido: Série Podcast Transformação Digital com
                        Santander e BRQ.
                      </p>
                    </div>
                  </div>
                  <div class="item d-flex second">
                    <div
                      class="img col-6"
                      style="
                        background-image: url(https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg);
                      "
                    >
                      &nbsp;
                    </div>
                    <div class="content d-flex align-content-center flex-wrap">
                      <h2>Podcast</h2>
                      <p>
                        Protegido: Série Podcast Transformação Digital com
                        Santander e BRQ.
                      </p>
                    </div>
                  </div>
                  <div class="item d-flex third">
                    <div
                      class="img col-6"
                      style="
                        background-image: url(https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg);
                      "
                    >
                      &nbsp;
                    </div>
                    <div class="content d-flex align-content-center flex-wrap">
                      <h2>Podcast</h2>
                      <p>
                        Protegido: Série Podcast Transformação Digital com
                        Santander e BRQ.
                      </p>
                    </div>
                  </div>
                </div>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
        <div class="row newsletter text-center">
          <div class="col-12 col-md-auto ml-auto">
            <h2>Receba nossos conteúdos</h2>
          </div>
          <div class="col-12 col-md-auto d-none d-md-block">
            <img src="/images/long-arrow.svg" alt="" />
          </div>
          <div class="col-12 col-md-auto mr-auto">
            <b-form-input
              v-model="text"
              placeholder="Digite seu e-mail"
            ></b-form-input>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
/* Diagonal Boxes - */

.db-1 {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
  position: absolute;
  top: 0;
  width: 100%;
  height: 110vh;
  z-index: -1;
}

.title {
  .method {
    text-transform: uppercase;
    padding: 5%;
    border-left: 1px solid var(--dark);
    color: var(--brq-yellow);
    font-weight: medium;
  }
}

.main-content {
  .left-content {
    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: bolder;
    }

    .box-subtitle {
      background: var(--brq-blue);
      font-size: 1.5rem;
      padding: 3rem;
      color: var(--white);
    }
  }

  .content-box {
    color: var(--white);
    text-align: right;
    position: relative;
    height: 250px;

    .content {
      padding: 4% 0 4% 53vw;
    }

    .cover {
      background: var(--white);
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      clip-path: polygon(0 0, 100% 0%, 95% 100%, 0 100%);
      transition: opacity 0.5s ease-in-out;
    }

    .box-image {
      position: absolute;
      clip-path: polygon(0 0, 100% 0%, 95% 100%, 0 100%);
      height: 100%;
      background-size: cover;
      background-position: center center;
    }
  }

  .content-box:hover {
    .cover {
      opacity: 0;
    }
  }

  .cover-1 {
    .box-image,
    .cover {
      width: 60%;
    }
  }

  .cover-2 {
    .box-image,
    .cover {
      width: 57%;
    }
  }

  .cover-3 {
    .box-image,
    .cover {
      width: 54.1%;
    }
  }

  h2 {
    color: var(--brq-yellow);
    text-transform: uppercase;
    font-weight: bolder;
  }
}

.about-team {
  .context {
    font-size: 1.4rem;
    margin-top: -50px;
    padding-bottom: 7rem;

    strong {
      color: var(--brq-darkblue);
    }

    svg {
      margin-left: 3rem;
      font-size: 2rem;
    }

    .btn-primary {
      background: var(--brq-darkblue);
      border: 0;
      border-radius: 0;
      padding: 1.1rem 2rem;
    }
  }
}

.be-brq {
  height: 110vh;
  background: url(/images/bg-trabalhe-conosco.jpg) center center/cover;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);

  .title {
    padding-top: 6rem;
    padding-bottom: 5rem;
  }
}

.blog {
  .title {
    h2 {
      color: var(--white);
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: bolder;
    }

    p {
      font-size: 1.3rem;
    }
  }

  .newsletter {
    input {
      width: 100%;
      background: #6a6a6a;
      color: var(--white);
      border-radius: 0;
      border: 0;
    }
    ::placeholder {
      color: var(--white);
    }
    input:focus {
      outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
    }
    h2 {
      color: var(--white);
      text-transform: uppercase;
    }
  }

  .blog-contents {
    .swiper-slide {
      background: var(--white);
      position: absolute;
    }
  }

  .carousel-caption {
    position: relative;
    color: var(--dark);
    width: 100%;
    margin: 0;
    left: 0;
    top: 0;
    height: 100%;
  }

  .carousel-item {
    img {
      display: none !important;
    }
  }

  .blog-item {
    position: relative;
    height: 580px;

    .item {
      background: var(--white);
      width: 45%;
      position: absolute;

      .img {
        width: 100%;
        background-size: cover;
        background-position: center center;
        padding: 2rem;
      }

      .content {
        text-align: left;
        padding-left: 2rem;
        padding-right: 2rem;
        height: 250px;
      }

      h2 {
        color: var(--brq-blue);
        font-size: 1rem;
        text-transform: uppercase;
      }

      p {
        font-size: 1rem;
      }
    }

    .first {
      top: 15%;
      left: 5%;
    }

    .second {
      top: 51%;
      left: 33%;
    }

    .third {
      top: 0;
      right: 3%;
    }
  }

  .blog-item::before {
    content: "";
    position: absolute;
    width: 80%;
    margin: 5% 10%;
    height: 80%;
    border: 2px solid var(--brq-grey);
    top: 0;
    left: 0;
  }

  .carousel-control-prev {
    left: -100px;
  }

  .carousel-control-next {
    right: -100px;
  }
}

@media (max-width: 575.98px) {
  .db-1 {
    height: 130vw;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  }

  .about-team {
    .context {
      margin-top: 2rem;
    }
  }

  .be-brq {
    height: 60vh;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

    .title {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }

    img {
      width: 50%;
    }
  }
}
</style>
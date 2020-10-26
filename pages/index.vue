<template>
  <div>
    <!--background-->
    <section class="pd-top title dark-bg">
      <!--cuts-->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>

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
          <div class="col-12 col-md-8 video-cover">
            <b-img
              src="http://placeimg.com/760/427/tech"
              fluid-grow
              alt="Fluid-grow image"
            ></b-img>
            <a href="#" class="play-button">
              <img src="/images/_play-button.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--for responsive-->
    <div class="container">
      <div class="row">
        <h2 class="method mt-5 col-8 mx-auto d-block d-sm-none ml-auto">
          Conheça a<br />
          nossa metodologia
        </h2>
      </div>
    </div>

    <section class="main-content mt-5">
      <div class="left-content d-flex align-items-center">
        <div class="container p-0">
          <h2>Como geramos valor para os nossos clientes?</h2>
          <div class="box mt-4">
            <p class="m-0">
              Atuamos no ciclo completo de desenvolvimento, desde a concepção
              até a materialização dos produtos digitais
            </p>
          </div>
        </div>
      </div>
      <div class="scale">
        <img src="/images/escala-valores.png" alt="" />
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-md-4 offset-md-8">
            <h2>Soluções Inovadoras</h2>
            <p>
              Conectar clientes com soluçoes proprietárias disruptivas que
              acelerem a transformação digital ou criar novos modelos de
              negócios.
            </p>
          </div>
        </div>
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-md-4 offset-md-8">
            <h2>Transformação digital</h2>
            <p>
              Transformar negócios com tecnologia evoluindoe acelerando como as
              empresas operame entregam valor para seus clientes. Digitalização
              e aprendizado contínuopara melhoria dos negócios dos clientes.
            </p>
          </div>
        </div>
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-md-5 offset-md-7">
            <h2>Squads Gerenciados</h2>
            <p>
              Times cross-funcionais, ágeis e auto gerenciáveis, com alta
              performance e estratégia orientada à entrega de Valor.
            </p>
          </div>
        </div>
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-md-6 offset-md-6">
            <h2>Times Especializados</h2>
            <p>
              Times multidisciplinares com alta capacidade técnica que apoiam o
              desenvolvimento e melhoria contínua de produtos digitais.
            </p>
          </div>
        </div>
      </div>
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

.method {
  text-transform: uppercase;
  padding: 5%;
  border-left: 1px solid var(--dark);
  color: var(--brq-yellow);
  font-weight: medium;
}

.pd-top {
  padding-top: 7rem;
}

.title {
  position: relative;

  .video-cover {
    position: relative;
  }

  .play-button {
    position: absolute;
    z-index: 999;
    left: calc(50% - 45px);
    top: calc(50% - 45px);
  }

  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20vw;
    transform: scaleX(-1);
    /* set height to pixels if you want angle to change with screen width */
  }

  p {
    font-size: 1.05rem;
  }
}

.main-content {
  position: relative;
  overflow: hidden;

  .scale {
    position: absolute;
    bottom: 332px;
    left: 22%;
    z-index: 999;
    transform: rotate(-67deg);

    img {
      width: 57vw;
    }
  }

  .left-content {
    background: var(--white);
    position: absolute;
    top: -1px;
    left: 0;
    width: 59%;
    height: 100.1%;
    z-index: 999;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
    padding-right: 5%;

    .container {
      h2 {
        margin-left: 16%;
        margin-right: 10%;
      }
      .box {
        background: var(--brq-blue);
        padding: 2rem 2rem 2rem 16%;
        margin-right: 23%;
        font-size: 1.5rem;
        color: var(--white);
        clip-path: polygon(100% 0, 100% 55%, 93% 100%, 0 100%, 0 0);
      }
    }

    h2 {
      font-size: 4rem;
      text-transform: uppercase;
      font-weight: bolder;
      color: var(--brq-dark);
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

    .content {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;

      p {
        margin: 0;
      }
    }

    .box-image {
      position: absolute;
      clip-path: polygon(0 0, 100% 0%, 95% 100%, 0 100%);
      height: 100%;
      background-size: cover;
      background-position: center center;
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
      outline: 0px !important;
      -webkit-appearance: none;
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

  .carousel-control-prev,
  .carousel-control-next {
    height: 50px;
    width: 50px;
    margin-top: auto;
    margin-bottom: auto;
    background: #25242a;
    border: 1px solid #373737;
    border-radius: 100%;
  }

  .carousel-control-prev {
    left: -50px;
  }

  .carousel-control-next {
    right: -50px;
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

/* Mobile Users */
@media (max-width: 575.98px) {
  .db-1 {
    height: 130vw;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  }

  .main-content {
    .scale {
      transform: rotate(-90deg);
      left: -85%;
      bottom: 370px;
      img {
        width: 90vh;
      }
    }

    .content-box {
      .content {
        padding-left: 3rem;
      }
    }

    .left-content {
      position: relative;
      width: 100%;
      clip-path: none;

      .container {
        h2 {
          margin-left: 30px;
          margin-right: 30px;
          font-size: 3rem;
        }
        .box {
          padding: 2rem 2rem 2rem 30px;
          margin-right: 0;
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
      }
    }
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

/* FOR IPHONE 6 USERS */
@media (max-height: 668px) {
  .main-content {
    .scale {
      left: -90%;
      bottom: 370px;
      img {
        width: 115vh;
      }
    }
  }
}
</style>
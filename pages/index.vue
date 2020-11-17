<template>
  <div>
    <div class="dark-bg" id="slide-next">
      <img
        @click="transformVideo('back')"
        src="~@/static/images/arrow-dobra.svg"
        class="mt-3"
        id="video-arrow-back"
      />
      <video
        class="img-fluid"
        controls
        id="video-player"
        src="~@/static/video/video-brq.mp4"
      >
        <!--        <source src="~@/static/video/video-brq.mp4" type="video/mp4">-->
      </video>
    </div>
    <!--background-->
    <section id="banner" class="pd-top title dark-bg">
      <!--cuts-->
      <svg
        class="diagonal-line"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        ref="diagonal"
        id="diagonal"
      >
        <!-- <polygon fill="white" points="0,100 100,0 100,100" /> -->
        <rect width="100" height="100" style="fill: rgb(255, 255, 255)" />
      </svg>

      <div class="container">
        <div class="row">
          <div class="col my-md-1 my-3">
            <h1>Sua parceira em todos os desafios da transformação digital</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-10 mt-3">
            <p>
              A BRQ atua no ciclo completo de desenvolvimento, desde a concepção
              até a materialização dos produtos digitais.
            </p>
            <img
              src="~@/static/images/arrow-dobra.svg"
              ref="setaHz"
              id="setaHz"
              class="mt-3 d-none d-md-block"
            />

            <div class="method-title d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64.707"
                height="160.707"
                viewBox="0 0 64.707 160.707"
                ref="seta"
                id="seta"
                class="seta d-none d-md-block"
              >
                <g
                  id="_arrow-1a-dobra"
                  transform="translate(64.354) rotate(90)"
                >
                  <path
                    id="Path"
                    d="M0,0,32,32,0,64"
                    transform="translate(128)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M0,.5H160"
                    transform="translate(0 32)"
                    fill="none"
                    stroke="#000"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                </g>
              </svg>

              <h2 class="method mt-5 d-none d-md-block" id="metodologia">
                Conheça a<br />
                nossa metodologia
              </h2>
            </div>
          </div>
          <div
            @mouseover="animateVideo('in')"
            @mouseout="animateVideo('out')"
            class="col-12 col-md-8 video-cover"
          >
            <!--            <b-img-->
            <!--                src="~@/static/images/tech.jpeg"-->
            <!--                fluid-grow-->
            <!--                alt="Fluid-grow image"-->
            <!--            ></b-img>-->
            <img
              class="img-fluid"
              loop
              id="video"
              src="~@/static/images/brq-home-gif.gif"
            >
              <!--              <source src="static/video/video-brq.mp4" type="video/mp4">-->
            </img>
            <a
              @click="transformVideo('go')"
              id="video-play"
              href="#"
              class="play-button"
            >
              <img src="~@/static/images/_play-button.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--for responsive-->
    <div class="container">
      <div class="row">
        <h2 class="method mt-5 col-8 mx-auto d-block d-sm-none ml-auto">
          <span>
            Conheça a<br />
            nossa metodologia
          </span>
        </h2>
      </div>
    </div>

    <section class="main-content mt-5">
      <div class="left-content d-flex align-items-center">
        <div class="container-fluid p-0 col-md-12">
          <h2>Como geramos valor para os nossos clientes?</h2>
          <div class="box mt-4">
            <p class="mb-0">
              Atuamos no ciclo completo de desenvolvimento, desde a concepção
              até a materialização dos produtos digitais
            </p>
          </div>
        </div>
      </div>
      <div class="scale">
        <img src="~@/static/images/escala-valores.png" alt="" />
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-lg-4 offset-lg-8 z-index">
            <h2>Soluções Inovadoras</h2>
            <p>
              Conectar clientes com soluçoes proprietárias disruptivas que
              acelerem a transformação digital ou criar novos modelos de
              negócios.
            </p>
          </div>
        </div>
        <div class="container-fluid">
          <div id="box-1" class="col-lg-7 offset-lg-5 image-effect"></div>
        </div>
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-lg-5 offset-lg-7 z-index">
            <h2>Transformação digital</h2>
            <p>
              Transformar negócios com tecnologia evoluindo e acelerando como as
              empresas operam e entregam valor para seus clientes. Digitalização
              e aprendizado contínuo para melhoria dos negócios dos clientes.
            </p>
          </div>
        </div>
        <div class="container-fluid">
          <div id="box-2" class="col-lg-7 offset-lg-5 image-effect"></div>
        </div>
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-lg-5 offset-lg-7 z-index">
            <h2>Squads Gerenciados</h2>
            <p>
              Times cross-funcionais, ágeis e auto gerenciáveis, com alta
              performance e estratégia orientada à entrega de Valor.
            </p>
          </div>
        </div>
        <div class="container-fluid">
          <div id="box-3" class="col-lg-8 offset-lg-4 image-effect"></div>
        </div>
      </div>
      <div class="content-box dark-bg">
        <div class="content container">
          <div class="col-lg-6 offset-lg-6 z-index">
            <h2>Times Especializados</h2>
            <p>
              Times multidisciplinares com alta capacidade técnica que apoiam o
              desenvolvimento e melhoria contínua de produtos digitais.
            </p>
          </div>
        </div>
        <div class="container-fluid">
          <div id="box-4" class="col-lg-8 offset-lg-4 image-effect"></div>
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
              <h2>Paixão por transformar negócios com tecnologia</h2>
              <img
                src="~@/static/images/seals-gptw.png"
                class="mt-auto seals img-business"
                alt=""
              />
            </div>
          </div>
        </div>
        <svg
          class="diagonal-line"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <!-- <polygon fill="white" points="0,100 100,0 100,100" /> -->
          <rect width="100" height="100" style="fill: rgb(255, 255, 255)" />
        </svg>
      </div>
      <div class="container context">
        <div class="row">
          <div class="col-md-7 offset-md-5">
            <p ref="p1">
              São nossos feras que traduzem a nossa essência para o mercado e
              trabalham engajados para entregar a melhor experiência para nossos
              clientes todos os dias.
            </p>
            <p class="mt-4" ref="p2">
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
      <svg
        class="diagonal-line"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        ref="diagonal"
        id="diagonal-line"
      >
        <!-- <polygon fill="white" points="0,100 100,0 100,100" /> -->
        <rect width="100" height="100" style="fill: rgb(255, 255, 255)" />
      </svg>

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

            <b-carousel
              id="carousel-2"
              v-model="slide"
              :interval="4000"
              controls
              img-width="1024"
              class="d-block d-sm-none"
            >
              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide img-blank>
                <div class="blog-item">
                  <div class="item">
                    <div
                      class="img col-12"
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
              <b-carousel-slide img-blank>
                <div class="blog-item">
                  <div class="item">
                    <div
                      class="img col-12"
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
            <h2 class="m-0">Receba nossos conteúdos</h2>
          </div>
          <div
            id="content-arrow-footer"
            class="col-12 col-md-auto d-none d-md-none d-lg-block"
          >
            <img
              id="arrow-footer"
              src="~@/static/images/long-arrow.svg"
              alt=""
            />
          </div>
          <div class="col-12 col-md-auto mr-auto d-flex align-items-center">
            <b-form-input
              id="email-footer"
              @focusin="transformInputEmail('in')"
              @focusout="transformInputEmail('out')"
              v-model="text"
              placeholder="Digite seu e-mail"
            ></b-form-input>
            <b-button id="send-button" class="send-button align-items-center">
              <img src="~@/static/images/long-arrow.svg" alt="" />
              Enviar
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TimelineLite, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  methods: {
    animateVideo: function (prs: string) {
      gsap.to("#setaHz", 0.7, {
        x: prs === "in" ? 100 : 0,
      });
      gsap.to("#video", 0.7, {
        scale: prs === "in" ? 1.05 : 1,
      });
    },
    transformVideo: function (prs: string) {
      gsap.to("#slide-panel", 0.5, {
        x: prs === "go" ? -100 + "vw" : 0 + "vw",
        onComplete: function () {
          if (prs === "back") {
            document.getElementById("slide-panel")!.removeAttribute("style");
          }
        },
      });
      gsap.to("body", 0.5, {
        overflow: prs === "go" ? "hidden" : "auto",
      });

      const video = document.getElementById("video-player") as any;
      prs === "go" ? video.play() : (video.pause(), (video.currentTime = 0));
    },
    transformInputEmail(prs: string) {
      gsap.to("#arrow-footer", 0.3, {
        x: prs === "in" ? 250 : 0,
        scaleX: prs === "in" ? 0 : 1,
        opacity: prs === "in" ? 0 : 1,
        width: prs === "in" ? 0 : "auto",
      });
      gsap.to("#content-arrow-footer", 0.3, {
        padding: 0,
      });
      gsap.to("#send-button", 0.3, {
        scaleX: prs === "in" ? 1 : 0,
        x: prs === "in" ? 0 : -50,
        width: prs === "in" ? "auto" : 0,
      });
      gsap.to("#send-button", 0, {
        position: prs === "in" ? "relative" : "absolute",
      });
    },
  },
  mounted() {
      gsap.to("#diagonal", {
        scrollTrigger: {
          trigger: ".video-cover",
          start: "-=200",
          end: "+=200",
          scrub: 0.5
        },
        rotation: 0,
        ease: "expo",
        y: -70,
      });

      gsap.to("#setaHz", {
        scrollTrigger: {
          trigger: ".video-cover",
          start: "-=200",
          end: "+=200",
          scrub: 0.5,
        },
        rotation: 0,
        ease: "expo",
        x: -70,
        opacity: 0,
      });

      gsap.to(".seta", {
        scrollTrigger: {
          trigger: ".video-cover",
          start: "-=200",
          end: "+=200",
          scrub: 0.5,
        },
        ease: "expo",
        opacity: 1,
        y: 50,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".main-content",
            end: "+=200",
            scrub: 0.5,
          },
        })
        .from(".main-content", { y: 200, autoAlpha: 0 });

      gsap
        .from('.be-brq',{
          scrollTrigger: {
            trigger: ".be-brq",
            start: "top bottom",
            end: "+=400",
            scrub: 0.5
          },
          x:200,
          ease:'linear',
          autoAlpha: 0
        });

      gsap.to("#metodologia", {
        scrollTrigger: {
          trigger: "#metodologia",
          start: "-=400",
          end: "+1000",
          scrub: 0.5,          
        },
        css:{className:"+=active mt-5 d-none d-md-block"},
      });

        gsap
        .from('.be-brq h2',{
          scrollTrigger: {
            trigger: ".be-brq",
            start: "top bottom",
            end: "center top",
            scrub: 0.5,
          },
          y:200,
          autoAlpha:0,
          ease:'expo'
        });

      gsap.from(".seals", {
        y: 20,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".seals",
          start: "top bottom",
          end: "+=500",
          scrub: 0.5,
        },
      });

      gsap.from(".be-brq svg", {
        x: 10,
        rotate: 5,
        scrollTrigger: {
          trigger: ".context",
          end: "+=500",
          scrub: 0.5,
        },
      });

      gsap.from(".context", {
        y: 100,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".context",
          end: "+=300",
          scrub: 0.5,
        },
      });

      gsap.to(".blog svg", {
        x: -100,
        rotate: 0,
        scrollTrigger: {
          trigger: ".blog-item",
          start: "top bottom",
          end: "+=300",
          scrub: 0.5
        },
      });
  },
};
</script>

<style lang="scss">

#seta {
  margin-top: -50px;
}

.z-index {
  z-index: 1;
}

.title h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  color: var(--white);
}

.title p {
  color: var(--white);
}

.content-box:hover .image-effect {
  opacity: 0.3;
}

.image-effect {
  transition: all 0.3s linear;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-size: cover;
  left: 0;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0;
}

#box-1 {
  background-image: url(~@/static/images/bg-1.jpeg);
}

#box-2 {
  background-image: url(~@/static/images/bg-2.jpeg);
}

#box-3 {
  background-image: url(~@/static/images/bg-3.jpeg);
}

#box-4 {
  background-image: url(~@/static/images/bg-4.jpeg);
}

/* Diagonal Boxes - */
.img-business {
  margin-bottom: 7rem;
}

#video-arrow-back {
  transform: rotate(180deg);
}

#slide-next {
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  transform: translateX(100vw);
  position: fixed;
  align-items: center;
  justify-content: center;

  img {
    margin: 70px auto 70px 30px;
    width: 7em;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 0;
  }

  video {
    margin: 0 auto;
    width: 75vw;
  }
}

#email-footer {
  height: 36px;
}

.send-button {
  text-transform: uppercase;
  font-family: "Bebas Neue";
  border-radius: 0;
  background: orange;
  border: 0;
  overflow: hidden;
  padding: 2px 35px 2px 30px;
  height: 36px;
  display: flex;
  width: 0;
  transform: scaleX(0);
  position: absolute;
  right: 0;

  img {
    margin: 0 8px 0 -180px;
  }
}

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

.method-title {
  position: relative;

  .seta {
    position: absolute;
    left: -31px;
    top: 40px;
    opacity: 0;
  }
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

  svg.diagonal-line {
    position: absolute;
    bottom: -32vw;
    height: 35vw;
    transform: rotate(8deg);
    width: 120vw;
    left: -12vh;
    // transform: scaleX(-1);
    /* set height to pixels if you want angle to change with screen width */
  }

  p {
    font-size: 1.05rem;
  }
}

.main-content {
  position: relative;

  .scale {
    position: absolute;
    bottom: 332px;
    left: 22%;
    z-index: 999;
    transform: rotate(-67deg);

    img {
      width: 55vw;
    }
  }

  .left-content {
    // background: var(--white);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2312.089' height='880.919' viewBox='0 0 2312.089 880.919'%3E%3Cpath id='Caminho_1' data-name='Caminho 1' d='M2309.37-.547,1929,879.825l-1931.717.547V0Z' transform='translate(2.719 0.547)' fill='%23fff'/%3E%3C/svg%3E%0A");
    background-position: top right;
    position: absolute;
    top: -2px;
    left: 0;
    width: 58%;
    height: 100.3%;
    z-index: 999;
    // clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
    padding-right: 5%;

    .container-fluid {
      h2 {
        width: 550px;
        margin-left: auto;
        margin-right: 50px;
        padding-right: 50px;
      }

      .box {
        background: var(--brq-blue);
        padding: 2rem;
        margin-right: 200px;
        font-size: 1.5rem;
        color: var(--white);
        clip-path: polygon(100% 0, 100% 80%, 95% 100%, 0 100%, 0 0);

        p {
          width: 320px;
          margin-left: auto;
          margin-right: 50px;
        }
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
    margin-top: -150px;
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
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      transform: scale(1.1);
    }
  }
}

.be-brq {
  height: 120vh;
  background: url("~@/static/images/bg-trabalhe-conosco.jpg") center top/cover;
  position: relative;

  svg {
    position: absolute;
    bottom: -17vw;
    height: 33vw;
    transform: rotate(-8deg);
    width: 255vh;
    left: -12vh;
  }

  .title {
    padding-top: 6rem;
    padding-bottom: 5rem;
  }

  h2 {
    font-size: 4.5rem;
    font-weight: bolder;
    color: var(--white);
    text-transform: uppercase;
  }
}

.blog {
  padding-top:10rem !important;
  position: relative;
  overflow: hidden;

  svg.diagonal-line {
    position: absolute;
    top: -28vw;
    height: 35vw;
    transform: rotate(5deg);
    width: 235vh;
    left: -12vh;
  }

  .carousel-inner img {
    position: absolute;
  }

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

#carousel-1 img {
  display: none !important;
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

  .blog {
    padding-top:4rem !important;
  }

  .title {
    svg.diagonal-line {
      bottom: -38vw;
      height: 45vw;
      width: 235vh;
    }
  }

  .main-content {
    .scale {
      transform: rotate(-90deg);
      left: -85%;
      bottom: 370px;
      display: none;

      img {
        width: 90vh;
      }
    }

    .img-business {
      margin-bottom: 7rem;
    }

    .content-box {
      text-align: left;

      .content {
        padding-left: 3rem;
      }
    }

    .left-content {
      position: relative;
      width: 100%;
      clip-path: none;

      .container-fluid {
        h2 {
          width: 100%;
          margin-left: 30px;
          margin-right: 30px;
          font-size: 3rem;
        }

        .box {
          padding: 2rem 2rem 2rem 30px;
          margin-right: 0;
          font-size: 1.2rem;
          margin-bottom: 2rem;

          p {
            width: 100%;
          }
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

    svg {
      height: 60vw;
    }

    //clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    //transform: rotate(-9deg) !important;
    .title {
      padding-top: 2rem;
      padding-bottom: 3rem;
    }

    h2 {
      font-size: 3rem;
    }

    img {
      width: 50%;
    }
  }

  .blog {
    .carousel-control-prev,
    .carousel-control-next {
      z-index: 999;
    }

    .carousel-control-prev {
      left: -10px;
    }

    .carousel-control-next {
      right: -10px;
    }

    .blog-item {
      position: relative;
      height: auto;

      .item {
        background: var(--white);
        width: 90%;
        margin: auto;
        position: relative;

        .content {
          height: auto;
          padding: 2rem;
        }

        .img {
          height: 150px;
        }
      }
    }
  }
}

/* For larger screens */
@media (min-width: 1400px) {
  .pd-top {
    padding-bottom: 4rem;
  }
  .main-content {
    .scale {
      bottom: 324px;
      left: 22%;
      z-index: 999;
    }
  }
  .title {
    svg.diagonal-line {
      bottom: -26vw;
      height: 35vw;
      width: 120vw;
      left: -12vh;
    }
  }

  .img-business {
    margin-bottom: 16rem;
  }
}

/* FOR IPHONE 6 USERS */
@media (min-width: 1367px) and (max-width: 1936px) {
    .title {
    svg.diagonal-line {
      bottom: -26vw;
      height: 38vw;
      width: 120vw;
      left: -12vh;
    }
  }
  
}

@media (min-height: 1366px) {
  .be-brq {
    height: 53vh;
  }
}

@media (max-width: 1366px) {
  .title svg.diagonal-line {
    height: 42vw;
  }
}

@media (max-width: 1024px) {
  .be-brq svg {
    bottom: 0vw;
  }
}

@media (max-width: 768px) {
  .be-brq svg {
    bottom: -29vw;
  }

  .img-business {
    margin-bottom: 8rem;
  }

  .main-content {
    .scale {
      transform: rotate(-90deg);
      left: -85%;
      bottom: 370px;
      display: none;

      img {
        width: 90vh;
      }
    }

    .img-business {
      margin-bottom: 7rem;
    }

    .content-box {
      text-align: left;

      .content {
        padding-left: 3rem;
      }
    }

    .left-content {
      position: relative;
      width: 100%;
      clip-path: none;

      .container-fluid {
        h2 {
          width: 100%;
          margin-left: 30px;
          margin-right: 30px;
          font-size: 3rem;
        }

        .box {
          padding: 2rem 2rem 2rem 30px;
          margin-right: 0;
          font-size: 1.2rem;
          margin-bottom: 2rem;

          p {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .play-button {
    margin-top: -90px;
  }

  .be-brq svg {
    bottom: 7vw;
  }
}

</style>

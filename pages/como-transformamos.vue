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
      ></video>
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
        <rect width="100" height="100" style="fill: rgb(255, 255, 255)" />
      </svg>

      <div class="container main-title-ct">
        <div class="row">
          <nav aria-label="breadcrumb" class="col-md-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">
                Como transformamos
              </li>
              <li class="breadcrumb-item" aria-current="page">
                soluções e metodologia
              </li>
            </ol>
          </nav>
          <div class="col my-md-1 my-3">
            <h1 class="title-ct">
              Bem-vindo ao melhor da transformação digital
            </h1>
          </div>
        </div>
        <div class="container mt-2 p-0">
          <div class="row">
            <div class="col-md-4 m-0">
              <h2 class="blue-header mb-0">+ de 6 milhões horas/ano</h2>
              <h2 class="white-text header-desc-font">
                Ajudando empresas líderes em seus setores na jornada de
                transformação
              </h2>
              <img
                src="~@/static/images/arrow-dobra.svg"
                ref="setaHz"
                id="setaHz"
                class="mt-3 d-none d-md-block"
              />
              <div class="method-title mt-5 d-flex negative-margin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64.707"
                  height="160.707"
                  viewBox="0 0 64.707 160.707"
                  ref="seta"
                  id="seta"
                  class="seta-ct d-none d-md-block"
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
                <h2 class="method-ct" id="metodologia">
                  Conheça a<br />
                  nossa metodologia
                </h2>
              </div>
            </div>
            <div class="col-md-8 m-0">
              <div
                @mouseover="animateVideo('in')"
                @mouseout="animateVideo('out')"
                class="video-cover"
              >
                <img
                  class="img-fluid"
                  id="img-ct"
                  src="~@/static/images/CT-title-image.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container"></div>
    <section>
      <div
        class="container scale side-box content-bottom-header d-md-flex px-5 mb-md-3"
      >
        <div class="content col-md-6 mb-4 px-4">
          <p>
            A plataforma BRQ reúne todos os serviços ofertados e foi pensada
            para conduzir o processo de inovação de maneira escalonada,
            estratégica e contínua.
          </p>
        </div>
        <div class="content col-md-6 px-4">
          <h2 class="m-0 p-0">serviços + capabilities</h2>
          <p>
            que aceleram o ciclo de inovação dos nossos clientes e levam uma
            melhor experiência para o consumidor final.
          </p>
        </div>
      </div>
      <div class="container col-md-6 scale text-md-center content mt-5 pb-4">
        <p>
          De uma forma prática, iniciamos nosso processo de parceria
          <span class="orange-text">definindo estratégias</span>, passando pela
          <span class="orange-text">identificação</span> e
          <span class="orange-text">escolha das melhores soluções</span> até a
          <span class="orange-text">entrega</span> e
          <span class="orange-text">monitoramento constante dos resultados</span
          >.
        </p>
      </div>
    </section>
    <section>
      <div class="container platform-hub col-md-6 my-5">
        <div
          class="d-flex flex-column flex-md-row align-items-center justify-content-between"
        >
          <h1 class="p-0 m-0">Plataforma<br />de serviços</h1>
          <h1 class="p-0 m-0 plus-sign">+</h1>
          <img
            src="~@/static/images/_logo-hub.png"
            id="logo-width-governance"
          />
          <h2 class="p-0 m-0 plus-sign">+</h2>
          <h1 class="p-0 m-0">Parceiros</h1>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="862.451"
          height="30.844"
          viewBox="0 0 862.451 30.844"
          class="governance-tip"
        >
          <g
            id="_arrow-1a-dobra_copy_3"
            data-name="_arrow-1a-dobra copy 3"
            transform="translate(800.255 -11.677)"
          >
            <path
              id="Path"
              d="M0,0,14.715,14.715,0,29.43"
              transform="translate(46.067 12.385)"
              fill="none"
              stroke="#035398"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <path
              id="Path_2"
              data-name="Path 2"
              d="M0,.5H861.229"
              transform="translate(-800.255 27.023)"
              fill="none"
              stroke="#035398"
              stroke-miterlimit="10"
              stroke-width="2"
            />
          </g>
        </svg>

        <div class="governance-h1 ml-auto text-right">
          <h1 class="text-md-right text-center darkblue-text">Governança</h1>
        </div>
      </div>
    </section>
    <section class="service-platform">
      <div class="container mt-5">
        <h2 class="text-center gray-text mb-5">
          conheça nossa
          <span class="blue-text font-weight-bold"
            >plataforma de serviços:</span
          >
        </h2>
      </div>
      <div id="slider-container">
        <div class="container h-100">
          <div class="row d-flex align-items-center h-100">
            <div class="col-md-6 circle">
              <img src="~@/static/images/wheel_base.svg" class="slider-image" />
              <div class="circle-labels">
                <div class="image-container">
                  <div class="labels">
                    <p class="entender label">entender</p>
                    <p class="entregar label">entregar</p>
                    <p class="monitorar label">monitorar</p>
                    <p class="definir label">definir</p>
                  </div>
                  <img
                    src="~@/static/images/plataforma_servicos-02.svg"
                    class="slider-image slider-image-centered"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-5 sliders-circle">
              <div class="slider-1 pl-5 slider-brq">
                <section>
                  <h1 class="change-text-1 transition-opacity">
                    definir a estratégia e transformar a cultura
                  </h1>
                  <ul>
                    <li>Consultoria de Negócio</li>
                    <li>
                      Aculturamento para Transformação (Lean, Ágil, OKRs, Data
                      driven)
                    </li>
                    <li>Governança Estratégica</li>
                  </ul>
                </section>
                <div class="d-flex row justify-content-between buton-change-1">
                  <button class="btn button-left-brq">
                    <img src="~@/static/images/seta-slider.png" />
                    <span
                      class="text-change-button-left transition-opacity font-weight-bold"
                      >Monitorar</span
                    >
                  </button>
                  <button class="btn button-right-brq">
                    <span
                      class="text-change-button-right transition-opacity font-weight-bold"
                      >Entender</span
                    >
                    <img src="~@/static/images/seta-slider2.png" />
                  </button>
                </div>
              </div>
              <div class="pl-5 slider-2 slider-brq">
                <section>
                  <h1 class="change-text-2 transition-opacity">
                    ENTENDER OS PROBLEMAS E CONCEBER SOLUÇÕES
                  </h1>
                  <ul>
                    <li>Pesquisa e Design</li>
                    <li>Engenharia de valor</li>
                    <li>Consultoria tecnológica e novas tendências</li>
                    <li>Intelligent Business Automation</li>
                  </ul>
                </section>
                <div class="d-flex row justify-content-between buton-change-2">
                  <button class="btn button-left-brq">
                    <img src="~@/static/images/seta-slider.png" />
                    <span
                      class="text-change-button-left transition-opacity font-weight-bold"
                      >Definir</span
                    >
                  </button>
                  <button class="btn button-right-brq">
                    <span
                      class="text-change-button-right transition-opacity font-weight-bold"
                      >Entregar</span
                    >
                    <img src="~@/static/images/seta-slider2.png" />
                  </button>
                </div>
              </div>
              <div class="pl-5 slider-3 slider-brq">
                <section>
                  <h1 class="change-text-3 transition-opacity">
                    ENTREGAR SOLUÇÕES COM EXCELÊNCIA
                  </h1>
                  <ul>
                    <li>Blockchain</li>
                    <li>DevSecOps</li>
                    <li>Microserviços</li>
                    <li>Advanced Analytics</li>
                    <li>Integração SaaS</li>
                    <li>SAP</li>
                    <li>Cloud</li>
                    <li>Aplicações Web e Mobile</li>
                    <li>Sistemas Mainframe e migração para cloud</li>
                    <li>Open Banking</li>
                    <li>Automação de processos</li>
                  </ul>
                </section>
                <div class="d-flex row justify-content-between buton-change-3">
                  <button class="btn button-left-brq">
                    <img src="~@/static/images/seta-slider.png" />
                    <span
                      class="text-change-button-left transition-opacity font-weight-bold"
                      >Entender</span
                    >
                  </button>
                  <button class="btn button-right-brq">
                    <span
                      class="text-change-button-right transition-opacity font-weight-bold"
                      >Monitorar</span
                    >
                    <img src="~@/static/images/seta-slider2.png" />
                  </button>
                </div>
              </div>
              <div class="pl-5 slider-4 slider-brq">
                <section>
                  <h1 class="change-text-4 transition-opacity">
                    MONITORAR EFICÁCIA E AMPLIAR CAPTURA DE VALOR
                  </h1>
                  <ul>
                    <li>KPIs de Negócio</li>
                    <li>Evolução da Experiência Digital</li>
                    <li>Melhor Compreensão do Consumidor</li>
                    <li>Insights para Melhorias na Plataforma tecnológica</li>
                  </ul>
                </section>
                <div class="d-flex row justify-content-between buton-change-4">
                  <button class="btn button-left-brq">
                    <img src="~@/static/images/seta-slider.png" />
                    <span
                      class="text-change-button-left transition-opacity font-weight-bold"
                      >Entregar</span
                    >
                  </button>
                  <button class="btn button-right-brq">
                    <span
                      class="text-change-button-right transition-opacity font-weight-bold"
                      >Definir</span
                    >
                    <img src="~@/static/images/seta-slider2.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container my-5">
      <div class="text-md-center header-governance">
        <p class="m-0">E a nossa metodologia está dividida em três fases:</p>
        <h2 class="darkblue-text">Descoberta, materialização e eficácia.</h2>
      </div>
      <h1
        class="pl-3 border-primary border-left my-5 h1-font-size low-line-height"
      >
        Com governança<br />real time
      </h1>
      <div class="d-flex flex-column-reverse flex-lg-row flex-xl-row my-5">
        <div class="col-lg-6">
          <p class="mb-5 font-size-p">
            Além da governança ágil de facil conexão com indicadores importantes
            para tomada de decisão com uma ferramenta própria, o Team Care.
          </p>
          <p class="orange-text ul-font-size">
            Principais métricas disponíveis para times:
          </p>
          <ul class="ul-font-size">
            <li>Visão evolução épicos</li>
            <li>Detalhe status histórias por épico</li>
            <li>Objetivos da sprint</li>
            <li>Throughtput</li>
            <li>Planejamento da sprint</li>
            <li>Impedimentos por sprint</li>
            <li>Detalhamento sub-tarefas e status</li>
            <li>Cycle time e lead time breakdown</li>
            <li>Previsibilidade de sprints</li>
            <li>Throughtput x arrival rate</li>
            <li>CFD</li>
          </ul>
        </div>
        <div class="col-lg-6 d-flex flex-column images-team-care">
          <div class="d-flex align-items-end flex-column logo-brq-care">
            <img src="~@/static/images/team_care.png" class="pr-4 pb-3" />
          </div>
          <div class="d-flex align-items-end flex-column computador">
            <img src="~@/static/images/Grupo 1.png" class="computador" />
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-diagonal-light d-flex align-items-center justify-content-center"
    >
      <div class="container reverse-hub">
        <div class="row">
          <div
            class="col-md-6 d-flex justify-content-center align-items-center offset-md-6"
          >
            <div>
              <h1 class="mb-5 pl-3 border-left border-primary h1-font-size">
                Trazendo mais valor com o innovation hub
              </h1>
            </div>
          </div>
        </div>
        <div class="d-flex flex-md-row flex-column align-items-center">
          <img
            src="~@/static/images/_logo-hub.png"
            id="logo-max-width"
            class="col-md-5 mb-5"
          />
          <p class="pb-5 font-size-p text-md-right col-md-7">
            Para reduzir o time to market de inovação dos nossos clientes,
            desenvolvemos e colocamos a disposição o
            <span class="darkblue-text font-weight-bold transition-orange"
              >Innovation Hub</span
            >, com mais de 10 soluções e sempre buscando aumentar esse
            portfolio.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="col-md-7 offset-md-5 text-md-right">
          <h2
            class="pl-3 border-left border-primary h1-font-size partnership-h1"
          >
            parcerias estratégicas
          </h2>
          <p class="font-size-p my-5">
            Acelerar o time to market através de catálogo de ferramentas e
            soluções.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="container scale side-box parcerias">
        <img src="~@/static/images/brands/Alteryx.png" class="parceria" />
        <img
          src="~@/static/images/brands/1280px-Amazon_Web_Services_Logo.svg.png"
          class="parceria"
        />
        <img
          src="~@/static/images/brands/AutomationAnywhere.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/blue.png" class="parceria" />
        <img src="~@/static/images/brands/dynatrace_web.png" class="parceria" />
        <img src="~@/static/images/brands/elastic.png" class="parceria" />
        <img src="~@/static/images/brands/download (2).png" class="parceria" />
        <img src="~@/static/images/brands/google-logo-1.png" class="parceria" />
        <img
          src="~@/static/images/brands/HCL_Technologies_logo.svg.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/hiper.png" class="parceria" />
        <img src="~@/static/images/brands/Huawei-Logo.png" class="parceria" />
        <img
          src="~@/static/images/brands/1000px-IBM_logo.svg.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/loud-roxo.png" class="parceria" />
        <img
          src="~@/static/images/brands/microsoft-logo-2.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/mule_soft.png" class="parceria" />
        <img src="~@/static/images/brands/Logo-Neoway-1.png" class="parceria" />
        <img src="~@/static/images/brands/Oracle-Logo.png" class="parceria" />
        <img
          src="~@/static/images/brands/pegasystems-inc-vector-logo.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/Pipefy.png" class="parceria" />
        <img src="~@/static/images/brands/download (1).png" class="parceria" />
        <img
          src="~@/static/images/brands/red-hat-logo-a-sample.png"
          class="parceria"
        />
        <img
          src="~@/static/images/brands/102-1029458_salesforce-began-in-1999-with-a-vision-of-reinventing-salesforce-com-logo copy.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/Logo_SAP.png" class="parceria" />
        <img
          src="~@/static/images/brands/SAS_logo_horiz.svg.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/signavio.png" class="parceria" />
        <img src="~@/static/images/brands/stibo_logo_og.png" class="parceria" />
        <img src="~@/static/images/brands/Daco_6077951.png" class="parceria" />
        <img src="~@/static/images/brands/tableau-logo.png" class="parceria" />
        <img
          src="~@/static/images/brands/TCG_logo_redesign_2019_EN_Enable_The_Digital_Enterprise_RGB-2.png"
          class="parceria"
        />
        <img src="~@/static/images/brands/team_care.png" class="parceria" />
        <img src="~@/static/images/brands/uipath-logo.png" class="parceria" />
        <img src="~@/static/images/brands/VMware.png" class="parceria" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import Vue from "vue";
import { TimelineLite, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  transition: "test",
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
    let index = 0;
    const numberOfSlides = 4;
    const rotation = 90;
    let degrees = 0;
    let sliderBox:any;
    const carouselContainer: any = document.querySelector(".sliders-circle");
    let carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;
    const rightButton = document.querySelectorAll(".button-right-brq");
    const leftButton = document.querySelectorAll(".button-left-brq");
    let label:any;
    const loopSlide:any = document.querySelector(".slider-4");
    const plataformServices: any = document.querySelector(
      ".circle-labels"
    );

    rightButton.forEach((btn) => {
      btn.addEventListener("click", () => {
        sliderBox = document.querySelectorAll('.slider-brq')[index]
        label = document.querySelectorAll(".label")[index];


        if (index == numberOfSlides - 1) {
          index = 0;
          carouselItemWidth = (carouselContainer.scrollWidth / numberOfSlides) * -numberOfSlides;
          //sliderBox.style.order = -1;
        }
        else { 
          index += 1;
          carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;
        }

        document.querySelectorAll('.label').forEach(lbl => {
          lbl.style.fontWeight = 'normal';
        });
        label.style.fontWeight = 'bold';

        plataformServices.style.transform = `rotate(${degrees - rotation}deg)`;
        degrees -= rotation;

        carouselContainer.scrollBy(carouselItemWidth, 0);
      });
    });

    leftButton.forEach((btn) => {
      btn.addEventListener("click", () => {
      sliderBox = document.querySelectorAll('.slider-brq')[index]

        if (index == 0) {
          index = 3;
          carouselItemWidth = (carouselContainer.scrollWidth / numberOfSlides) * -numberOfSlides;
          //sliderBox.style.order = -1;
        }
        else { 
          index -= 1;
          carouselItemWidth = carouselContainer.scrollWidth / numberOfSlides;
        }

        plataformServices.style.transform = `rotate(${degrees + rotation}deg)`;
        degrees += rotation;

        carouselContainer.scrollBy(-carouselItemWidth, 0);
      });
    });

    //Animation Pinned Circle
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#slider-container",
          start: "center center",
          end: "+=300",
          markers: true,
          pin: true,
        },
      })
      .from(".circle", { xPercent: 50, ease: "expo" })
      .from(".sliders-circle", { autoAlpha: 0, x: 100, ease: "expo" });

    gsap.to("#diagonal", {
      scrollTrigger: {
        trigger: ".video-cover",
        start: "-=200",
        end: "+=200",
        scrub: 0.5,
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

    gsap.to(".seta-ct", {
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
          trigger: ".platform-hub",
          start: "-=400px",
          end: "+=400px",
          scrub: 0.5,
        },
      })
      .from(".governance-tip", {
        xPercent: -100,
        autoAlpha: 0,
        ease: "expo",
      })
      .from(".governance-h1", {
        y: 30,
        autoAlpha: 0,
        ease: "expo",
      });

    gsap.to("#metodologia", {
      scrollTrigger: {
        trigger: ".video-cover",
        start: "-=200",
        end: "+=100",
        scrub: 0.5,
      },
      borderLeftColor: "#fff",
      ease: "expo",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".main-content",
          end: "+=200",
          scrub: 0.5,
        },
      })
      .from(".main-content", { y: 200, autoAlpha: 0, ease: "expo" });

    gsap.from(".be-brq", {
      scrollTrigger: {
        trigger: ".be-brq",
        start: "top bottom",
        end: "+=400",
        scrub: 0.5,
      },
      x: 200,
      ease: "linear",
      autoAlpha: 0,
    });

    gsap.from(".images-team-care", {
      scrollTrigger: {
        trigger: ".header-governance",
        start: "top top",
        end: "+=500",
        scrub: 0.5,
      },
      y: 150,
      ease: "expo",
    });

    gsap.from("#logo-max-width", {
      scrollTrigger: {
        trigger: ".reverse-hub",
        start: "-=300",
        end: "+=350",
        scrub: 0.5,
      },
      y: 150,
      ease: "expo",
    });

    gsap.utils.toArray(".parceria").forEach((parceria: any) => {
      gsap.from(parceria, {
        scrollTrigger: {
          trigger: parceria,
          start: "-=500",
          end: "-=500",
          scrub: 0,
        },
        ease: "expo",
        autoAlpha: 0,
        y: 50,
      });
    });
  },
};
</script>

<style lang="scss" scoped>

.definir {
  font-weight: bold;
}

.entender {
  transform: rotate(90deg);
}

.monitorar {
  transform: rotate(-90deg);
}

.entregar {
  transform: rotate(180deg);
}

.circle-labels {
  padding: 0 15px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;

  p {
    height: 100%;
    top: 0;
    left: 0;
    padding: 9%;
    text-transform: capitalize;
    color: var(--brq-light);
    font-size: 1.2rem;
    position: absolute;
    width: 100%;
    text-align: center;
  }
  
  
  .labels {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 2.5rem;
    z-index: 10;
  }
  .image-container {
    width: 63%;
    margin: auto;
    position: relative;
  }
}


.slider-image-centered {
  // position: absolute !important;
  // left: 0;
  // top: 0;
  width: 100%;
  height: 100%;
}

.sliders-circle {
  display: flex;
  padding: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  -ms-scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  scrollbar-width: 0;
  scrollbar-color: transparent transparent;
  height: 100%;
  width: 100%;

  * {
    outline: none;
    box-shadow: none;
    border: 0;
  }

  > *::-webkit-scrollbar {
    display: none;
  }
}

.sliders-circle::-webkit-scrollbar {
  display: none;
}

.slider-1,
.slider-2,
.slider-3,
.slider-4 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 100%;
  width: 100%;
  scroll-snap-align: center;
}

.partnership-h1 {
  width: fit-content;
  margin-left: auto;
}

.change-text-1 {
  color: var(--brq-darkblue);
}

.change-text-2 {
  color: var(--brq-yellow);
}

.change-text-3 {
  color: #8b008b;
}

.change-text-4 {
  color: #5f9ea0;
}

.buton-change-1 {
  .button-left-brq {
    span {
      color: #5f9ea0;
    }
  }

  .button-right-brq {
    span {
      color: var(--brq-yellow);
    }
  }
}

.buton-change-2 {
  .button-left-brq {
    span {
      color: var(--brq-darkblue);
    }
  }

  .button-right-brq {
    span {
      color: #8b008b;
    }
  }
}

.buton-change-3 {
  .button-left-brq {
    span {
      color: var(--brq-yellow);
    }
  }

  .button-right-brq {
    span {
      color: #5f9ea0;
    }
  }
}

.buton-change-4 {
  .button-left-brq {
    span {
      color: #8b008b;
    }
  }

  .button-right-brq {
    span {
      color: var(--brq-darkblue);
    }
  }
}

.service-platform {
  h2 {
    font-size: 3.5rem;
  }
}

.platform-hub {
  overflow: hidden;

  svg {
    position: absolute;
    right: 15px;
  }
}

#img-ct {
  margin-top: 30px;
}

.governance-h1 {
  margin-top: 2.5rem;
}

.header-desc-font {
  font-size: 1.8rem;
}

.parcerias {
  > * {
    transition: all 0.5s;
  }

  img:hover {
    display: inline-block;
    -webkit-transform: scale(1.5) !important;
    transform: scale(1.2) !important;
  }
}

.negative-margin {
  margin-top: -100px;
}

.slider-image {
  max-width: 100%;
}

#slider-container {
  background-color: var(--brq-even-lighter-gray);
  margin: 6rem 0;

  .circle {
    transform: scale(1.1);
  }

  ul {
    font-size: 1.3rem;
  }
}

.transition-opacity,
.transition-orange {
  transition: color 0.5s;
}

.transition-orange:hover {
  color: var(--brq-yellow);
}

#logo-max-width {
  width: 100%;
  height: 100%;
}

#logo-width-governance {
  width: 200px;
}

.gray-text {
  color: var(--brq-grey);
}

.computador {
  max-width: 100%;
}

.parcerias {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

div.parcerias {
  overflow: hidden;
  padding-bottom: 10rem;
  margin-bottom: 10rem;
}

.parcerias * {
  height: 100px;
  width: 150px;
  object-fit: scale-down;
}

.bg-diagonal-light {
  height: 100vh;
}
.reverse-hub {
  transform: skewY(10deg);
}

.font-size-p {
  font-size: 1.5rem;
}

.ul-font-size {
  font-size: 1.2rem;
}

.h1-font-size {
  font-size: 4rem;
  line-height: 0.9;
}

.header-governance {
  margin: 5rem 0;
  p {
    font-size: 1.7rem;
  }
  h2 {
    font-size: 4rem;
  }
}

.full-text {
  font-size: 2.5vw;
}

.plus-sign {
  font-size: 5rem;
  color: var(--brq-darkblue);
}

.content {
  p {
    font-size: 1.6rem;
  }

  h2 {
    color: var(--brq-darkblue);
  }
}

.darkblue-text {
  color: var(--brq-darkblue);
}

.blue-text {
  color: var(--brq-blue);
}

.orange-text {
  color: var(--brq-yellow);
  font-weight: bolder;
}

.side-box {
  // overflow: hidden;
  width: 90%;
}

.side-box:before {
  content: "";
  border: 2px solid var(--brq-blue);
  border-top: 0;
  background: transparent;
  position: absolute;
  width: 100%;
  height: 150%;
  transform: skewY(-10deg);
  bottom: 100px;
  left: 0;
  z-index: -1;
}

.content-bottom-header {
  overflow: hidden;
  padding-bottom: 12rem;
}

.scale {
  transform: scale(1);
}

.title h1.title-ct {
  font-size: 4rem;
}

.main-title-ct {
  padding-bottom: 7rem;
}

.white-text {
  color: var(--white);
  padding-left: 1.3rem;
}

.blue-header {
  color: var(--brq-darkblue);
  font-size: 2.3rem;
}

.breadcrumb {
  background: none;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1rem;
  color: var(--brq-grey);
  padding: 0;
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
    width: 75vw;
    cursor: pointer;
    position: absolute;
    top: 10px;
    left: 0;
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

.method-ct {
  text-transform: uppercase;
  padding: 5%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: 1px solid var(--dark);
  color: var(--brq-yellow);
  font-weight: medium;
  font-size: 2.2rem;
}

.method-title {
  position: relative;

  .seta-ct {
    position: absolute;
    left: -31px;
    top: 0;
    opacity: 0;
    margin-top: -50px;
  }
}

.pd-top {
  padding-top: 7rem;
}

.title {
  position: relative;

  .video-cover {
    // width: 100%;
    // margin: 0px
  }

  .play-button {
    position: absolute;
    z-index: 999;
    left: calc(50% - 45px);
    top: calc(50% - 45px);
  }

  svg.diagonal-line {
    position: absolute;
    bottom: -19vw !important;
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
}
</style>

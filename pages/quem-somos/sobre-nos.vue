<template>
  <div>
    <section class="main-title cut-lr dark-bg">
      <!--cuts-->
      <svg
        class="diagonal-pages"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        id="diagonal-pages"
      >
        <!-- <polygon fill="white" points="0,100 100,0 100,100" /> -->
        <rect width="100" height="100" style="fill: rgb(255, 255, 255)" />
      </svg>

      <div class="container">
        <div class="row">
          <!--componentizar-->
          <nav aria-label="breadcrumb" class="col-md-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">quem somos</li>
              <li class="breadcrumb-item" aria-current="page">sobre nós</li>
            </ol>
          </nav>
          <div class="col-md-6 mt-4 title">
            <h2>
              Caminhamos ao seu <br class="d-md-none d-block">lado <br  class="d-md-block d-none"/>em todos os <br class="d-md-none d-block">desafios <br  class="d-md-block d-none"/>de
              <br class="d-md-none d-block">transformação digital
            </h2>
            <img
              src="~@/static/images/arrow-dobra.svg"
              ref="setaHz"
              id="setaHz"
              class="mt-3 d-none d-md-block"
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row mb-md-5 flex-md-row flex-column-reverse">
          <div class="col-md-5">
            <p class="font-size-p content-title-brq">
              Com mais de 28 anos de experiência no mercado, somos uma das
              principais empresas de serviços e soluções de tecnologia no
              Brasil. A nossa missão é construir jornadas de transformação com
              robustez e segurança, entrega de inovação, produtividade e valor
              para seguradoras, bancos, telecom, varejo, serviços e outras
              empresas líderes de mercado.
            </p>
          </div>
          <div
            @mouseover="animateVideo('in')"
            @mouseout="animateVideo('out')"
            class="video-cover col-md-6 offset-md-1"
          >
            <img src="~@/static/images/sn-image-header.png" class="w-100" />
          </div>
        </div>
      </div>
    </section>

    <section class="image-text-container pt-5 mt-5 ">
      <div class="container mt-5">
        <div class="row pt-md-5 pt-1">
          <div class="col-md-6 positioned-container text-content">
            <p class="text-white">
              Porque acreditamos que o resultado é a evolução de modelos de
              negócio que visam levar a melhor experiência para os consumidores.
            </p>
          </div>
          <div class="col-md-6 image-content">
            <img src="~@/static/images/platform-plus.png" class="w-100" />
          </div>
        </div>
      </div>
    </section>
    <section id="seja-digital">
      <div class="container" id="feras">
        <p class="font-size-p">
          Somos um time de mais de<br class="d-block d-md-none">
          <span class="text-orange font-weight-bold">3.000 #feras <br class="d-none d-md-block"/></span
          >apaixonados por <br class="d-block d-md-none">tecnologia e transformação,<br/>atuando no
          Brasil e nos EUA.
        </p>
        <p class="h2-style blue-text">
          OU MELHOR, ATUANDO EM
          <span class="font-size-h1 text-dark">ANYWHERE OFFICE</span><br />
          PARA QUALQUER LUGAR DO MUNDO.
        </p>
      </div>
      <div class="container-fluid d-flex flex-column align-items-center py-1 py-md-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64.707"
          height="160.707"
          viewBox="0 0 64.707 160.707"
          ref="seta"
          id="seta-seja-digital"
          class="seta-ct"
        >
          <g id="_arrow-1a-dobra" transform="translate(64.354) rotate(90)">
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
        <h2 class="text-muted mt-5 mb-5 text-center">SEJA DIGITAL COM A BRQ</h2>
      </div>
      <div
        class="container d-flex flex-column flex-md-row justify-content-between boxes-seja-digital"
      >
        <div class="first mt-md-0 mt-5">
          <p>
            <span class="text-uppercase text-nowrap"
              >TRANSFORMAÇÃO <br />DIGITAL<br
            /></span>
            com robustez, <br class="d-none d-md-block"/>segurança e <br class="d-none d-md-block"/>credibilidade
          </p>
        </div>
        <div class="second mt-md-0 mt-5">
          <p>
            Aplicação de<br />
            <span class="text-uppercase text-nowrap"
              >EFICIENTES E <br />INOVADORAS<br
            /></span>
            tecnologias e <br class="d-none d-md-block"/>metodologias
          </p>
        </div>
        <div class="third mt-md-0 mt-5">
          <p>
            Processos e <br class="d-none d-md-block"/>ferramentas<br /><span class="text-uppercase text-nowrap">
            TESTADAS E <br />MADURAS</span>
          </p>
        </div>
        <div class="forth mt-md-0 mt-5">
          <p>
            <span class="text-uppercase text-nowrap"
              >ENTRE AS <br />MELHORES<br
            /></span>
            empresas para <br class="d-none d-md-block"/>trabalhar
          </p>
          <img src="~@/static/images/bitmap.png" />
        </div>
      </div>
    </section>

    <section>
      <div class="container side-box infra">
        <p class="h1 text-muted">INFRAESTRUTURA ROBUSTA</p>
        <div class="d-flex flex-column flex-md-row justify-content-around mt-5">
          <div class="text-center first">
            <h2 class="h2-font-size text-orange m-0">6</h2>
            <p class="font-size-p">Centros de Serviço</p>
          </div>
          <div class="text-center second">
            <h2 class="h2-font-size text-orange m-0">3.000</h2>
            <p class="font-size-p">Profissionais</p>
          </div>
          <div class="text-center third">
            <h2 class="h2-font-size text-orange m-0">500MM</h2>
            <p class="font-size-p">De receita</p>
          </div>
        </div>
        <div class="text-center mt-5 d-flex justify-content-center flex-column flex-md-row">
          <p class="font-size-p anywhere-office">
            Nosso time engajado atuando<br /><span
              class="blue-text"
              >ANYWHERE OFFICE</span
            >
          </p>
          <p class="font-size-p offset-y-diagonal">
            Centros de serviço, Home Office <br />ou direto no cliente
          </p>
        </div>
      </div>
    </section>

    <section class="bg-diagonal-light" id="market-share">
      <div class="container content">
        <div class="pr-md-0 pr-5">
          <h2 class="blue-text w-100 text-right mb-5">MARKET SHARE</h2>
        </div>
        <div class="row mt-5">
          <div class="col-12 col-md-4 first mt-5 mt-md-0">
            <p class="text-center font-size-p">IT SERVICE TOTAL<br><span class="text-orange">8º Local/<br />28º Geral</span></p>
          </div>
          <div class="col-12 col-md-4 second mt-5 mt-md-0">
            <p class="text-center font-size-p">APLICAÇÕES<br><span class="text-orange">2º Local/<br>7º Geral</span></p>
          </div>
          <div class="col-12 col-md-4 third mt-5 mt-md-0">
            <p class="text-center font-size-p">APLICAÇÕES PARA<br>O SETOR<br><span class="text-orange">2º geral</span></p>
          </div>
        </div>
        <p class="mt-5">Fonte: IDC</p>
      </div>
    </section>

    <section>
      <div class="container governance" id="gov-e-transp">
        <div class="row w-100 text-right mb-5">
          <h2 class="text-muted w-100 text-uppercase">Governança<br>e transparência</h2>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between gov-e-transp">
          <div class="first mt-5 mt-md-0">
            <p>Hoshin Kanri</p>
            <img src="~@/static/images/hoshin.png" />
          </div>
          <div class="second mt-5 mt-md-0">
            <p>Bovespa</p>
            <img src="~@/static/images/Grupo 1.png" />
          </div>
          <div class="third mt-5 mt-md-0">
            <p>Acionista</p>
            <img src="~@/static/images/ancionista.png" />
          </div>
          <div class="forth mt-5 mt-md-0">
            <p>Auditoria</p>
            <img src="~@/static/images/auditoria.png" />
          </div>
        </div>
      </div>
    </section>

    <section id="premiacoes">
      <div class="container side-box">
        <p class="text-muted font-size-p text-md-left text-center">PREMIAÇÕES</p>
        <div class="d-flex flex-column flex-md-row justify-content-between px-5 mt-5">
          <div
            class="d-flex flex-column text-center justify-content-between align-items-center first"
          >
            <p class="font-size-p">
              Líder em
              <span class="text-orange font-weight-bold"
                >4 de 5<br />quadrantes</span
              >
              de<br />transformação Digital
            </p>
            <img src="~@/static/images/isg.svg" />
          </div>
          <div
            class="d-flex flex-column text-center justify-content-between align-items-center second mt-5 mt-md-0"
          >
            <p class="font-size-p">
              <span class="text-orange font-weight-bold">4º lugar</span>em
              Inovações e<span class="text-orange font-weight-bold"
                ><br />5º Lugar </span
              >em Tecnologia
            </p>
            <img src="~@/static/images/isg.svg" />
          </div>
          <div
            class="d-flex flex-column text-center justify-content-between align-items-center third mt-5 mt-md-0"
          >
            <p class="font-size-p">
              <span class="text-orange font-weight-bold">1º lugar</span> na
              categoria<br /><span class="text-orange font-weight-bold"
                >Grande Empresa<br />Mais Digital</span
              >
            </p>
            <img src="~@/static/images/empresas-mais-sigitais.svg" />
          </div>
        </div>
      </div>
    </section>

    <section class="relacionamentos-section">
      <div class="container">
        <h2>
          RELACIONAMENTOS LONGOS E PERENES,<br /><span
            >SINÔNIMO DE CONFIANÇA</span
          >
        </h2>
        <div class="relacionamentos">
          <img src="~@/static/images/relacionamentos/ambev.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/avon.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/bnds.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/bradesco.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/btg.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/ccee.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/claro.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/delta.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/gpa.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/itau.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/jbs.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/leroy.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/liberty.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/boticario.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/ons.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/porto seguro.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/renault.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/rede.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/santander.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/santillana.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/telefonica.png" class="relacionamento">
          <img src="~@/static/images/relacionamentos/tim.png" class="relacionamento">
        </div>
      </div>
    </section>

    <!-- ONDE ESTAMOS -->
    <section id="where">
      <div class="container content">
        <div class="row">
          <div class="col-md-12 text-md-left mt-5 mt-md-0 py-5">
            <h2 class="blue-title">Onde Estamos</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 mt-3">
            <h4>Matriz - SP</h4>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Alphaville - SP</h4>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Rio de Janeiro - RJ</h4>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Curitiba - PR</h4>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Recife - PE</h4>
          </div>
          <div class="col-md-2 mt-3">
            <h4>New York - USA</h4>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" scoped>
import Vue from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  transition: "test",
  methods: {
    animateVideo: function (prs: string) {
      gsap.to("#setaHz", 0.7, {
        x: prs === "in" ? 100 : 0,
      });
    },
  },
  mounted() {
    gsap.to(".diagonal-pages", {
      scrollTrigger: {
        trigger: ".content-title-brq",
        start: "-=300 +=20%",
        end: "+=150",
        scrub: 0.5,
      },
      rotation: 0,
      y: 70,
    });

    gsap.utils.toArray(".relacionamento").forEach((relacionamento: any) => {
      gsap.from(relacionamento, {
        scrollTrigger: {
          trigger: relacionamento,
          start: "-=500",
          end: "-=500",
          scrub: 0,
        },
        ease: "expo",
        autoAlpha: 0,
        y: 50,
      });
    });

    gsap.from("#seta-seja-digital", {
      scrollTrigger: {
        trigger: "#feras",
        start: "-=200",
        end: "+=150",
        scrub: 0.5,
      },
      y: -100,
      autoAlpha: 0,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".image-text-container",
          start: "top center+=5%",
          end: "+=300",
        },
      })
      .from(".image-text-container", { y: 100, autoAlpha: 0 })
      .from(".image-text-container .text-content", {
        xPercent: -50,
        ease: "expo",
        autoAlpha: 0,
      })
      .from(".image-text-container .image-content", {
        autoAlpha: 0,
        xPercent: 50,
        ease: "expo",
      });

      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".boxes-seja-digital",
          start: "-=500",
          end: "+=250",
          scrub: 0.5
        },
      }).from(".boxes-seja-digital .first", { y:100, autoAlpha:0 })
      .from(".boxes-seja-digital .second", { y:100, autoAlpha:0 })
      .from(".boxes-seja-digital .third", { y:100, autoAlpha:0 })
      .from(".boxes-seja-digital .forth", { y:100, autoAlpha:0 });

      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".governance",
          start: "-=500",
          end: "+=250",
          scrub: 0.5
        },
      }).from(".governance .first", { y:100, autoAlpha:0 })
      .from(".governance .second", { y:100, autoAlpha:0 })
      .from(".governance .third", { y:100, autoAlpha:0 })
      .from(".governance .forth", { y:100, autoAlpha:0 });

      gsap
      .timeline({
        scrollTrigger: {
          trigger: ".infra",
          start: "-=500",
          end: "+=250",
          scrub: 0.5
        },
      }).from(".infra .first", { y:100, autoAlpha:0 })
      .from(".infra .second", { y:100, autoAlpha:0 })
      .from(".infra .third", { y:100, autoAlpha:0 });

      gsap
      .timeline({
        scrollTrigger: {
          trigger: "#market-share",
          start: "-=300",
          end: "+=250",
          scrub: 0.5
        },
      }).from("#market-share .first", { y:100, autoAlpha:0 })
      .from("#market-share .second", { y:100, autoAlpha:0 })
      .from("#market-share .third", { y:100, autoAlpha:0 });

      gsap
      .timeline({
        scrollTrigger: {
          trigger: "#premiacoes",
          start: "-=500",
          end: "+=250",
          scrub: 0.5
        },
      }).from("#premiacoes .first", { y:100, autoAlpha:0 })
      .from("#premiacoes .second", { y:100, autoAlpha:0 })
      .from("#premiacoes .third", { y:100, autoAlpha:0 });

  
    gsap.from(".video-cover", {
      scrollTrigger: {
        trigger: ".video-cover",
        start: "-=300",
        end:"+=300",
        scrub: 0.5,
      },
      y: 100,
    });
  },
};
</script>


<style lang="scss" scoped>
#premiacoes {
  .side-box {
    padding-bottom: 13rem !important;
  }
}

#market-share {
  h2 {
    font-size: 4.4rem;
  }
  span {
    font-family: "Bebas Neue", sans-serif;
    line-height: 1;
    font-size: 6rem;
  }
}

#feras {
  margin-top: -100px;
}

#seja-digital {
  > div {
    > h2 {
      font-size: 6rem;
    }
  }
}

.relacionamentos-section {
  margin-top: 6rem;
  background-color: var(--brq-dark);
  padding-top: 6rem;
  padding-bottom: 18rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 65%);

  h2 {
    color: white;
  }
  span {
    font-size: 3rem;
  }
}

.positioned-container::before {
  content: url("~@/static/images/seta-quem-somos.svg");
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, 25%);
}

#where {
  transform: translate(0, -50%);
}

.image-text-container {
  background-image: url("~@/static/images/group 6.png");
  height: 110vh;
  background-size: cover;

  p {
    font-size: 2.4rem;
  }
}

.relacionamentos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    transition: all 0.5s ease;
    height: 100px;
    width: 130px;
    object-fit: scale-down;
  }

  img:hover {
    transform: scale(1.1);
    filter: none;
  }
}

.boxes-seja-digital {
  * {
    font-size: 1.6rem;
    line-height: 1.2;
  }

  > * {
    position: relative;
    padding-bottom: 2rem;
  }

  span {
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
  }

  > *::after {
    content: "";
    display: block;
    width: 13rem;
    position: absolute;
    transform: rotate(-15deg);
    border-bottom: 1px solid var(--brq-blue);
    bottom: 0;
  }
}

.anywhere-office {
  position: relative;

  span {
    font-size: 4.2rem;
    font-family: "Bebas Neue", sans-serif;
    line-height: 1;
  }
}

.bg-diagonal-light {
  .content {
    padding: 5rem 0;
  }
}

#gov-e-transp {
  h2 {
    font-size: 3rem;
  }
}

.gov-e-transp {
  div {
    position: relative;
    padding-bottom: 60px;
  }

  p {
    font-size: 1rem;
  }

  >div::after {
    content: '';
    display: block;
    width: 10rem;
    border-bottom: 1px solid var(--brq-blue);
    transform: rotate(-20deg);
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.anywhere-office::after {
  content: "";
  display: block;
  width: 13rem;
  position: absolute;
  transform: translate(50%) rotate(-15deg);
  border-bottom: 1px solid var(--brq-blue);
  bottom: -15%;
  right: 0;
}

.side-box {
  width: 90%;
  margin-top: 10rem;
  overflow: hidden;
  position: relative;
  padding-bottom: 18rem;
}

.offset-y-diagonal {
  transform: translate(0, 130%);
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

.h2-font-size {
  font-size: 6rem;
}

.blue-text {
  color: var(--brq-darkblue);
}

.text-orange {
  color: var(--brq-yellow);
}

.font-size-h1 {
  font-size: 3.5rem;
}

.h2-style {
  font-size: 3rem;
  font-family: "Bebas Neue";
  line-height: 1.1;
}

.video-cover {
  margin-top: -40%;
}

.font-size-p {
  font-size: 1.5rem;
}

.title {
  h2 {
    font-size: 3.5rem;
    color: white;
    line-height: 1.1;
  }
}

.main-title.cut-lr .diagonal-pages {
  height: 28vw;
  transform: rotate(-6deg);
  width: 200%;
  top: 70%;
  left: -10%;
}

.absolute-text {
  position: absolute;
  color: white;
  top: 0;
  font-size: 2.5rem;
}

@media (max-width: 575.98px) {
  .bg-diagonal-light {
    margin-top: 0 !important;
  }

  .relacionamentos-section {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 93%);
  }

  .main-title.cut-lr .diagonal-pages {
    top: 90%;
  }

  #where {
    transform: translate(0, -20%);
  }

  .image-text-container {
    p {
      font-size: 1.4rem;
    }
  }
}
</style>
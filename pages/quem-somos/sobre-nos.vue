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
              Caminhamos ao seu lado<br />em todos os desafios<br />de
              transformação digital
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
        <div class="row">
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
            class="video-cover col-md-5 offset-md-1"
          >
            <img src="~@/static/images/sn-image-header.png" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid mt-5 p-0 image-text-container">
        <img src="~@/static/images/group 6.png" width="100%" />
        <div class="container">
          <p class="absolute-text col-5 mt-5">
            Porque acreditamos que o resultado é a evolução de modelos de
            negócio que visam levar a melhor experiência para os consumidores.
          </p>
        </div>
      </div>
      <div class="container bottom-image-container">
        <p class="font-size-p">
          Somos um time de mais de
          <span class="text-orange font-weight-bold">3.000 #feras</span
          ><br />apaixonados por tecnologia e transformação,<br />atuando no
          Brasil e nos EUA.
        </p>
        <p class="h2-style blue-text">
          OU MELHOR, ATUANDO EM
          <span class="font-size-h1 text-dark">ANYWHERE OFFICE</span><br />
          PARA QUALQUER LUGAR DO MUNDO.
        </p>
      </div>
      <div class="container-fluid d-flex flex-column align-items-center py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64.707"
          height="160.707"
          viewBox="0 0 64.707 160.707"
          ref="seta"
          id="seta"
          class="seta-ct d-none d-md-block"
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
        <p class="font-size-h1 text-muted mt-5 mb-5">SEJA DIGITAL COM A BRQ</p>
      </div>
      <div class="container boxes-seja-digital">
        <div class="row">
          <div class="col-3">
            <p>
              <span class="text-uppercase font-weight-bold"
                >TRANSFORMAÇÃO DIGITAL<br
              /></span>
              com robustez, segurança e credibilidade
            </p>
          </div>
          <div class="col-3">
            <p>
              Aplicação de
              <span class="text-uppercase font-weight-bold"
                ><br />EFICIENTES E INOVADORAS<br
              /></span>
              tecnologias e metodologias
            </p>
          </div>
          <div class="col-3">
            <p>
              Processos e ferramentas<span
                class="text-uppercase font-weight-bold"
                ><br />TESTADAS E MADURAS</span
              >
            </p>
          </div>
          <div class="col-3">
            <p>
              <span class="text-uppercase font-weight-bold"
                >ENTRE AS MELHORES<br
              /></span>
              empresas para trabalhar
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="where" class="bg-diagonal-light">
      <div class="container content">
        <div class="row">
          <div class="col-md-12 text-md-right mt-5 mt-md-0 py-5">
            <h2 class="blue-title">Onde Estamos</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 mt-3">
            <h4>Matriz - SP</h4>
            <p>
              Rua Boa Vista, 254 <br />
              9 andar <br />Centro<br />
              São Paulo - SP<br />
              CEP 01014-000 <br />+55 (11) 2526-0600
            </p>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Alphaville - SP</h4>
            <p>
              Av Copacabana,238 <br />
              3 andar <br />18 do Forte<br />
              Barueri - SP<br />
              CEP 06465-903 <br />+55 (11) 3927-0600
            </p>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Rio de Janeiro - RJ</h4>
            <p>
              Rua Teofilo Otoni,63 <br />
              4 andar <br />Centro<br />
              Rio de Janeiro - RJ<br />
              CEP 20090-080<br />+55 (21) 3211-9800 / +55 (21) 3211-9811
            </p>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Curitiba - PR</h4>
            <p>
              Av. Mal. Floriano Peixoto, 2610 <br />
              Cj.07 <br />Parolin<br />
              Curitiba - PR<br />
              CEP 80220-000 <br />+55 (41) 3778-8000 <br />
              +55 (41) 3778-8002
            </p>
          </div>
          <div class="col-md-2 mt-3">
            <h4>Recife - PE</h4>
            <p>
              Av. Marquês de Olinda, 126 <br />
              Saka 102 - 1 andar Condomínio Citi Empresarial <br />Bairro do
              Recife<br />
              Recife - PE<br />
              CEP 50030-000
            </p>
          </div>
          <div class="col-md-2 mt-3">
            <h4>New York - USA</h4>
            <p>
              20 Hicksville Road <br />
              Suite 7 <br />Massapequa<br />
              New York 11758 <br />+1 516-541 3100
            </p>
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
    });
  },
};
</script>


<style lang="scss" scoped>
.boxes-seja-digital {
  * {
    font-size: 1.6rem;
  }
}

.bottom-image-container {
  margin-top: -40px;
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

.image-text-container {
  position: relative;
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
}
</style>
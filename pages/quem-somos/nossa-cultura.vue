<template>
  <div>
    <section class="main-title cut-rl dark-bg">
      <!--cuts-->
      <svg
        class="diagonal-pages"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        id="diagonal-pages"
      >
        <rect width="100" height="100" style="fill: rgb(255, 255, 255)" />
      </svg>

      <div class="container">
        <div class="row">
          <nav aria-label="breadcrumb" class="col-md-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">quem somos</li>
              <li class="breadcrumb-item" aria-current="page">sobre nós</li>
            </ol>
          </nav>
          <div class="col-md-6 mt-4 title">
            <h1>Paixão por transofrmar <br />negócios com tecnologia</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="image-section">
      <div class="container">
        <div class="row mb-md-5 flex-md-row flex-column-reverse">
          <div class="col-md-5 p-0">
            <p class="content-title-brq blue-text">
              Nossa cultura é colaborativa e o que traduz a nossa capacidade e
              essência são as pessoas.
            </p>
          </div>
          <div class="col-md-6 offset-md-1 video-cover">
            <img
              src="~@/static/images/nossa-cultura-header.png"
              class="w-100"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-diagonal-light">
      <div class="container content">
        <div class="row">
          <div class="col-auto text-nowrap step-1">
            <h2>RESILIÊNCIA</h2>
          </div>
          <div class="col-auto text-nowrap step-2">
            <h2>ADAPTABILIDADE</h2>
          </div>
          <div class="col-auto text-nowrap step-3">
            <h2>APRENDIZAGEM RÁPIDA</h2>
          </div>
          <div class="col-auto text-nowrap step-4">
            <h2>MINDSET LEAN</h2>
          </div>
          <div class="col-auto text-nowrap step-5">
            <h2>MULTIDISCIPLINARES</h2>
          </div>
        </div>
      </div>
      <div class="diagonal-azul container"></div>
      <div class="container content">
        <div class="text-center">
          <p class="lean-desc">
            Gestão Lean baeada no respeito, resolução de <br />problemas e
            geração de valor.
          </p>
        </div>
      </div>
    </section>

    <section id="overlay-box">
      <div class="container side-box box-white">
        <p class="text-center anywhere-office">
          Adotamos o modelo de
          <span class="orange-text font-weight-bold">Anywhere Office</span>
          <br />para todos os profissionais, pois entendemos que as pessoas
          devem <br />ser protagonistas de suas jornadas, sempre com o foco em
          autonimia <br />e responsabilidade.
        </p>
        <div class="fera-box text-center">
          <h2>
            cuidamos dos nossos <br />#feras desde a atração! <br /><span
              class="orange-text"
              >Esse é o jeito #ferabrq!</span
            >
          </h2>
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
  mounted() {},
};
</script>

<style lang="scss" scoped>
.step-1,
.step-2,
.step-3,
.step-4,
.step-5 {
  font-size: 3rem;
  height: 1em;
  border-left: 1px solid var(--brq-blue);
}

.fera-box {
  background-color: white;
  color: var(--brq-grey);
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 2rem 5rem;
}

#overlay-box {
  margin-top: -25rem;
}

.box-white {
  background-color: white;
}

.anywhere-office {
  transform: translate(0, 50%);
  font-size: 1.5rem;

  .orange-text {
    font-size: 2rem;
  }
}

.orange-text {
  color: var(--brq-yellow);
  line-height: 1;
}

.side-box {
  width: 90%;
  margin-top: 10rem;
  overflow: hidden;
  position: relative;
  padding-bottom: 18rem;
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
  z-index: 1;
}

.lean-desc {
  font-size: 2rem;
}

.step-1 {
  h2 {
    font-size: 3rem;
  }
  margin-top: 6em;
  margin-left: 0;
}

.step-2 {
  h2 {
    font-size: 3rem;
  }
  margin-top: 4.5em;
}

.step-3 {
  h2 {
    font-size: 3rem;
  }
  margin-top: 3em;
}

.step-4 {
  h2 {
    font-size: 3rem;
  }
  margin-top: 1.5em;
}

.step-5 {
  h2 {
    font-size: 3rem;
  }
}

.bg-diagonal-light {
  .content {
    padding-top: 5rem;
  }
  padding-bottom: 20rem !important;
}

.blue-text {
  color: var(--brq-darkblue);
}

.video-cover {
  margin-top: -35%;
}

.main-title.cut-lr .diagonal-pages {
  height: 28vw;
  transform: rotate(-6deg);
  width: 200%;
  top: 70%;
  left: -10%;
}

.content-title-brq {
  font-size: 1.95rem;
  font-weight: bold;
  transform: translate(0, 25%);
}

.title {
  h2 {
    font-size: 3.5rem;
    color: white;
    line-height: 1.1;
  }
}

h1 {
  font-size: 3.6rem !important;
  line-height: 1;
}

.main-title {
  padding-bottom: 14rem;
}

.diagonal-azul {
  width: 100%;
  position: relative;
}

.diagonal-azul::before {
  content: "";
  display: block;
  width: 100%;
  position: absolute;
  transform: rotate(-1deg);
  border-bottom: 1px solid var(--brq-blue);
  bottom: 100%;
}

@media (max-width: 575.98px) {
  .title {
    h2 {
      font-size: 2.5rem;
    }
  }

  .image-section {
    margin-top: -18rem;
  }
}

@media (max-width: 375px) {
}

@media (max-width: 320px) {
}
</style>
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
        <!-- <polygon fill="white" points="0,100 100,0 100,100" /> -->
        <rect width="100" height="100" style="fill: rgb(255, 255, 255)" />
      </svg>

      <div class="container mt-lg-5">
        <div class="row">
          <!--componentizar-->
          <nav aria-label="breadcrumb" class="col-md-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">Home</li>
              <li class="breadcrumb-item" aria-current="page">Conteúdos</li>
            </ol>
          </nav>
          <div class="col-lg-5 title">
            <h1>Acompanhe as últimas notícias de novidades</h1>
          </div>
        </div>
      </div>
    </section>
    <section id="content-float">
      <div class="container">
        <div class="row laptop-brq">
          <div class="col-lg-5">
            <h2 class="blue-text">blog brq</h2>
            <p>
              Aqui você encontra os principais conteudos sobre transformação
              digital e tencologia autalizados semanalmente além de cases
              e-books e infogréficos.
            </p>
            <a href="" class="blue-text" id="acesse-text"
              >Acesse! <br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160.707"
                height="64.707"
                viewBox="0 0 160.707 64.707"
              >
                <g id="_arrow-1a-dobra" transform="translate(0 0.354)">
                  <path
                    id="Path"
                    d="M0,0,32,32,0,64"
                    transform="translate(128)"
                    fill="none"
                    stroke="#005fa3"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M0,.5H160"
                    transform="translate(0 32)"
                    fill="none"
                    stroke="#005fa3"
                    stroke-miterlimit="10"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div class="col-lg-7 laptop">
            <img src="~@/static/images/laptop-brq.png" id="laptop-img"/>
          </div>
          <div class="col-lg-6 p-0"></div>
        </div>
      </div>
      <section class="bg-diagonal-light" id="ultimas-noticias">
        <div class="container content">
          <div class="row">
            <div class="col-md-6" id="foto">
              <img src="~@/static/images/foto-noticias.png" />
            </div>
            <div class="col-lg-5 offset-lg-1 my-5 text-right ultimas-noticias">
              <h2 class="blue-text pb-5">últimas notícias</h2>
              <p class="pb-5">
                Acompanhe os releases enviados, notícias na imprensa e demais
                informações
              </p>
              <button class="btn btn-primary">
                <div class="row">
                  <div class="col-8 font-desc text-left">
                    Confira as últimas notícias sobre a BRQ
                  </div>
                  <div class="col-4 p-0 align-self-center">
                    <img
                      src="~@/static/images/arrow-dobra.svg"
                      height="100%"
                      class="image-seta"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="py-lg-5 text-center pb-5" id="mensagem">
        <div class="container">
          <div class="row">
            <div class="col-md-10 mx-auto">
              <p>
                Para mais informações, solicitações de entrevistas e conteúdos
                entre em contato com
                <span class="color-transition-text"
                  >leticia@pineapplehub.com.br</span
                ><br />ou
                <span class="color-transition-text">marketing@brq.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.to(".diagonal-pages", {
      scrollTrigger: {
        trigger: ".laptop-brq",
        start: "-=300 +=20%",
        end: "+=150",
        scrub: 0.5,
      },
      rotation: 0,
      y: -50,
    });

    gsap.from(".laptop-brq .laptop", {
      scrollTrigger: {
        trigger: ".laptop-brq",
        start: "-=300 +=20%",
        end: "+=300",
        scrub: 0.5,
      },
      rotation: 0,
      y: 100,
    });

    gsap.from("#foto", {
      scrollTrigger: {
        trigger: "#ultimas-noticias",
        start: "-=300 +=20%",
        end: "+=500",
        scrub: 0.5,
      },
      rotation: 0,
      y: 150,
    });
  },
};
</script>


<style lang="scss" scoped>
#acesse-text {
  font-weight: bold !important
}

.color-transition-text {
  color: var(--brq-yellow);
  transition: color 0.5s;
  cursor: pointer;
  word-break: break-all;
}

.color-transition-text:hover {
  color: var(--brq-darkblue);
}

#mensagem {
  margin-top: 15rem;
  margin-bottom: 3rem;
  color: var(--brq-grey);

  p {
    font-size: 1.8rem;
  }
}

#contato {
  margin-top: 200px;
  font-size: 2rem;
  text-align: center;
}

.font-desc {
  font-size: 1.3rem;
}

#foto {
  position: relative;
  img {
    position: absolute;
    transform: translateY(-5%);
  }
}

#ultimas-noticias {
  padding-bottom: 7rem;
  font-size: 1.3rem;
}

.main-title {
  padding-bottom: 10rem;
}

h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  color: var(--white);
}

.laptop {
  position: relative;
  img {
    position: absolute;
    top: -130%;
    width: 100%;
  }
}

h2 {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: bolder;
}

.blue-text {
  color: var(--brq-darkblue);
}

.white-text {
  color: var(--white);
}

.laptop-brq {
  margin-bottom: 15rem;
  font-size: 1.3rem;
}

@media (max-width: 768px) {
  .main-title {
    padding-bottom: 20rem;
    overflow: unset; //retirar bordas no mobile
  }

  #mensagem {
    margin-top: 0;
    padding-top: 0;
  }

  #ultimas-noticias {
    padding-bottom: 1rem;
  }

  #contato {
    margin-top: 0;
  }

  #foto {
    position: relative;
    width: 100%;

    img {
      position: relative;
      width: 100%;
      transform: translateY(-5%);
    }
  }

  .laptop-brq {
    margin-bottom: 0;
    flex-direction: column-reverse;
  }

  .laptop {
    position: relative;
    margin-top: -60%;

    img {
      position: relative;
      transform: translate(0, -100px);
    }
  }
}
</style>
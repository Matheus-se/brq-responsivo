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

      <div class="container">
        <div class="row">
          <!--componentizar-->
          <nav aria-label="breadcrumb" class="col-md-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page">Conteúdos</li>
              <li class="breadcrumb-item" aria-current="page">
                Blog/Release/Notícias
              </li>
            </ol>
          </nav>
          <div class="col-md-5 title">
            <h1>Acompanhe as últimas notícias de novidades</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row laptop-brq">
        <div class="col-lg-5">
          <h2 class="blue-text">blog brq</h2>
          <p>
            Aqui você encontra os principais conteudos sobre transformação
            digital e tencologia autalizados semanalmente além de cases e-books
            e infogréficos.
          </p>
          <h4 class="blue-text">Acesse!</h4>
        </div>
        <div class="col-lg-7 laptop">
          <img src="~@/static/images/laptop-brq.png" />
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
                <div class="col-4">
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

    <section class="py-5 text-center" id="mensagem">
      <div class="container">
        <div class="row">
          <div class="col-md-10 mx-auto">
            <p>
              Para mais informações, solicitações de entrevistas e conteúdos entre
              em contato com <span>Leticia@pineapplehub.com.br</span> ou
              <span>marketing@brq.com</span>
            </p>
          </div>
        </div>
      </div>
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
      y: -100,
    });

    gsap.from(".laptop-brq .laptop", {
      scrollTrigger: {
        trigger: ".laptop-brq",
        start: "-=300 +=20%",
        end: "+=300",
        scrub: 0.5,
      },
      rotation: 0,
      y: -50,
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
#mensagem {
  margin-top: 15rem;

  p {
    font-size: 1.8rem;
    color: var(--brq-grey);
  }
  span {
    color: var(--brq-yellow);
  }

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

@media (max-width: 575px) {

  #foto {
    img {
      position: relative;
      max-width: 100%;
    }
  }

  .laptop-brq {
    flex-direction: column-reverse;
  }

  .laptop {
    position: relative;
    img {
      position: relative;
    }
  }
}
</style>
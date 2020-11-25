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
              <li class="breadcrumb-item" aria-current="page">
                Fale com a gente
              </li>
            </ol>
          </nav>
          <div class="col-md-12 title">
            <h1>Vamos conversar</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="content py-5 py-md-3">
      <div class="container">
        <div class="row">
          <div class="col-md-9 main-box pr-md-5">
            <p>
              Olá, meu nome é:
              <b-form-input v-model="payload.name" placeholder="">
              </b-form-input
              >.
            </p>
            <p>
              Gostaria de falar sobre
              <b-form-select v-model="dept" :options="options" id="dept">
              </b-form-select>
              com vocês.
            </p>

            <div class="services" v-if="dept">
              <p v-if="dept === 'rh'">
                Para conhecer nossas vagas, <a href="#">clique aqui.</a> Agora
                se precisar de outras informações, continua a preencher o
                formulário. :)
              </p>

              <p>
                Meu e-mail é
                <b-form-input v-model="payload.email" placeholder="">
                </b-form-input>
                e
              </p>
              <p>
                meu telefone é
                <b-form-input v-model="payload.phone" placeholder="">
                </b-form-input
                >.
              </p>
              <p>Informações adicionais:</p>
              <b-form-textarea
                id="textarea"
                v-model="payload.extra"
                placeholder="Digite alguma mensagem"
                rows="3"
              ></b-form-textarea>
            </div>

            <div class="text-center text-md-left">
              <b-button
                class="btn btn-primary btn-lg mt-md-5 mt-3 mb-5"
                type="submit"
                :disabled="!dept"
                >Enviar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="65.207"
                  height="32.707"
                  viewBox="0 0 65.207 32.707"
                  class="ml-3"
                >
                  <g id="Group" transform="translate(-0.5 0.354)">
                    <path
                      id="Path"
                      d="M0,0,16,16,0,32"
                      transform="translate(49)"
                      fill="none"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M.5.5h64"
                      transform="translate(0 15)"
                      fill="none"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                  </g></svg
              ></b-button>
            </div>
          </div>
          <!--end of form content-->
          <div class="col-md-3 side-box mt-5 mx-4 mx-md-0 mt-md-0">
            <div class="content">
              <h2>Conheça também nossos canais digitais</h2>
              <ul class="list-unstyled">
                <li class="py-3">
                  <a
                    class=""
                    href="https://www.facebook.com/brqdigital/"
                    target="_blank"
                  >
                    <img src="~@/static/images/facebook.svg" alt="" />
                    Facebook
                  </a>
                </li>
                <li class="py-3">
                  <a
                    class=""
                    href="https://twitter.com/brqdigital"
                    target="_blank"
                    ><img src="~@/static/images/twitter.svg" alt="" />
                    Twitter</a
                  >
                </li>
                <li class="py-3">
                  <a
                    class=""
                    href="https://www.youtube.com/user/brqitservices"
                    target="_blank"
                    ><img src="~@/static/images/youtube.svg" alt="" />
                    Youtube</a
                  >
                </li>
                <li class="py-3">
                  <a
                    class=""
                    href="https://www.linkedin.com/company/brq/?originalSubdomain=br"
                    target="_blank"
                    ><img src="~@/static/images/linkedin.svg" alt="" />
                    linkedin</a
                  >
                </li>
                <li class="py-3">
                  <a
                    class=""
                    href="https://www.instagram.com/brqdigital/"
                    target="_blank"
                    ><img src="~@/static/images/instagram.svg" alt="" />
                    Instagram</a
                  >
                </li>
              </ul>
            </div>
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
  data: () => ({
    dept: "",
    payload: {
      name: "",
      email: "",
      phone: "",
      extra: "",
    },
    options: [
      {
        value: null,
        text: "",
      },
      {
        value: "services",
        text: "Serviços e Soluções",
      },
      {
        value: "rh",
        text: "Recursos Humanos",
      },
      {
        value: "press",
        text: "Imprensa",
      },
      {
        value: "ri",
        text: "Relação com Investidores",
      },
      {
        value: "innovation",
        text: "Innovation Hub",
      },
      {
        value: "suppliers",
        text: "Fornecedores",
      },
    ],
  }),
  mounted() {
    gsap.to(".diagonal-pages", {
      scrollTrigger: {
        trigger: ".content",
        start: "-=200 +=20%",
        end: "+=150",
        scrub: 0.5,
      },
      rotation: 0,
    });
  },
};
</script>


<style lang="scss" scoped>
.side-box {
  overflow: hidden;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  height: 450px;

  a {
    text-decoration: none;
    color: var(--dark);
  }
  img {
    margin-right: 10px;
  }
}

.side-box:before {
  content: "";
  border: 2px solid var(--brq-light-grey);
  background: transparent;
  position: absolute;
  width: 100%;
  height: 150%;
  transform: skewY(-10deg);
  top: -58%;
  left: 0;
  z-index: -1;
}

.main-box {
  font-size: 1.5rem;
  input,
  select,
  textarea {
    border-width: 0 0 1px 0;
    outline: 0;
    padding: 0.5rem 1rem;
    margin: 0 10px;
    border-color: var(--dark);
  }
  a {
    color: var(--brq-yellow);
  }
  .form-control {
    display: inline-block;
    font-size: 1.5rem;
  }
  .custom-select {
    width: auto;
    font-size: 1.5rem;
  }
  select {
    color: var(--brq-yellow);
  }
  textarea {
    width: 85%;
    padding-left: 0;
  }
  input {
    width: 500px;
  }
  p {
    padding: 0.6rem 0;
  }
}

#where {
  padding-bottom: 7rem;
}

@media (max-width: 575.98px) {
  .bg-diagonal-light {
    margin-top: 0 !important;
  }
  .side-box {
    h2 {
      font-size: 2.5rem;
    }
    a {
      font-size: 1.2rem;
    }
  }
  .main-box {
    .form-control {
      width: 90%;
      margin: 0;
    }
    .custom-select {
      width: 90%;
      margin-bottom: 10px;
    }
    input,
    select,
    textarea {
      margin: 0;
      width: 100%;
    }
  }
}
</style>
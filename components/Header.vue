<template>
  <div>
    <!-- <div id="background-menubrq"></div> -->
    <b-navbar toggleable="lg" type="" fixed="top" variant="" id="app">
      <b-navbar-brand>
        <NuxtLink to="/">
        <img id="logo-nav" src="~@/static/images/logo-brq.png" class="logo" alt=""/>
        </NuxtLink>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" id="button-menu-nav">
        <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-list"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg
        >
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-lg-auto center-align-md">
          <b-nav-item-dropdown text="PT" right no-caret class="navDropdownItem">
            <template #button-content>
              <span>Quem somos</span>
            </template>
            <b-dropdown-item>Sobre nós</b-dropdown-item>
            <b-dropdown-item>Nossa cultura</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/como-transformamos"><span>Como Transformamos</span></b-nav-item>
          <b-nav-item to="/conteudos/blog"><span>Conteúdos</span></b-nav-item>
          <b-nav-item><span>RI</span></b-nav-item>
          <b-nav-item><span>Venha ser Fera</span></b-nav-item>
          <b-nav-item to="/fale-conosco"><span>Fale com a gente</span></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-0 nav-item-brq">
          <b-nav-item-dropdown class="language-choose navDropdownItem" text="PT" right>
            <template #button-content>
              <span>PT</span>
              <img src="~@/static/images/brasil.svg" alt="">
            </template>
            <b-dropdown-item href="#">EN <img src="~@/static/images/eua.svg" alt=""></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right no-caret class="navDropdownItem">
            <template #button-content>
              <img src="~@/static/images/_icon_font-size.svg" alt="">
            </template>
            <b-dropdown-item href="#">Pequeno</b-dropdown-item>
            <b-dropdown-item href="#">Grande</b-dropdown-item>
            <b-dropdown-item href="#">Gigante</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right no-caret class="navDropdownItem">
            <template #button-content>
              <img src="~@/static/images/_icon_contrast.svg" alt="">
            </template>
            <b-dropdown-item href="#">
              Contraste normal
              <b-form-checkbox checked="true"></b-form-checkbox>
            </b-dropdown-item>

            <b-dropdown-item href="#">
              Alto contraste
              <b-form-checkbox></b-form-checkbox>

            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>

    </b-navbar>

  </div>
</template>
<script>
</script>

<style lang="scss">

.language-choose{
  img {
    width: 17px;
    margin-left: 0.3rem;
  }
}

button:focus {
  border:none;
  outline: none;
  box-shadow: none;
}

body {
  position: relative;
}

body, html {
  overflow-x: hidden;
  max-width: 100vw;
}

.custom-control-input:checked ~ .custom-control-label::before, .custom-control-label::before {
  border-color: transparent;
  border-radius: 0 !important;
  background-color: #565656;
}

.logo {
  height: 10vh;
}

.navbar-nav .nav-link {
  padding: 10px 20px !important;
}

.navbar .nav-item {
  > a {
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    font-family: "Bebas Neue";
    font-weight: normal !important;
    transition: color .3s linear;
  }
}

.dropdown-menu a {
  font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: "Bebas Neue";
    font-weight: normal !important;
    transition: color .3s linear;
}

.navbar .nav-item {
  transition: all .3s linear;

  > a:hover, .nuxt-link-active {
    color: var(--brq-yellow);
  }
}

.dropdown-menu {
  background: #181718;
  border-radius: 0;
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear, transform .2s linear;
  transform: scale(0);
}

.dropdown-item {
  color: white;
  display: flex;
  align-items: center;

  .custom-checkbox {
    margin-left: 8px;
  }
}

.dropdown-item:hover {
  color: var(--brq-yellow);
  background: #181718;
}

.dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
  margin-top: 0;
  z-index: 1;
}

@media (min-width: 768px) {
  .dropdown:hover .dropdown-menu {
    position: absolute;
    top: 0;
    padding-top: 50px;
  }

  .dropdown:hover {
    a {
      z-index: 13 !important;
    }
  }

  .navbar-nav:first-child .dropdown-menu {
    left: 0;
  }

  #last-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .dropdown-item {
    padding-top: 0;
  }

  .nav-item .nav-link {
    position: relative;
    z-index: 1;
  }
}

@media (max-width: 768px) {

  .navbar .nav-item {

    > a:hover, .nuxt-link-active {
      color: white;
      background-color: var(--brq-yellow);
    }
  }

  .logo {
    height: 7vh;
  }
  .navbar-collapse {

    .nav-item a {
      font-size: 1.4rem;
    }
  }

  .dropdown-menu {
    display: none;
    background: #eaeaea;
  }

  .dropdown-item {
    color: black;
  }
  
  .navbar {
    .navbar-collapse.collapsing.show {
      top: -100%;
      transition: none;
    }
    
    .navbar-collapse.show  {
      justify-content: flex-end;
      position: fixed;
      width: 101vw;
      height: 100vh;
      top: 0;
      left: 0;
      padding-bottom: 100px;
      transition: top .3s;
      background-color: #232228;
      overflow: auto;
      border-top: 10vh solid #232228;
      opacity: .98;
    }
  }

  .navbar-brand, .navbar-toggler {
    z-index: 1000;
  }

  .nav-item-brq {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
    margin-bottom: 20px;
    justify-content: center;
    width: 100%;
  }

  #nav-collapse {
    display: flex;
    flex-direction: column-reverse;
  }

  .center-align-md {
    text-align: center;
    width: 100vw;

    li {
      width: 100vw;
    }
  }
}
</style>

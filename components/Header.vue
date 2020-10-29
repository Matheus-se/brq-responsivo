<template>
  <div>
    <b-navbar toggleable="lg" type="" fixed="top" variant="">
      <b-navbar-brand href="#">
        <img id="logo-nav" src="/images/logo-brq.png" class="logo" alt=""/>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"
      >
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
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Quem Somos</b-nav-item>
          <b-nav-item href="#">Como Transformamos</b-nav-item>
          <b-nav-item href="#">Conteúdos</b-nav-item>
          <b-nav-item href="#">RI</b-nav-item>
          <b-nav-item href="#">Venha ser Fera</b-nav-item>
          <b-nav-item href="#">Fale com a gente</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-0">
          <b-nav-item-dropdown class="language-choose" text="PT" right>
            <template #button-content>
              <span>PT</span>
              <img src="/images/brasil.svg" alt="">
            </template>
            <b-dropdown-item href="#">EN <img src="/images/brasil.svg" alt=""></b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-0">
          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <img src="/images/_icon_font-size.svg" alt="">
            </template>
            <b-dropdown-item href="#">Pequeno</b-dropdown-item>
            <b-dropdown-item href="#">Grande</b-dropdown-item>
            <b-dropdown-item href="#">Gigante</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-0">
          <b-nav-item-dropdown right no-caret>
            <template #button-content>
              <img src="/images/_icon_contrast.svg" alt="">
            </template>
            <b-dropdown-item href="#">Contrate normal</b-dropdown-item>
            <b-dropdown-item href="#">Alto contraste</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>


</script>

<style lang="scss">
.logo {
  height: 10vh;
}

.navbar-nav .nav-link {
  padding-left: 20px !important;
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

.navbar .nav-item {
  > a:hover {
    color: var(--brq-yellow);
  }
}

.dropdown-menu {
  background: #181718;
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear, transform .2s linear;
  transform: scale(0);
}

.dropdown-item {
  color: white;
}

.dropdown-item:focus {
  background: grey;
}

.dropdown-item:hover {
  color: black;
}

.dropdown:hover .dropdown-menu {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
  margin-top: 0;
}

@media (max-width: 575.98px) {
  .navbar-collapse {
    background: #fff;

    .nav-item a {
      color: var(--brq-dark);
      font-size: 1.4rem;
    }
  }
}
</style>

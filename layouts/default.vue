<template>
  <div>
    <b-navbar toggleable="lg" type="" variant="">
      <b-navbar-brand href="#">
        <img src="/images/logo-brq.png" class="logo" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <Nuxt />
    
  </div>
</template>

<style lang="scss">

.logo {
  height: 85px;
}

.navbar-nav .nav-link {
  padding-left: 25px !important;
}

</style>

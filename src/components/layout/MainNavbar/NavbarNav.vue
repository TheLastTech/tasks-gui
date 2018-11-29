<template>
  <d-navbar-nav class="border-left flex-row">
    <li class="nav-item border-right dropdown notifications">


    </li>
    <d-img id="main-logo" class="d-lg-none d-md-none"  fluid fluid-grow thumbnail  :src="require('@/assets/images/logo.png')" alt="XMN Tasks" />
    <li class="nav-item dropdown d-none d-sm-none d-md-block d-lg-block">

    </li>
  </d-navbar-nav>
</template>

<style>
  .nav-link:hover {
    cursor: pointer;
  }
</style>

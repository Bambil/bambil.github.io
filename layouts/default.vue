<template>
  <div>
    <b-navbar toggleable variant="info" inverse class="mb-3">

      <b-link class="navbar-brand" to="#">
        Bambil
      </b-link>

      <b-nav is-nav-bar>
        <b-nav-item>Projects</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item right>Settings</b-nav-item>
        <b-nav-item right>About</b-nav-item>

      </b-nav>
    </b-navbar>
    <nuxt/>
  </div>
</template>

<style>
</style>

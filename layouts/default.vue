<template>
  <v-app dark toolbar footer>
    <v-navigation-drawer
      persistent
      v-model="drawer">
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer">
      </v-toolbar-side-icon>
    </v-toolbar>
    <main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </main>
    <v-footer fixed>
      <span>&copy; Bambil 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    }
  }
}
</script>

<template>
  <v-app dark toolbar footer>
    <v-navigation-drawer
      persistent
      v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>class</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Courses</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Bambil</v-toolbar-title>

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
      drawer: false
    }
  }
}
</script>

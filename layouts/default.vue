<template>
  <v-app dark toolbar footer>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer">
      <v-list>
        <v-list-tile v-for='navItem in navItems'
          :key='navItem.id'
          :to="navItem.link">
          <v-list-tile-action>
            <v-icon>{{ navItem.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ navItem.title }}</v-list-tile-title>
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
    <v-footer>
      <span>&copy; Bambil 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      clipped: true,
      navItems: [
        {
          id: 1,
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        {
          id: 2,
          title: 'Academy',
          icon: 'account_balance',
          link: '/academy'
        },
        {
          id: 3,
          title: 'Blog',
          icon: 'format_bold',
          link: 'https://blog.bambil.ml/'
        }
      ]
    }
  }
}
</script>

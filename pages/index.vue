<template>

  <div>
    <v-card>
      <v-card-media
        height="500px"
        src="logo.png"
        contain
        class="grey lighten-2"
      >
      </v-card-media>
      <v-card-title>
        <div>
          <h5 class="white--text">IoT Solutions for Orginizations and Industry</h5>
          <blockquote>
            We are proud to announce that we have expertise in this field
            for about 3 years.
          </blockquote>

        </div>
      </v-card-title>
    </v-card>
    <h2 class="grey--text">Members</h2>
    <v-layout row warp>
      <v-flex xs12 sm3
        v-for='member in members'
        :key='member.id'
        >
        <v-card>
          <v-card-media
            height="300px"
            :src="member.image"
            >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ member.name }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">Email: &lt;{{ member.email }}&gt;</span><br>
              <span>{{ member.role }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat class="orange--text" :href="member.github">Github</v-btn>
            <v-btn flat class="orange--text" :href="member.twitter">Twitter</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: [
        {
          id: 1,
          name: 'Iman Tabrizian',
          email: 'tabrizian@outlook.com',
          github: '@Tabrizian',
          twitter: '_iman96_',
          image: 'https://github.com/Tabrizian.png',
          role: 'Founder'
        },
        {
          id: 2,
          name: 'Parham Alvani',
          email: 'parham.alvani@gmail.com',
          github: '@1995parham',
          twitter: '@1995parham',
          image: 'https://github.com/1995parham.png',
          role: 'Co-Founder and CTO'
        }
      ],
    }
  }
}
</script>

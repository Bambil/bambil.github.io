<template>
  <v-layout row warp>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="mb-2">
        <v-card-media
          class="white--text"
          height="200px"
          src="/img/python.png"
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Python 201</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Parham Alvani &lt;parham.alvani@gmail.com&gt;</span><br>
            <span>Introduction to Advanced Python</span><br>
            <span>SSC Advanced Python Summer Course - Summer 2017</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text" href="https://github.com/bambil/Python201">Github</v-btn>
          <v-btn flat class="orange--text" href="https://python.bambil.ml/">Slides</v-btn>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/img/iot.png"
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">IoT 101</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">Parham Alvani &lt;parham.alvani@gmail.com&gt;</span><br>
            <span>Introduction to IoT Platforms</span><br>
            <span>SSC Advanced Python Summer Course - Summer 2017</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text" href="">Github</v-btn>
          <v-btn flat class="orange--text" href="https://iot.bambil.ml/">Slides</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

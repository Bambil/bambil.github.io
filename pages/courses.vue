<template>
  <v-layout row warp>
    <v-flex xs6 sm3
      v-for='course in courses'
      :key='course.id'
      :image='course.image'
      :headline='course.headline'
      :title='course.title'
      :at='course.at'
      :instructor='course.instructor'
      :email='course.email'
      :sourceCode='course.sourceCode'>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          :src="course.image"
          >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ course.headline }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{ course.instructor }} &lt;{{ course.email }}&gt;</span><br>
            <span>{{ course.title }}</span><br>
            <span>{{ course.at }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text" :href="course.sourceCode">Github</v-btn>
          <v-btn flat class="orange--text" :href="course.slides">Slides</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      courses: [
        {
          id: 1,
          headline: 'Python 101',
          instructor: 'Parham Alvani',
          email: 'parham.alvani@gmail.com',
          title: 'Introduction to Advanced Python',
          at: 'SSC Advanced Python Summer Course - Summer 2017',
          slides: 'https://python.bambil.ml/',
          sourceCode: 'https://github.com/bambil/Python201',
          image: '/img/python.png'
        },
        {
          id: 2,
          headline: 'IoT 101',
          instructor: 'Parham Alvani',
          email: 'parham.alvani@gmail.com',
          title: 'Introduction to IoT Platforms',
          at: 'SSC Summer IoT Course - Summer 2017',
          slides: 'https://iot.bambil.ml/',
          sourceCode: 'https://github.com/bambil/IoT101',
          image: '/img/iot.png'
        },
        {
          id: 3,
          headline: 'Node 101',
          instructor: 'Iman Tabrizian',
          email: 'tabrizian@outlook.com',
          title: 'Node.JS + Hapi',
          at: 'SSC Summer NodeJS Course - Summer 2017',
          slides: 'https://docs.google.com/presentation/d/15kh8KrlYm9YO5ySmY29qwrRBh0Kze7MM3aD1T5v5CMM/edit?usp=sharing',
          sourceCode: 'https://github.com/AUT-CEIT/node-course',
          image: '/img/node.png'
        }
      ]
    }
  }
}
</script>

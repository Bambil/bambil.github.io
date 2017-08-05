<template>
  <v-layout row warp>
    <v-flex xs6 sm3
      v-for='course in courses'
      :key='course.id'
      >
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
            <span class="grey--text">{{ instructors[course.instructor].name }} &lt;{{ instructors[course.instructor].email }}&gt;</span><br>
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
      instructors: [
        {
          name: 'Parham Alvani',
          email: 'parham.alvani@gmail.com'
        }, {
          name: 'Iman Tabrizian',
          email: 'tabrizian@outlook.com'
        }
      ],
      courses: [
        {
          id: 1,
          instructor: 0,
          headline: 'Python 101',
          title: 'Introduction to Advanced Python',
          at: 'SSC Advanced Python Summer Course - Summer 2017',
          slides: 'https://python.bambil.ml/',
          sourceCode: 'https://github.com/bambil/Python201',
          image: '/img/python.png'
        },
        {
          id: 2,
          instructor: 0,
          headline: 'IoT 101',
          title: 'Introduction to IoT Platforms',
          at: 'SSC Summer IoT Course - Summer 2017',
          slides: 'https://iot.bambil.ml/',
          sourceCode: 'https://github.com/bambil/IoT101',
          image: '/img/iot.png'
        },
        {
          id: 3,
          instructor: 1,
          headline: 'Node 101',
          title: 'Node.JS + Hapi',
          at: 'SSC Summer NodeJS Course - Summer 2017',
          slides: 'https://docs.google.com/presentation/d/15kh8KrlYm9YO5ySmY29qwrRBh0Kze7MM3aD1T5v5CMM/edit?usp=sharing',
          sourceCode: 'https://github.com/AUT-CEIT/node-course',
          image: '/img/node.png'
        },
        {
          id: 4,
          instructor: 1,
          headline: 'Virtualiztion 101',
          title: 'Virtualiztion Workshop',
          at: '8th LinuxFest Virtuliztion Workshop - Spring 2017',
          slides: 'https://docs.google.com/presentation/d/1cbwBxhXSKFfL_9xNE9Aa2Qr_ILjmx1LSVeO04HnBBmc/edit?usp=sharing',
          sourceCode: 'https://github.com/LinuxFest/Docker101',
          image: '/img/docker.png'
        }
      ]
    }
  }
}
</script>

<template>
  <main class="main">
    <TheForm />
    <h1 :class="{'title': false}">{{ titleMsg }}</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id"> ➡️ {{ movie.title }}</li>
    </ul>
  </main>
</template>

<script>
import movieService from "@/services/movieService";
import TheForm from "./TheForm.vue";

export default {
  name: "TheMain",
  props: {
    titleMsg: String,
  },
  components: {
    TheForm,
  },

  data() {
    return {
      classVar: "title",
      movies: [],
    };
  },

  async mounted() {
    try {
      this.movies = await movieService.getMovies();
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

h3 {
  margin: 40px 0 0;
}

.title {
  width: 100%;
  padding: 10px 5px;
  background-color: rgb(24, 1, 54);
  color: #FFF;
}

ul {
  text-align: start;
  list-style-type: none;
  padding: 0;
}

ul li {
  padding: 5px;
}
</style>

<template>
  <div id="main">
    <TheHeader />
    <TheMain title-msg="API Filmes" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheMain from "./components/TheMain.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    TheMain,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

div#main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

</style>

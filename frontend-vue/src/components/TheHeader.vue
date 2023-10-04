<template>
  <nav>
    <ul>
      <li class="link-menu">Home</li>
      <li class="link-menu">Contato</li>
      <li class="link-menu">Sobre</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
nav {
  padding: 10px 0;
  background-color: rgb(238, 237, 237);
  width: 100%;
}
li.link-menu {
  list-style-type: none;
  display: inline-block;
  padding: 0 10px;
  font-weight: 600;
}
</style>
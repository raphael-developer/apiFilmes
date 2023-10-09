<template>
  <!-- Crie um componente de formulário com nome TheForm que contenha dois inputs nome e sobrenome -->
  <div>
    <input v-model="name" type="text" :placeholder="name" />
    <input v-model="lastName" type="text" :placeholder="lastName" />
    <div id="result">
      <h2>{{ name }} {{ lastName }}</h2>
    </div>

    <select name="sports" id="sports" v-model="sports">
      
    </select>
  </div>
</template>

<script>
export default {
  name: "TheForm",

  data() {
    return {
      name: "John",
      lastName: "Doe",
      sports: {
        football: "soccer",
        basket: "basketball",
      }
    };
  },
};
</script>

<style>
</style>
<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/subscription">Abonnement</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  background-color: #ccc;
  padding: 10px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: black;
}
</style>

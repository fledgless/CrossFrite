<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/" id="logo">CrossFrite</router-link>
      </div>
      <div>
        <router-link to="/subscription">Abonnements</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
/* import GoogleFonts en vue js */

/* Major Mono Display */
@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
/* Lexend Exa */
@import url('https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap');

body {
  margin: 0;
}
nav {
  background-color: #833F3F;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
}
nav div {
  margin: 50px;
}
nav #logo {
  font-family: 'Major Mono Display';
  font-size: 56px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #FFE9E9;
  font-family: 'Lexend Exa';
  margin: 35px;
  font-size: 32px;
}
</style>

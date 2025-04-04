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

/* Major Mono Display (logo) */
/* Lexend Exa (nav) */
/* Lexend Mega (h1) */
/* Diphylleia (sous-titre) */
/* Lateef */
@import url('https://fonts.googleapis.com/css2?family=Diphylleia&family=Lateef:wght@200;300;400;500;600;700;800&family=Lexend+Exa:wght@100..900&family=Lexend+Mega:wght@100..900&family=Major+Mono+Display&display=swap');
body {
  margin: 0;
  font-family: "Diphylleia";
  color: #FFE9E9;
}
h1 {
  font-family: "Lexend Mega";
  font-size: 56px;
  color: #FFE9E9;
  font-weight: normal;
  margin: 25px;
}
h2 {
  font-family: "Lexend Mega";
  font-size: 48px;
  color: #FFE9E9;
  font-weight: normal;
  margin-top: 60px;
  text-align: center;
}
nav {
  background-color: #833F3F;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
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
.background {
  height: 650px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin-bottom: 0;
}
.background img {
  width: 100%;
}
.filter {
  position: absolute;
  background-color: #0000005b;
  height: 100%;
  width: 100%;
  z-index: 1;
}
</style>

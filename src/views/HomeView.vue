<template>
  <div id="homepage">
    <div class="welcome">
      <div class="filter"></div>
      <img src="..\assets\human-leg-barbell-exercise-equipment-physical-fitness-calf-leg-1549729-pxhere.com.jpg" alt="">
      <div class="welcome-message">
        <h1>Bienvenue</h1>
        <p id="subtitle">Viens croustiller d’effort et frire tes limites !</p>
      </div>
    </div>
    <div class="coachs">
      <h2>Nos coachs</h2>
    </div>
  </div>
</template>
  
<!-- export avec la balise script n'est plus nécessaire avec Vue3 et est fait directement dans le router -->

<style scoped>
.welcome {
  display: flex;
  justify-content: center;
  height: 750px;
  overflow: hidden;
}
img {
  max-width: 100%;
  position: absolute;
}
.filter {
  position: relative;
  color: #0000005b;
  height: 100%;
  width: 100%;
}
.welcome-message {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
#subtitle {
  font-size: 40px;
  color: white;
  margin-top: 5px;
}
.coachs {
  height: 750px;
  position: relative;
  background: rgb(147,79,79);
  background: linear-gradient(180deg, rgba(147,79,79,1) 0%, rgba(45,24,24,1) 100%);
}
</style>
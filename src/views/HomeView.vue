<template>
  <div id="homepage">
    <div class="welcome">
      <div class="background">
        <div class="filter"></div>
        <img src="..\assets\human-leg-barbell-exercise-equipment-physical-fitness-calf-leg-1549729-pxhere.com.jpg" alt="">
      </div>
      <div class="welcome-message">
        <h1 id="title">Bienvenue</h1>
        <p id="subtitle">Viens croustiller d’effort et frire tes limites !</p>
      </div>
    </div>
    <div class="coachs">
      <h2>Nos coachs</h2>
      <div class="content">
        <div class="coach">
          <img src="" alt="" class="photo">
        </div>
        <div class="coach"></div>
      </div>
    </div>
  </div>
</template>
  
<!-- export avec la balise script n'est plus nécessaire avec Vue3 et est fait directement dans le router -->

<style scoped>
.welcome {
  display: flex;
  justify-content: center;
  height: 650px;
  overflow: hidden;
}
.welcome-message {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}
#title {
  font-family: "Lexend Mega";
  font-size: 96px;
  color: #FFFFFF;
  margin-bottom: 0;
  font-weight: normal;
}
#subtitle {
  font-size: 40px;
  color: white;
  margin-top: 5px;
}
.coachs {
  height: 500px;
  width: 100%;
  position: absolute;
  background: rgb(147,79,79);
  background: linear-gradient(180deg, rgba(147,79,79,1) 0%, rgba(45,24,24,1) 100%);
}

</style>
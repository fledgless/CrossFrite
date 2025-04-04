<template>
  <div id="subscription">
    <img src="..\assets\human-leg-barbell-exercise-equipment-physical-fitness-calf-leg-1549729-pxhere.com.jpg" alt="">
    <div class="content">
      <h1>Nos abonnements</h1>
      <div class="subscriptions">
        <div class="subscription" id="monthly">
          <p class="type">Mensuel</p>
          <p class="price"><b>14€</b>99</p>
          <div class="conditions">
            <p @click="showConditions = true">Voir plus</p>
          </div>
        </div>
        <div class="subscription" id="trimestriel">
          <p class="type">Trimestriel</p>
          <p class="price"><b>54€</b>99</p>
          <div class="conditions">
            <p @click="showConditions = true">Voir plus</p>
          </div>
        </div>
        <div class="subscription" id="yearly">
          <p class="type">Annuel</p>
          <p class="price"><b>159€</b>99</p>
          <div class="conditions">
            <p @click="showConditions = true">Voir plus</p>
          </div>
        </div>
      </div>
      <div id="conditions" :class="{ 'open': showConditions }">
        <div>
          <h2>Conditions générales</h2>
          <div @click="showConditions = false">close</div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut turpis consequat, pharetra ex a, posuere massa. Curabitur dignissim neque sem, non vestibulum purus feugiat at. Donec quis magna congue metus interdum laoreet. Mauris vehicula risus euismod risus porta fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vehicula lacus at odio venenatis cursus.</p>
        <p>Integer sed orci sit amet diam viverra blandit. Maecenas pretium pellentesque ipsum nec consectetur. Vivamus eget risus id felis consequat eleifend. Quisque tempor elit sed tempus suscipit. Praesent hendrerit porttitor tellus et bibendum. Nam id nunc ac erat scelerisque sagittis. Duis ornare eget magna vehicula dignissim.</p>
        <p>Nullam ultrices consequat sapien nec vehicula. In semper aliquet elit sed luctus. Vestibulum volutpat mollis sollicitudin. Vivamus at ligula nisl. Mauris tincidunt ullamcorper odio, sed molestie lacus cursus vel. Duis a consectetur ligula, ut pretium nibh. Pellentesque vulputate et metus id sagittis.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showConditions = ref(false);
</script>
  
<!-- export avec la balise script n'est plus nécessaire avec Vue3 et est fait directement dans le router -->

<style scoped>
img {
  width: 100%;
  position: absolute;
}
.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.subscriptions {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
}
.subscriptions .subscription {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 80%;
  align-items: center;
  border: 1px solid #FFE9E9;
  justify-content: space-evenly;
  background: rgb(147,79,79);
  background: linear-gradient(180deg, rgba(147,79,79,1) 0%, rgba(45,24,24,1) 100%);
}
.type {
  font-size: 40px;
  margin: 30px 0px 0px 0px;
}
.price {
  font-family: "Lexend Mega";
  font-size: 36px;
}
.price b {
  font-weight: normal;
  font-size: 64px;
}
.conditions {
  border: 1px solid black;
  background-color: #D9D9D9;
  color: black;
  font-family: "Lateef";
  padding: 15px 40px;
  margin-bottom: 30px;
  cursor: pointer;
}
.conditions p {
  margin: 0;
}
#conditions {
  display: none;
}
#conditions.open {
  position: absolute;
  width: 900px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background: rgb(147,79,79);
  background: linear-gradient(180deg, rgba(147,79,79,1) 0%, rgba(45,24,24,1) 100%);
  text-align: justify;
  padding: 30px;
  border: 1px solid #D9D9D9;
}
#conditions.open h2 {
  color: #FFE9E9;
  font-size: 40px;
  font-family: "Lexend Mega";
  font-weight: normal;
  margin-top: 5px;
}
#conditions.open p {
  color: #FFE9E9;
  font-size: 16px;
  font-family: "Lexend Mega";
  font-weight: light;
}
</style>
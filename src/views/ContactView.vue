<template>
    <div id="contact">
        <div class="background">
            <div class="filter"></div>
            <img src="..\assets\girl-woman-dark-female-concert-training-1175878-pxhere.com (1).jpg" alt="">
        </div>
        <div class="content">
            <h1>Contact</h1>
            <div class="container">
                <form>
                    <div>
                        <input type="text" id="name" placeholder="Nom" />
                        <input type="text" id="first-name" placeholder="Prénom" />
                    </div>
                    <input type="email" placeholder="Numéro de téléphone" />
                    <input type="email" placeholder="Adresse mail" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Envoyer</button>
                </form>
                <div class="contact-info">
                    <div class="phone">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#a13f3f" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        </div>
                        <p>06.12.34.56.78</p>
                    </div>
                    <div class="adress">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#a13f3f" d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>
                        </div>
                        <p>
                            123 Rue de la Salle
                            <br>
                            59123 Sportville
                        </p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20221.462063890576!2d3.145282750433393!3d50.68871340445741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32891f6ff8a69%3A0x40af13e816459b0!2s59100%20Roubaix!5e0!3m2!1sfr!2sfr!4v1743088351551!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- export avec la balise script n'est plus nécessaire avec Vue3 et est fait directement dans le router -->

<style scoped>
.background {
    height: 650px;
    overflow: hidden;
    position: absolute;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
}
img {
  width: 100%;
}
.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
  z-index: 2;
}
.container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}
form, .contact-info {
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
}
input, textarea {
    height: 30px;
    width: 300px;
    padding: 10px 20px;
    margin: 5px;
    font-family: "Diphylleia";
    background: none;
    border: 1px solid #FFE9E9;
    color: #FFE9E9;
}
#name, #first-name {
    width: 200px;
}
textarea {
    height: 200px;
    width: 400px;
}
button {
    height: 60px;
    width: 200px;
    background-color: #1E1E1E;
    border-radius: 1px solid black;
    font-family: "Lateef";
    font-size: 24px;
    color: #D9D9D9;
    cursor: pointer;
    margin-top: 2px;
}
iframe {
    width: 400px;
    height: 300px;
}
.adress, .phone {
    display: flex;
    flex-direction: row;
}
.adress p, .phone p {
    margin: 0;
    width: 300px;
    font-size: 20px;
}
.icon {
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    margin: 0px 50px;
}
svg {
    height: 30px;
}
</style>
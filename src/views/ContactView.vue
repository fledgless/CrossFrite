<template>
    <div id="contact">
        <img src="..\assets\girl-woman-dark-female-concert-training-1175878-pxhere.com (1).jpg" alt="">
        <div class="content">
            <h1>Contact</h1>
            <div>
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
                    <p>Adresse : 123 Rue de la Salle, Sportville</p>
                    <p>Téléphone : +33 6 12 34 56 78</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20221.462063890576!2d3.145282750433393!3d50.68871340445741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32891f6ff8a69%3A0x40af13e816459b0!2s59100%20Roubaix!5e0!3m2!1sfr!2sfr!4v1743088351551!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- export avec la balise script n'est plus nécessaire avec Vue3 et est fait directement dans le router -->

<style scoped>
img {
  max-width: 100%;
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
.content div {
    display: flex;
}
form, .contact-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 10px;
    justify-content: center;
    align-items: center;
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
</style>
<template>
    <div>
        <h1>Contactez-nous</h1>
        <form>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Envoyer</button>
        </form>
        <div>
            <p>Adresse : 123 Rue de la Salle, Sportville</p>
            <p>Téléphone : +33 6 12 34 56 78</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20221.462063890576!2d3.145282750433393!3d50.68871340445741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32891f6ff8a69%3A0x40af13e816459b0!2s59100%20Roubaix!5e0!3m2!1sfr!2sfr!4v1743088351551!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
    };
</script>

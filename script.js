document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btnMagico");
    const cajaMensaje = document.getElementById("mensajeSorpresa");

    if (boton && cajaMensaje) {
        boton.addEventListener("click", () => {
            cajaMensaje.innerHTML = `
                <p class="carta-texto">
                    ¡Feliz Bday otra vez, mi vida! ✨<br><br>
                    Hoy es tu día y no quería darte cualquier cosa, así que me puse a inventar y aprender a programar todita esta página solo para ti, para sacarte una sonrisota y recordarte lo mucho que te amo.<br><br>
                    Gracias por ser el mejor novio del mundo, por hacerme reír siempre y por cada momento tan lindo que pasamos juntos. Deseo con todo mi corazón que sigamos siendo la linda parejita que somos juntos y que sigamos creando juntos momentos hermosos durante todo lo que nos quede de vida, mi corazón.<br><br>
                    Espero que te haya encantado esta sorpresita hecha con todo mi amor. Te amo infinitooo. ❤️
                </p>
            `;
            boton.style.display = "none";
        });
    }
});
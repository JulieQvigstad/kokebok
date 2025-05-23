const knapp = document.getElementById("knapp");
const bildeboks = document.getElementById("tilf_bilder");
const recipe = document.querySelector(".recipe")
const pil = document.querySelector(".toggle-knapp")

const bilder = [
  "bilder/frokost.jpg",
  "bilder/lunsj.avif",
  "bilder/middag.jpeg",
  "bilder/dessert.jpg"
];

function visBilde() {
  const antallBilder = bilder.length;
  const tilfeldigTall = Math.random();
  const tilfeldigIndex = Math.floor(tilfeldigTall * antallBilder);
  const valgtBilde = bilder[tilfeldigIndex];

  // Funker ikke? bildeboks.innerHTML = '<img src="' + valgtBilde + '" alt="Middagsforslag">';
}

document.addEventListener("click", visBilde);

//Oppskrift

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".toggle-knapp");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const recipeBox = this.closest(".recipe");
      recipeBox.classList.toggle("utvid");
    });
  });
});





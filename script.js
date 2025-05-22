const knapp = document.getElementById("knapp");
const bildeboks = document.getElementById("tilf_bilder");
const recipe = document.querySelector(".recipe")

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

  bildeboks.innerHTML = '<img src="' + valgtBilde + '" alt="Middagsforslag">';
}

knapp.addEventListener("click", visBilde);

//Oppskrift
document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector(".recipe");
  const button = document.querySelector(".toggle-knapp");

  button.addEventListener("click", function () {
      box.classList.toggle("utvid");

      button.style.transform = box.classList.contains("utvid") ? "rotate(180deg)" : "rotate(0deg)";
  });
});


  
const knapp = document.getElementById("knapp");
const bildeboks = document.getElementById("tilf_bilder");
const recipe = document.querySelector(".recipe")
const pil = document.querySelector(".toggle-knapp")
const liktElms = document.querySelectorAll(".fa-heart")


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

//LIKTE OPPSKRIFTER 
//Ved lasting av siden: sett mørk rosa hvis den er likt fra før
const savedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || [];

liktElms.forEach(heart => {
  const article = heart.closest('article');
  const title = article.dataset.title;
  const imgSrc = article.dataset.img;

  //Hvis oppskriften finnes i localStorage legg til nyfarge-klassen
  if (savedRecipes.find(recipe => recipe.title === title)) {
    heart.classList.add('nyfarge');
  }

  //skigter farge 
  heart.addEventListener("click", function () {
    heart.classList.toggle("nyfarge");

    let likedRecipes = JSON.parse(localStorage.getItem('likedRecipes')) || [];

    if (heart.classList.contains('nyfarge')) {
      //Legg til hvis den ikke er der
      if (!likedRecipes.find(recipe => recipe.title === title)) {
        likedRecipes.push({ title, imgSrc });
      }
    } else {
      //Fjern hvis unliket
      likedRecipes = likedRecipes.filter(recipe => recipe.title !== title);
    }

    localStorage.setItem('likedRecipes', JSON.stringify(likedRecipes));
  });
});
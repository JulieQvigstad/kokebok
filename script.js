const knapp = document.getElementById("knapp");
const bildeboks = document.getElementById("tilf_bilder");

const recipe = document.querySelector(".recipe")
const pil = document.querySelector(".toggle-knapp")
const liktElms = document.querySelectorAll(".fa-heart")

const bilder = [
  "bilder/middag1.jpg",
  "bilder/middag2.jpg",
  "bilder/middag3.webp",
  "bilder/middag4.jpeg"
];

function visBilde() {
  const antallBilder = bilder.length;
  const tilfeldigIndex = Math.floor(Math.random() * antallBilder);
  const valgtBilde = bilder[tilfeldigIndex];


  bildeboks.innerHTML = `<img src="${valgtBilde}" alt="Middagsbilde">`;
}


if (knapp) {
  knapp.addEventListener("click", visBilde);
}

//Oppskrift
const buttons = document.querySelectorAll(".toggle-knapp");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    const recipeBox = this.closest(".recipe");
    recipeBox.classList.toggle("utvid");
  });
});


//LIKTE OPPSKRIFTER - start
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
//Likte oppskrofter - slutt
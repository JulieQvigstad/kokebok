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
  
  const img = article.querySelector('img');
  const imgSrc = img ? img.src : "";

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


const søkefelt = document.getElementById("search-bar")

søkefelt.addEventListener("keydown", function (tastetrykk) {
    if (tastetrykk.key === "Enter") {
        const søkeord = søkefelt.value;
        resultatBoks.innerHTML = "Laster oppskrifter";

        console.log("Du skrev", søkeord)

        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + søkeord)
        .then((response) => response.json())
        .then((data) => {
          if (data.meals && data.meals.length > 0) {
            // Henter første resultat:
            const oppskrift = data.meals[0]

            resultatBoks.innerHTML = `
              <h2>${oppskrift.strMeal}</h2>
              <img src="${oppskrift.strMealThumb}" style="max-width: 300px; border-radius: 12px;">
              <p><strong>Instruksjoner:</strong> ${oppskrift.strInstructions}</p>
            `;






            // Logger hele (så vi kan se hva som finnes av muligheter):
            console.log(oppskrift)
            // Logger litt mer:
            console.log("Vi skal lage", oppskrift.strMeal)
            console.log("Bilde:", oppskrift.strMealThumb)
          } else {
            console.log("Fikk ingen resultat")
            console.log(data)
            // Nullstill søkefelt:
            søkefelt.value = ""
          }
        })
    }
});

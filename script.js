const knapp = document.getElementById("knapp");
const bildeboks = document.getElementById("tilf_bilder");

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
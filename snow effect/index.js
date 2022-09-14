// Fonction création d'une boule de neige
/*
On crée un élément span dans le document html
on lui ajoute la classe .snow créée dans le CSS
on rajoute l'élément span class="snow" créé au container (snow_container).
Celui-ci est déjà pointé car c'est un id, sinon faire document.getElementById("votre_container");
*/
const snowMaker = () => {
  const snow = document.createElement("span");
  snow.classList.add("snow");
  snow_container.appendChild(snow);

  // taille aléatoire pour la neige
  const size = Math.random() * 10 + "px";
  snow.style.height = size;
  snow.style.width = size;
  // apparition de la neige à des endroits random de la page
  snow.style.top = Math.random() * 500 + "%";
  snow.style.left = Math.random() * 500 + "%";

  //   faire disparaître la neige au bout d'un moment sinon la page est trop lourde et lag -->
  setTimeout(() => {
    snow.remove();
  }, 5000);
  //   toutes les 5 secondes(5000 ms) ça nettoie
};
// SetInterval pour répéter la fonction toutes les "X" millisecondes
setInterval(snowMaker, 10);

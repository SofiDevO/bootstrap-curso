import {recetas} from "../data/recetasData.js"

const seccionRecetas = document.querySelector("#recetas__cards");

const cardReceta =
recetas.map(receta => `
<div class="card__heigth col-lg-4   col-sm-12 ">
<div class="card border__color-card" p-0 style="width: 18rem;">
<img src=${receta.img} class="card-img-top mh-50 card__image" alt=${receta.alt}>
<div class="card-body ">
<h3 class="card-title fs-5"">${receta.title}</h3>
<p>${receta.desc}</p>
<a href=${receta.btnUrl} class="btn btn__bg">Vea la receta</a>
</div>
</div>
</div>
`
).join('');

seccionRecetas.innerHTML = cardReceta;

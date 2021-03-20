const searchRecipe = document.querySelector('#card-append');
const result = document.querySelector('#result-content');
const apiKey = '9b2b77378f38c14b074813a97058067c';
const appId = '61905fa6';
const url = `https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${apiKey}&from=0&to=20`;
var searchInput = '';



function fetchApi(searchInput) {

  searchInput = document.querySelector('#recipe-search-2').value;

  fetch(
    `https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${apiKey}&from=0&to=20`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //a function to pass the hits inside the data
      generateHTML(data.hits)
    });
}

// function to display recipe (img, title and calories)
function generateHTML(results) {

  var resultsDiv = document.querySelector('#card-append')
  resultsDiv.textContent = "";

  let generatedHTML = '';
  //every time we are looping through the results, create a card using the format in the HTML
  results.map(result => {
    console.log(result)
    generatedHTML +=
      `
<div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
        
          <img src= "${result.recipe.image}" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
          </div>
          <div class="media-content">
            <p class="title is-4">${result.recipe.label}</p>
          </div>
        </div>
    
        <div class="calories">
        <strong> Cuisine Type: </strong>${result.recipe.cuisineType}
        <br>
         <strong> Calories: </strong>${result.recipe.calories.toFixed(0)}
         <br>
         <button class="click is-fullwidth">See full recipe</button>
        </div>
      </div>
    </div>
`
  })
  searchRecipe.insertAdjacentHTML("beforeend", generatedHTML);
  var viewRecipe = document.querySelector(".click");
  viewRecipe.onclick = viewRecipes;
}


function viewRecipes() {
  var target = document.getElementById('page-modal');
  target.style.display = 'block';
  console.log("pizza");
  result = result[0];
  let html = `
  <div class="modal-card" >
      <p class="image is-3by1">
        <img src="${result.recipe.image}" alt="">
      </p>
      
      <header class="modal-card-head">
<p class="modal-card-title title is-2">${result.recipe.label}</p>
<button class="modal-close" aria-label="close"></button>
</header>
<section class="modal-card-body">
<div class="modal-content">
<h2 class="title is-3">Ingredients</h2>
<li>${result.recipe.ingredients[0]}</li>
<li>${result.recipe.ingredients[0]}</li>
<li>${result.recipe.ingredients[0]}</li>
<h2 class="title is-3">Step by Step Instructions:${result.recipe.url} </h2>

`;

}






// var viewInstructions=document.querySelector(modal-card-title);

// calories result.recipe.calories; only show 2 #'s after decimal point
//activate recipe button; add to the button ${}

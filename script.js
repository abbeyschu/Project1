const searchButton = document.querySelector('#search-2');
const searchRecipe = document.querySelector('#card-append');
const result = document.querySelector('#result-content');
const apiKey = '9b2b77378f38c14b074813a97058067c';
const appId = '61905fa6';
const url = `https://api.edamam.com/search?q=${searchInput}&app_id=${appId}&app_key=${apiKey}&from=0&to=20`;
var searchInput = '';


// activate search button
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    //search button function
    searchInput = document.querySelector('#recipe-search-2').value;
    fetchApi(searchInput);
})
function fetchApi(searchInput) {
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
// function to display receipe (img, title and calories)
function generateHTML(results) {

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
         <button class="click is-fullwidth" >See full recipe</button>
        </div>
      </div>
    </div>
`
    })
    searchRecipe.insertAdjacentHTML("beforeend",generatedHTML) ;
    var viewRecipe=document.querySelector(".click");
    viewRecipe.onclick=viewRecipes;
}


function viewRecipes(){
  var target=document.getElementById('pageModal');
  target.style.display='block';
console.log("pizza");
}






       
// calories result.recipe.calories; only show 2 #'s after decimal point
//activate recipe button; add to the button ${}

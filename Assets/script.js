
// get a random cocktail
var cocktailRandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


var searchButton = document.getElementById("search-2");
var searchInput = document.getElementById("recipe-search-2");
var resultContentEl = document.querySelector('#result-content');


function printResults(resultObj) {
    console.log(resultObj);
  
    // create html elements to hold results content
    // class lists need to be reviewed and updated yet
    var resultCard = document.createElement('div');
    resultCard.classList.add('card');
  
    var resultBody = document.createElement('div');
    resultBody.classList.add('car-content');
    resultCard.append(resultBody);
  
    var nameEl = document.createElement('h3');
    nameEl.classList.add('title is-4');
    nameEl.textContent = resultObj.strDrink;
  
    var drinkTypeEl = document.createElement('p');
    drinkTypeEl.classList.add('subtitle is-6');
    drinkTypeEl.innerHTML = resultObj.strAlcoholic;

    var imageEl = document.createElement('img');
    imageEl.classList.add('card-image');
    imageEl.src = resultObj.strDrinkThumb
  
    var linkButtonEl = document.createElement('button');
    linkButtonEl.textContent = 'See full recipe';
    linkButtonEl.classList.add('button is-fullwidth');
  
    resultBody.append(nameEl, drinkTypeEl, imageEl, linkButtonEl);
  
    resultContentEl.append(resultCard);
  }
  
  function searchApi() {
    // search by cocktail name
    var cocktailNameURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput.value

    // search by ingredient list
    var cocktailIngredientURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchInput.value

    Promise.all([
        fetch(cocktailNameURL),
        fetch(cocktailIngredientURL)
    ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(data=> {
        console.log(data);
        resultContentEl.textContent = '';
        for (var i = 0; i < data[0].drinks.length; i++) {
            printResults(data[0].drinks[i]);
        };
        for (var i = 0; i < data[1].drinks.length; i++) {
            printResults(data[1].drinks[i]);
        }
        }
    );
}

searchButton.addEventListener("click", searchApi);


// see full recipe button and modal
var button = document.getElementById('button');
var modal = document.getElementById('page-modal');
var closeModal = document.getElementsByClassName('modal-close')[0];

button.onclick = function(){
    modal.style.display = 'block'
    
}
closeModal.onclick = function(){
    modal.style.display = 'none'
}

window.onclick = function(event){
    if (event.target.className == 'modal-background'){
        modal.style.display = 'none'
    }
}

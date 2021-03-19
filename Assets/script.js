
// get a random cocktail
var cocktailRandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


var searchButton = document.getElementById("search-2");
var searchInput = document.getElementById("recipe-search-2");
var resultContentEl = document.querySelector('#result-content');

function printResults(resultObj) {
    console.log(resultObj);
  
    // create html elements to hold results content
    var card = document.createElement('div');
    card.classList.add('card');
    resultContentEl.append(card);

    var cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    card.append(cardImage);

    var imageFigure = document.createElement('figure');
    imageFigure.classList.add('image', 'is-4by3');
    cardImage.append(imageFigure);

    var image = document.createElement('img');
    image.src = resultObj.strDrinkThumb
    imageFigure.append(image);

  
    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.append(cardContent);

    var media = document.createElement('div');
    media.classList.add('media');
    cardContent.append(media);

    var mediaContent = document.createElement('div');
    mediaContent.classList.add('media-content');
    media.append(mediaContent);
  
    var nameEl = document.createElement('p');
    nameEl.classList.add('title', 'is-4');
    nameEl.innerHTML = resultObj.strDrink;
    mediaContent.append(nameEl);
  
    var drinkTypeEl = document.createElement('p');
    drinkTypeEl.classList.add('subtitle', 'is-6');
    drinkTypeEl.innerHTML = resultObj.strAlcoholic;
    mediaContent.append(drinkTypeEl);
  
    var linkButtonEl = document.createElement('button');
    linkButtonEl.textContent = 'See full recipe';
    linkButtonEl.classList.add('button', 'is-fullwidth');
    linkButtonEl.setAttribute('id','button');
    cardContent.append(linkButtonEl);

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
            return response.json()
        }));
    }).then(data=> {
        console.log(data);
        resultContentEl.textContent = "";
        for (var i = 0; i < data[0].drinks.length; i++) {
            printResults(data[0].drinks[i]);
        };
        for (var i = 0; i < data[1].drinks.length; i++) {
            printResults(data[1].drinks[i]);
        }
    }).catch(fetch(cocktailNameURL)
    .then(response=>response.json())
    .then(data=>{
        resultContentEl.textContent = "";
        for (var i = 0; i < data.drinks.length; i++) {
            printResults(data.drinks[i])}
    }).catch(fetch(cocktailIngredientURL)
    .then(response=>response.json())
    .then(data=>{
        resultContentEl.textContent = "";
        for (var i = 0; i < data.drinks.length; i++) {
            printResults(data.drinks[i])}
})))}

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



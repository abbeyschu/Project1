// get a random cocktail
var cocktailRandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


var searchButton = document.getElementById("search-2");
var searchInput = document.getElementById("recipe-search-2");
var resultContentEl = document.querySelector('#result-content');


// available data when searching by drink name
// strDrink = drink name
// strAlcoholic = alcoholic or non
// strInstructions
// strDrinkThumb = image link

// strIngredient1
// strIngredient2
// strIngredient3
// strIngredient4
// strIngredient5
// strIngredient6
// strIngredient7
// strIngredient8
// strIngredient9
// strIngredient10
// strIngredient11
// strIngredient12
// strIngredient13
// strIngredient14
// strIngredient15

// strMeasure1
// strMeasure2
// strMeasure3
// strMeasure4
// strMeasure5
// strMeasure6
// strMeasure7
// strMeasure8
// strMeasure9
// strMeasure10
// strMeasure11
// strMeasure12
// strMeasure13
// strMeasure14
// strMeasure15

function printResults(resultObj) {
    console.log(resultObj);
  
    // create html elements to hold results content
    var resultCard = document.createElement('div');
    // resultCard.classList.add("INSERT CSS CLASSES HERE");
  
    var resultBody = document.createElement('div');
    // resultBody.classList.add("INSERT CSS CLASSES HERE");
    resultCard.append(resultBody);
  
    var nameEl = document.createElement('h3');
    nameEl.textContent = resultObj.strDrink;
  
    var drinkTypeEl = document.createElement('p');
    drinkTypeEl.innerHTML = resultObj.strAlcoholic;

    var imageEl = document.createElement('img');
    imageEl.src = resultObj.strDrinkThumb
  
    var linkButtonEl = document.createElement('button');
    linkButtonEl.textContent = 'See full recipe';
    // linkButtonEl.classList.add("INSERT CSS CLASSES HERE");
  
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
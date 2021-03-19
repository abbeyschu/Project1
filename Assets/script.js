
// get a random cocktail
var cocktailRandomURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


var searchButton = document.getElementById("search-2");
var searchInput = document.getElementById("recipe-search-2");
var resultContentEl = document.querySelector('#result-content');
var columnDiv = document.querySelector('.is-one-third');


function printResults(resultObj) {
    console.log(resultObj);
  
    // create html elements to hold results content
    var card = document.createElement('div');
    card.classList.add('card');
    columnDiv.append(card);

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
    if(resultObj.strAlcoholic === undefined) {
        drinkTypeEl.style.display = "none";
      }
  
    var linkButtonEl = document.createElement('button');
    linkButtonEl.textContent = 'See full recipe';
    linkButtonEl.classList.add('button', 'is-fullwidth');
    linkButtonEl.setAttribute('id','button');
    cardContent.append(linkButtonEl);

    printDesc(resultObj);
  }


// function to show all API Results
function searchApi() {
    // search by cocktail name
    var cocktailNameURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput.value

    // search by ingredient list
    var cocktailIngredientURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchInput.value

    columnDiv.textContent = "";

    fetch(cocktailNameURL)
    .then(response=>response.json())
    .then(data=> {
        console.log(data);
        for (var i = 0; i < data.drinks.length; i++) {
            printResults(data.drinks[i]);
        }});

    fetch(cocktailIngredientURL)
    .then(response=>response.json())
    .then(data=>{
        for(var i = 0; i < data.drinks.length;i++){
            var ingredURLtwo = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + data.drinks[i].strDrink
            fetch(ingredURLtwo)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                printResults(data.drinks[0])
            })
        }
    });
}

searchButton.addEventListener("click", searchApi);

// create html elements for modal
function printDesc(resultObj){
    var allModals = document.querySelector("#allModals");

    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute("id","page-modal");
    allModals.append(modal);

    var modalBackground =document.createElement('div');
    modalBackground.classList.add('modal-background');
    modal.append(modalBackground);

    var modalCard = document.createElement('div');
    modalCard.classList.add('modal-card');
    modal.append(modalCard);

    var header = document.createElement('header');
    header.classList.add('modal-card-head');
    modalCard.append(header);

    var title = document.createElement('p');
    title.classList.add('modal-card-title','title', 'is-2');
    title.innerHTML = resultObj.strDrink;
    header.append(title);

    var closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.setAttribute('aria-label','close');
    header.append(closeButton);

    var cardBody = document.createElement('section');
    cardBody.classList.add('modal-card-body');
    modalCard.append(cardBody);

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    cardBody.append(modalContent);

    var ingredientsTitle = document.createElement('h2');
    ingredientsTitle.classList.add('title', 'is-3');
    modalContent.append(ingredientsTitle);

    var listOne = document.createElement('li');
    listOne.innerHTML = resultObj.strMeasure1 + " - " + resultObj.strIngredient1 ;
    ingredientsTitle.append(listOne);
    if(resultObj.strIngredient1 === undefined || null) {
        listOne.style.display = "none";
    }

    var listTwo = document.createElement('li');
    listTwo.innerHTML = resultObj.strMeasure2 + " - " + resultObj.strIngredient2 ;
    ingredientsTitle.append(listTwo);
    if(resultObj.strIngredient2 === undefined) {
        listTwo.style.display = "none";
    }

    var listThree = document.createElement('li');
    listThree.innerHTML = resultObj.strMeasure3 + " - " + resultObj.strIngredient3 ;
    ingredientsTitle.append(listThree);
    if(resultObj.strIngredient3 === undefined) {
        listThree.style.display = "none";
    }

    var listFour = document.createElement('li');
    listFour.innerHTML = resultObj.strMeasure4 + " - " + resultObj.strIngredient4;
    ingredientsTitle.append(listFour);
    if(resultObj.strIngredient4 === undefined) {
        listFour.style.display = "none";
    }

    var listFive = document.createElement('li');
    listFive.innerHTML = resultObj.strMeasure5 + " - " + resultObj.strIngredient5;
    ingredientsTitle.append(listFive);
    if(resultObj.strIngredient5 === undefined) {
          listFive.style.display = "none";
    }

    var listSix = document.createElement('li');
    listSix.innerHTML = resultObj.strMeasure6 + " - " + resultObj.strIngredient6;
    ingredientsTitle.append(listSix);
    if(resultObj.strIngredient6 === undefined) {
          listSix.style.display = "none";
    }

    var listSeven = document.createElement('li');
    listSeven.innerHTML = resultObj.strMeasure7 + " - " + resultObj.strIngredient7;
    ingredientsTitle.append(listSeven);
    if(resultObj.strIngredient7 === undefined) {
          listSeven.style.display = "none";
    }

    var listEight = document.createElement('li');
    listEight.innerHTML = resultObj.strMeasure8 + " - " + resultObj.strIngredient8;
    ingredientsTitle.append(listEight);
    if(resultObj.strIngredient8 === undefined) {
          listEight.style.display = "none";
    }

    var listNine = document.createElement('li');
    listNine.innerHTML = resultObj.strMeasure9 + " - " + resultObj.strIngredient9;
    ingredientsTitle.append(listNine);
    if(resultObj.strIngredient9 === undefined) {
          listNine.style.display = "none";
    }

    var listTen = document.createElement('li');
    listTen.innerHTML = resultObj.strMeasure10 + " - " + resultObj.strIngredient10;
    ingredientsTitle.append(listTen);
    if(resultObj.strIngredient10 === undefined) {
          listTen.style.display = "none";
    }

    var listEleven = document.createElement('li');
    listEleven.innerHTML = resultObj.strMeasure11 + " - " + resultObj.strIngredient11;
    ingredientsTitle.append(listEleven);
    if(resultObj.strIngredient11 === undefined) {
          listEleven.style.display = "none";
    }

    var listTwelve = document.createElement('li');
    listTwelve.innerHTML = resultObj.strMeasure12 + " - " + resultObj.strIngredient12;
    ingredientsTitle.append(listTwelve);
    if(resultObj.strIngredient12 === undefined) {
          listTwelve.style.display = "none";
    }

    var listThirteen = document.createElement('li');
    listThirteen.innerHTML = resultObj.strMeasure13 + " - " + resultObj.strIngredient13;
    ingredientsTitle.append(listThirteen);
    if(resultObj.strIngredient13 === undefined) {
          listThirteen.style.display = "none";
    }

    var listFourteen = document.createElement('li');
    listFourteen.innerHTML = resultObj.strMeasure14 + " - " + resultObj.strIngredient14;
    ingredientsTitle.append(listFourteen);
    if(resultObj.strIngredient14 === undefined) {
          listFourteen.style.display = "none";
    }

    var listFifteen = document.createElement('li');
    listFifteen.innerHTML = resultObj.strMeasure15 + " - " + resultObj.strIngredient15;
    ingredientsTitle.append(listFifteen);
    if(resultObj.strIngredient15 === undefined) {
          listFifteen.style.display = "none";
    }

    var instructionHeader = document.createElement('h2');
    instructionHeader.classList.add('title','is-3');
    instructionHeader.innerHTML = "Instructions"
    modalContent.append(instructionHeader);

    var instructions = document.createElement('p');
    instructions.innerHTML = resultObj.strInstructions;
    instructionHeader.append(instructions);

}

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

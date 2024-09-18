
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var inputText = "https://www.themealdb.com/api/json/v1/1/search.php?s=Potato";
var ul = document.getElementById('navbarItems');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    // alert(target.innerHTML);
    inputText = target.innerHTML;
    loadFood();
};

const loadFood = () => {

    console.log('inputtext', inputText);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}


const loadDefaultFood = () => {
    var ul = document.getElementById('navbar-Items');
    ul.onclick = function (event) {
        var target = getEventTarget(event);
        // alert(target.innerHTML);
        inputText = target.innerHTML;
        loadFood();
    };
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Potato"
    fetch(url)
        .then(res => res.json())
        .then(data => showMeals(data.meals))
        .catch(error => console.log('Error: ', error));
}

loadDefaultFood();


const showMeals = (meals) => {
    // console.log('Data is: ', meals);
    let container = document.getElementById("result-container");
    container.innerHTML = '';
    meals.forEach(meal => {
        let mealCard = document.createElement('div');
        mealCard.classList = 'card card-compact bg-base-100 shadow-xl p-10 m-10';

        mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${meal.strInstructions}" >${meal.strInstructions.slice(0, 200)}...</p>
                <div class="card-actions justify-end">
              <button class="btn btn-active -ml-5 mt-5">Details</button>
                </div>
            </div>   
        `;
        container.appendChild(mealCard);
    });
}

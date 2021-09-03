for (let index = 0; index < 10; index++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const name = data.meals[0].strMeal;
            const image=data.meals[0].strMealThumb;
            //console.log(name);
            const foodname = document.getElementById('cards');
            const fooddiv = document.createElement('div');
            const info = `
            <div class="card">
            <img src=${image} alt="Avatar" style="width:100%">
            <div class="container">
            <p><b>${name}</b></p>
            </div>
            </div>
            `
            fooddiv.innerHTML = info;
            foodname.appendChild(fooddiv);
        })
}

function searchbtn() {
    var search = document.getElementById('okk');
    //const search=document.getElementById('ok');
    console.log("clicked");
    const mealsrch = search.value;

    console.log(mealsrch);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsrch}`)
        .then(response => response.json())
        .then(data => {

            if(data.meals==null){
                console.log("nai kisu")
                document.getElementById("cards").innerText="No Item Found";
            }
            else{
                console.log(data.meals);
            document.getElementById("cards").style.display = "none"
            document.getElementById("card2").style.display = "grid"
            for (let index = 0; index < data.meals.length; index++) {
                console.log(data.meals[index].strMeal);
                const name = data.meals[index].strMeal;
                const image = data.meals[index].strMealThumb;
                const foodname = document.getElementById('card2');
                const fooddiv = document.createElement('div');
                const info = `
            <div onclick="infoo(${data.meals[index].idMeal})" class="card">
            <img src=${image} alt="Avatar" style="width:100%">
            <div class="container">
            <p><b id="food">${name}</b></p>
            </div>
            </div>
            `
                fooddiv.innerHTML = info;
                foodname.appendChild(fooddiv);


            }
        }
            })
}

function infoo(id){
             console.log(document.getElementById("food").innerText);
            document.getElementById("f").style.display = "none"
            document.getElementById("card2").style.display = "none"
            console.log(id);
            
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => response.json())
            .then(data=>{
                const alldata=data.meals[0];
                const name = data.meals[0].strMeal;
                const image=data.meals[0].strMealThumb;
                const foodname = document.getElementById('card3');
            const fooddiv = document.createElement('div');
            const info = `
            <div class="carrd">
            <img src=${image} alt="Avatar" style="width:100%">
            <div class="container con">
            <h1><b>${name}</b></h1>
            </div>
            </div>
            `
            fooddiv.innerHTML = info;
            foodname.appendChild(fooddiv);
                for (let index = 0; index < 20; index++) {
                    const line="strIngredient"+index;
                    for (let x in alldata) {
                        if(x==line && !alldata[x]=="")
                        console.log(x + ": "+ alldata[x])
                        
                     }
                 }
            })
    }
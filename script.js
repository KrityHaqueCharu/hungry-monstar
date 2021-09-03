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
            <div onclick="infoo(${data.meals[0].idMeal})" class="card">
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

            if(data.meals==null || mealsrch==""){
                console.log("nai kisu")
               // document.getElementById("cards").setAttribute('align', 'center');
               document.getElementById("cards").innerText="No Item Found";
               document.getElementById("cards").style.textAlign = "center";


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
             //console.log(document.getElementById("food").innerText);
            document.getElementById("f").style.display = "none"
            document.getElementById("card2").style.display = "none"
            document.getElementById("cards").style.display = "none"
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
            <h2 id="text">${name}</h2>
            
            <h5><ul id="list"></ul></h5>
            </div>
            </div>
            `
            fooddiv.innerHTML = info;
            foodname.appendChild(fooddiv);
                const ul=document.getElementById("list");
                for (let index = 0; index < 20; index++) {
                    const line="strMeasure"+index;
                    const line1="strIngredient"+index;
                    for (let x in alldata) {
                        if(x==line && !alldata[x]==""){
                            for(let x1 in alldata){
                                if(x1==line1 && !alldata[x1]==""){
                                    console.log(alldata[x]+" "+alldata[x1]);
                                    const dot = document.createElement('li');
                                    dot.innerText = (alldata[x]+" "+alldata[x1]);
                                    ul.appendChild(dot);
                                }
                            }
                        }
                     }
                 }
            })
    }


    
    
    
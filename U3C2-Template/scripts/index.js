
getData()

async function getData() {
    try {
        let res = await fetch(" https://masai-food-api.herokuapp.com/api/meals/india")
        let data = await res.json()
        console.log('data:', data[0].meals)
        appendData(data[0].meals)
    } catch (error) {
        
    }
}

let container = document.getElementById("menu")


function appendData(data) {
    // console.log('data:', data)
    data.forEach(function (el) {
        
        let div = document.createElement("div")

        let imgD = document.createElement("div")



        let img = document.createElement("img")

        img.src = el.strMealThumb;


        imgD.append(img)
        let h4 = document.createElement("h4")

        h4.innerText = el.strMeal;

        let p = document.createElement("p")

        p.innerText = `${el.price} Rs`;


        let btn = document.createElement("button")
        btn.setAttribute("id", "addtocart")
        
        btn.innerText = "Add To Cart"

        btn.addEventListener("click",function () {
            add(el)
        })

        div.append(imgD, h4, p,btn)
        
        container.append(div)

    })
}

let data = JSON.parse(localStorage.getItem("cart")) || [];
var count = document.getElementById("count")
count.innerText = data.length
function add(el) {
    data.push(el);
    localStorage.setItem("cart", JSON.stringify(data))
    count.innerText = data.length
}





function goto() {
    window.location.href = "./cart.html"
}


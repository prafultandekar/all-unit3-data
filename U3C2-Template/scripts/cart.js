

let data = JSON.parse(localStorage.getItem('cart'))

total(data)

appendData(data)

var container1 = document.getElementById("cart")


function appendData(data) {
    //  console.log('data:', data)
    data.forEach(function (el,index) {
        

        var container1 = document.getElementById("cart")

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
         btn.setAttribute("id", "remove")
        
        btn.innerText = "Remove From Cart"

        btn.addEventListener("click",function () {
            remove(el,index)
        })

        div.append(imgD, h4, p,btn)
        
        container1.append(div)

    })
}


function remove(el, index) {
    container1.innerHTML = "";
    data.splice(index, 1);
    console.log(data)
    localStorage.setItem("cart", JSON.stringify(data))
    appendData(data)
    total(data)
}

//console.log(data)
function total(data) {
    let sum = 0; 
    for (let i = 0; i < data.length; i++){
        sum += data[i].price;
    }
    //console.log(sum)
    let total = document.getElementById("total-price")
    total.innerText = sum
}

function check() {
    window.location.href = "./checkout.html"
}
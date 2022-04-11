

var data = JSON.parse(localStorage.getItem("products"))
// console.log(data)
displayData()

function displayData()
{
    data.map(function(element,index){

        var div =document.createElement("div")

        var name = document.createElement("h2")
        name.innerText= element.name;

        var price = document.createElement('p')
        price.innerText = element.price;

        var type = document.createElement('P')
        type.innerText = element.type;

        var image = document.createElement("img")
        image.setAttribute("src",element.image)

        var btn = document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
           remove(data,index)
        })

        div.append(name,price,type,image,btn)

        document.getElementById("products_data").append(div)
    })
}



document.getElementById("add_product").addEventListener("click",function(){
    window.location.href= "./index.html"
})

function remove(data,index){
    data.splice(index,1)

    var data1 = data;
    localStorage.setItem("products",JSON.stringify(data1))
    document.getElementById("products_data").innerHTML = ""
    displayData();
}

// function remove(data,index) {
//     data.splice(index,1)
//     var data1 = data;
//     localStorage.setItem("products", JSON.stringify(data1))
//     document.getElementById("products_data").innerHTML = "";
//     displayData();
// }

document.getElementById("submit").addEventListener("click",add)

var array = JSON.parse(localStorage.getItem("products")) || []

function add(event){
    event.preventDefault()

    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var type = document.getElementById("type").value;
    var image = document.getElementById("image").value;


    var obj = {
        name:name,
        price:price,
        type:type,
        image:image
    }
array.push(obj)
// console.log(array)
localStorage.setItem("products",JSON.stringify(array))

}

document.getElementById("show_products").addEventListener("click",function(){

    window.location.href = "./inventry.html"
})
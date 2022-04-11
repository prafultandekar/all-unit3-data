
/*
var person = {
    name : 'praful',

    myName: function(){

        console.log(this)    // this is equal = person
    }
}
person.myName()



function myName(){
    console.log(this)     //global object
}

myName()

*/




// constracter function hai ye vala

// function Player(n,t){

//     this.name = n
//     this.team = t
// }

// var myPlayer = new Player("masai","school")
// var myPlayer1 = new Player("Lo","Bhai")

// console.log(myPlayer)
// console.log(myPlayer1)




// var person = {
//     name :"john",
// }


// var person1 = {
//     name :"rahul",
// }

// function myName(m){

//     console.log(this.name,m)
// }
//   myName.call(person,21)
//   myName.call(person1)
//   console.log(person)


  //call - commas
  //apply - array













//   function test(){
//       console.log(this)
//   }
//   test()

// let obj = {
//     name : "ronaldo",


// sayhi: function(){
//     console.log(this)
// }
// };
// obj.sayhi()










// normal function


// function Nike(n,p){


//     let obj = {}

//     obj.name = n
//     obj.price = p

//     return obj


// }

// let p1 = Nike("shoes",200)
// console.log(p1)



// contracter function


// function Nike(n,p){

//     this.name = n
//     this.price = p

// }

// let p2 = new Nike("shoes",200)
// console.log(p1)


// new key word return the object






// answer//


//create a form to acceept value


let arr = []
function Product(n,p,b){
    this.name = n;
    (this.price = p),(this.brand = b)
}


function storeProduct(e){
    e.preventDefault();


    let form = document.getElementById("product")

    let name = form.name.value
    console.log(name)

    let price = form.price.value
    console.log(price)

    let type = form.brand.value
    console.log(type)


    let p1 = new Product(name,price,brand);
    arr.push(p1)
    console.log(arr)

}



// let kitchan = {
//     name:"kichen",
//     purpose:"cook",


//     cookfood :function(){
//         console.log(`serving ${order} in ${this.name}`);

//     },
// };


// let living_room = {
//     name : ''
// }










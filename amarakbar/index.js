

let amar ={

    name:"Amar",
    role:"singer",
    city:"Goa",
    barrow:function(){
        console.log(`My name is ${amar.name} and i am ${this.role} and i live in ${amar.city}`)
    }

}


let akbar ={

    name:"Akbar",
    role:"chef",
    city:"Mumbai",
    barrow:function(){
        console.log(`My name is ${akbar.name} and i am ${this.role} and i live in ${akbar.city}`)
    }

}


let anthony={

    name:"Anthony",
    role:"Magician",
    city:"Kashmir",
    barrow:function(){
        console.log(`My name is ${anthony.name} and i am ${this.role} and i live in ${anthony.city}`)
    }

}

amar.barrow.call(amar)
akbar.barrow.call(akbar)
anthony.barrow.call(anthony)
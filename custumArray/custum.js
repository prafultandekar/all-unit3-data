

let a1 = new Array("x","y","z")
console.log(a1)


function myArray(){

    

    this.length = arguments.length;

    for(let i=0; i<this.length; i++)
    {
        this[i] = arguments[i];
    }
}

let a2 = new myArray("x","y","z");
console.log(a2)
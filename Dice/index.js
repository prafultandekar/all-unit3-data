

var m1 = document.getElementById("member-1");
var m2 = document.getElementById("member-2");
var m3 = document.getElementById("member-3");


function rollthedice(){

    var x = Math.floor((Math.random()*6)+1);
    // console.log(x)
    var y = Math.floor((Math.random()*6)+1);
    // console.log(y)
    var z = Math.floor((Math.random()*6)+1);

    m1.innerText=x;
    m2.innerText=y;
    m3.innerText=z;



if(max (x,y,z)== m1.innerText){
    m1.style.backgroundColor="green"
}
else if(max (x,y,z) == m2.innerText){
    m2.style.backgroundColor="green"
}
else if(max (x,y,z)== m3.innerText){
    m3.style.backgroundColor="green"
}


if(min(x,y,z)== m1.innerText){
    m1.style.backgroundColor="red"
}
else if(min (x,y,z) == m2.innerText){
    m2.style.backgroundColor="red"
}
else if(min (x,y,z)== m3.innerText){
    m3.style.backgroundColor="red"
}

if(x ==y)
{
    m1.style.backgroundColor="blue"
    m2.style.backgroundColor="blue"

}
else if(x == z){
    m1.style.backgroundColor="blue"
    m3.style.backgroundColor="blue"
}
else if(z == y){
    m3.style.backgroundColor="blue"
    m2.style.backgroundColor="blue"
}

else if(x==y==z){
    m1.style.backgroundColor="blue"
    m2.style.backgroundColor="blue"
    m3.style.backgroundColor="blue"
}
else if(secondlargest(x,y,z)==x){
    m1.style.backgroundColor="yellow"

}

else if(secondlargest(x,y,z)==y)
{
    m2.style.backgroundColor="yellow"
}

else if(secondlargest(x,y,z)==z){
  m3.style.backgroundColor="yellow"
}
}

function secondlargest(x,y,z){

    var mid_val =0
    if((x>y && y>z) || (y>x && z>y))
    {
      mid_val = y
    }
    if((x>y && z>x) || (y>x && x>z))
    {
        mid_val = x
    }
    
    if((z>y && z>x) || (z>x&& y>z)){
        mid_val=z;
    }
    return mid_val;
}


function min(x,y,z){
    min_val = 0;

    if(x<y){
        min_val = x;

    }
    else{
        min_val =y;
    }

    if(z<min_val)
    {
        min_val = z;
    }
    return min_val;
}

function max (x,y,z){
    max_val = 0;

    if(x>y)
    {
        max_val = x;
    }
    else{
        max_val = y;
    }

    if(z>max_val)
    {
        max_val = z;

    }
    return max_val
}
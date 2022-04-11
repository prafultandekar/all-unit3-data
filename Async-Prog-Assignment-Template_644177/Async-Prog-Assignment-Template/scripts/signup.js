
document.getElementById("home").addEventListener("click",function(){
    window.location.href = "./index.html"
})
document.getElementById("log-in").addEventListener("click",function(){
    window.location.href = "./login.html"
})
document.getElementById("sign-in").addEventListener("click",function(){
    window.location.href = "./signup.html"
})
// document.getElementById("submit").addEventListener('click',myfunSubmit)
document.querySelector("form").addEventListener("submit",myfunSubmit)


let arr =JSON.parse(localStorage.getItem("SignUpData")) || [] 

 function myfunSubmit(event)
{
event.preventDefault()

let name = document.getElementById("name").value;
let contact = document.getElementById("contact").value;
let email = document.getElementById("email").value;
let pass = document.getElementById("pass").value;


let obj = {
    name :name,
    contact:contact,
    email:email,
    pass:pass
}
arr.push(obj)
// console.log(arr)
localStorage.setItem("SignUpData",JSON.stringify(arr))

document.getElementById("name").value = "";
document.getElementById("contact").value="";
document.getElementById("email").value="";
document.getElementById("pass").value="";





}

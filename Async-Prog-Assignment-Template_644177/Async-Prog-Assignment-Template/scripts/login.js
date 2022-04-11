

// document.getElementById("home").addEventListener("click",function(){
//     window.location.href = "./index.html"
// })
// document.getElementById("log-in").addEventListener("click",function(){
//     window.location.href = "./login.html"
// })
// document.getElementById("sign-in").addEventListener("click",function(){
//     window.location.href = "./signup.html"
// })

// var signup_data =JSON.parse(localStorage.getItem("SignUpData"))
// // console.log(signup_data)

// document.querySelector("form").addEventListener("submit",function(event){
// event.preventDefault();

// loginPass(signup_data)

// })

// function loginPass(signup_data){
    
//     let email = document.getElementById("email").ariaValueMax;
//     var pass = document.getElementById("pass").ariaValueMax;

//     var flag = false;

//     for(let i =0; i<signup_data.length; i++)
//     {
//         if(signup_data[i].email == email && signup_data[i].pass == pass)
//         {
//             flag = true;
//             break;
//         }
//     }
//     if(flag == true)
//     {
//         window.location.href = "./index.html"
//     }
//     else{
//         alert("invalid Credentials")
//     }
//     document.getElementById("email").value="";
//     document.getElementById("pass").value="";
// }


document.getElementById("home").addEventListener("click", function () {
    window.location.href = "./index.html"
})
document.getElementById("log-in").addEventListener("click", function () {
    window.location.href = "./login.html"
})
document.getElementById("sign-in").addEventListener("click", function () {
    window.location.href = "./signup.html"
})



var signup_data = JSON.parse(localStorage.getItem("SignUpData"))


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    loginPass(signup_data)
   
})
function loginPass(signup_data) {
    // console.log(signup_data.length)
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var flag = false;
    for (let i = 0; i < signup_data.length; i++){
        if (signup_data[i].email == email && signup_data[i].pass == pass) {
            flag = true;
            break;
        } 
    }
    if (flag == true) {
        window.location.href ="./index.html"
    } else {
        alert("invalid Credentials")
    }
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
}
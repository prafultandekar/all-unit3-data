

let timerid;
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let i = -1; 

    timerid = setInterval(function () {
        i = i + 1;
        console.log('i:', i)
        if (i == 0) {
            alert("Your order is accepted")
        }
        if (i == 3) {
            alert("Your order is being cooked")
        }
        if (i == 8) {
            alert("Your order is ready")
        }
        if (i == 10) {
            alert("Order out for delivery")
        }
        if (i == 12) {
            alert(" Order delivered")
        }
        if (i == 15) {
            clearInterval(timerid)
        }
    }, 1000)
    
   
})






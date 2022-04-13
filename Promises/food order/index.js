

// function orderFood(){

//     let order = document.getElementById("food").value;
    
//     let status = "open";

//     let mypromise = new Promise(function(resolve,reject){

//         let time = Math.random()*10 *1000;

//         setTimeout(function(){
//             if(status === "open")
//             {
//                 resolve(order);
//             }
//             else{
//                 reject();
//             }
//         },time);
//     });

//     mypromise.then(function(res){
//         console.log(`${res} is ready`);
//     })
// }
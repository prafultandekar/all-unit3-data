
// var p = 20;
// var q = 10


// console.log(p+q)

 var n = 5
 var arr = [2, -4, 6 ,8, -9]
 string(n,arr)

 function string(n,arr)
 {
     bag =""
     for(var i= 0; i<arr.length; i++)
     {
         if(arr[i]<0)
         {
             bag+= "0"
         }
     else
         {
             bag+= arr[i]
         }
     }
     console.log(bag)
 
 }
//console.log("this is logic cart");

function getTotalPrice(arr){

    let sum =0
   arr.forEach(e =>{
         sum += +e.price;
      
    
 })

 return sum;
 
}



module.exports = {getTotalPrice}
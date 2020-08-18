let result = [];
function duplicateCount(arr){
    console.log(arr);
    arr = arr.toString();
arr = arr.toLowerCase();
console.log(arr);    
arr = arr.split(""); 
console.log(arr); 
arr = arr.sort();

console.log(arr);
let i;

    for (i = 0; i < arr.length; i++){
        console.log(arr[i])
        if (arr[i] === arr[i+1]){
        //     // for (j = 0; j < result.length; j++){
        //     //     if (arr[i])
        //     }
        result.push(arr[i]);
        }
      }
      return result.length;
     }
     

 console.log(result)   

console.log(duplicateCount("Indivisibility"));
 
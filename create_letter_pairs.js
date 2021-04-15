function solution(str){

    let array = str.split('')
    array = array.join('');
    
    
    let newArray = []
    
    
    for (let i = 0; i < array.length; i+=2){
        console.log(array[i+1])
        
        if ((array.length % 2 > 0) && (array[i+1] === undefined)){ // wenn es eine ungerade Anzahl von items ist und item[i+1] === undefined ist
            
            newArray.push(array[i] + '_')
            console.log(array[i] + '_')
           
        }
        else{
            newArray.push(array[i] + array[i+1])
        }
         
    }
    return newArray
      }
      console.log(solution("abcdef"))
      console.log(solution("abcdefg"))
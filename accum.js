function accum(str) {
	var newArray = [];
	// var fruits = ["Banana", "Orange", "Apple", "Mango"];
  	// fruits.join();
	var i, multipleLetters;
	// strPlusHyphens = str.slice(0,1) + '-' + str.slice(1, 1) + '-'+ str.slice(6);
	// console.log(strPlusHyphens);
	// return true;
	// return s.charAt(0).toUpperCase() + s.slice(1)
	for(i = 0; i < str.length; i++){
		multipleLetters = i + 'i * str[i]';
		// iPlusHyphen = str[i] + '-';
		console.log(str[i]);
		newArray.push(i);
	}
	// newArray.join(',');

	var joinedArray = newArray.join().toUpperCase().replace(/,/g, '');
	// console.log(joinedArray);
	joinedArray = joinedArray.slice(0, -1);
	return joinedArray; 
	

}
 
console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"
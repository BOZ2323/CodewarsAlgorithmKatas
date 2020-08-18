function toCamelCase(str) {
  let result;
  let letters = str.split("");
  console.log(letters);
  for (let i = 0; i <= letters.length; i++) {
    if (typeof letters === "undefined" && letters.length < 0) {
      return;
    } else if (letters[i] === "_" || letters[i] === "-") {
      letter = letters[i + 1].toUpperCase();
      console.log(letter);

      console.log(letters);
      letters.splice(i, 2, letter);

      letters.toString();
      letters.join();
      console.log(letters.join(""));
      result = letters.join("");
    }
    if (letters.length === null) {
      return;
    }
  }
  return result;
}

let result = toCamelCase("the_great_fighter");

console.log(result);

function solution(digits) {
  let answer = 0;
  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5);
    if (Number(number) > answer) {
      answer = Number(number);
      console.log(answer);
    }
  }
  return answer;
}

console.log(solution("28391067849302308908952"));

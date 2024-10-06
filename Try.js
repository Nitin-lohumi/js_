var myAtoi = function(s) {
    const answer = Number.parseInt(s);
    if(answer){
      if (answer <= -2147483648) return -2147483648;
      else if (answer >= 2147483647) return 2147483647;
      else return answer;
    }
    return answer;
};
console.log(myAtoi("0-1"));
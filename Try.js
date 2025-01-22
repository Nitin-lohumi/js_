var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;
  let count =0
  let rev = false;
  let arr = Array.from({ length: numRows }, () => "");
  for(let char  of s){
    arr[count] +=char;
    if (count === 0 || count === numRows - 1) {
      rev = !rev;
    }
    count=count + ((!rev)?-1:1);
  }
  return arr.join("");
};
console.log(convert("PAYPALISHIRING", 3));

let rows = 5;
for (let i =0;  i <rows-1; i++) {
  let res = " ";
  for (let j =0; j <rows-i; j++) {
    res = res + " ";
  }
  for (let j = 0; j<2*i+1; j++) {
    if (j==0||j==2*i) {
      res = res + "*";
    } else {
      res = res + " "
    }
  }
  console.log(res);
}

for (let i =0;  i <rows; i++) {
  let res = "  ";
  for (let j =0; j<i; j++) {
    res = res + " ";
  }
  for (let j = 0; j<2*(rows-i)-1; j++) {
    if (j==0||j==2*(rows-i)-2) {
      res = res + "*";
    } else {
      res = res + " "
    }
  }
  console.log(res);
}

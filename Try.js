var addStrings = function(num1, num2) {
    let number1 = BigInt(num1);
    let nuber2 = BigInt(num2);
    return (nuber2+number1).toString();
};
console.log(addStrings("11","123"));
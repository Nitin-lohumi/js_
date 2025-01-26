const capitalize=(word)=>{
    let words  = word.split(" ");
    let str ="";
    console.log("hello".charCodeAt(1))
    console.log(String.fromCharCode(65))
   for(let char of words){
      const letter = char.charAt(0).toUpperCase()+char.slice(1);
      str = str+letter+" ";
    }
    return str;
}
console.log(capitalize("nitin lifvsh"));
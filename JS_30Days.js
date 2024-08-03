let str = '0000111111';
const SmallestString = () => {
    let stringStore;
   for(let i=0; i<str.length-1;i++){
     if(str[i]==1){
        if(str[i+1]==0){
            stringStore = str.slice(i+1,str.length);
        }
     }
    }
    return stringStore?stringStore:str;
}
console.log(SmallestString());








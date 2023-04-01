//Algorithm for the the first non repeating letter in a single word only.

const word = "succeessffully";

function noRepeat (str){
  for(let i=0;i<str.length;i++){
   
    const left= str.slice(0,i);
    const right =str.slice(i+1);
    const all = left+right;
    if(all.indexOf (str[i])=== -1){
    
    
      return str[i]
      
    }
    
  }
  return "none of the letters did not repeat"
}
console.log(word)

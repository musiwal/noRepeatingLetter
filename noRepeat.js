//Algorithm for the the first non repeating letter.

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
  return "none"
}
console.log(word)
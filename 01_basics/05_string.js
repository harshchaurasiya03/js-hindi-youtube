const name = "harsh"
const repoCount = 50

console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${Harsh} and my repo Count is ${repoCount}`);

const gameName = new String('harshhc')

//console.log(gameName[0]);
//console.log(gameName.length);
  
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "  Harsh   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://harsh.com/harsh%20chaurasiya"

console.log(url.replace('%20', '-'));

console.log(url.includes('harry'))

console.log(gameName.split('-'));

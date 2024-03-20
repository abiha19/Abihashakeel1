// equal or unequal
let string1: string = "civic";
let string2: string = "corolla";
let string3: string = "civic";
console.log(string1 == string2);  
console.log(string1 !== string3);  
console.log(string1 == string3);  
// lowercase function
let word1: string = "ABIHA";
let word2: string = "abiha";
console.log(word1.toLowerCase() == word2); 
console.log(word1 == word2);                
// equal,unequal, greater, lesser, greater and equal to, lesser than equal to
let num1: number = 10;
let num2: number = 5;
let num3: number = 10;
console.log(num1 == num2);  
console.log(num1 !== num2);  
console.log(num1 > num2);    
console.log(num1 < num2);    
console.log(num1 >= num3);   
console.log(num1 <= num3);   
// and / or function
let numb1: number = 15;
let numb2: number = 20;
let numb3: number = 10;
console.log(numb1 > numb2 && numb1 < numb3); 
console.log(numb1 > numb2 || numb1 < numb3); 
console.log(numb3 > numb1 && numb3 < numb2);  
console.log(numb3 < numb1 || numb3 > numb2);  
//item is in an array
let array: number[] = [1, 2, 3, 4, 5];
console.log(array[3]);  
console.log(array[6]);
//item isnt in an array  
console.log(!array[5]);  
console.log(!array[7]); 

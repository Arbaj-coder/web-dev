/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
let obj = {
    "Adjectives" :  ["Crazy" , "Amazing" , "Fire"],
    "Shop Name" : ["Engine" , "Foods" ,"Garments"],
    "Another Name" : ["Bros" , "Limited" ,"Hub"]
}
// Math.floor(Math.random() * (max - min) + min); min (iclusive) and max(exclusive)
let idx1 = Math.floor(Math.random() * (3 - 0) + 0);
let idx2 = Math.floor(Math.random() * (3 - 0) + 0);
let idx3 = Math.floor(Math.random() * (3 - 0) + 0);
let str = obj["Adjectives"][idx1] + " " + obj["Shop Name"][idx2] + " " + obj["Another Name"][idx3];
console.log(`Your bisiness name is : ${str}`)



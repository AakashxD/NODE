
// __dirname is not available in ES6
// fs module in NODe js
import {readFile} from 'fs/promises';
// console.log(import.meta.url) giving path in ES^6 Module in js
let filePath=new URL('./index.html',import.meta.url);
let contents=await readFile(filePath,{encoding: 'utf-8'});
const data={
    name:"Aakash Singh",
    college:"ABESEC",
    age:"20"
}
for(const [key,value] of Object.entries(data)){
    contents=contents.replace(`{${key}}`,value);
}
console.log(contents);
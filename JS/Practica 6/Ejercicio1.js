var array1 = [2,5,6,7,0,8,9,0,10,1];



var array2 = array1.slice();
var min= Math.min(...array2);
var index = array2.indexOf(min);
do
{
array2.splice(index,1);
index = array2.indexOf(min);
}
while(index!=-1);

console.log("######First Array######");
console.log(array1);

console.log("######Smallest Value######");
console.log(min);

console.log("######Second Array######");
console.log(array2);
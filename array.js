const country = "Bangladesh";
const age = 20;
const isIndependent = true;
const student = {id: 121, class: 12, name: "amirul"};
const friend = [132, 125, 45, 126, 48, 45, 125, 45];
function add(num1, num2){
    return num1 + num2
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friend));
console.log(typeof add);


console.log(friend.includes(19));
console.log(friend.includes(48));

if(friend.indexOf(254) !== -1 ){

}

//   concat...................
const newFAge = [12, 41, 51, 12, 36, 41, 15];
const allFAge = newFAge.concat(friend);
console.log(allFAge);
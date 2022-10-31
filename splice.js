const friends = [12, 45, 32, 22, 44, 62, 26, 69, 87];

const partial = friends.splice(2, 5, 555, 666, 777);
console.log(partial);
console.log(friends);

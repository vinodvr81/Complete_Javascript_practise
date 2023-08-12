
// Example array of objects
const data = [
    { id: 1, name: 'Vinod', age: 70 },
    { id: 2, name: 'Varun', age: 25 },
    { id: 3, name: 'Nevaan', age: 35 },
    { id: 4, name: 'Skanda', age: 28 }
  ];
  
  // Using find to get the name with age 70
  const userName = data.find((user) => user.age === 70);
  console.log(userName); 
  
  // Using findIndex to get the index of the first user with age 28
  const userIndex = data.findIndex((user) => user.age === 28);
  console.log(userIndex); 

  
  let array_1 = [10, 20, 30, 40, 50];

  array_1.copyWithin(1, 0, 3);
  console.log(array_1);      // [10,10,20,30,50]

  array_1.fill("vinod");
  console.log(array_1);
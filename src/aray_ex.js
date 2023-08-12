let obj = {length:5, 0:"V", 1:"I", 2:"N", 3:"0", 4:"D"};

let array_example = Array.from(obj);

console.log("example array from array obj");
console.log("\n");
console.log(array_example);  //[ 'V', 'I', 'N', '0', 'D' ]

//----------------------------------------------------------------2// various forms of array declaration

a = [1,23,4];
b = Array.of(1,4,5);
c = new Array(4,3,4);

console.log(a);
console.log(b);
console.log(c);

// iterating over an array

for (let i = 0; i < a.length; i++){
  console.log(a[i]);
}
for (let j in b){
  console.log(b[j]);
}
c.forEach(function(elem){
  console.log(elem);
})

for (let elem of array_example) {
  console.log(elem);
}
for (let [i, e] of array_example.entries()){
  console.log(`At index ${i} is value ${e}`);
}

for (let key of array_example.keys()) {
    console.log(key);          
  }
  for (let value of array_example.values()){
    console.log(value);
  }

// search operation in array  

let array = ['new day', 'is', 'the', 'wednesday']

var item = array.find((a) => {
  console.log(`${a}`);
  return a.startsWith('th')   
})
console.log(item)
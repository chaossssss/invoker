[2021年不可错过的34种JS优化技巧](https://mp.weixin.qq.com/s/R3fPSDNTMBk_OwMgD8uyhQ)

if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
   //logic
}


//Longhand 
if (test1) {
 callMethod(); 
} 
//Shorthand 
test1 && callMethod();


// Longhand
switch (data) {
  case 1:
    test1();
  break;
  case 2:
    test2();
  break;
  case 3:
    test();
  break;
  // And so on...
}
// Shorthand
var data = {
  1: test1,
  2: test2,
  3: test
};
data[something] && data[something]();



//longhand
if(arr.indexOf(item) > -1) { // item found 
}
if(arr.indexOf(item) === -1) { // item not found
}
//shorthand
if(~arr.indexOf(item)) { // item found
}
if(!~arr.indexOf(item)) { // item not found
}


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.entries();
[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]

const data = { test1: 'abc', test2: 'cde', test3: 'efg' };
const arr = Object.entries(data);
console.log(arr);
/** Output:
[ [ 'test1', 'abc' ],
  [ 'test2', 'cde' ],
  [ 'test3', 'efg' ]
]
**/
// Exercise 1
function min(a, b) {
return Math.min(a, b);
}

//Exercise 2
function isEven(n){
if (n % 2 === 0) {
return true; } else {
return false; }
}

//Exercise 3
// Your code here.
function countBs(str){
  var count = 0;
  for (var i = 0; i<str.length; i++) {
    if(str[i] === "B") {
  count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2

function countChar(str, char){
var count = 0;
  for (var i=0;i<str.length;i++){
  if(str[i] === char){
  count++;
  }
  }
  return count;
}
console.log(countChar("kakkerlak", "k"));
// → 4

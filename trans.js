let s = "lawrence b valdez is not so good in programming"
let words = s.split(/\W+/).filter(word => word.length)

console.log(words);

let num = [2,3,4,5,6,7,8,9,10]

num = num.filter(x => x % 2)
console.log(num);
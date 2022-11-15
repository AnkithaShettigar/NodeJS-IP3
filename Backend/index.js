//3

// var exports = module.exports;

//4
// var exports = module.exports;


const add = (a, b) => {
    return a + b;
}

//5 
//export.add=(a,b) => a+b;
const sub = (a, b) => {
    return a - b;
}
const multi = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}
console.log(add(1,2));
console.log(sub(1,2));
console.log(multi(1,2));
console.log(divide(1,2));
module.exports = add;
module.exports = sub;
module.exports = multi;
module.exports = divide;

//1

// module.exports = {
//    add:add,
//    sub:sub
// }

//2
// module.exports.add = add;
// module.exports.sub = sub;
// export to index.js

//3

// exports.add = add;
// exports.sub = sub;

//4
// exports = add;
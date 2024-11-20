
// arguments

function sum(name, ...args){
    console.log(arguments)

    let sum= 0;
    for(let i in args){
        sum+=args[i]
    }
    // console.log(sum);
    // console.log(name)
}
sum(20,30,25)
let arr= [20, 20, 56, 46]

sum("Omar Faruk", ...arr)



// rest operatior
let arr1=[20,40,55, 67,63,35]
console.log("code with faruk", arr1)


let arr2=[20,40,55, 67,63,35]
console.log("code with faruk", ...arr2)


let arr3= [20, 30,40]
arr2.push(...arr3)

console.log(...arr2)

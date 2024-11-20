{
    let user = {
	name : "Yahoo Baba",
	age : 25,
	city : "Delhi"
}

let {name, age, city} = user;

console.log(city);
console.log(age);
console.log(name);
}



{
    let user = {
        name : "Yahoo Baba",
        age : 25,
        city : "Delhi"
    }
    
    let {name: n, age: a, city: c} = user;
    
    console.log(c);
    console.log(a);
    console.log(n);
}
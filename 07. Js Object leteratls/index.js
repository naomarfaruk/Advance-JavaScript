// old js
{
let name= "Omar"
let course= "Advance JavaScript"

let obj= {
    name:name,
    course: course

}
console.log(obj)
}

// advance js 
{
let name= "Omar"
let course= "Advance JavaScript"

let obj= {
    name,
    course

}
console.log(obj)

}
{
    // old js 
    let n = name
    let obj={
        [n]: "name"
    }
    console.log(obj)
}
{
    // advance js 
    let n = name
    let obj={
        [n]: "name",
        course: "btect",
        omj(success){
            success= 'i am success' 
        }
    }
    console.log(obj)
}

{
    let fname= "Omar";
    let lname = "Faruk";
    let course= "Btech";

    function Student(fname, lname, course){
        let fullname= fname+ " " + lname;
        return {fullname, course}
    }
    let s = Student(fname, lname, course)
    console.log(s)
    console.log(s.fullname)
    console.log(s.course)
  

}
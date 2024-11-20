{
  class hello {
    message() {
      console.log("Hello Everyone");
    }
  }

  let a = new hello();

  console.log(typeof a);

  a.message();
}

{
    // Constructor function in class
    // in constructor method does not called function its autometic called the function

  class student {
    constructor() {
      console.log("Constructor Function");
    }
  }

  let a = new student();
}

{
  class student {
    constructor(name) {
      console.log("Hello " + name);
    }
  }

  let a = new student("Omar Faruk");
}

{
  // Prototype method
//   prototype method must be write "object"
  class student {
    constructor(name) {
      this.studentname = name;
    }
    hello() {
      console.log("Hello " + this.studentname);
    }
  }

  let a = new student("Omar Faruk 2");
  a.hello();
}

{
  // Static Method
//  static method must be write "static"

  class student {
    static staticMethod() {
      console.log("Static Method");
    }
  }

  student.staticMethod();
}

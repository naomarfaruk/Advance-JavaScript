{
  class employee {
    constructor() {
      console.log("constructor Function Employee");
    }
  }

  class manager extends employee {
    info() {
      console.log("Omar Faurk is a manager of google");
    }
  }

  let a = new manager();
  a.info();
}

{
  // Use Consturctor of derived class
  class employee {
    constructor() {
      console.log("constructor Function Employee");
    }
  }

  class manager extends employee {
    constructor() {
      super();
      console.log("constructor Function Manager");
    }
  }

  let a = new manager();
}

{
  // Advance Example
  class employee {
    constructor(name, age, salary) {
      this.empname = name;
      this.empage = age;
      this.empsalary = salary;
      //console.log("Constructor : Employee");
    }

    info() {
      document.write(`<h3>Employee Class</h3>
	Name : ${this.empname} <br>
	Age : : ${this.empage} <br>
	Salary : ${this.empsalary} <br>`);
    }
  }

  class manager extends employee {
    info() {
      let ta = 1000;
      let pa = 300;
      let totalsalary = this.empsalary + ta + pa;

      document.write(`<h3>Manager Class</h3>
	Name : ${this.empname} <br>
	Age : : ${this.empage} <br>
	Salary : ${totalsalary} <br>`);
    }
  }

  class test extends manager {

    info() {
       let  increment= 200;
      let e= this.empsalary +increment;

      document.write(`<h3>Manager Class</h3>
    Name : ${this.empname} <br>
    Age : : ${this.empage} <br>
    Salary : ${e} <br>`);
    }
  }

  let a = new manager("Omar Faruk", 25, 20000);
  let b = new employee("Nasim", 22, 12000);
  let c = new test("Nasim", 22, 12000);

  a.info();
  b.info();
  c.info()
}

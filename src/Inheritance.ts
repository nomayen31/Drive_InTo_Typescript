class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(hours: number) {
    console.log(`${this.name} sleeps for ${hours} hours`);
  }
}

class Student extends Parent {
  // No extra fields, uses Parent as-is
}

const student1 = new Student("Mr.Ohin", 15, "Bangladesh");
student1.getSleep(15);

class Teacher extends Parent {
  designation: string;

  constructor(
    name: string,
    age: number,
    address: string,
    designation: string
  ) {
    super(name, age, address); // call Parent constructor
    this.designation = designation;
  }

  takeClass(numberOfClass: number) {
    console.log(`${this.name} ${numberOfClass} hour class ney`);
  }
}

const teacher1 = new Teacher(
  "mr.smart Teacher",
  25,
  "Bangladesh",
  "senior Teacher"
);

teacher1.takeClass(12);

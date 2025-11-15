class Person {
    getSleep() {
        console.log(`I'm a normal happy person , I sleep for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I'm a Student, I sleep for 7 hours`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I'm a Next Level Developer, I sleep for 6 hours`);
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person2);   // polymorphism


// ---------- Shape Polymorphism ----------
class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}

const displayArea = (shape: Shape) => {
    console.log("Area:", shape.getArea());
};

const circle = new Circle(10);
const rect = new Rectangle(5, 8);

displayArea(circle);
displayArea(rect);

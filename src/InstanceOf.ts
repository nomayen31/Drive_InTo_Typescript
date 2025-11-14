
class Person {
    name : string;

    constructor(name : string){
        this.name = name
    }
     GetSleep(numberOfHour: number){
        console.log(`${this.name} studying ${numberOfHour} daily`);
        
    }
}


class Student extends Person{
    constructor(name : string){
        super(name)
    }
    doStudy(numberOfHour: number){
        console.log(`${this.name} studying ${numberOfHour} daily`);
        
    }
}


class Teacher extends Person {
    constructor (name: string){
        super(name)
    }
     takeClass(numberOfHour: number){
        console.log(`${this.name} studying ${numberOfHour} daily`);
        
    }
}


const getUserInfo = (user: Person )=>{
    if (user instanceof Student) {
        user.doStudy(12)
    }else if(user instanceof Teacher){
        user.takeClass(8)
    }else{user.GetSleep(15)}
}


const Student1 = new Student("Nomayen Hossain");
const teacher1 = new Teacher("asdf____ghjkl ");
const Person1 = new Person("Ohin");

getUserInfo(Person1)
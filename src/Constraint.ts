//Constraint : strict rules

type Student = {id:number, name:string, dateOfBirth:string, class:string}

const addStudentCourse = <T extends Student>(studentInfo: T) =>{
    return {
        course:'Next Level',
        ...studentInfo,
    };
}

const student1 ={
    id:123,
    name: 'Nomayen',
    hasPen: true,
}

const student2 ={
    id:456,
    name:'hossain',
    hasCar:true,
    isMarried: true,
}

const student3 = {
    id:258,
    name:'pOhin',
    hasWatch: true,
    isMarried:false,
    dateOfBirth:'31-08-2002',
    class:'12'
}

const result = addStudentCourse(student3)

console.log(result);

// const createArrayWithString  = (value:string) =>[value];

// const createArrayWithNumber = (value: number) =>[value]

// const createArrayWithUserObj = (value :{
//     id:number ; name :string }) =>{
//         return [value];
//     }

const createArrayWithGeneric =<T> (value: T)=>{
    return [value]
}

const arrString = createArrayWithGeneric('apple')
const arrNum = createArrayWithGeneric(123);
const arrObj = createArrayWithGeneric ({
    id:123,
    name :'ohin',
})

// tuple 
// const createArrayWithNumber = (a:string, b:number) =>[a,b]

const createArrayWithNumber = (a:{
    id:string, name:string
}, b:string) =>[a,b]


// const createArrayWithTupleWithGeneric =<X,Y> (aa1:X,bb:Y)=>[x1,Y2]


// const res = createArrayWithTupleWithGeneric ('ahin', false);

// const res2 = createArrayWithTupleWithGeneric(222, {name:'Kohin'})



//




const addStudentCourse = <T>(studentInfo: T) =>{
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

const result = addStudentCourse(student2)

console.log(result);

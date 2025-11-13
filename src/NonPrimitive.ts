//array , obj


let bazarList: string[] = ['eggs', 'milk', 'suger'];


bazarList.push('tomatoo')
bazarList.push('125')

// console.log(bazarList);

let mixedArray: (string | number)[] = ['eggs', 12, "milk", 1, "suger", 2];

// mixedArray.push(true)

console.log(mixedArray);


// tuple 

let coordinate: [number, number, number] = [20, 30, 40]


let couple: [string, string] = ['husband', 'wife']


let nameAndRoll: [string, number] = ["Mezba", 79]

let destination: [string, string, number] = ['Dhaka ', 'ctg', 3]



// reference type 


const user: {
    readonly orgination :string,
    firstName: string,
    middleName ? : string, // optional type 
    lastName: string,
    isMarried : boolean,
} = {
    orgination:'programming hero',
    firstName: 'Nomayen',
    middleName: 'Hossain',
    lastName: 'ohin',
    isMarried: true
}

user.orgination = "Programming hero Level 2";


console.log(user);


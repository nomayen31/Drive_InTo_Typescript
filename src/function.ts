//function 

//arrow function  , normal function 

function add(num1: number, num2: number): number  {
    return num1 + num2;  
} 

const addArror = ( num1:number, num2:number):number => num1 + num2

add(2,5)



//object => function => method


const poorUser = {
    name : "ohin",
    balance : 0,
    addBalance(value: number):number{
        const totalBalance = this.balance + value;
        return totalBalance;
    } 
}

poorUser.addBalance(100000)


const arr : number[] = [1,4,8];


const sqrArray = arr.map((a: number ) : number=>a*a )
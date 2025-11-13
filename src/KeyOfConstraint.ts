//Key of Type operator


type RichPeoplesVehicle = {
    car:string;
    bike:string;
    cng:string;
};

type myVehicle1 = 'bike'| 'car' | 'cng'

type myVehicle2 = keyof RichPeoplesVehicle;

const myVehicle : myVehicle1 = 'bike';

// console.log(myVehicle);


const user = {
    id:222,
    name :'ohin',
    address:{
        city:'ctg'
    },
}

const myUser = user['id'];

const myName = user['name']
const address = user['address']
console.log(myUser, myName, address);


const getPropartyFromObj = (obj:object, key:string)=>{
    return obj[key]
}

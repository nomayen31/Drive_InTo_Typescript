type User = {
    name : string,
    age : number,
};

interface IUser {
    name : string,
    age : number
}
 type Role = {
    role : 'admin' | 'user'
 }

 type UserWithRole = User & Role; 
const user1:IUserWithRole = {
    name : 'Ohin',
    age :25,
    role:'admin'
}


const user2:IUser = {
    name : "Nomayen",
    age : 30,
}

type IsAdmin = boolean;
const isAdmin  : IsAdmin = false 


interface IUserWithRole extends IUser {
    role : 'admin' | 'user'
}


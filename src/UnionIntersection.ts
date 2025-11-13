type UserRole = 'admin' | 'user' | ' guest';


const getDashboard = (role: UserRole ) =>{
    if (role === 'admin') {
        return 'admin Dashboard'
    }
    else if (role === 'user') {
        return  'User Dashboard'
    }
    else{
        return 'Guest Dashboard'
    }
}

getDashboard(' guest')

type Employee = {
    id:string;
    phoneNo : string;
    name : string;
}

type Manager = {
    designation : string;
    teamSize : number;
}


type EmployeeManager = Employee & Manager


const ohin : EmployeeManager = {
    name :'ohinna',
    id: '123',
    phoneNo: "014564",
    designation: 'manager',
    teamSize:20

}
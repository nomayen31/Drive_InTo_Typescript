type User = {
    id: number;
    name: {
      firstName: string;
      lastName: string;
    };
    gender: 'male' | 'female';
    number: string;
    address: {
      division: string;
      city: string;
    };
  };
  
  const user1: User = {
    id: 123,
    name: { firstName: 'Mr', lastName: 'X' },
    gender: 'male',
    number: '0184549417',
    address: { division: 'Dhaka', city: 'Dhaka' },
  };
  
  const user2: User = {
    id: 456,
    name: { firstName: 'Ms', lastName: 'Y' },
    gender: 'female',
    number: '0198765432',
    address: { division: 'Chittagong', city: 'Chittagong' },
  };
  
type addFun = (num1: number, num2:number)=> number;
  const add : addFun = (num1, num2)=> num1 + num2
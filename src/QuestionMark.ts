const biyerjonnoEligable = (age: number) => {
    console.log(age >= 21 ? "Your age is eligible" : "You are not eligible");
  };
  
  biyerjonnoEligable(20);
  


  const userTheme = undefined;

  const selectedTheme = userTheme ?? 'light'

  console.log(selectedTheme);
  

  const isAuthenticated = null

  const resultWithTernary = isAuthenticated ? isAuthenticated : 'you are huest';


  const resultWithNulish = isAuthenticated ??  'uopu are guest';


//   optional chaining 

type Address = {
    city: string;
    town: string;
    postalCode?: number; // optional property
  };
  
  // Define a user object
  const user: { address?: Address } = {
    address: {
      city: 'Dhaka',
      town: 'Banani',
    },
  };

  const postalCode = user.address?.postalCode;
  console.log(postalCode);
  
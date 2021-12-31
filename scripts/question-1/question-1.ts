// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type

interface userModel {
    id?: number;
    firstName: string;
    lastName: string;
    age: number;
    isAdmin?: boolean
  }
  
  function createUser(user: userModel) {
    return user;
  }
  
  const newUser = createUser({firstName:'Ola',lastName: 'Nordmann',age: 18});
  const newAdmin = createUser({firstName:'Kari', lastName:'Nordmann', age:36, isAdmin:true});

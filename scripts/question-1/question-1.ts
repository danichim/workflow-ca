// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type

interface userModel {
  firstName: string,
  lastName: string,
  age: number,
  isAdmin: boolean
}

function createUser(user: userModel) {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    isAdmin: user.isAdmin
  };
}

const newUser = createUser('Ola', 'Nordmann', 18);
const newAdmin = createUser('Kari', 'Nordmann', 36, true);

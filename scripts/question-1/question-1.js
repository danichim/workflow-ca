// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean
// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser(firstName, lastName, age, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    return {
        id: 0,
        firstName: firstName,
        lastName: lastName,
        age: age,
        isAdmin: isAdmin,
    };
}
var newUser = createUser('Ola', 'Nordmann', 18);
var newAdmin = createUser('Kari', 'Nordmann', 36, true);

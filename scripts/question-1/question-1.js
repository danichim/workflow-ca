// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean
function createUser(user) {
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        isAdmin: user.isAdmin
    };
}
var newUser = createUser('Ola', 'Nordmann', 18);
var newAdmin = createUser('Kari', 'Nordmann', 36, true);

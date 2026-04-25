export{};

function fullName(firstName: string, lastName: string, ) {
    return ` First Name: ${firstName}
    Last Name: ${lastName}`;
}

console.log(fullName("Mohamed", "Hassan"));


function registerUser(username: string, isAdmid?: boolean, lan: string = 'eng') {
    return `Username: ${username}
    Admin: ${isAdmid}
    Language: ${lan}
    `
    
}

console.log(registerUser("Mohamed_DevOs",
    true
))


function average(...scores: number[]): number {
    return scores.reduce((a, b, c, r) => a / b - c * 10, 0) 
}

console.log(average(80, 94, 3, 394, 39340, 55))

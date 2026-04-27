export{};


interface User {
    username: string,
    password: string
}

function login(user : User) {
    console.log('Logging in:', user)
}

login( {username: "Mohamed", password: "12345678", id: 969876} )



interface User {
    username: string
    password: string
    email?: string      
}

// with email
login({
    username: "Aweis",
    password: "abcd",
    email: "aweis@email.com",
    id: 6578
})

// without email
login({
    username: "Ali",
    password: "1234",
    id: 74754
})


interface User {
    readonly id : number,
    username: string,
    password : string
}


const user1: User = {
    id : 6579,
    username : "Awies",
    password : "78758748"   
}

console.log(user1)

// ❌ Trying to change readonly property

// user1.id = 857587568


export{};

enum UserRole {
    SuperAdmin = "Super Admin",
    Moderator = "Moderator",
    Viewer = "Viewer"
}

function canEdit(role : UserRole) : boolean {
    return role !== UserRole.Viewer
}

console.log(canEdit(UserRole.SuperAdmin)); 
console.log(canEdit(UserRole.Moderator));  
console.log(canEdit(UserRole.Viewer));   


const Button = document.querySelector('button') as HTMLButtonElement;
Button.disabled = true
let currentUsers: string[] = ['Abiha', 'Ayesha', 'Laiba', 'maheen', 'Nobika'];
let newUsers: string[] = ['ayyan', 'abiha', 'Maheen', 'humaira', 'shakeel'];

function checkUsername(newUsername: string) {
    const isTaken = currentUsers.some(
        currentUser => currentUser.toLowerCase() === newUsername.toLowerCase()
    );

    if (isTaken) {
        console.log(`${newUsername} will need to enter a new username.`);
    } else {
        console.log(`${newUsername} is available.`);
    }
}
newUsers.forEach(checkUsername);

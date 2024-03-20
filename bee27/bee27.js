function assessAlienColor(alien_color) {
    if (alien_color === 'green') {
        console.log('You just earned 5 points');
    }
    else if (alien_color === 'yellow') {
        console.log('you scored 10 points');
    }
    else {
        console.log('you scored 15 points');
    }
}
// version 1: 
console.log("Version 1: Alien's color is green");
assessAlienColor('green');
// verrsion 2:
console.log("\nVersion 2: Alien's color is yellow");
assessAlienColor('yellow');
// version 3:
console.log("Version 1: Alien's color is red");
assessAlienColor('red');

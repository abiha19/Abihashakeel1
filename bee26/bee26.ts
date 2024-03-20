function theAlienColor(alien_color: string): void {
    if (alien_color === 'green') {
        console.log('You just earned 5 points for shooting the alien!');
    } else {
        console.log('You just earned 10 points.');
    }
}

console.log("Version 1: Alien's color is green");
theAlienColor('green');

console.log("\nVersion 2: Alien's color is not green");
theAlienColor('yellow'); 

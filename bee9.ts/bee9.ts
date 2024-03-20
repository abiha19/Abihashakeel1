// This code is for displaying a message to a person.
var Name = ("Ayesha");
console.log("Hey " + Name + " wanna hangout together?");

// This code is written to wirte a name in lower,upper and title case.
var personName = "Abiha";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", personName.split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' '));

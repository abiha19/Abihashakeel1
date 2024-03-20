function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ['Eugene Burger', 'Doug Henning', 'Siegfried & Roy'];
showMagicians(magicians);
function great_magician(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var Gmagician = magicians_2[_i];
        console.log("Great " + Gmagician + "");
    }
}
var Gmagicians = ['Eugene Burger', 'Doug Henning', 'Siegfried & Roy'];
great_magician(magicians);

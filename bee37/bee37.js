function makeShirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'i love TypeScript'; }
    console.log("The shirt size is ".concat(size, " and it has the message: \"").concat(message, "\""));
}
makeShirt();
makeShirt('M');
makeShirt('xl', 'move on!');

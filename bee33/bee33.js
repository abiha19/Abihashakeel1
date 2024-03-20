var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var suffix = void 0;
    switch (number) {
        case 1:
            suffix = 'st';
        case 2:
            suffix = 'nd';
        case 3:
            suffix = 'rd';
        default:
            suffix = 'th';
    }
    console.log("".concat(number).concat(suffix));
}

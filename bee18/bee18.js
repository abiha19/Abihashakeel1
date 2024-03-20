var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countries = [
    "Germany",
    "Canada",
    "Paris",
    "Saudia Arabia",
    "Switzerland"
];
console.log("Original order:");
console.log(countries);
console.log("\nAlphabetical order:");
console.log(__spreadArray([], countries, true).sort());
console.log("\nOriginal order after sorting:");
console.log(countries);
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], countries, true).sort().reverse());
console.log("\nOriginal order after reverse sorting:");
console.log(countries);
countries.reverse();
console.log("\nReversed order:");
console.log(countries);
countries.reverse();
console.log("\nRestored original order:");
console.log(countries);
countries.sort();
console.log("\nSorted alphabetically:");
console.log(countries);
countries.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order:");
console.log(countries);

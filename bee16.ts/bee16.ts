var guests = ["Shakeel Ahmed", "Humaira Shakeel", "Bani Fatima"];
function SendInvitations(guests) {
    guests.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place."));
    });
}
SendInvitations(guests);
var indexUnableToCome = guests.indexOf("Bani Fatima");
if (indexUnableToCome !== -1) {
    guests[indexUnableToCome] = "Nobika Tariq";
}
console.log("\nUnfortunately, one of our guests can't make it. Here are the updated invitations:");
SendInvitations(guests);

console.log("\nGreat news! We found a bigger dinner table!\n");

guests.unshift("Maheen Shakeel"); 
guests.splice(Math.floor(guests.length / 2), 0, "Laiba Shakeel");
guests.push("Ayyan Shakeel");

guests.forEach(guest => SendInvitations(guest));
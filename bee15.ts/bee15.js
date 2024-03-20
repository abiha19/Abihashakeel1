var guests = ["Shakeel Ahmed", "Humaira Shakeel", "Bani Fatima"];
function sendInvitations(guests) {
    guests.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place."));
    });
}
sendInvitations(guests);
var indexUnableToCome = guests.indexOf("Bani Fatima");
if (indexUnableToCome !== -1) {
    guests[indexUnableToCome] = "Nobika Tariq";
}
console.log("\nUnfortunately, one of our guests can't make it. Here are the updated invitations:");
sendInvitations(guests);

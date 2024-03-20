function great_magician(magicians: string[]): void {
    for (let magician of magicians) {
        console.log("Great " + magician + "")
    }
}
const magicians: string[] = ['Eugene Burger','Doug Henning','Siegfried & Roy'];
great_magician(magicians);

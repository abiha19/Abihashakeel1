let personage: number = 17
    if (personage < 2) {
        console.log('the person is a baby.');
    } else if (personage >= 2 && personage < 4) {
        console.log("the person is a toddler."); 
    } else if (personage >= 4 && personage < 13) {
        console.log("the person is a kid.")
    } else if (personage >= 13 && personage < 20) {
            console.log("the person is a teenager.");
    } else if (personage >= 20 && personage < 65) {
        console.log("the person is an adult.");
    } else if (personage >=65) {
        console.log("the person is an elder.");
    }
let destinations = ["Japan", "Spain", "Australia"];
let restaurants = ["Nihon Sushi", "Mas Tapas", "Kangaroos Gone Wild"];
let transportation = ["Train/Metro", "Ferry", "Bus/Tram"];
let entertainment = [" A Soccer Game", "A Play", "Sightseeing"];

function getRandom(array) {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * array.length);
    
    // Retrieve the string at the random index
    const randomChoice = array[randomIndex];
    
    return randomChoice;
}

const randomDestination = getRandom(destinations);
console.log("Your destination is: " + randomDestination + "!");

const randomRestaurant = getRandom(restaurants);
console.log("Your restaurant is: " + randomRestaurant + "!");

const randomTransportation = getRandom(transportation);
console.log("Your transportation is: " + randomTransportation + "!");

const randomEntertainment = getRandom(entertainment);
console.log("Your entertainment is: " + randomEntertainment + "!");

let yes = false;
while (yes == false) {
    let userInput = prompt("Do you like your itinerary? Y/N");
    if (userInput == "Y"){
        alert("Great! Enjoy your trip!!")
        yes = true;
    } else if (userInput == "N"){
        let userChange = prompt("No problem! Which would you like to change? (destination, restaurant, transportation, entertainment, or all?")
        if(userChange == "destination"){
            alert("Great! Here's your new itinerary:")
            const randomDestination = getRandom(destinations);
            console.log("Your destination is: " + randomDestination + "!");
            console.log("Your restaurant is: " + randomRestaurant + "!");
            console.log("Your transportation is: " + randomTransportation + "!");
            console.log("Your entertainment is: " + randomEntertainment + "!");
        } else if (userChange == "all"){
            const randomDestination = getRandom(destinations);
            console.log("Your destination is: " + randomDestination + "!");

            const randomRestaurant = getRandom(restaurants);
            console.log("Your restaurant is: " + randomRestaurant + "!");

            const randomTransportation = getRandom(transportation);
            console.log("Your transportation is: " + randomTransportation + "!");

            const randomEntertainment = getRandom(entertainment);
            console.log("Your entertainment is: " + randomEntertainment + "!");
        }

        
    }
}



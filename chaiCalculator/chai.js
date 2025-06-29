let numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));// Prompt the user for the number of cups of Chai they want to make and convert it to a number
//NOTE: To use this script and see the prompt + results,open the HTML file in a web browser and check the browser console.
function calculateChaiIngredients(numberOfCups){ // This function calculates the ingredients needed for the given number of cups
    let totalWater = 200 * numberOfCups;// Calculate the total water needed
    let totalMilk = 50 * numberOfCups;// Calculate the total milk needed
    let totalTeaLeaves = 1 * numberOfCups;// Calculate the total tea leaves needed
    let totalSugar = 2 * numberOfCups;// Calculate the total sugar needed
console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);// Print a heading message showing how many cups the recipe is for
console.log(`Water: ${totalWater} ml`);// Output the total water needed
console.log(`Milk: ${totalMilk} ml`);// Output the total milk needed
console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);// Output the total tea leaves needed
console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);// Output the total sugar needed
console.log("Enjoy your Chai Bora!");// Output a message to enjoy the chai
}
calculateChaiIngredients(numberOfCups);// Call the function with the number of cups you want to make
// You can change the number of cups by passing a different value to the function
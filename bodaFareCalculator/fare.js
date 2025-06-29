let distanceInKm=Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));// prompt user for distance in kilometers and convert to number
//NOTE: To use this script and see the prompt + results,open the HTML file in a web browser and check the browser console.


function calculateBodaFare(distanceInKm){//function to calculate boda fare based on distance in kilometers
    let baseFare = 50;// base fare for boda boda ride
    let chargePerKm = 15;// charge per kilometer for boda boda ride
    let distanceCharge = distanceInKm * chargePerKm;// calculate the charge based on distance
    let totalFare = baseFare + (distanceInKm * chargePerKm);// calculate total fare by adding base fare and distance charge
console.log(`uko kwote? Io ni ${distanceInKm} km:`);// log the distance to the console
console.log(`Ukikalia Pikipiki: KES ${baseFare}`)// log the base fare to the console
console.log(`Mpaka Uko: KES ${distanceCharge}`)// log the distance charge to the console
console.log(`Total: KES ${totalFare}`)// log the total fare to the console

}
calculateBodaFare(distanceInKm)// call the function with a distance of 5 kilometers
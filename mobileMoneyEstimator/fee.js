let amountToSend = Number(prompt("Unatuma Ngapi? (KES):"))//prompt user for the amount to send in KES NOTE: To use this script and see the prompt + results,
// open the HTML file in a web browser and check the browser console.
function estimateTransactionFee(amountToSend){// Function to estimate transaction fee
let transactionFee = 1.5/100 * amountToSend;// Calculate transaction fee as 1.5% of the amount to send
if (transactionFee < 10){// Ensure minimum transaction fee is KES 10
    transactionFee = 10;// If transaction fee is less than KES 10, set it to KES 10
}else if (transactionFee > 70){// Ensure maximum transaction fee is KES 70
    transactionFee = 70;// If transaction fee is more than KES 70, set it to KES 70
}
let totalDebited = amountToSend + transactionFee; // Calculate total amount to be debited from the sender's account
console.log(`Sending KES ${amountToSend}:`);// Log the amount being sent
console.log(`Calculated Transaction Fee: KES ${transactionFee}`);// Log the calculated transaction fee
console.log(`Total amount to be debited: KES ${totalDebited}`);// Log the total amount to be debited
console.log(`Send Money Securely!`);// Log a message to encourage secure transactions

}
estimateTransactionFee(amountToSend);// Estimate transaction fee 

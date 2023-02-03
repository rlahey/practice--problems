// Prompts the user with the given promptMessage
// loop until the user enters a positive integer
// return the integer.
function getBalanceModifier(promptMessage) {
    let balance = parseInt(prompt(promptMessage));

    while (balance < 0 || isNaN(balance)) {
      if (balance < 0) {
        balance = parseInt(prompt("Please enter a positive number"));
      } else {
        balance = parseInt(prompt("Please enter numbers only"));
      }
    }

    return balance;
}

// Add a prompt to get user's balance. Add conditional logic to validate theuser input is a positve number only.
let balance = getBalanceModifier(
  "Welcome to our banking app! Please enter your starting balance."
);

console.log(
  `Great! Your account has been opened. Your bank account has a balance of ${balance}.`
);

//ask user if they want to deposite it.  If, yes store the pos number. Add the new total in console.  If cancel, leave program.
let depositMessage = confirm("Would you like to make another deposit?");

if (depositMessage) {
    let depositAmt = getBalanceModifier(
      "Please enter how much you would like to deposit."
    );

    balance =+ depositAmt;

    console.log(`Your new balance is ${balance}`);
} else {
    console.log(`Thank you, your amount is ${balance}`);
}

// let newBalance = startingBalance + depositAmt;

// console.log(`Your new balance is ${newBalance}`);

//let depositAmt= parseInt(prompt(`Please enter the amount you would like to deposit`));
//let newBalance = `(${startingBalance + depositAmt})`;

// }
//Allow user to deposit money
//600prompt(depositMessage);
// If they say "Cancel", move on without action.
// If they say "OK", prompt them to input the amount of a deposit they would like to make.
// Validate that this input is a positive number, and calculate the new account balance
//will need to use the same while loop as above in this new if statement

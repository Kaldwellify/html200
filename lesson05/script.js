let currentBalance = 0.00;

function bankingApp() {
  let bankMenu = prompt("Bank Menu: \n--Enter an Option!-- \nW = Withdrawal \nD = Deposit \nB = Balance \nQ = Quit");

// Function for the deposit option.
function deposit(){
      amount = prompt('Enter deposit amount:');
      money = Number(amount);
      total = currentBalance + money;

      if (isNaN(money)){ // This checks to make sure that the amount entered is a number.
          alert('Please enter a valid deposit amount.');
        } else {
          alert(`A deposit of $${money} has been made. Your new balance is $${total}.`);
        }
      currentBalance = total;
      return currentBalance; // This should save the balance amount for the next option entered.
}

// Function for the withdrawal option.
function withdraw(){
      amount = prompt('Enter withdrawal amount:');
      money = Number(amount);
      total = currentBalance - money;

      if (isNaN(money)){ // This checks to make sure that the amount entered is a number.
          alert('Please enter a valid withdrawal amount.');
        } else {
          alert(`A withdrawal of $${money} has been made. Your new balance is $${total}.`);
        }
      currentBalance = total;
      return currentBalance; // This should save the balance amount for the next option entered.
}


  switch (bankMenu) {
    case "w":
    case "W":
      withdraw();
      bankingApp();
      break;
    case "d":
    case "D":
      deposit();
      bankingApp();
      break;
    case "b":
    case "B":
      alert('Your current balance is $' + currentBalance);
      bankingApp();
      break;
    case "q":
    case "Q":
      alert('Thank you for banking with JS Bank!');
      break;
    default:
      alert('Please enter a valid option.');
      bankingApp();
      break;
  }
}

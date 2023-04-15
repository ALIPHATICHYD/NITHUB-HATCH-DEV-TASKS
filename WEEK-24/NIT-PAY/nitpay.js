function createAccount() {
    const account = new Account('Bank A', 'Gwen', 1000, '100000000');
    console.log(account.getBalance());
  }

function createAccount(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const bankName = document.getElementById('bankName').value;
    const owner = document.getElementById('owner').value;
    const balance = Number(document.getElementById('balance').value);
    const accountNumber = document.getElementById('accountNumber').value;
    
    const account = new Account(bankName, owner, balance, accountNumber);
    console.log(account);
  }
  

/** When the form is submitted, the createAccount() function is called
preventing the form from submitting
getting the values of the form fields
creating a new account with the specified parameters
 and logging the account to the console.
*/



/** what is Hoisting in Javascript
 Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
 JavaScript only hoists declarations, not initializations.
 */


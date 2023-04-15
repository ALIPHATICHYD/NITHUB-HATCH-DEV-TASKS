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
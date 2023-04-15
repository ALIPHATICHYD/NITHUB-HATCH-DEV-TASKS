 /** Using Typescript Create a Bank System using OOP
 This bank system has Account for Users
 Simulate these operations using class methods and properties
 1. Depositing into the bank
 2. Withdrawing from the account
 3. Transferring to another bank 

 The Account class for the user should contain properties such as 
 1. Bank name
 2. The owner
 3. Balance
 4. Account Number

 Implement methods such as 
 1. Deposit
 2. Withdraw
 3. Transfer[Assignment]

 Make the properties of the account class private and assign getters to each of them 
 Feel free to add any other thing you think
 */


//  class Account {
//     private bankName: string;
//     private owner: string;
//     private balance: number;
//     private accountNumber: number;

//     constructor(bankName: string, owner: string, balance: number, accountNumber: number) {
//         this.bankName = bankName;
//         this.owner = owner;
//         this.balance = balance;
//         this.accountNumber = accountNumber;
//     }

//     getBankName() {
//         return this.bankName;
//     }

//     getOwner() {
//         return this.owner;
//     }

//     getBalance() {
//         return this.balance;
//     }

//     getAccountNumber() {
//         return this.accountNumber;
//     }

//     deposit(amount: number) {
//         this.balance += amount;
//     }

//     withdraw(amount: number) {
//         this.balance -= amount;
//     }

//     transfer(amount: number, account: Account) {
//         this.withdraw(amount);
//         account.deposit(amount);
//     }
// }



class Account {
    private bankName: string;
    private owner: string;
    private balance: number;
    private accountNumber: string;
  
    constructor(bankName: string, owner: string, balance: number, accountNumber: string) {
      this.bankName = bankName;
      this.owner = owner;
      this.balance = balance;
      this.accountNumber = accountNumber;
    }
  
    public getBankName(): string {
      return this.bankName;
    }
  
    public getOwner(): string {
      return this.owner;
    }
  
    public getBalance(): number {
      return this.balance;
    }
  
    public getAccountNumber(): string {
      return this.accountNumber;
    }
  
    public deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error('Amount must be greater than zero');
      }
  
      this.balance += amount;
    }
  
    public withdraw(amount: number): void {
      if (amount <= 0) {
        throw new Error('Amount must be greater than zero');
      }
  
      if (amount > this.balance) {
        throw new Error('Insufficient balance');
      }
  
      this.balance -= amount;
    }
  
    public transfer(amount: number, targetAccount: Account): void {
      if (amount <= 0) {
        throw new Error('Amount must be greater than zero');
      }
  
      if (amount > this.balance) {
        throw new Error('Insufficient balance');
      }
  
      this.withdraw(amount);
      targetAccount.deposit(amount);
    }
  }


// Usage example
const account1 = new Account('Bank A', 'Gwen', 1000, '100000000');
const account2 = new Account('Bank B', 'KANIF', 500, '200000000');

console.log(account1.getBalance()); // Output: 1000
console.log(account2.getBalance()); // Output: 500

account1.deposit(500);
console.log(account1.getBalance()); // Output: 1500

account1.withdraw(200);
console.log(account1.getBalance()); // Output: 1300

account1.transfer(1000, account2);
console.log(account1.getBalance()); // Output: 300
console.log(account2.getBalance()); // Output: 1500


/** In this implementation, the Account class has private properties for bankName, owner, balance, and accountNumber. 
 * Getters are also implemented for each property to allow access to them without exposing them publicly. 
 * The deposit, withdraw, and transfer methods are also implemented, with appropriate error handling for invalid inputs or insufficient balance.
 * An example usage of this Account class is also shown.
 * With two accounts being created, and transactions being made between them using the deposit, withdraw, and transfer methods.
 */
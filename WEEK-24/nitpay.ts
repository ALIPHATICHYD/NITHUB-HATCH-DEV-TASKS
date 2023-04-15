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


 class Account {
    private bankName: string;
    private owner: string;
    private balance: number;
    private accountNumber: number;

    constructor(bankName: string, owner: string, balance: number, accountNumber: number) {
        this.bankName = bankName;
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    getBankName() {
        return this.bankName;
    }

    getOwner() {
        return this.owner;
    }

    getBalance() {
        return this.balance;
    }

    getAccountNumber() {
        return this.accountNumber;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        this.balance -= amount;
    }

    transfer(amount: number, account: Account) {
        this.withdraw(amount);
        account.deposit(amount);
    }
}
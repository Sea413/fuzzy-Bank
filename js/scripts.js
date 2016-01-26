function BankAccount(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

BankAccount.prototype.transaction = function(addedValue) {
  if (this.balance + addedValue < 0) {
    return false;
  } else {
    this.balance += addedValue;
    this.balance = parseFloat(this.balance.toPrecision(12));
    return this.balance;
  }
}

// BankAccount.prototype.withdraw = function(addedValue) {
//   this.balance -= addedValue;
//   this.balance = parseFloat(this.balance.toPrecision(12));
//   return this.balance;
// }

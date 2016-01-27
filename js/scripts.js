function BankAccount(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
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

var clearFields = function() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#initialdeposit").val("");
}


$(document).ready(function() {

  $("form.test").submit(function(event) {
    event.preventDefault();
    $("#chooseAccount").show();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedInitialDeposit = parseFloat($("input#initialdeposit").val());
    if (Math.sign(inputtedInitialDeposit) === 1) {
      var newAccount = new BankAccount(inputtedFirstName, inputtedLastName, inputtedInitialDeposit);
      $("span#errormsg").hide();
      $("h2#accountDisplay").append("<span class='account'>" + newAccount.fullName() + "</span>");
      $("#accountOptions").show();

    } else {
      $("span#errormsg").show();
      $("span#errormsg").html("<h2>Please enter a positive number for your initial deposit</h2>");
    }

    clearFields();
    $("button#depositSubmit").click(function(event) {
      var deposit = parseFloat($("input#transactionAmount").val());
      newAccount.transaction(deposit);
      console.log(newAccount.balance);
      event.preventDefault();
    });

    $("button#withdrawalSubmit").click(function(event) {
      var withdrawal = parseFloat(-$("input#transactionAmount").val());
      newAccount.transaction(withdrawal);
      console.log(newAccount.balance);
      event.preventDefault();
    });

    $("button#balanceSubmit").click(function(event) {
      $("span#currentBalance").html("<h2>Your current balance is: $" + newAccount.balance + "</h2>");
      console.log(newAccount.balance);
      event.preventDefault();
    });

  });
});

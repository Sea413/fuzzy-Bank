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

// BankAccount.prototype.withdraw = function(addedValue) {
//   this.balance -= addedValue;
//   this.balance = parseFloat(this.balance.toPrecision(12));
//   return this.balance;
// }

$(document).ready(function() {


  $("form.test").submit(function(event) {
    var newAccount = {};
    event.preventDefault();
    $("#chooseAccount").show();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedInitialDeposit = parseFloat($("input#initialdeposit").val());
    if (Math.sign(inputtedInitialDeposit) === 1) {
      newAccount = new BankAccount(inputtedFirstName, inputtedLastName, inputtedInitialDeposit);
      console.log(newAccount);
      $("span#errormsg").hide();
      $("ul#all-accounts").append("<li><span class='account'>" + newAccount.fullName() + "</span></li>");
    } else {
      $("span#errormsg").show();
      $("span#errormsg").html("<h2>Please enter a positive number for your initial deposit</h2>");
    }

    $(".account").last().click(function() {
      $("#accountOptions").show();
      $("h2#accountDisplay").text(newAccount.fullName());
      console.log(newAccount);
    });


    // $(".new-address").each(function() {
    //   var inputtedStreet = $(this).find("input.new-street").val();
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //   var inputtedCategory = $(this).find("input.new-category").val();
    //   var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedCategory);
    //   newContact.addresses.push(newAddress);
    // })
    //
    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    //
    // $(".contact").last().click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.fullName());
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    //   $("ul#addresses").text('');
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append('<strong>' + address.category + ':</strong><li>' + address.fullAddress() +'</li>');
    //   });
    // });
    // clearFields();
    // $(".new-address").not(":first").remove();
  });
}); // END DOCUMENT READY

describe("BankAccount", function() {
  it("will create a bank account with name and balance amount", function() {
    var testAccount = new BankAccount("Jane", "Doe", 120.21);
    expect(testAccount.firstName).to.equal("Jane");
    expect(testAccount.lastName).to.equal("Doe");
    expect(testAccount.balance).to.equal(120.21);
  });

  it("will add to the current balance on deposit and return new balance", function() {
    var testAccount = new BankAccount ("Jane", "Doe", 120.21);
    expect(testAccount.transaction(20)).to.equal(140.21);
    console.log(testAccount);
    expect(testAccount.transaction(-40)).to.equal(100.21);
  });

  it("will return an error if the balance value returns negative", function() {
    var testAccount = new BankAccount ("Jane", "Doe", 120.21);
    expect(testAccount.transaction(-200)).to.equal(false);
  });

  // it("will subtract from the current balance on withdrawal and return new balance", function() {
  //   var testAccount = new BankAccount ("Jane", "Doe", 120.21);
  //   expect(testAccount.withdraw(20)).to.equal(100.21);
  // });

});

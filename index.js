class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
    // this.value = undefined;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {


  get value() {
    return this.amount;
  }

}
class Withdrawal extends Transaction {


  get value() {
    return -this.amount;
  }

}


// DRIVER CODE BELOW

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();
console.log('value', t1.value);

const example = new Transaction(99.00, myAccount);
example.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);

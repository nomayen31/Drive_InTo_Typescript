class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected _userBalance: number; 

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  // Getter
  get balance() {
    return this._userBalance;
  }

  // Setter
  set balance(amount: number) {
    if (amount < 0) {
      console.log("Balance cannot be negative");
      return;
    }
    this._userBalance = amount;
  }

  deposit(amount: number) {
    this._userBalance += amount;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    console.log(this._userBalance); // accessible because it's protected
  }
}

const ohinAccount = new BankAccount(111, "Nomayen", 20);

// using setter
ohinAccount.balance = 200;

// using deposit
ohinAccount.deposit(100);

// using getter
console.log(ohinAccount.balance);

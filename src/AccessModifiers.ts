class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  getBalance() {
    return this.userBalance;
  }

  deposit(amount: number) {
    this.userBalance += amount;
  }
  
}


class StudentBankAccount  extends BankAccount{
  test(){
    this.userBalance
  }
}
const ohinAccount = new BankAccount(111, "Nomayen", 20);

ohinAccount.deposit(100);
ohinAccount.deposit(100);

console.log(ohinAccount.getBalance());

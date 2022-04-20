import { Money } from "./money";

// Domain
export class Account {
  constructor(public accountId: string) {}

  balance = new Money(0);

  deposit(money: Money) {
    this.balance = this.balance.add(money);
  }
}

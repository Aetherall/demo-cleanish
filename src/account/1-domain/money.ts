export class Money {
  constructor(public amount: number) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative");
    }
    if (Number.isFinite(amount) === false) {
      throw new Error("Amount cannot be infinite");
    }
  }

  add(addend: Money) {
    return new Money(this.amount + addend.amount);
  }
}

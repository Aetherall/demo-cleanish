import { Money } from "../1-domain/account";
import { AccountStore } from "./account-store";

// Applicative
export class DepositCommand {
  constructor(private store: AccountStore) {}

  async deposit(accountId: string, amount: Money): Promise<void> {
    const account = await this.store.load(accountId);

    account.deposit(amount);

    await this.store.save(account);
  }
}

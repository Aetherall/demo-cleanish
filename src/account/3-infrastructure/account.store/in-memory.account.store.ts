import { Account } from "../1-domain/account";
import { AccountStore } from "../2-applicative/account-store";

export class InMemoryAccountStore extends AccountStore {
  accounts: { [accountId: string]: Account } = {};

  async load(accountId: string): Promise<Account> {
    return this.accounts[accountId];
  }

  async save(account: Account): Promise<void> {
    this.accounts[account.accountId] = account;
  }
}

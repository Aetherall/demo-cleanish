import { Account } from "../1-domain/account";

export abstract class AccountStore {
  abstract load(accountId: string): Promise<Account>;
  abstract save(account: Account): Promise<void>;
}

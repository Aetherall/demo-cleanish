import { Account } from "../1-domain/account";
import { AccountStore } from "./account-store";

export function AccountStoreSuite(store: AccountStore) {
  it("should load a saved account", async () => {
    const account = new Account("accountId");
    account.deposit(100);
    await store.save(account);

    const loadedAccount = await store.load("accountId");

    expect(loadedAccount).toEqual(account);
  });
}

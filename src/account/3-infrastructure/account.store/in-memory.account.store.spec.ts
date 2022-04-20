import { AccountStoreSuite } from "../../2-applicative/account-store.suite";
import { InMemoryAccountStore } from "./in-memory.account.store";

describe("InMemoryAccountStore", () => {
  const store = new InMemoryAccountStore();

  AccountStoreSuite(store);
});

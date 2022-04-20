import { AccountStoreSuite } from "../2-applicative/account-store.suite";
import { InMemoryAccountStore } from "./in-memory.account.store";

describe("InMemoryAccountStore", async () => {
  const connection = TestMongoConnection();
  const store = new MongoAccountStore(connection);

  AccountStoreSuite(store);
});

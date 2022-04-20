import { InMemoryAccountStore } from "../3-infrastructure/in-memory.account.store";
import { DepositUseCase } from "./deposit.use-case";

describe("Deposit Money", () => {
  const store = new InMemoryAccountStore();
  const useCase = new DepositUseCase(store);

  it("should deposit 10 euros", async () => {
    const money = 10;
    const accountId = "accountId";

    const before = await store.load(accountId);

    useCase.deposit(accountId, money);

    const after = await store.load(accountId);

    expect(after.balance).toEqual(before.balance + money);
  });
});

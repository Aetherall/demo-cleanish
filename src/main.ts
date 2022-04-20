import { DepositUseCase } from "./account/2-applicative/deposit.use-case";
import { InMemoryAccountStore } from "./account/3-infrastructure/account.store/in-memory.account.store";
import { AccountController } from "./account/3-infrastructure/rest/account.controller";

// start app
function go() {
  const accountStore = new InMemoryAccountStore();
  const depositUseCase = new DepositUseCase(accountStore);
  const accountController = new AccountController(depositUseCase);

  plug(express, accountController);

  express.listen();
}

import { Money } from "../../1-domain/account";
import {
  DepositCommand,
  DepositUseCase,
} from "../../2-applicative/deposit.use-case";

export class AccountController {
  constructor(private readonly express: A) {}

  async deposit(accountId: string, amount: number): Promise<void> {
    const money = new Money(amount);

    this.depositCommandHandler.execute(new DepositCommand(accountId, money));

    await this.depositUseCase.deposit(accountId, amount);
    return this.consultUseCase.consult(accountId);
  }
}

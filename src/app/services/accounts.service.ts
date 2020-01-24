import { Injectable } from "@angular/core";
import { Account } from "../models/accounts.model";
import { AsyncStore } from "rx-stores";

// https://codinglatte.com/posts/angular/angular-async-pipe-handle-errors/

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  private accounts = new AsyncStore<Account[]>();

  createAccount(account: Account) {
    try {
      this.accounts.emitRequest();

      setTimeout(() => {
        const currentData = this.accounts.getData() || [];
        this.accounts.emitSuccess([...currentData, account]);
      }, 1000);
    } catch (error) {
      this.accounts.emitFailure(error);
    }
  }

  getObservable() {
    return this.accounts.getObservable();
  }
}

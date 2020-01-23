import { Injectable, EventEmitter } from "@angular/core";
import { AccountModel } from "../models/account.model";

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  accounts: AccountModel[] = [];
  accountsChange = new EventEmitter<AccountModel[]>();

  create(account: AccountModel) {
    this.accounts.push({ ...account });
    this.accountsChange.emit(this.accounts);
  }

  get() {
    this.accountsChange.emit(this.accounts);
    return this.accountsChange;
  }
}

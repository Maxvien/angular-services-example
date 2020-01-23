import { Injectable } from "@angular/core";
import { Account } from "../models/accounts.model";
import { AsyncService } from "./async.service";
import { BehaviorSubject } from "rxjs";

interface State<Data> {
  loading: boolean;
  data: Data | null;
  error: Error | null;
}

class AsyncStore<Data> {
  private state: State<Data> = {
    loading: false,
    data: null,
    error: null
  };

  private _state = new BehaviorSubject<State<Data>>(this.state);

  readonly observable = this._state.asObservable();

  getData() {
    return this.state.data;
  }

  emitRequest(data?: Data | null) {
    this.state.error = null;
    this.state.loading = true;

    if (data !== undefined) {
      this.state.data = data;
    }

    this._state.next({ ...this.state });
  }

  emitSuccess(data: Data) {
    this.state.loading = false;
    this.state.data = data;

    this._state.next({ ...this.state });
  }

  emitFailure(error: Error) {
    this.state.loading = false;
    this.state.error = error;

    this._state.next({ ...this.state });
  }
}

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  accountsStore = new AsyncStore<Account[]>();

  // SyncStore

  createAccount(account: Account) {
    try {
      this.accountsStore.emitRequest();

      setTimeout(() => {
        const currentData = this.accountsStore.getData() || [];
        const newData = [...currentData, account];
        this.accountsStore.emitSuccess(newData);
      }, 1000);
    } catch (error) {
      this.accountsStore.emitFailure(error);
    }
  }

  getAccounts() {
    return this.accountsStore.observable;
  }
}

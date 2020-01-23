import { Injectable } from "@angular/core";
import { Account } from "../models/accounts.model";
import { BehaviorSubject } from "rxjs";

interface State<Data> {
  loading: boolean;
  data: Data | null;
  error: Error | null;
}

class AsyncState<Data> {
  private state: State<Data> = {
    loading: false,
    data: null,
    error: null
  };

  private _state = new BehaviorSubject<State<Data>>(this.state);

  readonly observable = this._state.asObservable();

  public getData() {
    return this.state.data;
  }

  public emitRequest(data?: Data | null) {
    this.state.error = null;
    this.state.loading = true;

    if (data !== undefined) {
      this.state.data = data;
    }

    this._state.next({ ...this.state });
  }

  public emitSuccess(data: Data) {
    this.state.loading = false;
    this.state.data = data;

    this._state.next({ ...this.state });
  }

  public emitFailure(error: Error) {
    this.state.loading = false;
    this.state.error = error;

    this._state.next({ ...this.state });
  }
}

@Injectable({
  providedIn: "root"
})
export class AccountsService {
  accountsState = new AsyncState<Account[]>();

  // SyncState

  createAccount(account: Account) {
    try {
      this.accountsState.emitRequest();

      setTimeout(() => {
        const currentData = this.accountsState.getData() || [];
        const newData = [...currentData, account];
        this.accountsState.emitSuccess(newData);
      }, 1000);
    } catch (error) {
      this.accountsState.emitFailure(error);
    }
  }

  getAccounts() {
    return this.accountsState.observable;
  }
}

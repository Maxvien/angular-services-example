import { Injectable } from "@angular/core";
import { Account } from "../models/accounts.model";
import { AsyncService } from "./async.service";

@Injectable({
  providedIn: "root"
})
export class AccountsService extends AsyncService<Account[]> {
  create(account: Account) {
    try {
      this.setState({ loading: true, error: null });

      const data = this.state.data || [];
      this.setState({ loading: false, data: [...data, { ...account }] });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }
}

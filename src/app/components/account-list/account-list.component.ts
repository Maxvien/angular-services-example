import { Component, OnInit } from "@angular/core";
import { AccountsService } from "../../services/accounts.service";
import { Account } from "../../models/accounts.model";
import { Subscription } from "rxjs";
import { AsyncState } from "rx-stores";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"]
})
export class AccountListComponent implements OnInit {
  accounts: AsyncState<Account[]>;
  accountsSubscription: Subscription;

  constructor(private accountsService: AccountsService) {
    this.accountsSubscription = this.accountsService
      .getAccountsObservable()
      .subscribe(accounts => {
        this.accounts = accounts;
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.accountsSubscription.unsubscribe();
  }
}

import { Component, OnInit } from "@angular/core";
import { AccountsService } from "../../services/accounts.service";
import { AsyncState } from "../../services/async.service";
import { Account } from "../../models/accounts.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"]
})
export class AccountListComponent implements OnInit {
  accountsState: AsyncState<Account[]>;
  accountsSubscription: Subscription;

  constructor(private accountsService: AccountsService) {
    this.accountsSubscription = this.accountsService.subscriber.subscribe(
      (accountsState: AsyncState<Account[]>) => {
        this.accountsState = accountsState;
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.accountsSubscription.unsubscribe();
  }
}

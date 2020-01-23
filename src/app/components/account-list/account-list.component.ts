import { Component, OnInit } from "@angular/core";
import { AccountsService } from "../../services/accounts.service";
import { AccountModel } from "../../models/account.model";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"]
})
export class AccountListComponent implements OnInit {
  accounts: AccountModel[];

  constructor(private accountsService: AccountsService) {
    this.accountsService.accountsChange.subscribe(
      (accounts: AccountModel[]) => (this.accounts = accounts)
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.accountsService.accountsChange.unsubscribe();
  }
}
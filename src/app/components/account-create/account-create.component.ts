import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../models/account.model";
import { AccountsService } from "../../services/accounts.service";

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.css"]
})
export class AccountCreateComponent implements OnInit {
  account: AccountModel = { name: "", status: "active" };

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {}

  onCreate(account: AccountModel) {
    this.accountsService.create(account);
  }
}

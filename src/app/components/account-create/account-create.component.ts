import { Component, OnInit } from "@angular/core";
import { Account } from "../../models/accounts.model";
import { AccountsService } from "../../services/accounts.service";

@Component({
  selector: "app-account-create",
  templateUrl: "./account-create.component.html",
  styleUrls: ["./account-create.component.css"]
})
export class AccountCreateComponent implements OnInit {
  account: Account = { name: "", status: "active" };

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {}

  onCreate(account: Account) {
    this.accountsService.createAccount({ ...account });
  }
}

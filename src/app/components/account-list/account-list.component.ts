import { Component, OnInit } from "@angular/core";
import { AccountsService } from "../../services/accounts.service";

// https://ultimatecourses.com/blog/angular-ngif-async-pipe

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"]
})
export class AccountListComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}
  accounts$ = this.accountsService.getObservable();

  ngOnInit() {}
}

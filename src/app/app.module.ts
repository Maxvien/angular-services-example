import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccountListComponent } from "./components/account-list/account-list.component";
import { AccountCreateComponent } from "./components/account-create/account-create.component";

// import { AccountsService } from "./services/accounts.service";
// Because of @Injectable({ providedIn: "root" })

@NgModule({
  declarations: [AppComponent, AccountListComponent, AccountCreateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

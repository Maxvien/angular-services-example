export interface Account {
  id?: string;
  name: string;
  status: "active" | "inactive";
}

export interface AccountState {
  data?: Account;
  loading?: boolean;
  error?: Error;
}

export interface AccountsState {
  data?: Account[];
  loading?: boolean;
  error?: Error;
}

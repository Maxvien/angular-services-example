import { Subject } from "rxjs";

export interface AsyncState<Data> {
  data?: Data | null;
  loading?: boolean;
  error?: Error | null;
}

export class AsyncService<Data> {
  public state: AsyncState<Data> = {
    loading: false,
    data: null,
    error: null
  };

  public readonly subscriber = new Subject<AsyncState<Data>>();

  public setState({ loading, data, error }: AsyncState<Data>) {
    if (typeof loading === "boolean") {
      this.state = { ...this.state, loading };
    }

    if (data !== undefined) {
      this.state = { ...this.state, data };
    }

    if (error !== undefined) {
      this.state = { ...this.state, error };
    }

    this.subscriber.next(this.state);
  }
}

// https://coryrylan.com/blog/angular-observable-data-services

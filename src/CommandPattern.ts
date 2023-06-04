class Command<TParams, TReturn> {
  execute: (params: TParams) => TReturn;

  constructor(execute: (params: TParams) => TReturn) {
    this.execute = execute;
  }
}

export default Command;

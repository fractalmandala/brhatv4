declare const require: {
  context(path: string, recursive: boolean, regExp: RegExp): {
    keys(): string[];
  };
};

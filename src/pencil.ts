class Pencil extends Function {
  private _value: string;

  constructor(code: string) {
    super();
    this._value = code;
  }

  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }

  /**
   * Returns the string representation of a Pencil.
   */
  override toString(): string {
    return this._value;
  }
}

export { Pencil };

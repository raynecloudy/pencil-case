class Pencil extends Function {
  private _value: string;
  black: Pencil;
  red: Pencil;
  green: Pencil;
  yellow: Pencil;
  blue: Pencil;
  magenta: Pencil;
  cyan: Pencil;
  white: Pencil;
  regular: Pencil;

  constructor(code: string) {
    super();
    this._value = code;
    Object.defineProperties(this, {
      black: {
        get: () => new Pencil("\x1b[30m")
      },
      red: {
        get: () => new Pencil("\x1b[31m")
      },
      green: {
        get: () => new Pencil("\x1b[32m")
      },
      yellow: {
        get: () => new Pencil("\x1b[33m")
      },
      blue: {
        get: () => new Pencil("\x1b[34m")
      },
      magenta: {
        get: () => new Pencil("\x1b[35m")
      },
      cyan: {
        get: () => new Pencil("\x1b[36m")
      },
      white: {
        get: () => new Pencil("\x1b[37m")
      },
      regular: {
        get: () => new Pencil("\x1b[39m")
      },
    });
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

const black = new Pencil("\x1b[30m");
const red = new Pencil("\x1b[31m");
const green = new Pencil("\x1b[32m");
const yellow = new Pencil("\x1b[33m");
const blue = new Pencil("\x1b[34m");
const magenta = new Pencil("\x1b[35m");
const cyan = new Pencil("\x1b[36m");
const white = new Pencil("\x1b[37m");
const regular = new Pencil("\x1b[39m");

export {
  black,
  blue,
  cyan,
  green,
  magenta,
  Pencil,
  red,
  regular,
  white,
  yellow
};

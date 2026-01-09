class Pencil extends Function {
  private _value: string;
  /**
   * Black foreground
   * 
   * Raw value: `[30m`
   */
  black: Pencil;
  /**
   * Red foreground
   * 
   * Raw value: `[31m`
   */
  red: Pencil;
  /**
   * Green foreground
   * 
   * Raw value: `[32m`
   */
  green: Pencil;
  /**
   * Yellow foreground
   * 
   * Raw value: `[33m`
   */
  yellow: Pencil;
  /**
   * Blue foreground
   * 
   * Raw value: `[34m`
   */
  blue: Pencil;
  /**
   * Magenta/purple foreground
   * 
   * Raw value: `[35m`
   */
  magenta: Pencil;
  /**
   * Cyan foreground
   * 
   * Raw value: `[36m`
   */
  cyan: Pencil;
  /**
   * White foreground
   * 
   * Raw value: `[37m`
   */
  white: Pencil;
  /**
   * Default foreground
   * 
   * Raw value: `[39m`
   */
  regular: Pencil;

  constructor(
    /**
     * The value to return when `toString` is called.
     */
    code: string
  ) {
    super();
    this._value = code;
    Object.defineProperties(this, {
      black: {
        get: () => new Pencil(this._value + "\x1b[30m")
      },
      red: {
        get: () => new Pencil(this._value + "\x1b[31m")
      },
      green: {
        get: () => new Pencil(this._value + "\x1b[32m")
      },
      yellow: {
        get: () => new Pencil(this._value + "\x1b[33m")
      },
      blue: {
        get: () => new Pencil(this._value + "\x1b[34m")
      },
      magenta: {
        get: () => new Pencil(this._value + "\x1b[35m")
      },
      cyan: {
        get: () => new Pencil(this._value + "\x1b[36m")
      },
      white: {
        get: () => new Pencil(this._value + "\x1b[37m")
      },
      regular: {
        get: () => new Pencil(this._value + "\x1b[39m")
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

/**
 * Black foreground
 * 
 * Raw value: `[30m`
 */
const black = new Pencil("\x1b[30m");
/**
 * Red foreground
 * 
 * Raw value: `[31m`
 */
const red = new Pencil("\x1b[31m");
/**
 * Green foreground
 * 
 * Raw value: `[32m`
 */
const green = new Pencil("\x1b[32m");
/**
 * Yellow foreground
 * 
 * Raw value: `[33m`
 */
const yellow = new Pencil("\x1b[33m");
/**
 * Blue foreground
 * 
 * Raw value: `[34m`
 */
const blue = new Pencil("\x1b[34m");
/**
 * Magenta/purple foreground
 * 
 * Raw value: `[35m`
 */
const magenta = new Pencil("\x1b[35m");
/**
 * Cyan foreground
 * 
 * Raw value: `[36m`
 */
const cyan = new Pencil("\x1b[36m");
/**
 * White foreground
 * 
 * Raw value: `[37m`
 */
const white = new Pencil("\x1b[37m");
/**
 * Default foreground
 * 
 * Raw value: `[39m`
 */
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

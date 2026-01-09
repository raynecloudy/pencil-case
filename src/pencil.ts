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
  /**
   * Black background
   * 
   * Raw value: `[40m`
   */
  blackBg: Pencil;
  /**
   * Red background
   * 
   * Raw value: `[41m`
   */
  redBg: Pencil;
  /**
   * Green background
   * 
   * Raw value: `[42m`
   */
  greenBg: Pencil;
  /**
   * Yellow background
   * 
   * Raw value: `[43m`
   */
  yellowBg: Pencil;
  /**
   * Blue background
   * 
   * Raw value: `[44m`
   */
  blueBg: Pencil;
  /**
   * Magenta/purple background
   * 
   * Raw value: `[45m`
   */
  magentaBg: Pencil;
  /**
   * Cyan background
   * 
   * Raw value: `[46m`
   */
  cyanBg: Pencil;
  /**
   * White background
   * 
   * Raw value: `[47m`
   */
  whiteBg: Pencil;
  /**
   * Default background
   * 
   * Raw value: `[49m`
   */
  regularBg: Pencil;

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
      blackBg: {
        get: () => new Pencil(this._value + "\x1b[40m")
      },
      redBg: {
        get: () => new Pencil(this._value + "\x1b[41m")
      },
      greenBg: {
        get: () => new Pencil(this._value + "\x1b[42m")
      },
      yellowBg: {
        get: () => new Pencil(this._value + "\x1b[43m")
      },
      blueBg: {
        get: () => new Pencil(this._value + "\x1b[44m")
      },
      magentaBg: {
        get: () => new Pencil(this._value + "\x1b[45m")
      },
      cyanBg: {
        get: () => new Pencil(this._value + "\x1b[46m")
      },
      whiteBg: {
        get: () => new Pencil(this._value + "\x1b[47m")
      },
      regularBg: {
        get: () => new Pencil(this._value + "\x1b[49m")
      }
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
/**
 * Black background
 * 
 * Raw value: `[40m`
 */
const blackBg = new Pencil("\x1b[40m");
/**
 * Red background
 * 
 * Raw value: `[41m`
 */
const redBg = new Pencil("\x1b[41m");
/**
 * Green background
 * 
 * Raw value: `[42m`
 */
const greenBg = new Pencil("\x1b[42m");
/**
 * Yellow background
 * 
 * Raw value: `[43m`
 */
const yellowBg = new Pencil("\x1b[43m");
/**
 * Blue background
 * 
 * Raw value: `[44m`
 */
const blueBg = new Pencil("\x1b[44m");
/**
 * Magenta/purple background
 * 
 * Raw value: `[45m`
 */
const magentaBg = new Pencil("\x1b[45m");
/**
 * Cyan background
 * 
 * Raw value: `[46m`
 */
const cyanBg = new Pencil("\x1b[46m");
/**
 * White background
 * 
 * Raw value: `[47m`
 */
const whiteBg = new Pencil("\x1b[47m");
/**
 * Default background
 * 
 * Raw value: `[49m`
 */
const regularBg = new Pencil("\x1b[49m");

export {
  black,
  blackBg,
  blue,
  blueBg,
  cyan,
  cyanBg,
  green,
  greenBg,
  magenta,
  magentaBg,
  Pencil,
  red,
  redBg,
  regular,
  regularBg,
  white,
  whiteBg,
  yellow,
  yellowBg
};

export class InvalidDataTypeError extends Error {
  constructor(msg: string) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidDataTypeError);
    }
  }
}

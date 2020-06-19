import { DatabaseError, InvalidDataTypeError, RequiredPropertyError } from '..';

export const makeHttpErrorFromException = (exception: Error, message?: string): AppResponse => {
  message = exception.message;
  if (message !== null || message !== undefined) {
    message = message;
  }

  const response: AppResponse = {
    statusCode: getStatusCodeFromException(exception),
    data: message,
  };

  return response;
};

export const makeHttpResponse = (statusCode: number, data: any): AppResponse => {
  const a: AppResponse = {
    statusCode: statusCode,
    data: data,
  };

  return a;
};

export const createMessageResponse = (message: string) => {
  return {
    message: message,
  };
};

export const getStatusCodeFromException = (e: Error): number => {
  let statusCode = 500;

  if (e instanceof DatabaseError) {
    statusCode = 500;
  } else if (e instanceof InvalidDataTypeError || e instanceof RequiredPropertyError) {
    statusCode = 400;
  }

  return statusCode;
};

export interface AppResponse {
  statusCode: number;
  data: any;
}

import { DatabaseError, InvalidDataTypeError, RequiredPropertyError } from '..';
import { ApplicationProcessError, AuthenticationError, AuthorizationError } from '../exceptions/data';

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

export const getMessagFromException = (exception: Error, message?: string): string => {
  message = exception.message;
  if (message !== null || message !== undefined) {
    message = message;
  } else {
    message = 'somethong went wrong, please contact the administrator';
  }
  return message;
};

export const getStatusCodeFromException = (e: Error): number => {
  let statusCode = 500;

  if (e instanceof DatabaseError) {
    statusCode = 500;
  } else if (e instanceof InvalidDataTypeError) {
    statusCode = 400;
  } else if (e instanceof AuthorizationError) {
    statusCode = 403;
  } else if (e instanceof AuthenticationError) {
    statusCode = 401;
  } else if (e instanceof ApplicationProcessError) {
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

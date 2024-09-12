export interface IResponse<T, Y> {
  data?: T;
  errors?: Y;
  status: number;
  message?: string;
  ok: boolean;
}

export interface IError {
  [key: string]: string;
}

export interface IErrorResponse {
  status: number;
  message: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ILogin {
  account: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
  name: string;
  token: string;
  user: IUser;
}
